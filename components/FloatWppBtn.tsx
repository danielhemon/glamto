"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = ({
  message = "¡Hola! Quiero más información.",
}) => {
  const whatsappLink = `https://wa.me/message/4Y4RFTTWZYIFK1?text=${encodeURIComponent(
    message
  )}`;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-1">
      <div className="bg-white text-black text-sm px-3 py-1 rounded shadow-md font-medium">
        ¡Contáctanos!
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingWhatsappButton;
