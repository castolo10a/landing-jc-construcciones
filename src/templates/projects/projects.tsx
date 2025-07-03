"use client";

import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { clients, projectImages } from "@/data";

export const Projects: FC = () => {
  return (
    <section id="proyectos" className="bg-yellow-500 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 uppercase mb-10">
          Confianza construida con resultados
        </h2>

        {/* Proyectos */}
        <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-6 mt-12">
          Obras y servicios ejecutados
        </h3>
        {/* Carrusel de proyectos */}
        <Swiper
          className="custom-swiper"
          spaceBetween={6}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectImages.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-[320px] mb-12">
                <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full max-w-[300px] mx-auto">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow p-4 flex items-center justify-center">
                    <h3 className="uppercase md:normal-case text-zinc-800 font-semibold text-sm md:text-base text-center leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Clientes */}
        <h3 className="text-xl md:text-2xl font-bold text-zinc-800 my-6">
          Empresas que confían en nosotros
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg p-4 flex items-center justify-center shadow-md"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                className="object-contain h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
