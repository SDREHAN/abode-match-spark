import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He's a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!",
    name: "Bernadette Hogan",
  },
  {
    text: "Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams.",
    name: "Tyleen",
  },
  {
    text: "Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself who may feel overwhelmed by the process. From the start, Mathew's problem-solving skills stood out. We are truly happy in our new home!",
    name: "Johanna Nieto",
  },
  {
    text: "Shirin was an invaluable resource, consultant, and general guide through the home-buying process from the initial search to closing. She immediately understood what we were looking for and helped tailor our search in the right direction.",
    name: "Matt Powers",
  },
  {
    text: "After 12 years in NYC, I have had my best broker experience by far with Fay Blau. Fay helped me find a beautiful apartment on the Upper West Side that fit my needs like a glove. She was an excellent communicator throughout the entire process.",
    name: "Giavridis Theodore",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-warm-bg">
      <div className="container max-w-4xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center mb-16">
          Don't Take Our Word for It.
        </h2>
        <div className="relative">
          <blockquote className="text-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 italic">
              "{testimonials[current].text}"
            </p>
            <footer className="mt-8 text-sm font-bold uppercase tracking-widest text-foreground">
              {testimonials[current].name}
            </footer>
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
