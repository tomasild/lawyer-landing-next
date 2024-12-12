import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-azul-700 to-azul-900 bg-opacity-70 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="z-10 text-white max-w-2xl">
          <h1 className="text-7xl font-bold mb-4">Título Principal</h1>
          <p className="text-2xl mb-6">
            Subtítulo descriptivo con más detalles sobre lo que ofrece.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Acción 1
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Acción 2
            </button>
          </div>
        </div>
        <div className="z-10">
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-papel-manos_144627-258.jpg?t=st=1733964215~exp=1733967815~hmac=27c2d22364d174ef29ece6d0b4570cc95599aff46f1f50bf9967764e62e71f6&w=740"
            alt="Descripción de la imagen"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
