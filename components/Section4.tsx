import CustomButtom from "./CustomButtom";

export default function Section4() {
  return (
    <main className="w-full space-y-12 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-5xl w-4/5 lg:w-3/5 text-white">
        Tu confianza es nuestra prioridad. Por eso, durante tu ausencia,
        contaremos con una cámara de vigilancia las 24 horas para mantenerte
        conectado y tranquilo.
      </h2>
      <div className="w-full text-center  md:w-3/6">
        <CustomButtom
          title="¡Escribenos!"
          containerStyles="btn-primary"
          handleClick={() => ({})}
        />
      </div>
    </main>
  );
}
