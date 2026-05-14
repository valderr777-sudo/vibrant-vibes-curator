import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import capitolSteps from "@/assets/worwf/about/capitol-steps.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import ffrwLogo from "@/assets/worwf/ffrw.png";
import nfrwLogo from "@/assets/worwf/nfrw.png";

import handshake from "@/assets/worwf/about/handshake.png";
import usa from "@/assets/worwf/about/usa.png";
import networking from "@/assets/worwf/about/networking.png";
import founders from "@/assets/worwf/about/founders.jpg";
import nfrwAward from "@/assets/worwf/about/nfrw-award.jpg";
import carenBell from "@/assets/worwf/about/caren-bell.jpg";
import theresaMillay from "@/assets/worwf/about/theresa-millay.jpg";
import christineHayden from "@/assets/worwf/about/christine-hayden.jpg";
import nancyBorkes from "@/assets/worwf/about/nancy-borkes.jpg";
import judyCollins from "@/assets/worwf/about/judy-collins.jpg";
import brendaKnowles from "@/assets/worwf/about/brenda-knowles.jpg";
import teresaSnipes from "@/assets/worwf/about/teresa-snipes.jpg";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
  head: () => ({
    meta: [
      { title: "About WORWF — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Learn about WORWF's mission, history, co-founders, leadership, and the executive committee guiding our grassroots Republican women's organization.",
      },
    ],
  }),
});

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" as const, active: true },
  { label: "Membership", to: "/membership" as const },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

const whoWeAreCards = [
  {
    title: "Connected Across the Nation",
    icon: handshake,
    text: "We are part of the largest grassroots Republican Women's organization that works together on the National, State, and Local level.",
    bg: groupImg,
  },
  {
    title: "Proudly American, Proudly Local",
    icon: usa,
    text: "We love America and we love our community.",
    bg: groupImg,
  },
  {
    title: "Women Leading with Purpose and Principle",
    icon: networking,
    text: "We are an organization of passionate women who work together to advance the cause of good government in our community, state, and nation.",
    bg: groupImg,
  },
];

const presidents = [
  {
    name: "Caren Bell",
    img: carenBell,
    title: "PRESIDENT 2025-2026",
    bio: "Caren Bell, our current President, was elected at the end of 2024 and has been a member of WORWF for over 8 years.",
    bio2:
      "Caren looks forward to helping WORWF continue to grow and impact our West Orange community. Join us as we turn Orange County RED!",
    email: "President@WORWF.org",
  },
  {
    name: "Teresa Snipes",
    img: teresaSnipes,
    title: "PAST PRESIDENT 2021-2024",
    bio: "Teresa Snipes guided the club through President Trump's re-election and continues to serve as a respected voice within WORWF.",
    bio2:
      "Her steady leadership and dedication helped WORWF flourish at Arnold Palmer's Bay Hill Club and Lodge.",
    email: "info@WORWF.org",
  },
];

const executive = [
  { name: "Caren Bell", role: "President", img: carenBell },
  { name: "Theresa Millay", role: "1st Vice President", img: theresaMillay },
  { name: "Christine Hayden", role: "2nd Vice President", img: christineHayden },
  { name: "Nancy Borkes", role: "Corresponding Secretary", img: nancyBorkes },
  { name: "Judy Collins", role: "Recording Secretary", img: judyCollins },
  { name: "Brenda Knowles", role: "Treasurer", img: brendaKnowles },
  { name: "Teresa Snipes", role: "Past President", img: teresaSnipes },
];

const standing = [
  { name: "Christine Hayden", role: "Membership" },
  { name: "Carol MacKeen", role: "Fundraising" },
  { name: "Nancy Borkes", role: "Public Relations" },
  { name: "JuDian Guimbellot", role: "Campaign" },
  { name: "Dayna Gaut", role: "Legislative" },
  { name: "Theresa Millay", role: "Programs" },
];

