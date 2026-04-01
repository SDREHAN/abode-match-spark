import { ArrowRight } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const posts = [
  {
    date: "2026-02-23",
    title: "5 Cozy Ways to Spend a Snow Day at Home",
    desc: "When the city slows down, lean in. Five cozy ways to make the most of a snow day in NYC.",
  },
  {
    date: "2026-02-02",
    title: "January 2026 NYC Market Update",
    desc: "Inventory is up across NYC to start 2026. See how Manhattan, Brooklyn, and Queens are shaping up heading into spring.",
  },
  {
    date: "2025-12-25",
    title: "The New Year's Key: Why January is a Smart Time to Buy",
    desc: "Forget the spring market. The holidays clear the way for serious buyers. Discover the unique advantages of house hunting in January.",
  },
];

const BlogCard = ({ post, delay }: { post: typeof posts[0]; delay: number }) => {
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.02 });
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) rotateX(0deg)" : "translateY(40px) rotateX(6deg)",
        transition: `all 0.7s ${delay}s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      <article ref={tiltRef} className="group cursor-pointer">
        <div className="bg-secondary rounded-2xl h-48 mb-5 shadow-md group-hover:shadow-xl transition-shadow duration-300" />
        <time className="text-xs text-muted-foreground">{post.date}</time>
        <h3 className="mt-2 text-lg font-bold text-foreground group-hover:text-foreground/70 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.desc}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
          Read More <ArrowRight className="w-3 h-3" />
        </span>
      </article>
    </div>
  );
};

const BlogSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-warm-bg overflow-hidden">
      <div className="container max-w-6xl px-6">
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Blog & <span className="text-muted-foreground">Resources</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              See how we've helped clients achieve their real estate dreams, one successful move at a time.
            </p>
          </div>
          <a href="#" className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors">
            Visit Our Blog
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
