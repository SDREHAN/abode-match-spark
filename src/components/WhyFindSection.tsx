import whyImg1 from "@/assets/why-find-1.jpg";
import whyImg2 from "@/assets/why-find-2.jpg";

const WhyFindSection = () => {
  return (
    <section className="py-24 md:py-32 bg-warm-bg">
      <div className="container max-w-6xl px-6">
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
          <div className="grid grid-cols-2 gap-4">
            <img
              src={whyImg1}
              alt="Couple receiving keys"
              className="rounded-2xl object-cover w-full h-72"
              loading="lazy"
              width={600}
              height={800}
            />
            <img
              src={whyImg2}
              alt="Family moving"
              className="rounded-2xl object-cover w-full h-72 mt-8"
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
