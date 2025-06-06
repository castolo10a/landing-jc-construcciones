"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ScrollButton } from "../scrollButton";

export const navLinks = [
  { name: "Inicio", to: "inicio" },
  { name: "Servicios", to: "servicios" },
  { name: "Proyectos", to: "proyectos" },
  { name: "Sobre Nosotros", to: "nosotros" },
  { name: "Contacto", to: "contacto" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 shadow-md">
      <div className="md:max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="inicio"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Image
            src="/assets/fondo-transparente.webp"
            alt="Logo"
            width={320}
            height={80}
            className="w-auto h-16 md:h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-yellow-600 hover:underline underline-offset-8 cursor-pointer font-semibold text-sm uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <ScrollButton label="Solicitar Cotización" to="contacto" />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block text-gray-200 hover:text-white text-base font-semibold uppercase"
            >
              {link.name}
            </Link>
          ))}

          <ScrollButton
            label="Solicitar Cotización"
            to="contacto"
            className="inline-block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md text-sm transition duration-300"
          />
        </div>
      )}
    </header>
  );
};
