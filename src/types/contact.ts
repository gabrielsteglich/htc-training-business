export interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message: string;
    source?: string;
    audienceSize?: string;
    website?: string;
}

export interface ContactResponse {
    success: boolean;
    message?: string;
    error?: string;
}
