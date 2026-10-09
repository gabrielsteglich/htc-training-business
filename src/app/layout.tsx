import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getServerLanguage } from "@/lib/server-language";
import { LOCALES } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://htc-brasil.com.br";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-menu",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HTC Training and Business | Aviation Excellence",
    template: "%s | HTC Training",
  },
  description:
    "Treinamento especializado em aviação (CRM, AVSEC, DGR) para profissionais que exigem excelência. Conformidade, segurança e expertise em um só lugar.",
  keywords: [
    "CRM",
    "AVSEC",
    "DGR",
    "treinamento aviação",
    "ANAC",
    "segurança aérea",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName: "HTC Training and Business",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = await getServerLanguage();
  return (
    <html lang={LOCALES[language]} suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers initialLanguage={language}>{children}</Providers>
      </body>
    </html>
  );
}
