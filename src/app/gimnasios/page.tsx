import React from "react";
import SectionCubiculo from "../../../components/SectionCubiculo";

export default function Gimnasios() {
  return (
    <main className="flex no-select  flex-col md:flex-row h-full md:h-screen flex-nowrap overflow-y-auto md:overflow-x-auto">
      <div
        id="inicio"
        style={{ backgroundImage: 'url("/layout2.svg")' }}
        className="bg-cover flex-shrink-0 h-full md:w-screen flex items-center justify-center"
      >
        <SectionCubiculo />
      </div>
    </main>
  );
}
