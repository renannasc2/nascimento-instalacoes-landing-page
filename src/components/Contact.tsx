import { contact, phoneUrl, whatsappUrl } from "@/lib/contact";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const formatPhone = (value: string) => {
  // Remove tudo que não for número
  const numbers = value.replace(/\D/g, '');
  
  // Formata o número conforme vai digitando
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setFeedback("Por favor, preencha todos os campos.");
      return;
    }

    const message = `Olá! Meu nome é ${formData.name.trim()}.\n\nTelefone: ${formData.phone.replace(/\D/g, "")}\n\nMensagem: ${formData.message.trim()}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");

    setFeedback("Finalize o envio da sua mensagem no WhatsApp.");
    
  };

  return (
    <section id="contato" className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Solicite seu <span className="text-primary">Orçamento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado sem compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-3">Vamos conversar?</h3>
              <p className="text-muted-foreground mb-6">Envie uma mensagem ou ligue e conte o que você precisa.</p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full mt-3">
                <a href={phoneUrl}>
                  <Phone className="w-5 h-5" /> Ligar agora
                </a>
              </Button>
              <details className="mt-6">
                <summary className="cursor-pointer text-primary font-medium py-2">Prefere preparar uma mensagem?</summary>
                <p className="text-sm text-muted-foreground my-3">Preencha abaixo e finalize o envio no WhatsApp.</p>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">Nome Completo</label>
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="phone">Telefone / WhatsApp</label>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[(][0-9]{2}[)] [0-9]{4,5}-[0-9]{4}"
                      title="Informe um telefone com DDD, com 10 ou 11 dígitos."
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      maxLength={15}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 11);
                        setFormData({ ...formData, phone: formatPhone(value) });
                      }}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">Mensagem</label>
                    <Textarea
                      id="message"
                      placeholder="Descreva o serviço que você precisa..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5" />
                    Enviar WhatsApp
                  </Button>
                </form>
              </details>
              <p role="status" aria-live="polite" className="mt-3 text-sm text-muted-foreground">{feedback}</p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Atendemos Bauru e toda região</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Instagram</h3>
                  <a 
                    href={`https://instagram.com/${contact.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    @{contact.instagram}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ligações e WhatsApp</h3>
                  <a href={phoneUrl} className="text-muted-foreground hover:text-primary">{contact.displayPhone}</a>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                    <a href={phoneUrl} className="inline-flex items-center gap-1 text-primary hover:underline">
                      <Phone className="w-4 h-4" /> Ligar
                    </a>
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary break-all">{contact.email}</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
