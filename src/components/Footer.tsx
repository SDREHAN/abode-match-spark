import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaBg} alt="NYC skyline" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
            Find You. We'll Help You Get There.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-10 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/90 transition-all group"
          >
            Let's Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16">
        <div className="container max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">FIND</h3>
              <p className="text-sm text-primary-foreground/60">
                FIND Real Estate<br />
                Copyright © 2026
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
                Head Office
              </h4>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                5 West 37th Street, 12th Floor,<br />
                New York, NY 10018
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
                Contact
              </h4>
              <p className="text-sm text-primary-foreground/70">hello@findrealestate.com</p>
              <p className="text-sm text-primary-foreground/70 mt-1">+1 212 994 9965</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
                Links
              </h4>
              <div className="flex flex-col gap-2">
                {["Search", "Agents", "Join", "About Us"].map((link) => (
                  <a key={link} href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              {["Facebook", "Instagram", "Youtube", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
            <div className="flex gap-6">
              {["Terms", "Privacy Policy", "Fair Housing Notice"].map((s) => (
                <a key={s} href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
