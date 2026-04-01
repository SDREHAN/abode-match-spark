import whyImg1 from "@/assets/why-find-1.jpg";
import whyImg2 from "@/assets/why-find-2.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const WhyFindSection = () => {
  const { ref: revealRef, isVisible } = useScrollReveal();
  const tilt1 = useTilt<HTMLImageElement>({ max: 10, scale: 1.03 });
  const tilt2 = useTilt<HTMLImageElement>({ max: 10, scale: 1.03 });

  return (
    <section className="py-24 md:py-32 bg-warm-bg overflow-hidden">
      <div
        ref={revealRef}
        className="container max-w-6xl px-6 transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0) rotateX(0deg)" : "translateY(60px) rotateX(4deg)",
          perspective: "1000px",
        }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Why FIND
            </h2>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground">
              Your life's changing. Don't just find a place — find what's next. We help you move forward with clarity, confidence, and the right agent by your side.
            </p>
            <h3 className="mt-8 text-xl font-bold text-foreground">
              This isn't just about real estate.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              It's about identity. Progress. Getting unstuck. You're not just looking for a place. You're looking for alignment. That's what we help you find.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4" style={{ perspective: "800px" }}>
            <img
              ref={tilt1}
              src={whyImg1}
              alt="Couple receiving keys"
              className="rounded-2xl object-cover w-full h-72 shadow-xl"
              loading="lazy"
              width={600}
              height={800}
            />
            <img
              ref={tilt2}
              src={whyImg2}
              alt="Family moving"
              className="rounded-2xl object-cover w-full h-72 mt-8 shadow-xl"
              loading="lazy"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFindSection;
