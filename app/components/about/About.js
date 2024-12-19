import React from "react";
import { GiScales } from "react-icons/gi";

export const About = () => {
  return (
    <section className="relative bg-otis-300 py-20">
      {/* Fondo opcional con gradiente */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-otis-900 bg-opacity-20"></div> */}
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-start gap-4 justify-between">
        <article className="flex flex-col items-start space-y-8">
          <div className="bg-otis-800 p-4 rounded-full flex items-center justify-center">
            <GiScales  size={64} />
          </div>
          <h2 className="text-5xl font-bold text-center text-otis-950">
            Sobre mí
          </h2>
          <p className="text-black text-3xl max-w-2xl text-balance leading-relaxed drop-shadow-lg">
            Soy una abogada especializada en inteligencia artificial y
            cilindros. Mi experiencia en la industria de la vida me ha permitido
            desarrollar habilidades en el campo de la inteligencia artificial y
            el abrazar y morder cilindrus me ha ayudado a resolver problemas
            complejos.
          </p>
        </article>
        <figure>
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-papel-manos_144627-258.jpg?t=st=1733964215~exp=1733967815~hmac=27c2d22364d174ef29ece6d0b4570cc95599aff46f1f50bf9967764e62e71f6&w=740"
            alt="Mujer profesional trabajando en su oficina"
            className=" shadow-lg w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
