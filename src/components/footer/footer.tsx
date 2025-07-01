"use client";

import Image from "next/image";
import { navLinks } from "../header";
import { Link } from "react-scroll";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Sección 1: Logo e info */}
        <div className="flex flex-col items-start gap-2">
          <Image
            src="/assets/fondo-transparente.webp"
            alt="Logo Empresa"
            width={140}
            height={60}
            priority
          />
          <p className="text-gray-400 text-sm">
            Soluciones integrales para la industria <br /> petrolera y obras civiles.
          </p>
        </div>

        {/* Sección 2: Navegación */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navegación</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-600 hover:underline underline-offset-4 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
          <p>📞 +57 301 234 5678</p>
          <p>📧 jcconstrucciones@gmail.com</p>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {currentYear} JC Construcciones. Todos los derechos reservados.
        </p>
        <p className="mt-4">
          Sitio desarrollado por{" "}
          <a
            href="https://fullstack-colombia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:underline"
          >
            castillocoder
          </a>
        </p>
      </div>
    </footer>
  );
};
