"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { usePathname } from "next/navigation";
import type { Language } from "@/lib/i18n";

export function Providers({ children, initialLanguage }: { children: React.ReactNode; initialLanguage: Language }) {
    const pathname = usePathname();
    const isMenu = pathname?.startsWith("/cardapio");

    return (
        <LanguageProvider initialLanguage={initialLanguage}>
            <div className="flex flex-col min-h-screen bg-white text-slate-900">
                {!isMenu && <Navbar />}
                <main className="flex-grow">{children}</main>
                {!isMenu && <Footer />}
                {!isMenu && <WhatsAppButton />}
            </div>
        </LanguageProvider>
    );
}
