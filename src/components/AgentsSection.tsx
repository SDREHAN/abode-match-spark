import agentsImg from "@/assets/agents-section.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const AgentsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const tiltRef = useTilt<HTMLImageElement>({ max: 6, scale: 1.02 });

  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground overflow-hidden">
      <div
        ref={ref}
        className="container max-w-6xl px-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.9s ease-out",
        }}
      >
        <div className="text-sm font-medium uppercase tracking-widest text-primary-foreground/60 mb-4">
          For Agents
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Don't Rent Your Career. Own It.
            </h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed text-lg">
              At FIND, our agents don't just work for the brand—they own a part of it. We give top performers real equity, so they're invested in more than just your transaction—they're invested in your outcome.
            </p>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed">
              You're not just here to close deals — you're building a career, a life, a legacy.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/90 transition-all hover:shadow-[0_20px_60px_-15px_hsl(var(--primary-foreground)/0.4)] hover:-translate-y-1"
            >
              Join The Movement
            </a>
          </div>
          <div style={{ perspective: "800px" }}>
            <img
              ref={tiltRef}
              src={agentsImg}
              alt="Real estate agents"
              className="rounded-2xl object-cover w-full h-[400px] shadow-2xl"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
