import { CardPaqueteProps, paquetes } from "../types";
import CardPaquete from "./CardPaquete";

export default function Section6() {
  return (
    <main className="w-5/6 lg:flex lg:flex-col lg:items-center lg:w-full space-y-10 md:space-y-6 lg:space-y-10 my-12 lg:my-0">
      <h2 className="text-4xl font-bold text-center  text-[#163020]">
        Nuestros paquetes
      </h2>
      <div className="flex flex-col lg:w-11/12 space-y-20 md:space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 items-center justify-around">
        {paquetes.map((paquete: CardPaqueteProps) => (
          <CardPaquete
            key={paquete.id}
            descripcion={paquete.descripcion}
            gatos={paquete.gatos}
            nombre={paquete.nombre}
            precio={paquete.precio}
            duracion={paquete.duracion}
            id={paquete.id}
            lista={paquete.lista}
            bgColor={paquete.bgColor}
            textColor={paquete.textColor}
            bgColor1={paquete.bgColor1}
          />
        ))}
      </div>
    </main>
  );
}
