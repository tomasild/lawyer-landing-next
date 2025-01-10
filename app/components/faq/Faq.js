"use client";
import React, { useState } from "react";
import { GiScales } from "react-icons/gi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from "next/image";

const FaqItem = ({ faq, index, isOpen, onToggle }) => {
  const faqId = `faq-${index}`;
  return (
    <li
      className="border w-full bg-otis-800 shadow-xl"
      role="region"
      aria-label={`Pregunta ${index + 1}`}
    >
      <h3 id={faqId} className="text-[1.2rem] md:text-[2rem]">
        <button
          type="button"
          className="w-full text-left font-bold text-white bg-otis-900 p-4  flex justify-between items-center transition duration-200 focus:ring-2 focus:ring-inset focus:ring-otis-200 focus:ring-offset-1"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-labelledby={faqId}
        >
          <span className="text-[1.2rem] md:text-[1.5rem] pr-4">
            {faq.question}
          </span>
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
        className={`overflow-hidden bg-otis-900 text-white text-[0.9rem] md:text-[1.2rem] leading-relaxed drop-shadow-l transition-max-height duration-300 ease-in-out ${
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
      question: "¿Qué servicios ofrezco en asesoría jurídica?",
      answer:
        "Ofrezco asesoría jurídica integral en diversas ramas del derecho, con un enfoque especial en la intersección entre derecho y tecnología. Mis servicios incluyen, pero no se limitan a, consultoría en contratos tecnológicos, protección de datos, propiedad intelectual y cumplimiento normativo relacionado con tecnologías emergentes como la Inteligencia Artificial.",
    },
    {
      question: "¿Cómo te ayudo con la relación entre derecho y tecnología?",
      answer:
        "Me especializo en el asesoramiento legal sobre las implicaciones jurídicas de las nuevas tecnologías. Esto incluye desde la protección de datos personales hasta la regulación de inteligencia artificial, ayudándote a entender los marcos legales que afectan tu negocio o proyecto en el ámbito tecnológico.",
    },
    {
      question:
        "¿Qué tipo de asesoría proporciono para la inteligencia artificial?",
      answer:
        "Proporciono asesoría legal específica sobre el uso de la Inteligencia Artificial, desde su implementación en proyectos hasta su regulación legal. Esto incluye la protección de propiedad intelectual, cumplimiento con normativas internacionales de privacidad y riesgos legales asociados al uso de IA.",
    },
    {
      question: "¿Realizo capacitaciones o formación legal?",
      answer:
        "Sí, ofrezco capacitaciones personalizadas sobre el impacto legal de las tecnologías emergentes. Mis talleres están diseñados para profesionales y empresas que buscan comprender mejor los aspectos legales de la tecnología y la innovación, con un enfoque práctico y aplicable.",
    },
    {
      question:
        "¿Cómo garantizo la seguridad de los datos que compartes conmigo?",
      answer:
        "La protección de tus datos es una prioridad. Implemento medidas de seguridad robustas para garantizar que toda la información que compartes conmigo sea confidencial y esté protegida, de acuerdo con las normativas más estrictas de privacidad y seguridad.",
    },
    {
      question: "¿Puedo realizar consultas virtuales?",
      answer:
        "Sí, ofrezco consultas virtuales a través de plataformas seguras y accesibles. De este modo, puedes recibir la asesoría que necesitas sin importar tu ubicación, de manera cómoda y eficaz.",
    },
    {
      question:
        "¿Qué recursos proporciono sobre la regulación de la inteligencia artificial?",
      answer:
        "Regularmente comparto contenido actualizado sobre los marcos legales que regulan la Inteligencia Artificial, tanto a nivel nacional como internacional. Mi enfoque es mantenerte informado sobre los aspectos éticos y legales que afectan la adopción de tecnologías innovadoras.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-otis-100 py-10 md:py-20 px-4 md:px-0"
    >
      <div className="container mx-auto relative z-10 flex gap-10 flex-col lg:flex-row items-start justify-between">
        <article className="flex flex-col items-start space-y-4 md:space-y-8 w-full lg:w-2/3 ">
          <h2 className="text-[2rem] md:text-[3rem] font-bold text-center text-otis-950">
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
