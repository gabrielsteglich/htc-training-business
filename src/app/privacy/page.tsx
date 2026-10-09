import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
    title: "Política de Privacidade",
    description: "Política de Privacidade da HTC Training and Business.",
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
