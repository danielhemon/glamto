import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
}


export interface CardServiceProps {
    src: string;
    p: string;
   
}

export interface CardPersonProps {
    src: string;
    p: string;
    h3: string;
   
}


export interface CardDiseñoProps {
  id: number;
  src: string;
  srcIframe: any;
  p: string;
  h1: string;
  dimensiones: any;
}

export const diseños: CardDiseñoProps[] = [
  {
    id: 1,
    h1: "Glamto 1",
    src: "/cubicculo1.webp",
    srcIframe: "https://sketchfab.com/models/7f9796a9ad5e4b02892d62d8ae0a3b9e/embed",
    p: "Este increíble espacio de juego y descanso está diseñado para aprovechar al máximo el espacio y brindar a los gatitos un lugar donde explorar, trepar y relajarse. 🏞️💤",
    dimensiones: ["Altura: 200cm", "Ancho: 120cm", "Profundidad: 60cm"],
  },
  {
    id: 2,
    h1: "Glamto 2",
    src: "/cubiculo2.3.webp",
    srcIframe: "https://sketchfab.com/models/fd2a9ca247ab4fe8937ac2fc20de59b6/embed",
    p: "Especialmente diseñado en madera fina para el deleite de tus adorables felinos. Con 3 rascadores este espacio combina elegancia y comodidad para que tus gatos disfruten al máximo.",
    dimensiones: ["Altura: 170cm", "Ancho: 130cm", "Profundidad: 60cm"],
  }
];

export interface Modal3DProps {
  isVisible?: any;
  onClose?: any;
  srcIframe: any;
  id?: any
  
}


export interface CardPaqueteProps {
  id: number;
  nombre: string;
  descripcion: string;
  gatos: string;
  precio: string;
  duracion: string;   
  lista: any;
  bgColor: string;
  bgColor1: string;
  textColor: string;
}

export const paquetes: CardPaqueteProps[] = [
    {
      id: 1,
      nombre: "Glamto",
      descripcion: "(Está sujeto a cambios fuera de Medellín)",
      gatos: "Gaticos: 1",
      precio: "$40.000",
      duracion: "Duración por visita: 20min - 30min",
      lista: ["Limpieza de arenero.", "Verificación de salud.", "Cambio y suministro de concentrado.", "Cambio de agua y limpieza de bandeja.", "Juego interactivo con tu bebé.."],
      bgColor: "bg-[#163020]",
      bgColor1: "bg-[#AEBD77]",
      textColor: "text-white",
    },
    {
      id: 2,
      nombre: "Glamto",
      descripcion: "(Está sujeto a cambios fuera de Medellín)",
      gatos: "Gaticos: 2",
      precio: "$60.000",
      duracion: "Duración por visita: 20min - 30min",
      lista: ["Limpieza de arenero.", "Verificación de salud.", "Cambio y suministro de concentrado.", "Cambio de agua y limpieza de bandeja.", "Juego interactivo con tu bebé.."],
      bgColor: "bg-[#163020]",
      bgColor1: "bg-[#AEBD77]",
      textColor: "text-white",
    },
    {
      id: 3,
      nombre: "Glamto",
      descripcion: "(Está sujeto a cambios fuera de Medellín)",
      gatos: "Gaticos: 3 a 5",
      precio: "$80.000",
      duracion: "Duración por visita: 20min - 30min",
      lista: ["Limpieza de arenero.", "Verificación de salud.", "Cambio y suministro de concentrado.", "Cambio de agua y limpieza de bandeja.", "Juego interactivo con tu bebé."],
      bgColor: "bg-[#163020]",
      bgColor1: "bg-[#AEBD77]",
      textColor: "text-white",
    },
    
  ];