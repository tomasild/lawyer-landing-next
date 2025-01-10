import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";

const servicesData = [
  {
    id: 1,
    title: "Delitos penales",
    description:
      "Asesoramiento integral desde la primera consulta hasta la etapa final del proceso penalAsesoramiento integral desde la primera consulta hasta la etapa final del proceso penalAsesoramiento integral desde la primera consulta hasta la etapa final del proceso penalAsesoramiento integral desde la primera consulta hasta la etapa final del proceso penal.",
  },
  {
    id: 2,
    title: "Asuntos civiles",
    description:
      "Contratos, arrendamientos, cobros, etc. Representación legal en juicioContratos, arrendamientos, cobros, etc. Representación legal en juicioContratos, arrendamientos, cobros, etc. Representación legal en juicioContratos, arrendamientos, cobros, etc. Representación legal en juicio.",
  },
  {
    id: 3,
    title: "Derecho de familia",
    description:
      "Divorcios, custodia de menores, pensiones alimenticias.Divorcios, custodia de menores, pensiones alimenticias.Divorcios, custodia de menores, pensiones alimenticias.Divorcios, custodia de menores, pensiones alimenticias.Divorcios, custodia de menores, pensiones alimenticias.",
  },
  {
    id: 4,
    title: "Derecho laboral",
    description:
      "Despidos, indemnizaciones, reclamos laboralesDespidos, indemnizaciones, reclamos laboralesDespidos, indemnizaciones, reclamos laboralesDespidos, indemnizaciones, reclamos laboralesDespidos, indemnizaciones, reclamos laborales.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative bg-otis-100 md:bg-custom-bg md:bg-cover bg-center pt-16 pb-4 md:pb-28"
    >
      <div className="absolute inset-0 bg-otis-100 opacity-20 z-0"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-[2rem] md:text-[4rem] font-bold text-center mb-8 text-otis-950">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mx-4 md:mx-0">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="bg-otis-900 text-white transition duration-300 transform hover:scale-105 shadow-xl"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center text-[2rem] md:text-[3rem] mb-2 -translate-y-7">
                  <IoBookmarkSharp />
                </div>
                <h3
                  id={`service-title-${service.id}`}
                  className="text-[1.2rem] md:text-[1.5rem] font-bold mb-2 flex-grow"
                >
                  {service.title}
                </h3>
                <p className="text-[0.9rem] md:text-[1rem] pb-8 text-otis-100 flex-grow">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
