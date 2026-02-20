import { BarChart3, Zap, Shield, Bell, Users, Cloud } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Análisis en tiempo real',
    description: 'Visualiza el estado de tu inventario con gráficos y reportes actualizados al instante.',
  },
  {
    icon: Zap,
    title: 'Gestión rápida',
    description: 'Configura alertas automáticas para productos con bajo stock y reordena con un clic.',
  },
  {
    icon: Shield,
    title: 'Seguridad avanzada',
    description: 'Tus datos están protegidos con encriptación de nivel empresarial y backups diarios.',
  },
  {
    icon: Bell,
    title: 'Notificaciones instantáneas',
    description: 'Recibe alertas sobre cambios críticos en tu inventario directamente en tu dispositivo.',
  },
  {
    icon: Users,
    title: 'Colaboración en equipo',
    description: 'Gestiona tu inventario con múltiples usuarios y asigna permisos personalizados.',
  },
  {
    icon: Cloud,
    title: 'Sincronización en la nube',
    description: 'Accede a tus datos desde cualquier dispositivo con sincronización automática.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-[#f8f4ff] to-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Todo lo que necesitas para gestionar tu inventario
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Herramientas poderosas diseñadas para simplificar tu trabajo diario.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#e8ddff] bg-white/85 p-7 shadow-[0_20px_50px_-35px_rgba(42,22,89,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9b3ff] hover:shadow-[0_26px_60px_-35px_rgba(42,22,89,0.9)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ede4ff]">
                <feature.icon className="h-6 w-6 text-[#8557FB]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
