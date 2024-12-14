import React from "react";
import NeuralNoise from "@/app/components/backgrounds/NeuralNoise";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[100vh] mt-0 flex flex-col justify-center">
      {/* Fondo animado con NeuralNoise */}
      <div className="absolute inset-0 z-0">
        <NeuralNoise />
      </div>

      {/* Capa de máscara con color y opacidad */}
      <div className="absolute inset-0 z-10 bg-otis-500 bg-opacity-60"></div>

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 relative z-10">
        <article className="text-white  text-center">
          <div>
            <h1 className="w-full text-[5rem] font-bold mb-4">¡Hola!, soy Ayelén</h1>
            <p className="text-3xl mb-6 text-balance">
              Una Abogada especializada en inteligencia Artificial y Doglover
            </p>
            <p className="text-3xl mb-6 text-balance">
              Product Designer | UX Engineer | UX Designer
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <IoLogoWhatsapp size={48} className="cursor-pointer" />
            <RiInstagramFill size={48} className="cursor-pointer" />
            <IoLogoTiktok size={48} className="cursor-pointer" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
