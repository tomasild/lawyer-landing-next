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
    <section id="services" className="relative bg-custom-bg bg-cover bg-center py-16">
      {/* Mask overlay */}
      <div className="absolute inset-0 bg-otis-400 opacity-40 z-0"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-[2rem] md:text-[4rem] font-bold text-center mb-8 text-otis-950">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-0">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="bg-otis-900 text-white h-[12rem] md:h-[16rem] overflow-hidden shadow-md p-6 hover:shadow-xl transition duration-300"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="flex items-center -translate-y-7 text-[2rem] md:text-[3rem]">
                <IoBookmarkSharp />
              </div>
              <h3
                id={`service-title-${service.id}`}
                className="text-[1.2rem] md:text-[2rem] font-bold mb-2 -translate-y-2"
              >
                {service.title}
              </h3>
              <p className="text-[0.9rem] md:text-[1.2rem]">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
