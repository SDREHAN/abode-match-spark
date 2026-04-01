import { useRef, useCallback, useEffect } from "react";

interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const { max = 8, scale = 1.02, speed = 400 } = options;
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * max;
      const rotateY = (x - 0.5) * max;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [max, scale]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, speed]);

  return ref;
}
