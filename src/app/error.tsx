"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { ui } = useLanguage();
    useEffect(() => {
        console.error("Uncaught error:", error);
    }, [error]);

    return (
        <div role="alert" className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full border-l-4 border-aviation-red">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                    {ui.errorTitle}
                </h1>
                <p className="text-slate-600 mb-6">
                    {ui.errorDescription}
                </p>
                <button
                    type="button"
                    onClick={() => reset()}
                    className="px-6 py-3 bg-slate-900 text-white rounded font-bold hover:bg-slate-800 transition-colors w-full"
                >
                    {ui.retry}
                </button>
            </div>
        </div>
    );
}
