import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury modern house at sunset"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 -mt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-none text-foreground animate-fade-up">
          Find What Moves You
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
          <span className="font-medium text-foreground">Expert agents. Real guidance.</span>{" "}
          A clear path to find what's next.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-10 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group"
        >
          Find Properties
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
