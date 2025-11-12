const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Sítios Novos
            </h3>
            <p className="text-background/80">
              Granja de Postura<br />
              Ovos de verdade, do campo para sua casa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Links Rápidos</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contato</h4>
            <ul className="space-y-2 text-background/80">
              <li>contato@granjasitiosnovos.com.br</li>
              <li>www.granjasitiosnovos.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} Granja Sítios Novos. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Aristides Neto - Diretor e Presidente</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
