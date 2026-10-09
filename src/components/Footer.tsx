"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { CONTENT } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
    const { language, ui } = useLanguage();
    const t = CONTENT[language];

    return (
        <footer className="bg-aviation-navy text-white pt-16 pb-8 relative overflow-hidden -mt-px z-10 transform-gpu">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter">
                            HTC <span className="text-aviation-red">Training</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t.footer.desc}
                        </p>
                        <div className="flex pt-2">
                            <a
                                href="https://www.linkedin.com/company/htc-training-consulting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={ui.linkedin}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={20} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold">{t.footer.quickLinks}</h4>
                            <div className="h-px w-12 bg-slate-700 mt-2"></div>
                        </div>
                        <ul className="space-y-3">
                            {t.nav.slice(1, 5).map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className="text-slate-400 hover:text-aviation-red transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold">{t.footer.corePrograms}</h4>
                            <div className="h-px w-12 bg-slate-700 mt-2"></div>
                        </div>
                        <ul className="space-y-3">
                            <li className="text-slate-400 text-sm">{ui.crmCorporate}</li>
                            <li className="text-slate-400 text-sm">{ui.avsec}</li>
                            <li className="text-slate-400 text-sm">DGR - IATA/ICAO</li>
                            <li className="text-slate-400 text-sm">{ui.safety}</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold">{t.footer.contactUs}</h4>
                            <div className="h-px w-12 bg-slate-700 mt-2"></div>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-aviation-red w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400 text-sm whitespace-pre-line">
                                    {t.footer.location}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-aviation-red w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">+55 (21) 98875-2948</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-aviation-red w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">
                                    training@htc-brasil.com.br
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-800 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} HTC Training and Business.{" "}
                        {t.footer.rights}
                    </p>
                    <div className="mt-4 md:mt-0 space-x-6 flex flex-wrap justify-center">
                        <Link
                            href="/privacy"
                            className="text-slate-500 hover:text-white text-xs"
                        >
                            {t.footer.privacy}
                        </Link>
                        <Link
                            href="/terms"
                            className="text-slate-500 hover:text-white text-xs"
                        >
                            {t.footer.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
