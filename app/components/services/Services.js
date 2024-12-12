import React from "react";

const servicesData = [
  {
    title: "Delitos penales",
    description:
      "Asesoramiento integral desde la primera consulta hasta la etapa final del proceso penal.",
  },
  {
    title: "Asuntos civiles",
    description:
      "Contratos, arrendamientos, cobros, etc. Representación legal en juicio.",
  },
  {
    title: "Derecho de familia",
    description: "Divorcios, custodia de menores, pensiones alimenticias.",
  },
  {
    title: "Derecho laboral",
    description: "Despidos, indemnizaciones, reclamos laborales.",
  },

  {
    title: "Protección al consumidor",
    description: "Defensa de tus derechos como consumidor.",
  },
  {
    title: "Extranjería y migración",
    description: "Trámites migratorios, residencia, ciudadanía.",
  },
];

function Services() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-azul-900 text-white h-64 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div className="-translate-y-6">
              <svg
                fill="#ffffff"
                height="46px"
                width="46px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
                stroke="#000000"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.024"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M410.9,0H85.1C72.3,0,61.8,10.4,61.8,23.3V512L248,325.8L434.2,512V23.3C434.2,10.4,423.8,0,410.9,0z" />
                </g>
              </svg>{" "}
            </div>
            <h3 className="text-2xl font-bold mb-2 py-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
