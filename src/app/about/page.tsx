import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "Sobre Nós",
    description:
        "Conheça a HTC Training and Business. Mais de 20 anos de experiência em treinamento de aviação: CRM, AVSEC, DGR.",
    openGraph: {
        title: "Sobre Nós | HTC Training",
        description:
            "Excelência em treinamento de aviação desde 2004.",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
