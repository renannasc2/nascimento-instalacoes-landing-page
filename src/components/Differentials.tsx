import { Clock, Shield, CheckCircle, MapPin, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentials = [
  {
    icon: Zap,
    title: "Orçamento Rápido",
    description: "Orçamento rápido e sem compromisso",
  },
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Atendimento emergencial 24h, fins de semana e feriados",
  },
  {
    icon: MapPin,
    title: "Toda Região",
    description: "Atendemos Bauru e região",
  },
  {
    icon: Award,
    title: "Profissional Qualificado",
    description: "Experiência em instalações e manutenção elétrica",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Trabalho com segurança e dentro das normas",
  },
  {
    icon: CheckCircle,
    title: "Satisfação Garantida",
    description: "Garantia de qualidade em todos os serviços",
  },
];

const Differentials = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Por que nos <span className="text-primary">Escolher</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiência, cuidado e atendimento próximo em cada serviço
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-4 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
