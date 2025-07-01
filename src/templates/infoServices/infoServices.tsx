"use client";

import { FC } from "react";

import { ServiceCard } from "@/components";
import { services } from "@/data";

export const InfoServices: FC = () => {
  return (
    <section
      id="servicios"
      className="bg-zinc-900 text-white py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          Nuestros Servicios
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto mt-4 mb-10">
          Portafolio integral de servicios técnicos para los sectores
          industrial, petrolero y de infraestructura. Ejecutamos proyectos de
          alta exigencia con calidad, seguridad y cumplimiento.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
