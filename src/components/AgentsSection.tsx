import agentsImg from "@/assets/agents-section.jpg";

const AgentsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container max-w-6xl px-6">
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
              className="inline-flex items-center gap-2 mt-8 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/90 transition-all"
            >
              Join The Movement
            </a>
          </div>
          <div>
            <img
              src={agentsImg}
              alt="Real estate agents"
              className="rounded-2xl object-cover w-full h-[400px]"
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
