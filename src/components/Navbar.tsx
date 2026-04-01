import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["Search", "Agents", "Join", "Paperwork", "Resources", "About"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        backgroundColor: scrolled ? "hsl(var(--background) / 0.8)" : "transparent",
        boxShadow: scrolled ? "0 4px 30px hsl(var(--foreground) / 0.06)" : "none",
      }}
    >
      <a href="/" className="text-2xl font-bold tracking-tight text-foreground hover:scale-105 transition-transform">
        F<span className="inline-block -mx-0.5">I</span>ND
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="bg-foreground text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
      >
        Sign In
      </a>
    </nav>
  );
};

export default Navbar;
