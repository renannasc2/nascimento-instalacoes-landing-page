import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";

const WhatsAppButton = () => (
  <Button asChild className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 bg-[#25D366] hover:bg-[#20BA5A] text-white" size="icon">
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Contato via WhatsApp">
      <MessageCircle className="w-7 h-7" />
    </a>
  </Button>
);

export default WhatsAppButton;
