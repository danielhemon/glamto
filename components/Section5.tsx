import Image from "next/image";
import { CardPerson } from ".";

export default function Section5() {
  return (
    <main className="flex flex-col space-y-16 md:space-y-6 lg:space-y-16 my-4 mb-20 md:mb-0 lg:my-0 justify-center w-full items-center">
      <h2 className="text-4xl font-bold text-[#163020]">¿Quienes somos?</h2>
      <div className="flex flex-col lg:flex-row space-y-14 md:space-y-10 lg:space-y-0 w-5/6   justify-center items-center  lg:w-full lg:justify-around">
        <CardPerson
          src="/jarry.webp"
          p=" Soy medico veterinario y amante de los animales. Me especializo en
            medicina general y tengo una pasión particular por los gatos. Estoy
            comprometido con proporcionar cuidados completos a tus compañeros felinos."
          h3="Mateo Florez"
        />
      </div>
    </main>
  );
}
