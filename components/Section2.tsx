import { CardService } from ".";

export default function Section2() {
  return (
    <main className="w-full mt-8 mb-12 md:mt-0 md:mb-0 space-y-7 flex-col items-center flex justify-center">
      <div className="w-full flex-col mt-7 space-y-5 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-[#163020]">¿Qué es Glamto?</h2>
        <p className="text-lg w-3/4">
          Somos expertos en el cuidado de gatos y ofrecemos servicios de
          acompañamiento a domicilio para tu amigo felino. Entendemos el estrés
          que puede causar sacarlo de su entorno familiar, por eso nos
          encargamos de cuidarlo desde la comodidad de su hogar.
        </p>
      </div>
      <div className="w-11/12 space-y-10 flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row md:space-y-0 justify-around items-center">
        <CardService
          src="/arena.webp"
          p="Servicio de higiene y mantenimiento de la bandeja de arena para gatos."
        />
        <CardService
          src="/juego.webp"
          p="Ofrecemos momentos de juego enriquecedores y divertidos para tu gato."
        />
        <CardService
          src="/comida.webp"
          p="Servicio de suministro y cambio de concentrado."
        />
      </div>
    </main>
  );
}
