import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Gerente de Operaciones',
    company: 'TechStore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'Stoket transformó completamente nuestra gestión de inventario. Ahora podemos rastrear más de 5,000 productos en tiempo real y hemos reducido los errores en un 90%.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Logística',
    company: 'Distribuidora Central',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'La integración con nuestros sistemas existentes fue perfecta. El equipo de soporte es excepcional y la plataforma es increíblemente intuitiva.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'CEO',
    company: 'Moda Express',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'Desde que usamos Stoket, nuestro proceso de reabastecimiento es mucho más eficiente. Las alertas automáticas nos ahorran horas de trabajo manual cada semana.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f6f1ff] px-4 py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">Miles de empresas confían en Stoket para gestionar su inventario.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#e8ddff] bg-white/90 p-8 shadow-[0_20px_50px_-35px_rgba(42,22,89,0.75)] backdrop-blur-sm transition-shadow hover:shadow-[0_26px_60px_-35px_rgba(42,22,89,0.95)]"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-lg text-gray-700">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
