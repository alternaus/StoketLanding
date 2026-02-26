import { ArrowRight } from "lucide-react";
import dashboardImage from "../Assets/img/Dashboard.png";

export function Hero() {
  return (
    <section id="inicio">
      <div className="relative min-h-screen overflow-hidden border-y border-white/20 shadow-[0_35px_100px_-40px_rgba(17,13,31,0.85)]">
        <img
          src={dashboardImage}
          alt="Dashboard de Stoket"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(133,87,251,0.35),transparent_45%)]" />

        <div className="relative z-10 flex min-h-screen items-end md:items-center">
          <div className="w-full max-w-xl px-7 pb-10 pt-14 md:ml-10 md:px-12 md:pb-14 md:pt-10">
            <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              Gestión simple y efectiva
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Control total de tu inventario con Stoket
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Centraliza productos, movimientos y alertas en una sola plataforma
              con una experiencia clara y rápida para tu equipo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.stoket.co/login?tab=register&plan=free"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#20143f] transition-colors hover:bg-[#f4efff]"
              >
                Comenzar prueba gratis
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/20"
              >
                Ver planes
              </a>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-xs text-white/80">Empresas activas</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/80">Uptime</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/80">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
