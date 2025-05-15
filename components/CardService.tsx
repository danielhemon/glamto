import { CardServiceProps } from "../types";
import Image from "next/image";

export default function CardService({ src, p }: CardServiceProps) {
  return (
    <div className="w-72 h-[380px] lg:h-[320px] bg-[#163020] shadow-xl border-t-2 border-b-2 rounded-2xl shadow-[#163020]">
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full h-5/6 relative">
          <Image
            className="object-cover w-full h-full rounded-t-2xl"
            src={src}
            alt="guarderia felina Medellin"
            layout="fill"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-1/4 px-4">
          <h1 className="text-base text-white font-medium text-center">{p}</h1>
        </div>
      </div>
    </div>
  );
}
