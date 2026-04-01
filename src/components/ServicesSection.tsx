import buyImg from "@/assets/service-buy.jpg";
import sellImg from "@/assets/service-sell.jpg";
import rentImg from "@/assets/service-rent.jpg";
import { ArrowRight } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "Buy",
    desc: "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times.",
    img: buyImg,
  },
  {
    title: "Sell",
    desc: "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
    img: sellImg,
  },
  {
    title: "Rent",
    desc: "Access hidden rentals before they hit the market through agents who know every landlord in town. Decades of NYC experience unlock the best deals.",
    img: rentImg,
  },
];

const ServiceCard = ({ service, delay }: { service: typeof services[0]; delay: number }) => {
  const tiltRef = useTilt<HTMLDivElement>({ max: 10, scale: 1.03 });
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) rotateY(0deg)" : "translateY(50px) rotateY(-5deg)",
        transition: `all 0.8s ${delay}s cubic-bezier(0.16, 1, 0.3, 1)`,
        perspective: "800px",
      }}
    >
      <div ref={tiltRef} className="group cursor-pointer">
        <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>
        <p className="mt-5 text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
        <div className="mt-4 flex items-center gap-2 font-bold text-foreground text-sm group-hover:gap-3 transition-all">
          {service.title} <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container max-w-6xl px-6">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16">
            How FIND <span className="text-muted-foreground">Can Help You</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.12} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Our certified agents guide you through every stage of real estate with expert knowledge and reliable support.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group hover:shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.4)] hover:-translate-y-1"
          >
            Get Started with FIND
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
