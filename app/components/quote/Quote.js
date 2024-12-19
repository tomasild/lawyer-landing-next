import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import Image from "next/image";

const Quote = () => {
  return (
    <div className="bg-palace bg-cover bg-center py-16 relative bg-fixed">
      {/* Mask overlay */}
      <div className="absolute inset-0 bg-otis-900 opacity-60 z-0"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <BsFillChatLeftQuoteFill size={64} />
        </div>
        <h2 className="text-5xl font-bold text-otis-100 mb-6 drop-shadow-lg">
          El Derecho de Familia y la Anticipación
        </h2>
        <p className="text-3xl text-otis-100 text-balanceleading-relaxed drop-shadow-lg">
          "La ley debe anticipar los impactos de la IA, en lugar de reaccionar a
          ellos, para evitar un vacío legal que ponga en riesgo los derechos
          fundamentales." - Ryan Calo.
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
