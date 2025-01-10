import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section
      id="contact"
      className="bg-contacto bg-cover bg-center text-white py-14 px-4 sm:px-6 lg:px-8 relative" // Añadí 'relative' para que el z-index funcione
      aria-labelledby="cta-heading"
    >
      {/* Capa de máscara */}
      <div className="absolute inset-0 bg-otis-950 opacity-50 z-10"></div>{" "}
      {/* Capa con menor z-index para estar debajo del contenido */}
      {/* Contenido principal */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {" "}
        {/* Añadí 'relative z-20' para que el contenido quede por encima de la capa */}
        <h2
          id="cta-heading"
          className="text-[2rem] md:text-[3rem] leading-tight text-pretty"
        >
          ¿Necesitas asesoría sobre las implicancias legales de la tecnología?
        </h2>
        <p className="mt-4 text-[0.9rem] md:text-[1.2rem] leading-relaxed text-pretty">
          Como especialista en Derecho y Tecnología, te ayudo a entender y
          abordar los retos legales que trae la innovación, como la Inteligencia
          Artificial. Contáctame ahora y obtén la orientación legal que necesitas.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="#contacto">
            <button
              role="button"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-otis-600 hover:bg-otis-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md transition-transform transform hover:scale-105"
            >
              Contáctame ahora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
