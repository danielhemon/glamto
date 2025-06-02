import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = ({ message = "¡Hola! Quiero más información." }) => {
  const whatsappLink = `https://wa.me/message/4Y4RFTTWZYIFK1?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default FloatingWhatsappButton;
