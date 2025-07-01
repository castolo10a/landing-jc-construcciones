"use client";

import { ScrollButton } from "@/components";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full">
      {/* Video de fondo fijo */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          className="w-full h-full object-cover"
          src="/assets/videojc.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Capa oscura sobre el video */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido por encima */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold font-sans uppercase">
          jc construcciones
        </h1>
        <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mt-4">
          Expertos en sandblasting, mantenimiento industrial y obras civiles.
        </h2>
        <p className="text-gray-200 my-4 max-w-2xl text-base md:text-lg">
          Confianza y experiencia al servicio del sector petrolero e infraestructura nacional.
        </p>

        <ScrollButton label="Contáctanos" to="contacto" className="inline-block"/>
      </div>
    </section>
  );
};
