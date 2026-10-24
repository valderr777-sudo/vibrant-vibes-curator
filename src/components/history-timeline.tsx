import { useEffect, useRef } from "react";

interface HistoryBlock {
  h: string;
  tag: string;
  p: string;
}

interface HistoryTimelineProps {
  blocks: HistoryBlock[];
  logo: string;
  logoCaption: string;
}

/**
 * Scroll-animated history timeline:
 * - the accent line grows with scroll progress through the list
 * - numbered badges pop in, text zooms in, when each row enters view
 * - the logo slides down from the end of the line and pops, caption fades in
 * Honors prefers-reduced-motion via CSS.
 */
export function HistoryTimeline({ blocks, logo, logoCaption }: HistoryTimelineProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  // Grow the line with scroll progress.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      const line = lineRef.current;
      if (!list || !line) return;
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when the list top reaches 80% viewport height, 1 when its bottom hits 60%.
      const start = vh * 0.8;
      const end = -rect.height + vh * 0.6;
      const raw = (start - rect.top) / (start - end);
      const progress = Math.max(0, Math.min(1, raw));
      line.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal rows and the logo when they enter the viewport.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const targets = Array.from(list.querySelectorAll<HTMLElement>("[data-tl-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((t) => t.classList.add("tl-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("tl-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ol ref={listRef} className="relative mx-auto mt-16 max-w-5xl">
        <span
          ref={lineRef}
          aria-hidden
          className="tl-line absolute bottom-0 left-5 top-0 w-px origin-top bg-accent md:left-1/2 md:-translate-x-1/2"
        />
        {blocks.map((b, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={b.h}
              data-tl-reveal
              className="tl-item relative mb-14 last:mb-0 md:grid md:grid-cols-2 md:gap-16"
            >
              <span
                aria-hidden
                className="tl-badge absolute left-5 top-1 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-accent-foreground shadow-[var(--shadow-elegant)] ring-8 ring-muted md:left-1/2"
              >
                {i + 1}
              </span>
              <div
                className={`tl-text pl-16 md:pl-0 ${left ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
              >
                <p className="text-sm font-bold uppercase tracking-widest text-primary">{b.tag}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl [text-wrap:balance]">
                  {b.h}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
                  {b.p}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div data-tl-reveal className="tl-logo-wrap mt-16 flex flex-col items-center">
        <img src={logo} alt="WORWF logo" className="tl-logo h-28 w-auto object-contain" loading="lazy" />
        <p className="tl-caption mt-3 text-sm italic text-muted-foreground">{logoCaption}</p>
      </div>
    </>
  );
}