const special = [
  { name: "Judy Collins", role: "Americanism" },
  { name: "Rhonda Fontenault", role: "Caring for America" },
  { name: "Emmie Rein", role: "Hospitality" },
  { name: "Erika Benkovich", role: "Armed Services" },
  { name: "OPEN", role: "Caring for America Co-Chair" },
  { name: "OPEN", role: "Leadership" },
  { name: "Jennifer Hubbell", role: "Photographer" },
  { name: "Teresa Snipes", role: "Awards" },
  { name: "Doris Sheppard", role: "Education" },
  { name: "Rebecca Mellen", role: "Letter Writing" },
  { name: "Donna Brown", role: "Sunshine" },
  { name: "Rebecca Mellen", role: "Club Chaplain" },
  { name: "Nancy Borkes", role: "Historian" },
  { name: "Erika Benkovich", role: "Parliamentarian" },
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
    p: "From those early days, WORWF blossomed from 20 to over 135 active members, changing meeting venues to keep up with its expanding membership — including locations like Stonewood Grill and Windermere Country Club. In 2017, the club moved to West Orange Country Club, and in 2021, to its current home: Arnold Palmer's Bay Hill Club and Lodge, Orlando, FL.",
  },
  {
    h: "Leadership Legacy",
    p: "Wendy West – President (2008–2012) • Carolyn Sparks – President (2013–2016) • Rebecca Mellen – President (2017–2020), led the move to Bay Hill • Teresa Snipes – President (2021–2024), guided the club through President Trump's re-election • Caren Bell – Elected 2024, continues to lead with vision and energy.",
  },
  {
    h: "Our Mission in Action",
    p: "Our members are the heart of WORWF — dynamic, involved, and passionate. We proudly volunteer for local/state campaigns; register voters, canvas neighborhoods, and phone bank; support legislation at every level; and donate to and support Edgewood Children's Ranch and adopt soldiers through Caring for America.",
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
      <div className="flex animate-[marquee_40s_linear_infinite] items-center gap-8 whitespace-nowrap">
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
  const [presidentIdx, setPresidentIdx] = useState(0);
  const president = presidents[presidentIdx];

  return (
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>



      {/* Page hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full border border-primary-foreground/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 size-[480px] rounded-full border border-primary-foreground/10"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary-foreground/80">
              Educate. Motivate. Activate.
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              About WORWF
            </h1>
            <nav className="mt-6 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>{" "}
              / <span className="text-primary-foreground">About Us</span>
            </nav>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={worwfLogo} alt="WORWF crest" className="size-56 object-contain md:size-72" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <h2 className="text-4xl font-extrabold leading-tight text-primary md:text-5xl">
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
                className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, oklch(0.20 0.08 25 / 0.55), oklch(0.20 0.08 25 / 0.85)), url(${c.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "380px",
                }}
              >
                <div className="flex h-full flex-col items-center justify-end p-8 text-center text-primary-foreground">
                  <span className="mb-6 flex size-24 items-center justify-center rounded-full border-2 border-primary-foreground/80 bg-primary/30 backdrop-blur">
                    <img src={c.icon} alt="" className="size-12 object-contain" />
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm text-primary-foreground/90">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band + 3 logos */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold italic leading-snug text-primary md:text-4xl">
            "United together to create positive change. Supporting good government and constitutional
            rights."
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">– Women strengthening our community –</p>
        </div>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-12 px-6">
          <img src={worwfLogo} alt="WORWF" className="h-24 w-auto object-contain" />
          <img src={ffrwLogo} alt="FFRW" className="h-20 w-auto object-contain" />
          <img src={nfrwLogo} alt="NFRW" className="h-24 w-auto object-contain" />
        </div>
      </section>

      <Marquee />

      {/* Our History */}
      <section className="relative bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Our Story
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">Our History</h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="grid gap-6 sm:grid-cols-2">
              {historyBlocks.map((b) => (
                <article
                  key={b.h}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-primary">{b.h}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{b.p}</p>
                </article>
              ))}
            </div>
            <figure className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
                <img
                  src={founders}
                  alt="Co-Founders Linda O'Keefe and Wendy West"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm italic text-muted-foreground">
                Co-Founders Linda O'Keefe (left) and Wendy West (right)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold tracking-wide text-secondary">
              CO-FOUNDERS
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-primary md:text-5xl">
              Wendy West &amp; Linda O'Keefe
            </h2>
            <p className="mt-6 text-muted-foreground">
              <strong>Wendy West</strong> and <strong>Linda O'Keefe</strong> are the visionary women
              behind the founding of the West Orange Republican Women, Federated. In 2008, they
              recognized the need for a local network of strong, like-minded Republican women in
              Southwest Orange County — and took action.
            </p>
            <p className="mt-4 text-muted-foreground">
              Their leadership, courage, and commitment to conservative values laid the foundation
              for what WORWF has become today: a growing, dynamic, and influential club dedicated
              to civic engagement, community service, and Republican principles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-start">
            <figure className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
              <img src={nfrwAward} alt="NFRW Diamond Achievement Award" className="h-full w-full object-cover" />
            </figure>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary">NFRW Diamond Achievement Award</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Every two years at the biennial convention, the NFRW presents awards to recognize
                and honor excellence at the state and club levels. WORWF is a{" "}
                <strong>Diamond Achievement Award Recipient</strong> for demonstrating excellence in
                membership development, campaign activities, community relations, programs and club
                functions (2019, 2021, 2023).
              </p>
              <p className="mt-4 text-sm font-semibold text-secondary">
                FFRW Gold Award Recipient — 2022-2023, 2018-2019
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* President carousel */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-px h-12 bg-background"
          style={{ borderBottomLeftRadius: "50% 100%", borderBottomRightRadius: "50% 100%" }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold md:text-5xl">{president.title}</h2>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <img
                  src={president.img}
                  alt={president.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 -z-10 size-full rounded-2xl border-2 border-secondary"
              />
            </div>

            <div>
              <p>{president.bio}</p>
              <p className="mt-4 opacity-90">{president.bio2}</p>
              <h3 className="mt-8 text-2xl font-bold">{president.name}</h3>
              <p className="mt-1 text-sm">
                Email:{" "}
                <a href={`mailto:${president.email}`} className="font-semibold text-secondary">
                  {president.email}
                </a>
              </p>

              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={() =>
                    setPresidentIdx((i) => (i - 1 + presidents.length) % presidents.length)
                  }
                  aria-label="Previous"
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => setPresidentIdx((i) => (i + 1) % presidents.length)}
                  aria-label="Next"
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <ChevronRight className="size-5" />
                </button>
                <div className="ml-4 flex items-center gap-2">
                  {presidents.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPresidentIdx(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`size-2.5 rounded-full transition-colors ${
                        i === presidentIdx ? "bg-secondary" : "bg-primary-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Leadership
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">
              Executive Committee 2025-2026
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {executive.map((m) => (
              <article key={m.name} className="group text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-secondary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standing Committees */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-primary md:text-5xl">
              Standing Committees 2025-2026
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {standing.map((m) => (
              <article
                key={m.name + m.role}
                className="rounded-lg border-l-4 border-secondary bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <h3 className="text-lg font-bold text-primary">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-secondary">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Special Committees */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-primary md:text-5xl">
              Special Committees 2025-2026
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {special.map((m, i) => (
              <article
                key={i}
                className="rounded-lg border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <h3 className="text-base font-bold text-primary">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                  {m.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* Footer (matches home) */}
    </>
  );
}
