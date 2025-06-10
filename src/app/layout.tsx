import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "../app/fonts";
import WppClientWrapper from "../../components/WppClientWrapper";

export const metadata: Metadata = {
  title: "GLAMTO - Guardería felina a domicilio",
  description:
    "Descubre los mejores gimnasios para gatos en Medellín con GLAMTO. Ofrecemos espacios de juego y ejercicio diseñados específicamente para el bienestar de tu felino. Además, contamos con un servicio de guardería para gatos a domicilio en Medellín.",
  keywords: [
    "guarderia para gatos",
    "gatos medellin",
    "gimnasios para gatos",
    "gimnasios gatos medellin",
  ],
  icons: {
    icon: "/glamto12.png",
  },
  openGraph: {
    title: "Glamto - Alojamiento de lujo para gatos en Medellín",
    description:
      "Glamto - Alojamiento de lujo para gatos en Medellín. Ofrecemos servicios de cuidado a domicilio para gatos.",
    url: "https://www.glampingdelgato.com/",
    siteName: "Glamto",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.glampingdelgato.com/",
  },
  other: {
    "google-site-verification": "PJ-wTLNGK9ayAA1KX28jS5rNwKSr6Vbezchsvny1FA8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="image"
          href="/section1.svg"
          type="image/svg+xml"
        />
      </head>
      <body className={`${montserrat.className} antialiased relative`}>
        {children}
        <WppClientWrapper />
      </body>
    </html>
  );
}
