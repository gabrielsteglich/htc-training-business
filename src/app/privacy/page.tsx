import { localizedMetadata } from "@/lib/server-language";
import { PrivacyClient } from "./PrivacyClient";

export const generateMetadata = () => localizedMetadata('/privacy');

export default function PrivacyPage() {
    return <PrivacyClient />;
}
