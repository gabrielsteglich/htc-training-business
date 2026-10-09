import { localizedMetadata } from "@/lib/server-language";
import { CRMLandingClient } from "./CRMLandingClient";

export const generateMetadata = () => localizedMetadata('/lp-crm');

export default function CRMLandingPage() {
    return <CRMLandingClient />;
}
