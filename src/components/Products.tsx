import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/product-eggs.jpg";
import { Check } from "lucide-react";

const Products = () => {
  const benefits = [
    "Ovos frescos diretamente do campo",
    "100% naturais e nutritivos",
    "Produção sustentável",
    "Embalagens práticas e seguras",
    "Entrega garantida",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-warm">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-lg">Nossos produtos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ovos de verdade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade incomparável em cada ovo que produzimos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-card">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src={productImage} 
                    alt="Ovos Sítios Novos" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Ovos Caipiras Premium
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nossos ovos são produzidos com o máximo cuidado, garantindo frescor, 
                    sabor e todos os nutrientes que sua família precisa.
                  </p>
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-success/10 p-1">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Faça seu pedido
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
