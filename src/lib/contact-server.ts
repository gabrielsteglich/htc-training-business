import "server-only";

import type { ContactPayload } from "@/types/contact";

type ParseResult =
    | { success: true; data: ContactPayload }
    | { success: false; error: string };

const FIELD_LIMITS = {
    name: 120,
    email: 254,
    phone: 40,
    company: 160,
    subject: 160,
    message: 4000,
    source: 120,
    audienceSize: 40,
    website: 200,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(
    input: Record<string, unknown>,
    field: keyof typeof FIELD_LIMITS,
): string | null {
    const value = input[field];

    if (value === undefined || value === null) {
        return "";
    }

    if (typeof value !== "string" || value.length > FIELD_LIMITS[field]) {
        return null;
    }

    return value.trim();
}

export function parseContactPayload(body: unknown): ParseResult {
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return { success: false, error: "Dados de contato inválidos." };
    }

    const input = body as Record<string, unknown>;
    const name = getString(input, "name");
    const email = getString(input, "email");
    const phone = getString(input, "phone");
    const company = getString(input, "company");
    const subject = getString(input, "subject");
    const message = getString(input, "message");
    const source = getString(input, "source");
    const audienceSize = getString(input, "audienceSize");
    const website = getString(input, "website");

    if ([name, email, phone, company, subject, message, source, audienceSize, website].includes(null)) {
        return { success: false, error: "Um ou mais campos excedem o tamanho permitido." };
    }

    if (!name || !email || !message) {
        return { success: false, error: "Nome, e-mail e mensagem são obrigatórios." };
    }

    if (!EMAIL_PATTERN.test(email)) {
        return { success: false, error: "Informe um endereço de e-mail válido." };
    }

    if (website) {
        return { success: false, error: "Solicitação inválida." };
    }

    return {
        success: true,
        data: {
            name,
            email,
            phone: phone || undefined,
            company: company || undefined,
            subject: subject || undefined,
            message,
            source: source || undefined,
            audienceSize: audienceSize || undefined,
        },
    };
}

export function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export function singleLine(value: string): string {
    return value.replace(/[\r\n]+/g, " ").trim();
}
