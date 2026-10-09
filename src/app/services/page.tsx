import { localizedMetadata } from "@/lib/server-language";
import { ServicesClient } from "./ServicesClient";

export const generateMetadata = () => localizedMetadata('/services');

export default function ServicesPage() {
    return <ServicesClient />;
}
