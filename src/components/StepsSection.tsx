import { ArrowRight } from "lucide-react";

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

const StepsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl px-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Real Estate,<br />
          <span className="text-muted-foreground">Rewired.</span>
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-8 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group"
        >
          Start Your Search
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors"
            >
              <span className="text-sm font-medium text-muted-foreground">{step.number}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
