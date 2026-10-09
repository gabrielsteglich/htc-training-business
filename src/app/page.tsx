import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Início | HTC Training",
  description:
    "HTC Training and Business - Excelência em treinamento de aviação: CRM, AVSEC, DGR. Conformidade ANAC, IATA e ICAO para profissionais e empresas.",
  openGraph: {
    title: "HTC Training and Business | Aviation Excellence",
    description:
      "Treinamento especializado em aviação para profissionais que exigem excelência.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
