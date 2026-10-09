import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CONTENT } from '@/constants';
import { UI_TEXT, type Language } from '@/lib/i18n';

export async function getServerLanguage(): Promise<Language> {
  const value = (await cookies()).get('htc-language')?.value;
  return value === 'en' || value === 'es' ? value : 'pt';
}

export async function localizedMetadata(path: string): Promise<Metadata> {
  const language = await getServerLanguage();
  const t = CONTENT[language];
  const ui = UI_TEXT[language];
  const pages: Record<string, { title: string; description: string }> = {
    '/': { title: t.nav[0].label, description: t.home.heroDesc },
    '/about': { title: t.about_page.title, description: t.about_page.subtitle },
    '/services': { title: t.services_page.title, description: t.services_page.subtitle },
    '/training': { title: t.training_page.title, description: t.training_page.subtitle },
    '/corporate': { title: t.corporate_page.title, description: t.corporate_page.subtitle },
    '/contact': { title: t.contact_page.title, description: t.contact_page.subtitle },
    '/instructors': { title: t.instructors_page.title, description: t.instructors_page.subtitle },
    '/lp-crm': { title: t.crm_lp.hero.title, description: t.crm_lp.hero.subtitle },
    '/lp-dgr': { title: t.dgr_lp.hero.title, description: t.dgr_lp.hero.subtitle },
    '/lp-avsec': { title: t.avsec_lp.hero.title, description: t.avsec_lp.hero.subtitle },
    '/privacy': { title: t.privacy_page.title, description: t.privacy_page.subtitle },
    '/terms': { title: t.terms_page.title, description: t.terms_page.subtitle },
    '/cardapio': { title: `HTC Diner — ${ui.menu}`, description: ui.imagesDisclaimer },
  };
  const page = pages[path] ?? { title: ui.notFound, description: ui.notFoundDescription };
  return {
    title: { absolute: `${page.title} | HTC Training` },
    description: page.description,
    openGraph: { ...page, locale: { pt: 'pt_BR', en: 'en_US', es: 'es_ES' }[language] },
  };
}
