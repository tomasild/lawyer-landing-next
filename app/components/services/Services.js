import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";

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
    description:
      "Contratos, arrendamientos, cobros, etc. Representación legal en juicio.",
  },
];

function Services() {
  return (
    <section className="relative bg-custom-bg bg-cover bg-center py-16">
      {/* Mask overlay */}
      <div className="absolute inset-0 bg-otis-400 opacity-30 z-0"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-8 text-otis-950">
          Servicios
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="bg-otis-900 text-white h-64 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="flex items-center -translate-y-6">
                <IoBookmarkSharp size={48} />
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
