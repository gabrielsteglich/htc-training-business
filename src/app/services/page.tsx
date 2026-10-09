import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
    title: "Serviços",
    description:
        "Serviços especializados em aviação: certificação, manuais, auditorias e consultoria. HTC Training and Business.",
};

export default function ServicesPage() {
    return <ServicesClient />;
}
