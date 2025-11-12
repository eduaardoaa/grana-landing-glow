import { Card } from "@/components/ui/card";

const eggSizes = [
  {
    name: "Extra Grande",
    weight: "Acima de 63g",
    color: "from-secondary via-accent to-primary",
  },
  {
    name: "Grande",
    weight: "Entre 58g e 63g",
    color: "from-accent to-primary",
  },
  {
    name: "Médio",
    weight: "Entre 53g e 58g",
    color: "from-primary to-accent",
  },
  {
    name: "Pequeno",
    weight: "Entre 48g e 53g",
    color: "from-primary/80 to-accent/80",
  },
];

const EggClassification = () => {
  return (
    <section className="py-20 px-4" id="classificacao">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-lg">Classificação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tamanhos dos Ovos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos ovos de diferentes tamanhos para atender suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {eggSizes.map((size, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card relative overflow-hidden group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${size.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10 text-center space-y-4">
                {/* Egg Icon */}
                <div className="mx-auto w-24 h-32 relative">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${size.color} opacity-90 shadow-lg`}></div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {size.name}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {size.weight}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-muted">
            <p className="text-foreground">
              <strong>Todos os ovos</strong> são produzidos com o mesmo padrão de qualidade,
              independente do tamanho
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EggClassification;
