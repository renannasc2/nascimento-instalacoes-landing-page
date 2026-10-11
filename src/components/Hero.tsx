import { whatsappUrl } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Serviços Elétricos Profissionais
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Eletricista em Bauru
            <br />
            <span className="text-primary">e região</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Instalações e manutenção elétrica para casas, prédios e comércios.
            Fale com Isaias Nascimento e peça um orçamento sem compromisso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto h-auto min-h-11 px-4 py-3 whitespace-normal text-base"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Pedir orçamento no WhatsApp
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto h-auto min-h-11 px-4 py-3 whitespace-normal text-base bg-background text-primary hover:bg-primary hover:text-primary-foreground border-2 border-primary"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
