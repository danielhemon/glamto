"use client";

import { useRef } from "react";
import {
  Footer,
  Section1,
  Section2,
  Section3,
  Section5,
  Section6,
} from "../../components";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += event.deltaY;
    }
  };
  return (
    <main
      className="flex flex-col no-select  md:flex-row h-full md:h-screen flex-nowrap overflow-y-auto md:overflow-x-auto "
      ref={containerRef}
      onWheel={handleWheelScroll}
    >
      <div
        id="inicio"
        style={{ backgroundImage: 'url("/section1.svg")' }}
        className="bg-cover  bg-center flex-shrink-0 h-screen md:h-full md:w-screen flex items-center justify-center relative"
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/5" />
        <Section1 />

        {/* Contenido (texto y demás) */}
      </div>

      <div className="flex-shrink-0 md:w-screen flex items-center justify-around">
        <Section2 />
      </div>

      <div className="flex-shrink-0  md:w-screen bg-[#AEBD77] flex items-center justify-center">
        <Section3 />
      </div>

      <div className="flex-shrink-0 md:w-screen flex items-center justify-center">
        <Section5 />
      </div>

      <div className="flex-shrink-0 md:w-screen flex flex-col md:flex-row items-center justify-end ">
        <Section6 />
        <Footer />
      </div>
    </main>
  );
}
