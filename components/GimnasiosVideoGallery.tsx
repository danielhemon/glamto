"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videoList = [
  "/assets/videos/01.mp4",
  "/assets/videos/02.mp4",
  "/assets/videos/03.mp4",
  "/assets/videos/04.mp4",
  "/assets/videos/05.mp4",
];

export default function GimnasiosVideoGallery() {
  const [index, setIndex] = useState(0);

  const prevVideo = () => {
    setIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setIndex((prev) => (prev === videoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-8 py-8 space-y-12">
      <div className="flex flex-row">
        <h1 className="text-3xl font-bold text-center text-[#ffff] italic">
          Gimnasios a Medida para Gatos
        </h1>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col pr-10">
              <button
                onClick={prevVideo}
                className="flex bg-white bg-opacity-80 p-2 rounded-full shadow hover:bg-opacity-100 z-10"
              >
                <FaArrowLeft className="text-[#163020]" />
              </button>
            </div>

            <div className="flex flex-col aspect-[9/16] min-h-36 aspect-video shadow-lg rounded-xl overflow-hidden border border-white transition-opacity duration-700">
              <video
                key={index}
                src={videoList[index]}
                autoPlay
                loop
                muted
                playsInline
                onEnded={nextVideo}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col pl-10">
              <button
                onClick={nextVideo}
                className="flex bg-white bg-opacity-80 p-2 rounded-full shadow hover:bg-opacity-100 z-10"
              >
                <FaArrowRight className="text-[#163020]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2 text-black text-md leading-relaxed p-10 md:text-white">
          <p className="text-lg font-medium">
            Diseño exclusivo. Bienestar felino. Armonía en tu hogar.
          </p>
          <hr className="my-4 border-[#163020] w-1/2 mx-auto" />
          <p className="text-justify">
            En Glamto diseñamos gimnasios personalizados que mejoran la vida de
            tu gato y armonizan con la estética de tu hogar. Cada pieza es
            única, hecha a la medida de tu espacio, tu estilo y las necesidades
            específicas de tu michi.
          </p>
          <hr className="my-4 border-[#163020] w-1/2 mx-auto" />
          <div className="text-left space-y-2">
            <p className="font-semibold text-justify">
              ¿Por qué elegir un gimnasio Glamto?
            </p>
            <p className="text-justify">
              Usamos materiales de alta calidad, seguros y duraderos, cuidando
              cada detalle para crear un entorno donde tu gato pueda trepar,
              jugar, descansar y mantenerse activo física y mentalmente.
            </p>
            <p className="text-justify">
              No solo es un mueble, es una experiencia de bienestar para tu gato
              y tranquilidad para ti. Además, nos encargamos de todo el proceso,
              desde el diseño hasta la instalación profesional.
            </p>
          </div>
          <hr className="my-4 border-[#163020] w-1/2 mx-auto" />
          <p className="italic">
            ✨ Cada gato es único. Su gimnasio también debería serlo.
          </p>
          <p>
            Agenda tu asesoría personalizada y descubramos juntos cómo
            transformar tu espacio.
          </p>
        </div>
      </div>

      <div className="w-full text-center justify-center flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 md:w-3/6">
        <Link href="/">
          <button className="btn-secondary" type="button">
            Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
