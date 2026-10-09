import { createHash } from "node:crypto";
import { isIP } from "node:net";

export const CONTACT_BODY_LIMIT = 16_384;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

export class ContactBodyError extends Error {
    readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export async function readContactBody(request: Request): Promise<unknown> {
    if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get("content-type") || "")) {
        throw new ContactBodyError(415, "O conteúdo deve ser enviado em JSON.");
    }

    if (Number(request.headers.get("content-length")) > CONTACT_BODY_LIMIT) {
        throw new ContactBodyError(413, "Solicitação muito grande.");
    }

    if (!request.body) {
        throw new ContactBodyError(400, "Corpo da solicitação inválido.");
    }

    const reader = request.body.getReader();
    const decoder = new TextDecoder("utf-8", { fatal: true });
    let size = 0;
    let text = "";

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            size += value.byteLength;
            if (size > CONTACT_BODY_LIMIT) {
                await reader.cancel().catch(() => {});
                throw new ContactBodyError(413, "Solicitação muito grande.");
            }
            text += decoder.decode(value, { stream: true });
        }
        text += decoder.decode();
        return JSON.parse(text);
    } catch (error) {
        if (error instanceof ContactBodyError) throw error;
        throw new ContactBodyError(400, "Corpo da solicitação inválido.");
    } finally {
        reader.releaseLock();
    }
}

type ContactLimit = { key: string; maximum: number };
type RedisEvaluator = {
    eval(script: string, options: { keys: string[]; arguments: string[] }): Promise<unknown>;
};

const TRUSTED_HEADERS = new Set([
    "x-real-ip", "x-forwarded-for", "cf-connecting-ip", "x-vercel-forwarded-for",
]);

function hashIdentity(value: string): string {
    return createHash("sha256").update(value).digest("hex");
}

export function contactLimits(
    email: string,
    headers: Headers,
    trustedIpHeader?: string,
): ContactLimit[] {
    // The shared global quota cannot be bypassed by changing an e-mail or IP header.
    const limits: ContactLimit[] = [
        { key: "{htc-contact}:global", maximum: 100 },
        { key: `{htc-contact}:email:${hashIdentity(email.trim().toLowerCase())}`, maximum: 5 },
    ];

    if (trustedIpHeader) {
        const headerName = trustedIpHeader.toLowerCase();
        const ip = headers.get(headerName)?.trim();
        if (!TRUSTED_HEADERS.has(headerName) || !ip || !isIP(ip)) {
            throw new Error("Trusted proxy IP configuration is invalid");
        }
        limits.push({ key: `{htc-contact}:ip:${hashIdentity(ip)}`, maximum: 5 });
    }

    return limits;
}

// Check and increment every quota atomically; all keys share a Redis Cluster slot.
export const CONTACT_LIMIT_SCRIPT = `
local retry = 0
for i, key in ipairs(KEYS) do
    local count = tonumber(redis.call('GET', key) or '0')
    if count >= tonumber(ARGV[i + 1]) then
        retry = math.max(retry, redis.call('PTTL', key), 1000)
    end
end
if retry > 0 then return retry end
for _, key in ipairs(KEYS) do
    local count = redis.call('INCR', key)
    if count == 1 then redis.call('PEXPIRE', key, ARGV[1]) end
end
return 0
`;

export async function consumeContactLimits(redis: RedisEvaluator, limits: ContactLimit[]) {
    const result = await redis.eval(CONTACT_LIMIT_SCRIPT, {
        keys: limits.map(({ key }) => key),
        arguments: [String(RATE_LIMIT_WINDOW_MS), ...limits.map(({ maximum }) => String(maximum))],
    });
    if (typeof result !== "number" || !Number.isFinite(result) || result < 0) {
        throw new Error("Invalid rate limit response");
    }
    return { allowed: result === 0, retryAfter: Math.max(1, Math.ceil(result / 1000)) };
}
