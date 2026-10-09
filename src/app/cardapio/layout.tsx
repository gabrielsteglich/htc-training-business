import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Menu Digital',
    robots: { index: false, follow: false },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="font-[family-name:var(--font-menu)] bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-200">
            {children}
        </div>
    );
}
