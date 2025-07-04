"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { useState } from "react";

export const ContactForm = () => {
  const { register, handleSubmit, errors, isValid, onSubmit } =
    useContactForm();

  const [accepted, setAccepted] = useState(false);

  return (
    <section id="contacto" className="bg-yellow-500 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Lado izquierdo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-zinc-800 text-base md:text-lg">
            Cuéntanos tu necesidad y nuestro equipo especializado se pondrá en
            contacto contigo lo antes posible.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Nombre completo"
              {...register("name", {
                required: "El nombre es obligatorio",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Ingrese un nombre válido",
                },
              })}
              className="w-full p-3 rounded bg-white text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <div className="min-h-[20px]">
              {errors.name && (
                <p className="text-red-600 italic text-sm">
                  {errors.name.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "Correo obligatorio",
                pattern: {
                  value:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: "Correo no válido",
                },
              })}
              className="w-full p-3 rounded bg-white text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <div className="min-h-[20px]">
              {errors.email && (
                <p className="text-red-600 italic text-sm">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Teléfono"
              maxLength={10}
              {...register("phone", {
                required: "Teléfono obligatorio",
                validate: (value) =>
                  /^\d{10}$/.test(value) ||
                  "El teléfono debe tener exactamente 10 números",
              })}
              onInput={(e) => {
                const input = e.currentTarget;
                // Elimina caracteres que no sean dígitos y limita a 10 dígitos
                input.value = input.value.replace(/\D/g, "").slice(0, 10);
              }}
              className="w-full p-3 rounded bg-white text-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <div className="min-h-[20px]">
              {errors.phone && (
                <p className="text-red-600 italic text-sm">
                  {errors.phone.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <textarea
              placeholder="Cuéntanos tu proyecto..."
              {...register("message", { required: "Mensaje obligatorio" })}
              className="w-full p-3 rounded bg-white text-zinc-800 placeholder-zinc-500 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <div className="min-h-[20px]">
              {errors.message && (
                <p className="text-red-600 italic text-sm">
                  {errors.message.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label className="flex items-start gap-2 text-zinc-800 text-sm">
              <input
                type="checkbox"
                {...register("privacy", {
                  required: "Requerido para continuar",
                  onChange: (e) => setAccepted(e.target.checked),
                })}
                className="mt-1"
              />
              Acepto el tratamiento de mis datos personales conforme a la Ley
              1581 de 2012
            </label>
            <div className="min-h-[20px]">
              {errors.privacy && (
                <p className="text-red-600 italic text-sm">
                  {errors.privacy.message as string}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-2 px-6 rounded disabled:opacity-50 transition-all"
            disabled={!isValid || !accepted}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
