import { localizedMetadata } from "@/lib/server-language";
import { TrainingClient } from "./TrainingClient";

export const generateMetadata = () => localizedMetadata('/training');

export default function TrainingPage() {
    return <TrainingClient />;
}
