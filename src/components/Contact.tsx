import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-lg">Entre em contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Fale conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para atender você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco para fazer seu pedido ou tirar suas dúvidas. 
                Estamos aqui para ajudar!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-soft transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">Entre em contato para saber mais</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contato@granjasitiosnovos.com.br</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-soft transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                    <p className="text-muted-foreground">Granja Sítios Novos</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(00) 00000-0000" 
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                type="submit"
              >
                Enviar mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
