import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section
      className="bg-otis-950 text-white py-14 px-4 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="cta-heading"
          className="text-[2rem] md:text-[4rem] leading-tight text-pretty"
        >
          ¿Necesitas asesoría legal en tecnología o asuntos civiles?
        </h2>
        <p className="mt-4 text-[0.9rem] md:text-[1.2rem] leading-relaxed text-pretty">
          Como abogada especializada en inteligencia artificial e implicaciones
          legales, éticas y sociales, estoy aquí para ofrecerte asesoría
          personalizada. Ya sea en temas tecnológicos, derecho civil o familiar,
          mi enfoque se adapta a tus necesidades legales.
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
