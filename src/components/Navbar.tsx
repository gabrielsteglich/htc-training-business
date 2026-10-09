"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
    const pathname = usePathname();
    const { language, ui } = useLanguage();
    const t = CONTENT[language];

    // Check if path is active
    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close the mobile overlay when the desktop navigation becomes visible.
    useEffect(() => {
        const desktopQuery = window.matchMedia("(min-width: 1024px)");
        const closeOnDesktop = () => {
            if (desktopQuery.matches) setIsOpen(false);
        };

        closeOnDesktop();
        desktopQuery.addEventListener("change", closeOnDesktop);
        return () => desktopQuery.removeEventListener("change", closeOnDesktop);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const navbarVariants = {
        initial: {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            padding: "14px 0",
        },
        scrolled: {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            padding: "10px 0",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        },
    };

    const mobileMenuVariants = {
        closed: { x: "100%", opacity: 0 },
        open: {
            x: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 300, damping: 30 },
        },
    };

    return (
        <motion.nav
            initial="initial"
            animate={scrolled ? "scrolled" : "initial"}
            variants={navbarVariants}
            className="fixed w-full z-50 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer z-50">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src="/images/logo-htc.png"
                                alt="HTC Training and Business"
                                width={200}
                                height={80}
                                className="h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
                        {t.nav.map((item) => (
                            <div
                                key={item.path}
                                className="relative group flex items-center h-full"
                                onMouseEnter={() => item.submenu && setHoveredSubmenu(item.path)}
                                onMouseLeave={() => setHoveredSubmenu(null)}
                                onFocus={() => item.submenu && setHoveredSubmenu(item.path)}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                        setHoveredSubmenu(null);
                                    }
                                }}
                            >
                                {item.submenu ? (
                                    <div className="relative">
                                        <Link
                                            href={item.path}
                                            aria-haspopup="menu"
                                            aria-expanded={hoveredSubmenu === item.path}
                                            className={`text-sm font-medium transition-colors duration-200 uppercase tracking-wide flex items-center gap-1 ${isActive(item.path)
                                                ? "text-aviation-red"
                                                : "text-slate-600 hover:text-aviation-navy"
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${hoveredSubmenu === item.path ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Link>

                                        {/* Animated Dropdown */}
                                        <AnimatePresence>
                                            {hoveredSubmenu === item.path && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 w-64 pt-4 -ml-4"
                                                >
                                                    <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-slate-100 ring-1 ring-black ring-opacity-5">
                                                        {item.submenu.map((subItem) => (
                                                            <Link
                                                                key={subItem.path}
                                                                href={subItem.path}
                                                                className={`block px-6 py-3 text-sm transition-all duration-200 border-l-2 ${isActive(subItem.path)
                                                                    ? "text-aviation-red border-aviation-red bg-red-50/30"
                                                                    : "text-slate-600 border-transparent hover:text-aviation-navy hover:bg-slate-50 hover:pl-7"
                                                                    }`}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className={`relative text-sm font-medium transition-colors duration-200 uppercase tracking-wide group ${isActive(item.path)
                                            ? "text-aviation-red"
                                            : "text-slate-600 hover:text-aviation-navy"
                                            }`}
                                    >
                                        {item.label}
                                        {isActive(item.path) && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aviation-red"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aviation-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Link>
                                )}
                            </div>
                        ))}

                        <LanguageSelector />

                        <Link href="/contact" className="bg-aviation-navy text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-aviation-navy/20 hover:shadow-aviation-navy/40 hover:scale-105 active:scale-95 transition-all uppercase flex items-center gap-2">
                            <span>{t.buttons.getStarted}</span>
                            <Phone className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4 z-50">
                        <motion.button
                            type="button"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-aviation-navy focus:outline-none p-2 bg-slate-100 rounded-full"
                            aria-label={isOpen ? ui.closeMenu : ui.openMenu}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 top-0 left-0 w-full h-dvh bg-white/95 backdrop-blur-xl z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col space-y-6">
                            {t.nav.map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {item.submenu ? (
                                        <div className="space-y-3">
                                            <div className="text-lg font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">
                                                {item.label}
                                            </div>
                                            <div className="pl-4 border-l-2 border-slate-200 space-y-3">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.path}
                                                        href={subItem.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block text-base font-medium transition-colors ${isActive(subItem.path)
                                                            ? "text-aviation-red"
                                                            : "text-slate-500"
                                                            }`}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-2xl font-bold transition-colors ${isActive(item.path)
                                                ? "text-aviation-red"
                                                : "text-slate-800"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8 border-t border-slate-200 flex flex-col gap-4"
                            >
                                <LanguageSelector />

                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-aviation-navy text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg uppercase flex items-center justify-center gap-2"
                                >
                                    {t.buttons.getStarted}
                                    <Phone className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
