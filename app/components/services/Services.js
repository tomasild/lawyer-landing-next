import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Delitos penales",
    description:
      "Asesoramiento integral desde la primera consulta hasta la etapa final del proceso penal.",
  },
  {
    id: 2,
    title: "Asuntos civiles",
    description:
      "Contratos, arrendamientos, cobros, etc. Representación legal en juicio.",
  },
  {
    id: 3,
    title: "Derecho de familia",
    description: "Divorcios, custodia de menores, pensiones alimenticias.",
  },
  {
    id: 4,
    title: "Derecho laboral",
    description: "Despidos, indemnizaciones, reclamos laborales.",
  },
  {
    id: 5,
    title: "Protección al consumidor",
    description: "Defensa de tus derechos como consumidor.",
  },
  {
    id: 6,
    title: "Extranjería y migración",
    description: "Trámites migratorios, residencia, ciudadanía.",
  },
  {
    id: 7,
    title: "Derecho de la propiedad",
    description: "Contratos, arrendamientos, cobros, etc. Representación legal en juicio.",
  },
];

function Services() {
  return (
    <section className="relative bg-custom-bg bg-cover bg-center py-16">
    {/* Mask overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-azul-700 to-azul-900 opacity-80 z-0"></div>

    <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="bg-azul-900 text-white h-64 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="flex items-center -translate-y-6">
                <svg
                  className="h-12 w-12 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path d="M410.9,0H85.1C72.3,0,61.8,10.4,61.8,23.3V512L248,325.8L434.2,512V23.3C434.2,10.4,423.8,0,410.9,0z" />
                </svg>
              </div>
              <h3
                id={`service-title-${service.id}`}
                className="text-2xl font-bold mb-2 py-4"
              >
                {service.title}
              </h3>
              <p className="text-lg">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
