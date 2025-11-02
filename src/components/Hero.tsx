import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";

const Hero = () => {
  const handleContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Serviços Elétricos Profissionais
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Soluções Elétricas Completas
            <br />
            <span className="text-primary">Com Segurança e Qualidade</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas em instalações elétricas residenciais, prediais e comerciais. 
            Atendimento profissional e orçamento sem compromisso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={handleContact} 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto min-w-[250px] text-base"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto min-w-[250px] text-base bg-background text-primary hover:bg-primary hover:text-primary-foreground border-2 border-primary"
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
