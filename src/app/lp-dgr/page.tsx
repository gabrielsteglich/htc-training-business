import { localizedMetadata } from "@/lib/server-language";
import { DGRLandingClient } from "./DGRLandingClient";

export const generateMetadata = () => localizedMetadata('/lp-dgr');

export default function DGRLandingPage() {
    return <DGRLandingClient />;
}
