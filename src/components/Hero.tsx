import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eggs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wider uppercase">
              Granja de Postura
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mt-2">
              Sítios Novos
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Do campo para a sua casa.
            </p>
            <p className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ovos de verdade.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Produtos frescos, nutritivos e de origem responsável, respeitando o bem-estar das aves e o meio ambiente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Conheça nossos produtos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 hover:border-primary"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
