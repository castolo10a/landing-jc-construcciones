"use client";

import { AboutCard } from "@/components";
import { FC } from "react";

export const AboutUs: FC = () => {
  return (
    <section
      id="nosotros"
      className="bg-zinc-900 text-white py-32 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
          Comprometidos con la excelencia
        </h2>

        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10">
          Con más de <strong>20 años de experiencia</strong>, J.C Construcciones
          y Servicios ha desarrollado proyectos clave en sectores como la
          infraestructura civil e industrial, con un enfoque sólido en{" "}
          <strong>calidad, cumplimiento y seguridad</strong>. Iniciamos
          operaciones en el municipio de{" "}
          <strong>Puerto Salgar, Cundinamarca</strong>, y desde entonces hemos
          ampliado nuestro alcance a nivel <strong>regional y nacional</strong>,
          atendiendo clientes del sector público y privado.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          <AboutCard
            title="+20 Años de Experiencia"
            description="Trayectoria comprobada en obras civiles, oleoductos, mantenimiento industrial y proyectos especializados."
          />

          <AboutCard
            title="Alcance Nacional"
            description="Desde Puerto Salgar hasta proyectos en todo el país, trabajamos en diversas regiones con alto impacto."
          />

          <AboutCard
            title="Compromiso con la Calidad"
            description="En cada obra priorizamos la seguridad, el cumplimiento y la satisfacción del cliente."
          />
        </div>
      </div>
    </section>
  );
};
