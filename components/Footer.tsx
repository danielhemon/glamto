import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="md:h-full py-3 md:w-24 w-5/6 h-full justify-around items-center bg-black text-white flex md:flex-col">
      <Image
        src="/glamto12.png"
        width={70}
        quality={100}
        height={70}
        alt="cuidado para gatos"
        className="hidden md:block"
      />
      <div className="flex md:space-y-3 space-x-6 md:space-x-2 lg:space-x-0 mx-3  flex-row md:flex-col items-center justify-around">
        <Link href="https://www.instagram.com/glamto_/">
          <Image
            src="/instagram.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="Gimnasios para gatos"
          />
        </Link>
        <Link href="https://wa.me/message/4Y4RFTTWZYIFK1">
          <Image
            src="/whatsapp.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="guarderia de gatos en medellin"
          />
        </Link>
        <Link href="https://www.tiktok.com/@glamto6">
          <Image
            src="/tiktok.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="guarderia a domicilio para gatos"
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UCKTVjyWmiGCtvuxaJMM88Gw">
          <Image
            src="/youtube3.webp"
            className="hover:scale-105"
            width={45}
            height={45}
            alt="gimnasios para gatos en medellin"
          />
        </Link>
      </div>
      <a
        className="w-full hidden md:flex justify-center items-center"
        href="#inicio"
      >
        <FaCircleArrowLeft className="text-3xl hover:scale-110 text-[#AEBD77]" />
      </a>
    </div>
  );
}
