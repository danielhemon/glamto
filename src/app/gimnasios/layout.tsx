import type { Metadata } from "next";
import { montserrat } from "../../app/fonts";
import FloatingWhatsappButton from "../../../components/FloatWppBtn";

export const metadata: Metadata = {
  title: "Gimnasios para Gatos en Medellín - GLAMTO",
  description:
    "Descubre nuestros gimnasios para gatos en Medellín. En GLAMTO, ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino.",
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
        <link
          rel="canonical"
          href="https://www.glampingdelgato.com/gimnasios"
        />
        <title>Gimnasios para gatos en Medellín - GLAMTO</title>
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="PJ-wTLNGK9ayAA1KX28jS5rNwKSr6Vbezchsvny1FA8"
        />
        <meta
          name="description"
          content="Encuentra los mejores gimnasios para gatos en Medellín en GLAMTO. En GLAMTO, ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Gimnasios para Gatos en Medellín - GLAMTO"
        />
        <meta
          property="og:description"
          content="Descubre nuestros gimnasios para gatos en Medellín. En GLAMTO, ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino."
        />
        <meta
          property="og:url"
          content="https://www.glampingdelgato.com/gimnasios"
        />
        <meta property="og:site_name" content="GLAMTO" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
      </head>
      <body className={`${montserrat.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
