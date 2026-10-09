import type { Metadata } from "next";
import { CorporateClient } from "./CorporateClient";

export const metadata: Metadata = {
    title: "Corporativo",
    description:
        "Soluções corporativas em treinamento de aviação. Programas customizados para empresas aéreas e operadores.",
};

export default function CorporatePage() {
    return <CorporateClient />;
}
