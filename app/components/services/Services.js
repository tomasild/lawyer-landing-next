import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";
const servicesData = [
  {
    id: 1,
    title: "Asesoría jurídica",
    description:
      "Brindo asesoría jurídica integral en diversas áreas del Derecho, con un enfoque claro y accesible para ayudarte a comprender tus derechos y las implicancias legales que puedan afectar tus intereses, todo basado en la normativa vigente y los principios éticos del Derecho.",
  },
  {
    id: 2,
    title: "Derecho y tecnología",
    description:
      "Ofrezco orientación sobre las implicancias legales y regulatorias de la tecnología, con especial enfoque en Inteligencia Artificial. Ayudo a comprender cómo la ley interactúa con la innovación tecnológica y cómo las empresas y particulares deben adaptarse a este nuevo panorama legal.",
  },
  {
    id: 3,
    title: "Derecho de familia",
    description:
      "Brindo asesoría en temas relacionados con el Derecho de Familia, buscando soluciones adecuadas para cada situación, con un enfoque empático y respetuoso de las necesidades de los involucrados en procesos como separaciones, acuerdos de custodia y otros asuntos familiares.",
  },
  {
    id: 4,
    title: "Capacitaciones",
    description:
      "Ofrezco capacitaciones en temas de Derecho y Tecnología, con el objetivo de fomentar la alfabetización digital. A través de mis sesiones, busco proporcionar una comprensión clara de cómo las nuevas tecnologías, especialmente la Inteligencia Artificial, afectan el panorama legal y social.",
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
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-center mb-8 text-otis-950">
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
