import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "0",
    description: "Ideal para comenzar",
    features: [
      "1 usuario",
      "1 inventario",
      "Hasta 30 items",
      "Reportes básicos",
      "Soporte por email",
      "Actualizaciones incluidas",
    ],
    highlighted: false,
  },
  {
    name: "Startup",
    price: "15.900",
    description: "Para negocios en crecimiento",
    features: [
      "10 usuarios",
      "5 inventarios",
      "Hasta 5,000 items",
      "Reportes avanzados",
      "Soporte prioritario",
      "Historial completo",
      "Exportación de datos",
      "Integraciones disponibles",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-[#f7f2ff] px-4 py-24"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Planes simples y transparentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Comienza gratis y escala cuando lo necesites.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {plans.map((plan, index) => {
            const isFreePlan = plan.price === "0";

            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "border border-[#c9b3ff] bg-gradient-to-b from-[#8557FB] to-[#7448e5] text-white shadow-[0_30px_80px_-35px_rgba(88,53,182,1)]"
                    : "border border-[#e8ddff] bg-white/90 text-gray-900 shadow-[0_20px_60px_-40px_rgba(42,22,89,0.8)] backdrop-blur-sm"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#8557FB]">
                    Más popular
                  </span>
                )}

                <h3
                  className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 ${plan.highlighted ? "text-[#ede4ff]" : "text-gray-600"}`}
                >
                  {plan.description}
                </p>

                <div className="mb-6 mt-6">
                  <span
                    className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-xl ${plan.highlighted ? "text-[#ede4ff]" : "text-gray-600"}`}
                  >
                    /mes
                  </span>
                </div>

                <a
                  href={
                    isFreePlan
                      ? "https://conteo.acqua.fit/login?tab=register&plan=free"
                      : "https://conteo.acqua.fit/landing"
                  }
                  className={`mb-8 inline-flex w-full justify-center rounded-lg py-3 font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-white text-[#8557FB] hover:bg-[#f4efff]"
                      : "bg-[#8557FB] text-white hover:bg-[#7448e5]"
                  }`}
                >
                  {isFreePlan ? "Comenzar gratis" : "seleccionar plan"}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-[#8557FB]"}`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-[#f4efff]" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿Necesitas más de 5,000 items o funcionalidades personalizadas?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#8557FB] hover:text-[#7448e5]"
            >
              Contáctanos para un plan Enterprise
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
