import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Products from "@/components/Products";
import EggClassification from "@/components/EggClassification";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Products />
      <EggClassification />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
