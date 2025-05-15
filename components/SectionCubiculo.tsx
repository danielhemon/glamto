"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import CardDiseño from "./CardDiseño";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { CardDiseñoProps, diseños } from "../types";
import CustomButton from "./CustomButtom";
import Image from "next/image";

const SectionCubiculo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIframe, setCurrentIframe] = useState<string | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleView3DClick = (srcIframe: string) => {
    setCurrentIframe(srcIframe);
    setShowModal(true);
  };

  return (
    <main className="w-full h-full flex flex-col space-y-6 md:space-y-10 justify-center items-center text-white">
      <div className="w-4/6 mt-5 md:w-5/6 flex justify-between">
        <h1 className="text-3xl md:text-6xl font-medium w-full text-center">
          Nuestros Diseños
        </h1>
        <Image
          src="/glamto12.png"
          width={80}
          quality={100}
          height={80}
          alt="gimnasios para gatos medellin"
          className="hidden md:block"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <Slider
          {...settings}
          className="w-9/12 md:w-8/12 shadow-xl border border-black md:border-none md:shadow-md p-5 shadow-black md:shadow-white"
        >
          {diseños.map((diseño: CardDiseñoProps) => (
            <CardDiseño
              dimensiones={diseño.dimensiones}
              key={diseño.id}
              id={diseño.id}
              src={diseño.src}
              srcIframe={diseño.srcIframe}
              p={diseño.p}
              h1={diseño.h1}
              onView3DClick={handleView3DClick}
            />
          ))}
        </Slider>
        <div className="w-full text-center flex flex-col space-y-5 my-5 md:my-0 md:space-y-10 md:w-3/12 md:items-end">
          <CustomButton
            title="¡Contáctanos!"
            containerStyles="btn-secondary"
            handleClick={() => ({})}
          />
          <Link href="/" className="" rel="noopener noreferrer">
            <button className="btn-secondary">¡Guardería!</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SectionCubiculo;
