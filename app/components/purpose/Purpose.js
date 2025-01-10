import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import Image from "next/image";

const Purpose = () => {
  return (
    <div
      id="purpose"
      className="bg-palace bg-cover bg-center py-20npm relative md:bg-fixed"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="max-w-4xl mx-4 md:mx-auto text-center relative z-10">
        <div className="flex justify-center py-6 md:py-14 text-[2rem] md:text-[3.5rem]">
          <BsFillChatLeftQuoteFill />
        </div>
        <h2 className="text-[2rem] md:text-[3rem] font-bold text-otis-100 mb-6 drop-shadow-lg text-pretty">
          Derecho y tecnología, aliados en tu camino.
        </h2>
        <p className="text-[0.9rem] md:text-[1.2rem] text-otis-100 text-balance leading-relaxed drop-shadow-lg pb-10 md:pb-20">
          Como abogada especializada en inteligencia artificial, mi misión es
          investigar y abordar las implicaciones legales, éticas y sociales de
          la IA, con el objetivo de crear soluciones legales que promuevan una
          regulación adecuada y justa. Me enfoco en temas como sesgos,
          regulación y el impacto social de la IA, trabajando para construir un
          sistema jurídico más consciente y adaptado a los avances tecnológicos.
        </p>
      </div>
    </div>
  );
};

export default Purpose;
