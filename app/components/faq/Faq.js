"use client";

import React, { useState, useRef } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // Importar íconos de Chevron

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section className="relative bg-otis-900 py-20">
      <div className="container mx-auto relative z-10 flex flex-col items-start gap-4 justify-between">
        <article className="flex flex-col items-start space-y-8">
          <h2 className="text-5xl font-bold text-center text-otis-20">
            Preguntas Frecuentes
          </h2>
          <dl className="space-y-4 w-full">
            {faqs.map((faq, index) => {
              const contentRef = useRef(null);
              const isOpen = activeIndex === index;
              const maxHeight = isOpen ? contentRef.current?.scrollHeight : 0;

              return (
                <div
                  key={index}
                  className="border rounded-lg w-full bg-otis-800 shadow-lg"
                >
                  <dt>
                    <button
                      type="button"
                      className="w-full text-left text-2xl font-bold text-white bg-otis-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-otis-200 focus:ring-offset-2 flex justify-between items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span>
                        {isOpen ? (
                          <HiChevronUp className="text-white text-2xl" />
                        ) : (
                          <HiChevronDown className="text-white text-2xl" />
                        )}
                      </span>
                    </button>
                  </dt>
                  <dd
                    ref={contentRef}
                    style={{
                      maxHeight: `${maxHeight}px`,
                      transition: "max-height 200ms ease",
                    }}
                    className="overflow-hidden bg-otis-600 text-white0 focus:ring-2 focus:ring-otis-200 focus:ring-offset-2"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <div className="p-4 text-xl">{faq.answer}</div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </article>
      </div>
    </section>
  );
};

export default Faq;
