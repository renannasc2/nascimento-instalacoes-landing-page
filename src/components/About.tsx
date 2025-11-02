import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import fotoSobre from "@/assets/foto-sobre.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            <User className="w-4 h-4 text-secondary" />
            Nossa História
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Sobre a <span className="text-primary">Nascimento Instalações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a trajetória da nossa empresa e do nosso fundador
          </p>
        </div>

        <Card className="border-2 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0">
              {/* Foto do Fundador */}
              <div className="relative w-full lg:w-auto lg:min-w-[300px] lg:max-w-[400px] aspect-[9/16] lg:aspect-[9/16] overflow-hidden bg-muted">
                <img 
                  src={fotoSobre} 
                  alt="Isaias Nascimento - Fundador" 
                  className="w-full h-full object-cover object-center" 
                />
                
                {/* Blur na lateral direita da foto - efeito de transição suave */}
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none lg:block hidden" />
              </div>

              {/* Texto da História */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-background">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Isaias Nascimento
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Eu sou Isaias Nascimento. Sempre fui muito empenhado em trabalhar. Como antigamente, 
                    a gente começava cedo para ajudar em casa, pois éramos muitos irmãos.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Minha jornada começou na colheita de café, passei por supermercado e trabalhei em 
                    feiras livres. Foi na feira que comecei a entrar para o mundo das obras, atuando como 
                    pintor, pedreiro e marceneiro.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Hoje, com <strong className="text-foreground">mais de 40 anos de experiência</strong>, 
                    presto serviços em todas as áreas para casa. Adquiri um conhecimento amplo, mas meu 
                    foco principal é a elétrica. Além do serviço técnico, meu foco está nas pessoas: meu 
                    objetivo é sempre prestar um serviço digno, com qualidade e segurança.
                  </p>
                </div>

                {/* Informações adicionais */}
                <div className="pt-6 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Tempo de Experiência</p>
                      <p className="text-sm text-muted-foreground">Mais de 40 anos</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Especialização</p>
                      <p className="text-sm text-muted-foreground">Instalações Elétricas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

