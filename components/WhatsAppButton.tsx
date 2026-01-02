import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTENT } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <a
      href="https://wa.me/5521988752948" // Updated to new contact number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold hidden group-hover:inline-block transition-all duration-300">
        {t.buttons.whatsapp}
      </span>
    </a>
  );
};