"use client";

import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/lib/i18n';

export function LanguageSelector() {
  const { language, setLanguage, ui } = useLanguage();

  return (
    <label className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
      <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">{ui.language}</span>
      <select
        aria-label={ui.language}
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="min-w-0 cursor-pointer bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-aviation-navy rounded"
      >
        <option value="pt" lang="pt-BR">Português</option>
        <option value="en" lang="en">English</option>
        <option value="es" lang="es">Español</option>
      </select>
    </label>
  );
}
