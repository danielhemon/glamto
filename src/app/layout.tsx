import type { Metadata } from "next";

import "./globals.css";
import { montserrat } from "../app/fonts";
import FloatingWhatsappButton from "../../components/FloatWppBtn";

export const metadata: Metadata = {
  title: "GLAMTO",
  description: "Guardería para gatos a domicilio en Medellin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/glamto12.png" />
        <link rel="canonical" href="https://www.glampingdelgato.com/" />
        <title>GLAMTO - Guardería felina a domicilio</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Descubre los mejores gimnasios para gatos en Medellín con GLAMTO. Ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino. Además, contamos con un servicio de guardería para gatos a domicilio en Medellín,."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="guarderia para gatos, gatos medellin, gimnasios para gatos, gimnasios gatos medellin"
        />
        <meta
          property="og:title"
          content="Glamto - Alojamiento de lujo para gatos en Medellin"
        />
        <meta
          property="og:description"
          content="Glamto - Alojamiento de lujo para gatos en Medellín. Ofrecemos servicios de cuidado a domicilio para gatos."
        />
        <meta property="og:url" content="https://www.glampingdelgato.com/" />

        <meta property="og:site_name" content="Glamto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta
          name="google-site-verification"
          content="PJ-wTLNGK9ayAA1KX28jS5rNwKSr6Vbezchsvny1FA8"
        />
      </head>
      <body className={`${montserrat.className} antialiased relative`}>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
