import React from "react";
import NeuralNoise from "@/app/components/backgrounds/NeuralNoise";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[100vh] mt-0 flex flex-col justify-center">
      {/* Fondo animado con NeuralNoise */}
      <div className="absolute inset-0 z-0">
        <NeuralNoise />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 relative z-10">
        <article className="text-white max-w-2xl text-center">
          <div>
            <h1 className="text-[5rem] font-bold mb-4">Ayelén Paillal</h1>
            <p className="text-3xl mb-6">
              Abogada especializada en inteligencia Artificial
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            {/* Botones de acción */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Acción 1
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Acción 2
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
