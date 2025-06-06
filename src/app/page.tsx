"use client";

import { HeroSection } from "@/templates";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="bg-zinc-900 h-screen content-center" id="servicios">
        <h1 className="text-center text-bold text-3xl uppercase">Servicios</h1>
      </div>
      <div className="bg-yellow-500 h-screen content-center" id="proyectos">
        <h1 className="text-center text-bold text-3xl uppercase">Proyectos</h1>
      </div>
      <div className="bg-zinc-900 h-screen content-center" id="nosotros">
        <h1 className="text-center text-bold text-3xl uppercase">Sobre nosotros</h1>
      </div>
      <div className="bg-yellow-500 h-screen content-center" id="contacto">
        <h1 className="text-center text-bold text-3xl uppercase">Formulario de contacto</h1>
      </div>
    </div>
  );
}
