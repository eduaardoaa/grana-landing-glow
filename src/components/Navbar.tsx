import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Granja Sítios Novos Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#sobre" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </a>
            <a 
              href="#valores" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Valores
            </a>
            <a 
              href="#produtos" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </a>
            <a 
              href="#instagram" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Instagram
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
