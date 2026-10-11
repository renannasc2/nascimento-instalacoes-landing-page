import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import fotoSobre from "@/assets/foto-sobre.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-14 px-4 md:py-20 bg-background">
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
              <div className="relative w-full lg:w-auto lg:min-w-[300px] lg:max-w-[400px] aspect-[4/3] lg:aspect-[9/16] overflow-hidden bg-muted">
                <img 
                  width={311}
                  height={743}
                  loading="lazy"
                  decoding="async"
                  src={fotoSobre} 
                  alt="Isaias Nascimento - Fundador" 
                  className="w-full h-full object-cover object-center" 
                />
                
                {/* Blur na lateral direita da foto - efeito de transição suave */}
                <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none lg:block hidden" />
              </div>

              {/* Texto da História */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-6 bg-background">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Isaias Nascimento
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Sou Isaias Nascimento. Meu gosto pela elétrica começou aos oito anos, quando,
                    nas horas de folga, eu acompanhava meu irmão mais velho no trabalho. Com meus
                    irmãos, fui aprendendo e descobrindo uma vocação que me acompanha
                    até hoje.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Aos 12 anos, comecei a trabalhar em uma vidraçaria. Depois, passei por um
                    escritório de contabilidade e por um supermercado. Mas a elétrica sempre fez
                    parte da minha vida. Peguei gosto pelo ofício e nunca mais saí.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Hoje, com <strong className="text-foreground">mais de 40 anos de experiência</strong>,
                    levo esse cuidado para cada serviço. Meu compromisso é atender as pessoas com
                    respeito e trabalhar com qualidade e segurança.
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

