import { BsFillChatLeftQuoteFill } from "react-icons/bs";

const Quote = () => {
  return (
    <div
      id="quote"
      className="relative py-16 bg-palace bg-cover bg-center bg-fixed"
    >
      {/* Mask overlay */}
      <div className="absolute inset-0 bg-otis-950 opacity-60 z-0"></div>
      <div className="max-w-4xl mx-4 md:mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8 text-[2rem] md:text-[5rem]">
          <BsFillChatLeftQuoteFill />
        </div>
        <h2 className="text-[2rem] md:text-[4rem] font-bold text-otis-100 mb-6 drop-shadow-lg">
          El Derecho de Familia y la Anticipación
        </h2>
        <p className="text-[0.9rem] md:text-[1.2rem] text-otis-100 text-balance leading-relaxed drop-shadow-lg">
          La ley debe anticipar los impactos de la IA, en lugar de reaccionar a
          ellos, para evitar un vacío legal que ponga en riesgo los derechos
          fundamentales. - Ryan Calo.
        </p>
        <div className="mt-12">
          <button className="bg-otis-600 text-white py-2 px-6 hover:bg-otis-900 transition-colors duration-300">
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
