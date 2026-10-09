import { localizedMetadata } from "@/lib/server-language";
import { TermsClient } from "./TermsClient";

export const generateMetadata = () => localizedMetadata('/terms');

export default function TermsPage() {
    return <TermsClient />;
}
