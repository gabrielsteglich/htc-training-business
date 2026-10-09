import type { ContactPayload, ContactResponse } from "@/types/contact";
import { UI_TEXT, type Language } from "@/lib/i18n";

export class ContactRequestError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ContactRequestError";
    }
}

export async function sendContact(payload: ContactPayload, language: Language = "pt"): Promise<ContactResponse> {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as ContactResponse;

    if (!response.ok) {
        const ui = UI_TEXT[language];
        throw new ContactRequestError(ui.errors[response.status] || ui.sendError);
    }

    return data;
}
