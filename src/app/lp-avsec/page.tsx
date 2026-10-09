import { localizedMetadata } from "@/lib/server-language";
import { AVSECLandingClient } from "./AVSECLandingClient";

export const generateMetadata = () => localizedMetadata('/lp-avsec');

export default function AVSECLandingPage() {
    return <AVSECLandingClient />;
}
