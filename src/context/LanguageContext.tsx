"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>("pt");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
    };

    useEffect(() => {
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
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
