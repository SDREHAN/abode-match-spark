import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Talk to a Real Human",
    desc: "We match you with an expert who actually listens.",
  },
  {
    number: "02",
    title: "Get Clarity",
    desc: "We define what you really need, not just what's available.",
  },
  {
    number: "03",
    title: "Move Forward",
    desc: "We find what fits — and make it happen.",
  },
];

const StepCard = ({ step, delay }: { step: typeof steps[0]; delay: number }) => {
  const tiltRef = useTilt<HTMLDivElement>({ max: 12, scale: 1.04 });
  const { ref: revealRef, isVisible } = useScrollReveal(0.2);

  return (
    <div ref={revealRef}>
      <div
        ref={tiltRef}
        className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors backdrop-blur-sm hover:shadow-[0_25px_50px_-12px_hsl(var(--foreground)/0.1)]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 0.6s ${delay}s, transform 0.6s ${delay}s`,
        }}
      >
        <span className="text-sm font-medium text-muted-foreground" style={{ transform: "translateZ(20px)", display: "block" }}>{step.number}</span>
        <h3 className="mt-4 text-xl font-bold text-foreground" style={{ transform: "translateZ(30px)" }}>{step.title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed" style={{ transform: "translateZ(15px)" }}>{step.desc}</p>
      </div>
    </div>
  );
};

const StepsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl px-6">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Real Estate,<br />
            <span className="text-muted-foreground">Rewired.</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.4)] hover:-translate-y-1"
          >
            Start Your Search
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
