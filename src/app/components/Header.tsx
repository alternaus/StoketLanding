import favicon from "../Assets/favicon.png";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#120f1f]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 max-w-7xl items-center px-4">
        <div className="flex w-full items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <img src={favicon} alt="Stoket" className="h-9 w-9" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              Características
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Precios
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://conteo.acqua.fit/login"
              className="text-white/80 hover:text-white transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="https://conteo.acqua.fit/login?tab=register&plan=free"
              className="rounded-lg bg-[#8557FB] px-6 py-2 text-white hover:bg-[#7448e5] transition-colors"
            >
              Prueba gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
