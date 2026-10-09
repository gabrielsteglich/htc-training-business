import "server-only";
import { createClient } from "redis";
import { contactLimits, consumeContactLimits } from "./contact-security";

let client: ReturnType<typeof createClient> | undefined;
let connection: Promise<void> | undefined;

async function getRedis() {
    const url = process.env.REDIS_URL;
    if (!url) throw new Error("REDIS_URL is required");

    if (!client || (!client.isOpen && !connection)) {
        client = createClient({
            url,
            disableOfflineQueue: true,
            socket: { connectTimeout: 3000, reconnectStrategy: false },
        });
        // Errors are handled by the request; never log URLs or credentials.
        client.on("error", () => {});
        connection = client.connect().then(() => {}).finally(() => {
            connection = undefined;
        });
    }

    if (connection) await connection;
    if (!client.isReady) throw new Error("Redis is unavailable");
    return client;
}

export async function checkContactRateLimit(email: string, headers: Headers) {
    const limits = contactLimits(email, headers, process.env.CONTACT_PROXY_IP_HEADER);
    let timer: ReturnType<typeof setTimeout> | undefined;

    try {
        return await Promise.race([
            getRedis().then(redis => consumeContactLimits(redis, limits)),
            new Promise<never>((_, reject) => {
                timer = setTimeout(() => reject(new Error("Redis request timed out")), 3000);
            }),
        ]);
    } catch (error) {
        if (client?.isOpen) client.destroy();
        throw error;
    } finally {
        if (timer) clearTimeout(timer);
    }
}
