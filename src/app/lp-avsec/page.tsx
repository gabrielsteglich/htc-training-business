import type { Metadata } from "next";
import { AVSECLandingClient } from "./AVSECLandingClient";

export const metadata: Metadata = {
    title: "Treinamento AVSEC | Segurança da Aviação",
    description:
        "Curso de AVSEC (Aviation Security) - Segurança da Aviação Civil. Conformidade ANAC e padrões internacionais.",
    openGraph: {
        title: "Treinamento AVSEC | HTC Training",
        description: "Treinamento em segurança aeroportuária e prevenção de atos ilícitos.",
    },
};

export default function AVSECLandingPage() {
    return <AVSECLandingClient />;
}
