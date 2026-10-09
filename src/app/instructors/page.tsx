import { localizedMetadata } from "@/lib/server-language";
import { InstructorsClient } from "./InstructorsClient";

export const generateMetadata = () => localizedMetadata('/instructors');

export default function InstructorsPage() {
    return <InstructorsClient />;
}
