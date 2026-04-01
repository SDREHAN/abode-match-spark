import { ArrowRight } from "lucide-react";

const navItems = ["Search", "Agents", "Join", "Paperwork", "Resources", "About"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      <a href="/" className="text-2xl font-bold tracking-tight text-foreground">
        F<span className="inline-block -mx-0.5">I</span>ND
      </a>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a
        href="#"
        className="bg-foreground text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
      >
        Sign In
      </a>
    </nav>
  );
};

export default Navbar;
