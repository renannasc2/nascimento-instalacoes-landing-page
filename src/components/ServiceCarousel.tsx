import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import quadroEletrico from "@/assets/quadro-eletrico.jpg";
import quadroTelefonia from "@/assets/quadro-telefonia.jpg";
import paineisSolares from "@/assets/paineis-solares.jpg";
import quadroBombas from "@/assets/quadro-bombas.jpg";
import automacaoResidencial from "@/assets/automacao-residencial.jpg";
import instalacoesGerais from "@/assets/instalacoes-gerais.jpg";

const services = [
  {
    image: quadroEletrico,
    title: "Quadros Elétricos",
    description: "Montagem, manutenção e instalação de quadros elétricos completos com toda segurança e qualidade.",
  },
  {
    image: quadroTelefonia,
    title: "Quadros de Telefonia",
    description: "Instalação e organização de quadros de telefonia para sistemas de comunicação eficientes.",
  },
  {
    image: paineisSolares,
    title: "Painéis Solares",
    description: "Instalação de painéis solares fotovoltaicos para economia de energia limpa e sustentável.",
  },
  {
    image: quadroBombas,
    title: "Quadros para Bombas",
    description: "Montagem de quadros de comando para bombas d'água com sistema de automação.",
  },
  {
    image: automacaoResidencial,
    title: "Automação Residencial",
    description: "Automação completa de casas residenciais com tecnologia inteligente e moderna.",
  },
  {
    image: instalacoesGerais,
    title: "Instalações em Geral",
    description: "Instalação de ventiladores, luminárias, lâmpadas, interruptores, tomadas, pontos para internet, Wi-Fi e racks.",
  },
];

const ServiceCarousel = () => {
  return (
    <section id="galeria" className="py-20 px-12 md:px-24 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos serviços especializados que oferecemos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 hover:border-primary transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-16" />
          <CarouselNext className="right-0 translate-x-16" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServiceCarousel;
