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
          Mi misión es explorar y compartir las implicancias legales, éticas y
          regulatorias de la Inteligencia Artificial, combinando mi formación en
          Derecho y Tecnología con mi pasión por las nuevas tecnologías. A
          través de la creación de contenido especializado, busco fomentar la
          alfabetización digital y generar un impacto positivo en la comprensión
          pública de los avances tecnológicos. Como investigadora y ayudante de
          la cátedra de Derecho y Tecnología en la Universidad de Valparaíso, mi
          compromiso es ofrecer información clara y accesible para que más
          personas comprendan el impacto de la IA en la sociedad y el entorno
          legal.
        </p>
      </div>
    </div>
  );
};

export default Purpose;
