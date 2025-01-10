import React from "react";
import { GiScales } from "react-icons/gi";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="relative bg-otis-100 pt-10 pb-20 md:py-20">
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row gap-4 justify-between">
        <article className="flex flex-col items-center md:items-start space-y-4 md:space-y-8 mx-4 md:mx-0">
          <div className="bg-otis-800 p-4 rounded-full flex items-center justify-center text-[2rem] md:text-[5rem]">
            <GiScales />
          </div>
          <h2 className="text-[2rem] md:text-[4rem] font-bold text-center text-otis-950">
            Sobre mí
          </h2>
          <p className="text-black text-[0.9rem] md:text-[1.2rem] max-w-2xl text-pretty md:text-balance leading-relaxed drop-shadow-lg">
            oy abogada recién egresada con un enfoque en la investigación de la
            inteligencia artificial y sus implicaciones legales, éticas y
            regulatorias. Mi interés se centra en comprender cómo las nuevas
            tecnologías afectan el marco jurídico y cómo garantizar una
            regulación justa y adecuada. Además, brindo asesoría legal en
            diversas áreas, incluyendo derecho civil y familiar, con un
            compromiso de proporcionar soluciones legales claras, éticas y
            adaptadas a las necesidades de cada cliente." Esta frase proporciona
            una visión más amplia de tu enfoque y compromiso como abogada,
            destacando tanto tu especialización como tu capacidad para abordar
            diferentes áreas del derecho. complejos.
          </p>
        </article>
        <figure className="mx-4 md:mx-0 flex justify-center items-center">
          <Image
            src="/bg1.webp"
            alt="Foto de abogada Ayelén"
            width={800} 
            height={600} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
