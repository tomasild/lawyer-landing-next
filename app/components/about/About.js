import React from "react";

export const About = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-azul-900 to-azul-700 bg-opacity-70"></div>
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <img
          src="https://img.freepik.com/foto-gratis/empresaria-papel-manos_144627-258.jpg?t=st=1733964215~exp=1733967815~hmac=27c2d22364d174ef29ece6d0b4570cc95599aff46f1f50bf9967764e62e71f6&w=740"
          alt="Descripción de la imagen"
          className="rounded-xl shadow-lg w-full lg:w-1/2"
        />
        <ul className="text-white space-y-4 lg:w-1/2">
          {Array(5)
            .fill("Subtítulo descriptivo con más detalles sobre lo que ofrece.")
            .map((text, index) => (
              <li key={index} className="text-xl">
                {text}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
