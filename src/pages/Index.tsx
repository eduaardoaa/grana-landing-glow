import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
