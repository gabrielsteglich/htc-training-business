import type { ContactPayload, ContactResponse } from "@/types/contact";

export class ContactRequestError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ContactRequestError";
    }
}

export async function sendContact(payload: ContactPayload): Promise<ContactResponse> {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as ContactResponse;

    if (!response.ok) {
        throw new ContactRequestError(data.error || "Não foi possível enviar a mensagem.");
    }

    return data;
}
