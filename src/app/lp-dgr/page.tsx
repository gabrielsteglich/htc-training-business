import type { Metadata } from "next";
import { DGRLandingClient } from "./DGRLandingClient";

export const metadata: Metadata = {
    title: "Treinamento DGR | Transporte de Artigos Perigosos",
    description:
        "Curso de DGR (Dangerous Goods Regulations) - Certificação IATA/ICAO para transporte de artigos perigosos.",
    openGraph: {
        title: "Treinamento DGR | HTC Training",
        description: "Certificação em manuseio e transporte de mercadorias perigosas.",
    },
};

export default function DGRLandingPage() {
    return <DGRLandingClient />;
}
