import groveTrees from "@/assets/groves/grove-trees.jpg.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";

import capitolSteps from "@/assets/worwf/about/capitol-steps.jpg";
import { UnitedQuoteBand } from "@/components/united-quote-band";

import handshake from "@/assets/worwf/about/handshake.png";
import usa from "@/assets/worwf/about/usa.png";
import networking from "@/assets/worwf/about/networking.png";
import who1 from "@/assets/worwf/about/who-1.jpg";
import who2 from "@/assets/worwf/about/who-2.jpg";
import who3 from "@/assets/worwf/about/who-3.jpg";
import nfrwAward from "@/assets/worwf/about/nfrw-award.jpg";
// Coming-soon placeholder for unfilled portraits

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
  head: () => ({
    meta: [
      { title: "About WORWF | West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Discover WORWF's mission, history, community service, and award-winning club achievements in West Orange County.",
      },
      { property: "og:title", content: "About WORWF | West Orange Republican Women Federated" },
      { property: "og:description", content: "Discover WORWF's mission, history, community service, and award-winning club achievements in West Orange County." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const whoWeAreCards = [
  {
    title: "Connected Across the Nation",
    icon: handshake,
    text: "We are part of the largest grassroots Republican Women's organization that works together on the National, State, and Local level.",
    bg: who1,
  },
  {
    title: "Proudly American, Proudly Local",
    icon: usa,
    text: "We love America and we love our community.",
    bg: who2,
  },
  {
    title: "Women Leading with Purpose and Principle",
    icon: networking,
    text: "We are an organization of passionate women who work together to advance the cause of good government in our community, state, and nation.",
    bg: who3,
  },
];

const historyBlocks = [
  {
    h: "A Vision Born from Purpose",
    p: "After the election of President Barack Obama in 2008, two visionary women — Wendy West and Linda O'Keefe — recognized the urgent need for a Republican Women's Club in Southwest Orange County. With determination, they attended the nearest available club and were inspired to launch their own. Thus began the journey of West Orange Republican Women, Federated (WORWF).",
  },
  {
    h: "The Beginning",
    p: "In February 2009, the very first WORWF meeting took place at Seaside Bank on Conroy Road in Orlando, with 20 passionate women filling the room. The club grew quickly, and by the end of 2009, Marco Rubio—then running for U.S. Senate—spoke at a packed meeting. This was the first Republican Women's Club Rubio addressed, and it earned a feature in the Orlando Sentinel.",
  },
  {
    h: "Growth & Expansion",
    p: "From those early days, WORWF blossomed from 20 to over 135 active members, changing meeting venues to keep up with its expanding membership, including Stonewood Grill, Windermere Country Club, and Arnold Palmer's Bay Hill Club and Lodge. The club currently meets at West Orange Country Club, 3300 West Orange Country Club Drive, Winter Garden, FL 34787.",
  },
  {
    h: "Our Mission in Action",
    p: "Our members are the heart of WORWF: dynamic, involved, and passionate. We proudly volunteer for local/state campaigns; register voters, canvass neighborhoods, and phone bank; support legislation at every level; and donate to and support Edgewood Children's Ranch and adopt soldiers through Caring for America.",
  },
  {
    h: "Looking Ahead",
    p: "As we continue to grow, we remain committed to our values, our community, and our nation. Together, we will inspire, influence, and lead in West Orange and beyond.",
  },
];

function Marquee() {
  const words = Array.from({ length: 12 }, (_, i) => ["EDUCATE", "MOTIVATE", "ACTIVATE"][i % 3]);
  return (
    <div className="overflow-hidden bg-primary py-5">
      <div className="flex animate-[marquee_25s_linear_infinite] items-center gap-8 whitespace-nowrap md:animate-[marquee_40s_linear_infinite]">
        {words.concat(words).map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-2xl text-primary-foreground">★</span>
            <span
              className={`text-3xl font-extrabold tracking-wide md:text-4xl ${
                i % 2 === 1
                  ? "text-transparent [-webkit-text-stroke:1.5px_white]"
                  : "text-primary-foreground"
              }`}
            >
              {w}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = bgRef.current;
        if (!el) return;
        const parent = el.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const offset = rect.top * -0.4;
        el.style.transform = `translate3d(0, ${Math.max(-24, Math.min(24, offset))}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>

      {/* Page hero */}
      <section className="relative overflow-hidden text-primary-foreground min-h-[78vh] flex items-center py-28 md:py-40">
        <div
          ref={bgRef}
          aria-hidden
          className="people-background responsive-parallax absolute inset-0 z-0 will-change-transform"
          style={{
            backgroundImage: `url(${capitolSteps})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `linear-gradient(110deg, oklch(0.20 0.08 25 / 0.92) 0%, oklch(0.20 0.08 25 / 0.6) 45%, oklch(0.45 0.2 27 / 0.4) 100%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 z-[2] size-[640px] rounded-full border border-primary-foreground/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 z-[2] size-[480px] rounded-full border border-primary-foreground/10"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center w-full">
          <p className="text-sm font-semibold tracking-wide text-primary-foreground/80">
            Educate. Motivate. Activate.
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-8xl">
            About WORWF
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <h2 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Who We Are
            </h2>
            <div>
              <h3 className="text-xl font-bold text-foreground">Mission Statement</h3>
              <p className="mt-4 text-muted-foreground">
                To promote and inform the electorate through political education, to increase the
                effectiveness of women in the cause of good government through active participation,
                and to encourage active citizenship.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whoWeAreCards.map((c) => (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-secondary shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[3/2] bg-secondary">
                  <img src={c.bg} alt={c.title} loading="lazy" className="size-full object-contain" />
                  <div aria-hidden className="absolute inset-0 bg-secondary/25" />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center text-primary-foreground">
                  <span className="mb-6 flex size-28 items-center justify-center rounded-full border-2 border-white/80">
                    <img src={c.icon} alt="" className="size-20 object-contain brightness-0 invert" />
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-white">{c.title}</h3>
                  <p className="mt-3 text-sm text-white/90">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UnitedQuoteBand background="background" />

      <Marquee />

      {/* Our History */}
      <section
        className="relative bg-muted bg-cover bg-center py-20"
        style={{ backgroundImage: `linear-gradient(oklch(0.97 0.01 25 / 0.92), oklch(0.97 0.01 25 / 0.92)), url(${groveTrees.url})` }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Our Story
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-foreground md:text-5xl">Our History</h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="grid gap-6 sm:grid-cols-2">
              {historyBlocks.map((b) => (
                <article
                  key={b.h}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-foreground">{b.h}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{b.p}</p>
                </article>
              ))}
            </div>
            <figure className="lg:sticky lg:top-28">
              <div className="flex items-center justify-center border-0 border-none bg-transparent p-0 shadow-none">
                <img
                  src={worwfLogo}
                  alt="WORWF logo"
                  className="h-auto w-full max-w-xs object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm italic text-muted-foreground">
                West Orange Republican Women, Federated
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* NFRW Diamond Achievement Award */}
      <section className="relative overflow-hidden bg-muted py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <figure className="mx-auto w-full max-w-xs overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
            <img src={nfrwAward} alt="NFRW Diamond Achievement Award" loading="lazy" className="h-auto w-full object-contain" />
          </figure>
          <div>
            <span className="text-sm font-semibold tracking-wide text-secondary">
              CLUB ACHIEVEMENTS
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              NFRW Diamond Achievement Award
            </h2>
            <p className="mt-6 text-muted-foreground">
              Every two years at the biennial convention, the NFRW presents awards to recognize
              and honor excellence at the state and club levels. WORWF is a{" "}
              <strong>Diamond Achievement Award Recipient</strong> for demonstrating excellence in
              membership development, campaign activities, community relations, programs and club
              functions (2019, 2021, 2023).
            </p>
            <p className="mt-6 text-sm font-semibold text-secondary">
              FFRW Gold Award Recipient: 2022-2023, 2018-2019
            </p>
          </div>
        </div>
      </section>


      <Marquee />

      <section className="bg-background px-6 py-16 text-center">
        <Button asChild variant="cta" className="gap-2">
          <Link to="/leadership">View Leadership <ArrowRight className="size-4" /></Link>
        </Button>
      </section>
    </>
  );
}
