"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LOCALES, type Language } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import { MENU_DATA, ALLERGEN_LABELS, Allergen } from "./data";

// --- Utility Components ---

const PriceTag = ({ priceCents }: { priceCents: number }) => {
    const { language } = useLanguage();
    const formatted = new Intl.NumberFormat(LOCALES[language], {
        style: "currency",
        currency: "BRL",
    }).format(priceCents / 100);

    return (
        <span className="font-bold text-lg text-aviation-navy bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
            {formatted}
        </span>
    );
};

const AllergenChip = ({ type, language }: { type: Allergen; language: Language }) => {
    const label = ALLERGEN_LABELS[type]?.[language] || type;
    return (
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">
            {label}
        </span>
    );
};

// --- Main Page Component ---

export default function MenuPage() {
    const { language, ui } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<string>(MENU_DATA[0].id);
    const headerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = (headerRef.current?.offsetHeight || 0) + (navRef.current?.offsetHeight || 0);
            const scrollPosition = window.scrollY + headerHeight + 50; // Offset

            for (const category of MENU_DATA) {
                const element = document.getElementById(category.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveCategory(category.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCategory = (id: string) => {
        const element = document.getElementById(id);
        const navHeight = navRef.current?.offsetHeight || 0;
        if (element) {
            const offset = element.offsetTop - navHeight - 20;
            window.scrollTo({ top: offset, behavior: "smooth" });
            setActiveCategory(id);
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" }
    };

    return (
        <div className="pb-20">
            {/* --- Header --- */}
            <header ref={headerRef} className="bg-white pt-6 pb-4 px-6 flex justify-between items-center shadow-sm relative z-40">
                <h1 className="sr-only">HTC Diner — {ui.menu}</h1>
                <div className="flex items-center gap-2.5">
                    <div className="relative w-14 h-14 md:w-16 md:h-16">
                        <Image
                            src="/images/htc-diner-logo.png"
                            alt="HTC Diner"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="h-8 w-px bg-slate-200" />
                    <div className="flex flex-col">
                        <span className="text-base md:text-lg font-medium uppercase tracking-[0.3em] text-aviation-navy">Diner</span>
                        <span className="text-[10px] text-slate-400 tracking-wide">Training & Business</span>
                    </div>
                </div>

                <LanguageSelector />
            </header>

            {/* --- Sticky Navigation --- */}
            <nav
                ref={navRef}
                className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3 overflow-x-auto no-scrollbar"
            >
                <div className="flex gap-2 px-6 min-w-max">
                    {MENU_DATA.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => scrollToCategory(category.id)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === category.id
                                ? "bg-aviation-navy text-white shadow-md shadow-aviation-navy/20 scale-105"
                                : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                                }`}
                        >
                            {category.title[language]}
                        </button>
                    ))}
                </div>
            </nav>

            {/* --- Menu List --- */}
            <div className="max-w-3xl mx-auto px-4 md:px-6 pt-6 space-y-16">
                {MENU_DATA.map((category, index) => (
                    <section
                        key={category.id}
                        id={category.id}
                        className="scroll-mt-32"
                    >
                        {/* Category Header */}
                        <motion.div
                            {...fadeInUp}
                            className="mb-6 relative h-40 md:h-56 rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <Image
                                src={category.image}
                                alt={category.title[language]}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                                priority={index === 0}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white z-20 tracking-tight">
                                {category.title[language]}
                            </h2>
                        </motion.div>

                        {/* Items Grid */}
                        <div className="grid gap-6">
                            {category.items.map((item) => (
                                <motion.article
                                    key={item.id}
                                    {...fadeInUp}
                                    className={`bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 transition-all hover:shadow-md ${!item.isAvailable ? "opacity-60 grayscale" : ""
                                        }`}
                                    aria-disabled={!item.isAvailable}
                                >
                                    {/* Text Content */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                                                    {item.name[language]}
                                                </h3>
                                                {!item.isAvailable && (
                                                    <span className="text-[10px] font-bold uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded ml-2 whitespace-nowrap">
                                                        {ui.soldOut}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-none mb-3">
                                                {item.description[language]}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 mt-auto">
                                            <PriceTag priceCents={item.priceCents} />

                                            {/* Tags */}
                                            {item.tags?.map((tag, idx) => (
                                                <span key={idx} className="text-xs text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">
                                                    {tag[language]}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Allergens */}
                                        {item.allergens && item.allergens.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {item.allergens.map(allergen => (
                                                    <AllergenChip key={allergen} type={allergen} language={language} />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Image */}
                                    {item.image && (
                                        <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50">
                                            <Image
                                                src={item.image}
                                                alt={item.name[language]}
                                                fill
                                                sizes="(max-width: 768px) 96px, 112px"
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    )}
                                </motion.article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <footer className="mt-20 py-8 text-center text-slate-400 text-xs border-t border-slate-100">
                <p>© 2026 HTC Training and Business</p>
                <p className="mt-1">{ui.imagesDisclaimer}</p>
            </footer>
        </div>
    );
}
