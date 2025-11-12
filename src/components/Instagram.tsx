import { Card } from "@/components/ui/card";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Instagram = () => {
  // Placeholder posts - em produção, estes seriam carregados via API do Instagram
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1582722872445-44dc1f3cbedb?w=400&h=400&fit=crop",
      caption: "Ovos fresquinhos saindo da granja! 🥚✨",
      likes: 245,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=400&fit=crop",
      caption: "Nossas galinhas felizes em ambiente natural 🐔💚",
      likes: 312,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=400&h=400&fit=crop",
      caption: "Qualidade que você pode ver e sentir! 🌾",
      likes: 189,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400&h=400&fit=crop",
      caption: "Do campo direto para sua mesa! 🏡❤️",
      likes: 276,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-warm" id="instagram">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold text-lg">Siga-nos no Instagram</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            @granjasitiosnovos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nosso dia a dia e fique por dentro das novidades
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {instagramPosts.map((post) => (
            <Card 
              key={post.id}
              className="group relative overflow-hidden aspect-square cursor-pointer hover:shadow-glow transition-all duration-300"
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-background text-sm line-clamp-2 mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-2 text-background">
                  <InstagramIcon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{post.likes} curtidas</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            className="gap-2"
            asChild
          >
            <a 
              href="https://www.instagram.com/granjasitiosnovos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-5 h-5" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Info Card */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-6 bg-card text-center">
            <p className="text-muted-foreground">
              Marque <strong className="text-primary">@granjasitiosnovos</strong> nas suas receitas 
              e apareça em nosso Instagram! Queremos ver como você usa nossos ovos! 🍳
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
