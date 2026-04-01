import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFindSection from "@/components/WhyFindSection";
import StepsSection from "@/components/StepsSection";
import AgentsSection from "@/components/AgentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyFindSection />
      <StepsSection />
      <AgentsSection />
      <TestimonialsSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
