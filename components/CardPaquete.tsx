import { CardPaqueteProps } from "../types";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function CardPaquete({
  id,
  nombre,
  descripcion,
  gatos,
  precio,
  duracion,
  lista,
  bgColor,
  textColor,
  bgColor1,
}: CardPaqueteProps) {
  return (
    <div
      key={id}
      className={`max-w-md md:max-w-lg  drop-shadow-2xl ${bgColor1} pr-2 flex flex-col justify-center h-[480px] md:h-[320px] lg:h-[390px] items-center  rounded-lg shadow-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${textColor}`}
    >
      <div
        className={`max-w-md ${bgColor} md:max-w-lg lg:max-w-xl  bg-[#163020] px-5 flex justify-center mt-2 -mb-4 -ml-2.5 mr-0.5 h-[480px] md:h-[320px] lg:h-[390px] space-x-10 items-center rounded-lg shadow-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]`}
      >
        <div className="w-full space-y-8 md:space-y-2 lg:space-y-2">
          <div className="flex w-full flex-col md:flex-row justify-around ">
            <h3 className="text-3xl md:text-2xl text-center font-bold  ">
              {nombre}
            </h3>
          </div>
          <div className="flex w-full flex-row  justify-around ">
            <h4 className="text-xl text-center font-semibold tracking-tight ">
              {gatos}
            </h4>
            <h4 className="text-xl text-center font-semibold tracking-tight ">
              {precio}
            </h4>
          </div>
          <p className="font-normal text-center text-xs">{descripcion}</p>
          <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {lista.map((item: any, index: any) => (
              <li
                key={index}
                className="flex w-full text-sm font-medium justify-start items-center "
              >
                <FaArrowAltCircleRight className="mr-2 " />
                {item}
              </li>
            ))}
          </ul>
          <h5 className="text-center pt-4 md:pt-2 text-md font-semibold">
            {duracion}
          </h5>
        </div>
      </div>
    </div>
  );
}
