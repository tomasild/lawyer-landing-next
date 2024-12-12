import React from "react";

export const About = () => {
  return (
    <section className="container mx-auto inline-flex justify-between">
      <img
        src="https://img.freepik.com/foto-gratis/empresaria-papel-manos_144627-258.jpg?t=st=1733964215~exp=1733967815~hmac=27c2d22364d174ef29ece6d0b4570cc95599aff46f1f50bf9967764e62e71f6&w=740"
        alt="Descripción de la imagen"
        className="rounded-xl shadow-lg"
      />
      <ul className="flex flex-col py-20 gap-8">
        <li className="text-3xl text-gray-700 mb-8">
          Subtítulo descriptivo con más detalles sobre lo que ofrece.
        </li>
        <li className="text-3xl text-gray-700 mb-8">
          Subtítulo descriptivo con más detalles sobre lo que ofrece.
        </li>
        <li className="text-3xl text-gray-700 mb-8">
          Subtítulo descriptivo con más detalles sobre lo que ofrece.
        </li>
        <li className="text-3xl text-gray-700 mb-8">
          Subtítulo descriptivo con más detalles sobre lo que ofrece.
        </li>
        <li className="text-3xl text-gray-700 mb-8">
          Subtítulo descriptivo con más detalles sobre lo que ofrece.
        </li>
      </ul>
    </section>
  );
};

export default About;
