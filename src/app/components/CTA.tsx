import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#120f1f] px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#8557FB] to-[#6e44d6] p-10 text-center shadow-[0_35px_80px_-40px_rgba(17,13,31,1)] md:p-14">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Comienza a optimizar tu inventario hoy
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-[#ede4ff]">
            Únete a miles de empresas que ya están transformando su gestión de
            inventario. Prueba Stoket gratis durante 14 días, sin tarjeta de
            crédito.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://conteo.acqua.fit/login?tab=register&plan=free"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#8557FB] transition-colors hover:bg-[#f4efff]"
            >
              Empezar prueba gratis
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-[#ede4ff]">
            ? Sin tarjeta de crédito ? Configuración en 5 minutos ? Soporte en
            español
          </p>
        </div>
      </div>
    </section>
  );
}
