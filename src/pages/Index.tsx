import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PortfolioGrid />
      <BeforeAfter />
      <Footer />
    </div>
  );
};

export default Index;
