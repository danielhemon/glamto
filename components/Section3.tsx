import { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { TbNurse } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Section3() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <main className="flex mt-8 mb-12 md:mt-0 md:mb-0 space-y-10 md:space-y-5 lg:space-y-0 flex-col lg:flex-row items-center w-full md:w-5/6">
      <div title="" className="block sm:hidden">
        {showVideo ? (
          <ReactPlayer
            width={300}
            height={300}
            url="https://www.youtube.com/watch?v=SXopVL49VUc"
          />
        ) : (
          <div
            className="relative w-[300px] h-[300px] bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/glamto.png"
              alt="gimnasios gatos medellin"
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:block">
        {showVideo ? (
          <ReactPlayer
            width={440}
            height={325}
            url="https://www.youtube.com/watch?v=SXopVL49VUc"
          />
        ) : (
          <div
            className="relative w-[340px] h-[325px] bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/glamto.png"
              alt="Video placeholder"
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
        )}
      </div>
      <div className="space-y-8 w-full flex justify-center flex-col items-center lg:space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#163020]">
          ¿Por qué elegirnos?
        </h2>
        <ul className="w-5/6 md:w-3/4 text-[#163020] font-medium space-y-5">
          <li className="flex space-x-3">
            <div className="text-[25px] md:text-[34px] m-4">
              <FaCamera />
            </div>
            <p className="text-base md:text-lg">
              Para garantizar tu tranquilidad y la seguridad de tu gato,
              registraremos todo el servicio desde el inicio hasta el final.
            </p>
          </li>
          <li className="flex space-x-3">
            <div className="text-[25px] md:text-[34px] m-4">
              <TbNurse />
            </div>
            <p className="text-base md:text-lg">
              No solo nos enfocaremos en brindar el servicio básico, sino
              también en velar por el bienestar y la salud de tu gato.
            </p>
          </li>
          <li className="flex space-x-3">
            <div className="text-[25px] md:text-[34px] m-4">
              <FaHeart />
            </div>
            <p className="text-base md:text-lg">
              Para nosotros, tu gato es también un miembro de la familia, por
              eso siempre lo cuidaremos con amor y dedicación.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
