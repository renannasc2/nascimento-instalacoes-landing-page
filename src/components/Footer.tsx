import logo from "@/assets/logo-footer.png";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Nascimento Instalações Elétricas" className="h-12 mb-4" />
            <p className="text-background/80">
              Especialistas em instalações elétricas com profissionalismo e qualidade.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-background/80">
              <li>Residencial</li>
              <li>Predial</li>
              <li>Comercial</li>
              <li>Telefonia</li>
              <li>Manutenção em Geral</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-background/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bauru - SP
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://www.instagram.com/nascimentoinstalacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @nascimentoinstalacoes
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (14) 99793-8562
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                nascimentoinstalacoesbauru@gmail.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Nascimento Instalações Elétricas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
