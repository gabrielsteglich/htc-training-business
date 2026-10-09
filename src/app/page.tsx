import { localizedMetadata } from "@/lib/server-language";
import { HomeClient } from "./HomeClient";

export const generateMetadata = () => localizedMetadata('/');

export default function HomePage() {
  return <HomeClient />;
}
