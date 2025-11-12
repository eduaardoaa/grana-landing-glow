import { Card } from "@/components/ui/card";
import { Leaf, Heart, Award, Truck } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Respeitamos o meio ambiente em todos os processos, garantindo práticas sustentáveis e responsáveis.",
  },
  {
    icon: Heart,
    title: "Bem-estar Animal",
    description: "Nossas aves são criadas em condições que respeitam seu bem-estar e comportamento natural.",
  },
  {
    icon: Award,
    title: "Qualidade Superior",
    description: "Produtos frescos e nutritivos, selecionados com rigor para garantir a melhor experiência.",
  },
  {
    icon: Truck,
    title: "Do Campo para Você",
    description: "Entrega rápida e eficiente, levando a frescura do campo diretamente para sua casa.",
  },
];

const Values = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-lg">Nossos valores</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que nos torna especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprometidos com a excelência em cada etapa da produção
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-primary rounded-xl">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
