import { localizedMetadata } from "@/lib/server-language";
import { AboutClient } from "./AboutClient";

export const generateMetadata = () => localizedMetadata('/about');

export default function AboutPage() {
    return <AboutClient />;
}
