import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] bg-slate-50 px-4 pt-36 pb-20 flex items-center justify-center text-center">
            <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-aviation-red mb-4">Erro 404</p>
                <h1 className="text-4xl md:text-5xl font-bold text-aviation-navy mb-6">Página não encontrada</h1>
                <p className="text-lg text-slate-600 mb-8">
                    O endereço pode ter mudado ou não estar mais disponível.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-md bg-aviation-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                    Voltar para o início
                </Link>
            </div>
        </section>
    );
}
