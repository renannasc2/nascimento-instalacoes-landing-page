import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5514997938562&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      size="icon"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppButton;
