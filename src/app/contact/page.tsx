import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
    title: "Contato",
    description:
        "Entre em contato com a HTC Training and Business. Solicite uma proposta para treinamentos em aviação.",
};

export default function ContactPage() {
    return <ContactClient />;
}
