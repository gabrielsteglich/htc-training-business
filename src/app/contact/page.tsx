import { localizedMetadata } from "@/lib/server-language";
import { ContactClient } from "./ContactClient";

export const generateMetadata = () => localizedMetadata('/contact');

export default function ContactPage() {
    return <ContactClient />;
}
