import { localizedMetadata } from "@/lib/server-language";
import { CorporateClient } from "./CorporateClient";

export const generateMetadata = () => localizedMetadata('/corporate');

export default function CorporatePage() {
    return <CorporateClient />;
}
