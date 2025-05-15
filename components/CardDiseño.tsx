"use client";

import React from "react";
import Image from "next/image";
import { CardDiseñoProps } from "../types";

interface CardDiseñoComponentProps extends CardDiseñoProps {
  onView3DClick: (srcIframe: string) => void;
}

const CardDiseño: React.FC<CardDiseñoComponentProps> = ({
  src,
  srcIframe,
  p,
  h1,
  dimensiones,
  onView3DClick,
}) => {
  return (
    <main className="w-full h-full flex  space-y-16 justify-center items-center flex-col text-white">
      <div className="w-full flex justify-center items-center">
        <div className="w-full text-center grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg"
              src={src}
              alt="gimnasios gatos"
              height="350"
              width="350"
            />
          </div>
          <div className="h-full flex flex-col md:mx-2 justify-between items-center">
            <div className="h-full flex flex-col space-y-5">
              <h1 className="text-3xl font-semibold">{h1}</h1>
              <p className="text-justify">{p}</p>
              <div className="text-left">
                <h2 className="text-xl font-medium">Dimensiones</h2>
                <ul className="list-disc list-inside ">
                  {dimensiones.map(
                    (dimensiones: any, index: React.Key | null | undefined) => (
                      <li key={index}>{dimensiones}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <button
              onClick={() => onView3DClick(srcIframe)}
              className="btn-secondary mt-5 md:mt-0 md:mb-2"
            >
              Verlo en 3D
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDiseño;
