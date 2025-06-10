import type { Metadata } from "next";
import WppClientWrapper from "../../../components/WppClientWrapper";
import { montserrat } from "../fonts";

export const metadata: Metadata = {
  title: "Gimnasios para Gatos en Medellín - GLAMTO",
  description:
    "Descubre nuestros gimnasios para gatos en Medellín. En GLAMTO, ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino.",
};

export default function GimnasiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${montserrat.className} antialiased relative`}>
      {children}
      <WppClientWrapper />
    </div>
  );
}
