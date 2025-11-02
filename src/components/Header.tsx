import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handleScrollToTop}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Voltar ao topo"
          >
            <img src={logo} alt="Nascimento Instalações Elétricas" className="h-12 w-auto" />
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
            Serviços
          </a>
          <Button onClick={handleContact} variant="hero" size="default">
            Solicitar Orçamento
          </Button>
        </nav>
        <Button onClick={handleContact} className="md:hidden" variant="hero" size="sm">
          Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;
