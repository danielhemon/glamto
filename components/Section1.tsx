import Link from "next/link";
import CustomButtom from "./CustomButtom";

export default function Section1() {
  return (
    <main className="w-full relative z-10 lg:w-3/4 h-full flex space-y-16  justify-center items-center lg:items-end flex-col text-white">
      <div className="w-4/6 md:w-3/6 space-y-10 md:space-y-6  -mt-20 md:-mt-0">
        <h1 className="text-6xl font-medium md:text-7xl text-center">GLAMTO</h1>
        <p className="text-xl font-semibold md:text-xl text-justify">
          Ofrecemos guardería para gatos a domicilio y nos especializamos en
          diseñar y personalizar gimnasios y espacios interiores para gatos.
          Proporcionamos un entorno seguro y entretenido para tus felinos,
          adaptado a tu hogar.
        </p>
      </div>
      <div className="w-full text-center justify-center flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 md:w-3/6">
        {/* <CustomButtom
          title="¡Contáctanos!"
          containerStyles="btn-secondary "
          handleClick={() => ({})}
        /> */}
        <Link href="/gimnasios">
          <button className="btn-secondary" type="button">
            ¡Gimnasios!
          </button>
        </Link>
      </div>
    </main>
  );
}
