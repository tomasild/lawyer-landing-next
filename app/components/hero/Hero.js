import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

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

      {/* Capa de máscara con color y opacidad */}
      <div className="absolute inset-0 z-10 bg-otis-900 bg-opacity-30"></div>

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 relative z-10">
        <article className="text-white text-center">
          <div>
            <h1 className="w-full text-[2rem] md:text-[5rem] font-bold mb-4">
              ¡Hola!, soy Ayelén
            </h1>
            <p className="text-[1rem] md:text-[2.5rem] mb-6 text-balance">
              Una Abogada especializada en inteligencia Artificial y Doglover
            </p>
            <p className="text-[1rem] md:text-[2.5rem] font-bold mb-6 text-balance">
              Product Designer | UX Engineer | UX Designer
            </p>
          </div>
          <div className="flex gap-6 justify-center">
            <IoLogoWhatsapp className="text-[2rem] md:text-[4rem] cursor-pointer hover:text-otis-400 " />
            <RiInstagramFill className="text-[2rem] md:text-[4rem] cursor-pointer hover:text-otis-400 " />
            <IoLogoTiktok className="text-[2rem] md:text-[4rem] cursor-pointer hover:text-otis-400 " />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
