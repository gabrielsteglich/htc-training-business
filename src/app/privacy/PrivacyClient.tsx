"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { CONTENT } from '@/constants';
import { useLanguage } from '@/context/LanguageContext';
export function PrivacyClient() {
  const { language, ui } = useLanguage();
  const t = CONTENT[language];
  const { privacy_page } = t;

  return (
    <div className="w-full pt-20">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-privacy.png"
            alt={ui.images.sky}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 pt-0.5 pb-1.5 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{ui.transparency}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{privacy_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-medium">
            {privacy_page.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
          {privacy_page.sections.map((section, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-aviation-navy mb-4 border-l-4 border-aviation-red pl-4">
                {section.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
