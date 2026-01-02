import React, { useEffect } from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../utils/assetPath';

export const TermsOfService: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { terms_page } = t;

  useEffect(() => {
    document.title = language === 'pt' ? "Termos de Serviço | HTC Training" : "Terms of Service | HTC Training";
  }, [language]);

  return (
    <div className="w-full pt-20">
      {/* Hero Header - Compact Version */}
      <div className="bg-aviation-navy py-16 text-center text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetPath("/images/header-terms.png")}
            alt="Sky texture"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aviation-navy/50 via-aviation-navy/80 to-aviation-navy"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-aviation-red font-bold text-xs tracking-widest uppercase">{language === 'pt' ? 'Legal' : 'Legal'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{terms_page.title}</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto drop-shadow-md font-medium">
            {terms_page.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
          {terms_page.sections.map((section, index) => (
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