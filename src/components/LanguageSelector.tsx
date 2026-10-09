"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/lib/i18n';

const LANGUAGE_OPTIONS: { value: Language; code: string; label: string }[] = [
  { value: 'pt', code: 'BR', label: 'Português' },
  { value: 'en', code: 'US', label: 'English' },
  { value: 'es', code: 'ES', label: 'Español' },
];

export function LanguageSelector() {
  const { language, setLanguage, ui } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pendingFocus = useRef<number | null>(null);
  const menuId = useId();
  const selected = LANGUAGE_OPTIONS.find((option) => option.value === language)!;
  const alternatives = LANGUAGE_OPTIONS.filter((option) => option.value !== language);

  useEffect(() => {
    if (!isOpen) return;
    if (pendingFocus.current !== null) {
      optionRefs.current[pendingFocus.current]?.focus();
      pendingFocus.current = null;
    }
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${ui.language}: ${selected.label}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        title={ui.language}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const index = event.key === 'ArrowDown' ? 0 : alternatives.length - 1;
            if (isOpen) optionRefs.current[index]?.focus();
            else {
              pendingFocus.current = index;
              setIsOpen(true);
            }
          }
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-600 font-semibold text-xs border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aviation-navy"
      >
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
        <span>{selected.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 pt-4 z-50">
          <div
            id={menuId}
            role="menu"
            aria-label={ui.language}
            className="bg-white/95 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden border border-slate-100 min-w-[100px]"
            onKeyDown={(event) => {
              const index = optionRefs.current.findIndex((option) => option === document.activeElement);
              const nextIndex = event.key === 'ArrowDown' ? (index + 1) % alternatives.length
                : event.key === 'ArrowUp' ? (index - 1 + alternatives.length) % alternatives.length
                  : event.key === 'Home' ? 0 : event.key === 'End' ? alternatives.length - 1 : null;
              if (nextIndex !== null) {
                event.preventDefault();
                optionRefs.current[nextIndex]?.focus();
              }
            }}
          >
            {alternatives.map((option, index) => (
              <button
                key={option.value}
                ref={(element) => { optionRefs.current[index] = element; }}
                type="button"
                role="menuitem"
                lang={option.value === 'pt' ? 'pt-BR' : option.value}
                onClick={() => {
                  setLanguage(option.value);
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                className="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-aviation-navy focus-visible:bg-slate-50 focus-visible:text-aviation-navy focus-visible:outline-none transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="font-semibold">{option.code}</span>
                <span className="text-xs text-slate-400">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
