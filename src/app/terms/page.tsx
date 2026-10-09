import type { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
    title: "Termos de Serviço",
    description: "Termos de Serviço da HTC Training and Business.",
};

export default function TermsPage() {
    return <TermsClient />;
}
