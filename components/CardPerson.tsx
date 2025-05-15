import Image from "next/image";
import { CardPersonProps } from "../types";

export default function CardPerson({ src, p, h3 }: CardPersonProps) {
  return (
    <div className="max-w-2xl md:max-w-3xl shadow-black pr-2 flex flex-col justify-center h-[630px] sm:h-[540px] md:h-[280px] lg:h-[360px]  items-center  rounded-lg s shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#AEBD77] bg-opacity-85  ">
      <div className="max-w-md  md:max-w-xl lg:max-w-md  xl:max-w-xl bg-[#163020] px-5 flex flex-col md:flex-row justify-center mt-2 -mb-4 -ml-2.5 mr-0.5 h-[700px] lg:h-[360px] md:h-[280px] md:space-x-10 items-center rounded-lg shadow-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div>
          <Image
            className="rounded-t-lg "
            src={src}
            alt="guarderia para gatos"
            height="180"
            width="180"
          />
        </div>
        <div className="w-5/6 space-y-5 py-4">
          <h3 className="text-2xl text-white text-center font-semibold tracking-tight text-[">
            {h3}
          </h3>
          <p className="font-normal text-lg text-white">{p}</p>
        </div>
      </div>
    </div>
  );
}
