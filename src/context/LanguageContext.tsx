"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

import { LOCALES, UI_TEXT, type Language } from "@/lib/i18n";
import { useRouter } from "next/navigation";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    ui: typeof UI_TEXT.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLanguage: Language }> = ({
    children,
    initialLanguage,
}) => {
    const [language, updateLanguage] = useState<Language>(initialLanguage);
    const router = useRouter();

    const setLanguage = (nextLanguage: Language) => {
        updateLanguage(nextLanguage);
        const secure = location.protocol === "https:" ? "; Secure" : "";
        document.cookie = `htc-language=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
        router.refresh();
    };

    useEffect(() => {
        document.documentElement.lang = LOCALES[language];
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, ui: UI_TEXT[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
