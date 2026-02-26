export function Stats() {
  return (
    <section className="bg-[#120f1f] px-4 py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#171226] to-[#251a3e] p-8 shadow-[0_35px_90px_-45px_rgba(0,0,0,1)] md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bda2ff]">
              Impacto real
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Resultados que hablan por sí mismos
            </h2>
            <p className="mt-5 text-xl text-[#ded0ff]">
              Empresas de todos los tamaños están optimizando sus operaciones
              con Stoket.
            </p>
            <a
              href="https://app.stoket.co/landing"
              className="mt-8 inline-flex rounded-lg bg-[#8557FB] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#7448e5]"
            >
              Comprar plan
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">35%</p>
              <p className="mt-1 text-sm text-[#e6dcff]">
                Ahorro en costos operativos promedio
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">10h</p>
              <p className="mt-1 text-sm text-[#e6dcff]">
                Ahorradas por semana en gestión manual
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="mt-1 text-sm text-[#e6dcff]">
                Precisión en conteo y trazabilidad
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="mt-1 text-sm text-[#e6dcff]">
                Monitoreo y soporte continuo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
