"use client";
import React, { useState } from "react";
import { GiScales } from "react-icons/gi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from "next/image";

const FaqItem = ({ faq, index, isOpen, onToggle }) => {
  const faqId = `faq-${index}`;
  return (
    <li
      className="border  w-full bg-otis-800 shadow-lg"
      role="region"
      aria-label={`Pregunta ${index + 1}`}
    >
      <h3 id={faqId}>
        <button
          type="button"
          className="w-full text-left text-xl md:text-2xl font-bold text-white bg-otis-600 p-4 rounded-lg flex justify-between items-center transition duration-200 focus:ring-2 focus:ring-inset focus:ring-otis-200 focus:ring-offset-1"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-labelledby={faqId}
        >
          <span>{faq.question}</span>
          <span>
            {isOpen ? (
              <HiChevronUp className="text-white text-xl md:text-2xl transition duration-200" />
            ) : (
              <HiChevronDown className="text-white text-xl md:text-2xl transition duration-200" />
            )}
          </span>
        </button>
      </h3>
      <div
        className={`overflow-hidden bg-otis-600 text-white text-2xl leading-relaxed drop-shadow-l transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] p-4" : "max-h-0 p-0"
        }`}
      >
        {faq.answer}
      </div>
    </li>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda un caso en resolverse?",
      answer:
        "El tiempo de resolución varía según la complejidad del caso y la jurisdicción correspondiente.",
    },
    {
      question: "¿Cuáles son los honorarios iniciales?",
      answer:
        "Los honorarios iniciales dependen del tipo de caso. Se realiza una consulta inicial gratuita para discutir los detalles.",
    },
    {
      question: "¿Mis datos estarán protegidos?",
      answer:
        "Sí, toda la información compartida con nosotros está completamente protegida y es confidencial.",
    },
    {
      question: "¿Ofrecen consultas virtuales?",
      answer:
        "Sí, ofrecemos consultas virtuales para mayor comodidad de nuestros clientes.",
    },
    {
      question: "¿Pueden ayudarme con un caso de divorcio?",
      answer:
        "Si, ofrecemos asesoramiento legal especializado en divorcios y custodia de menores.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-otis-300 py-20">
      <div className="container mx-auto relative z-10 flex gap-10 flex-col lg:flex-row items-start justify-between">
        {/* <figure>
          <img
            src="https://img.freepik.com/foto-gratis/empresaria-papel-manos_144627-258.jpg?t=st=1733964215~exp=1733967815~hmac=27c2d22364d174ef29ece6d0b4570cc95599aff46f1f50bf9967764e62e71f6&w=740"
            alt="Mujer profesional trabajando en su oficina"
            className="rounded-xl shadow-lg w-full"
          />
        </figure> */}
        <article className="flex flex-col items-start space-y-8 w-full lg:w-2/3">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-otis-950">
            Preguntas Frecuentes
          </h2>
          <ul className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                isOpen={activeIndex === index}
                onToggle={toggleFaq}
              />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Faq;
