import buyImg from "@/assets/service-buy.jpg";
import sellImg from "@/assets/service-sell.jpg";
import rentImg from "@/assets/service-rent.jpg";
import { ArrowRight } from "lucide-react";

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

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl px-6">
        <div className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Services
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16">
          How FIND <span className="text-muted-foreground">Can Help You</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-2 font-bold text-foreground text-sm group-hover:gap-3 transition-all">
                {s.title} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Our certified agents guide you through every stage of real estate with expert knowledge and reliable support.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 bg-foreground text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all group"
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
