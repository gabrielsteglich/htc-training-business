import type { Metadata } from "next";
import { TrainingClient } from "./TrainingClient";

export const metadata: Metadata = {
    title: "Treinamentos",
    description:
        "Cursos de CRM, AVSEC e DGR com certificação ANAC, IATA e ICAO. Treinamento presencial e online.",
};

export default function TrainingPage() {
    return <TrainingClient />;
}
