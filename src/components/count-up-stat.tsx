import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface CountUpStatProps {
  icon: LucideIcon;
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function CountUpStat({
  icon: Icon,
  target,
  suffix = "",
  label,
  duration = 1200,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * target));
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                setDone(true);
                setTimeout(() => setDone(false), 700);
              }
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="bg-primary/40 px-5 py-5 text-center">
      <Icon
        className={`mx-auto size-5 text-accent transition-transform duration-300 ${
          done ? "scale-150" : "scale-100"
        }`}
      />
      <div
        className={`mt-2 font-serif text-2xl font-bold leading-none transition-transform duration-300 ${
          done ? "scale-110" : "scale-100"
        }`}
      >
        {value}
        {suffix}
      </div>
      <div className="mt-1.5 text-[11px] uppercase tracking-wider text-primary-foreground/70">
        {label}
      </div>
    </div>
  );
}
