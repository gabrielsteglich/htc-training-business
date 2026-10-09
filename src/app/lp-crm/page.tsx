import type { Metadata } from "next";
import { CRMLandingClient } from "./CRMLandingClient";

export const metadata: Metadata = {
    title: "Treinamento CRM | Crew Resource Management",
    description:
        "Curso de CRM (Crew Resource Management) - Gestão de Recursos de Equipe. Certificação ANAC para profissionais de aviação.",
    openGraph: {
        title: "Treinamento CRM | HTC Training",
        description: "Aprimore suas habilidades de liderança e comunicação em cabine.",
    },
};

export default function CRMLandingPage() {
    return <CRMLandingClient />;
}
