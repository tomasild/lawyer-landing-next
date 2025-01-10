import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok, IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[100vh] mt-0 flex flex-col justify-center">
      {/* Fondo de video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/main.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center gap-8 relative z-10">
        <article className="text-white text-center">
          <div>
            <h1 className="w-full text-[2rem] md:text-[3rem] lg:text-[4vw] font-bold mb-4">
              ¡Hola!, soy Ayelén Paillal
            </h1>
            <p className="text-[1rem] md:text-[1.2rem] lg:text-[2vw] font-bold mb-6 text-balance">
              Egresada | Derecho y Tecnología | Inteligencia Artificial |
              Creadora de Contenido
            </p>
          </div>
          <div className="flex gap-6 justify-center">
            <IoLogoWhatsapp className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer hover:text-otis-400 transition duration-100 transform hover:scale-110" />
            <RiInstagramFill className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer hover:text-otis-400 transition duration-100 transform hover:scale-110" />
            <IoLogoTiktok className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer hover:text-otis-400 transition duration1300 transform hover:scale-110" />
            <IoLogoLinkedin className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] cursor-pointer hover:text-otis-400 transition duration-100 transform hover:scale-110" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
