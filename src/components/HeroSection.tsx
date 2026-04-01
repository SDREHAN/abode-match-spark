import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-house.jpg";
import { useParallax } from "@/hooks/use-parallax";

const HeroSection = () => {
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <section
      ref={parallaxRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury modern house at sunset"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: `translateY(${offset * 0.5}px) scale(1.1)` }}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content with 3D depth layers */}
      <div className="relative z-10 text-center px-4 -mt-20" style={{ transformStyle: "preserve-3d" }}>
        <h1
          className="text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-none text-foreground animate-fade-up"
          style={{ transform: `translateZ(60px) translateY(${offset * 0.1}px)` }}
        >
          Find What Moves You
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
          style={{ transform: `translateZ(30px) translateY(${offset * 0.05}px)`, animationDelay: "0.2s" }}
        >
          <span className="font-medium text-foreground">Expert agents. Real guidance.</span>{" "}
          A clear path to find what's next.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-10 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.4)] hover:-translate-y-1"
          style={{ transform: `translateZ(40px)` }}
        >
          Find Properties
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
