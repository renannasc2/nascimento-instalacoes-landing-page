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
    description: "Atendemos Bauru e toda região de SP",
  },
  {
    icon: Award,
    title: "Profissional Qualificado",
    description: "Equipe técnica qualificada e experiente",
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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Por que nos <span className="text-primary">Escolher</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem da Nascimento Instalações a melhor escolha para seus projetos elétricos
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
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
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
