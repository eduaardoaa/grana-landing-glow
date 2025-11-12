import { Card } from "@/components/ui/card";
import chickensImage from "@/assets/chickens.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-warm" id="sobre">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={chickensImage} 
                alt="Galinhas felizes em ambiente natural" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-primary font-semibold text-lg">Sobre nós</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Compromisso com a qualidade
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A Granja Sítios Novos agradece a sua escolha e confiança em nossos ovos, 
              produzidos com todo o cuidado e dedicação para levar mais sabor e qualidade 
              à sua mesa.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso compromisso é garantir produtos frescos, nutritivos e de origem 
              responsável, respeitando o bem-estar das aves e o meio ambiente. Queremos 
              que cada refeição seja uma experiência especial, repleta de saúde e prazer.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Para aprimorar ainda mais sua satisfação, estamos sempre abertos a ouvir 
              suas sugestões e opiniões. Juntos, podemos continuar cultivando o melhor 
              da vida no campo para você e sua família.
            </p>

            <div className="pt-4">
              <Card className="p-6 bg-card border-primary/20">
                <p className="text-foreground font-medium italic">
                  "Cada ovo que produzimos carrega nossa dedicação em trazer o melhor 
                  do campo para sua casa."
                </p>
                <p className="text-muted-foreground mt-2">— Aristides Neto, Diretor e Presidente</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
