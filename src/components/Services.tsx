import { Home, Building2, Store, Phone, Wrench, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residencial",
    description: "Instalações e manutenções elétricas completas para sua casa",
  },
  {
    icon: Building2,
    title: "Predial",
    description: "Projetos elétricos para prédios e condomínios",
  },
  {
    icon: Store,
    title: "Comercial",
    description: "Soluções elétricas para estabelecimentos comerciais",
  },
  {
    icon: Phone,
    title: "Telefonia",
    description: "Instalação e manutenção de sistemas de telefonia",
  },
  {
    icon: Wrench,
    title: "Manutenção em Geral",
    description: "Reparos e manutenções preventivas e corretivas",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4 text-secondary" />
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Soluções Completas em Instalações Elétricas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos todas as suas necessidades elétricas com profissionalismo e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
