import type { Metadata } from "next";
import { InstructorsClient } from "./InstructorsClient";

export const metadata: Metadata = {
    title: "Instrutores",
    description:
        "Conheça nossos instrutores especializados em aviação. Profissionais com décadas de experiência.",
};

export default function InstructorsPage() {
    return <InstructorsClient />;
}
