import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroFlag from "@/assets/hero-flag.jpg";
import heroVideo from "@/assets/worwf/hero-bg.mp4";
import worwfLogo from "@/assets/worwf/worwf-logo.png";

import ffrwLogo from "@/assets/worwf/ffrw.png";
import nfrwLogo from "@/assets/worwf/nfrw.png";
import sliderCapitol from "@/assets/worwf/slider/capitol.jpg";
import sliderLegislative from "@/assets/worwf/slider/legislative.jpg";
import sliderExec from "@/assets/worwf/slider/exec.jpg";
import sliderBarbara from "@/assets/worwf/slider/barbara.jpg";
import sliderAwards from "@/assets/worwf/slider/awards.jpg";
import sliderConvention from "@/assets/worwf/slider/convention.jpg";
import speakerMessina from "@/assets/worwf/events/messina.jpg";
import speakerIngoglia from "@/assets/worwf/events/ingoglia.jpg";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import motivatesBg from "@/assets/worwf/motivates-bg.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MapPin, Calendar, ArrowRight, Facebook, ChevronUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "West Orange Republican Women Federated | Educate. Motivate. Activate." },
      {
        name: "description",
        content:
          "WORWF unites women to create positive change, support good government, and uphold constitutional rights in West Orange County, FL.",
      },
    ],
  }),
});

const navLinks: { label: string; to: "/" | "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Membership", to: "/membership" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact-us" },
];

const motivations = [
  "Grassroots advocacy and voter registration",
  "Supporting Republican candidates through campaigns",
  "Legislative engagement with elected officials",
  "Promoting conservative values and constitutional rights",
  "Monthly educational meetings with guest speakers",
  "Networking opportunities for like-minded individuals",
  "Community service through charitable initiatives",
  "Encouraging active participation of women in politics",
];

const faqs = [
  { q: "What is WORWF?", a: "WORWF stands for West Orange Republican Women Federated. We are a group of passionate women dedicated to advancing the cause of good government in our community, state, and nation." },
  { q: "Who can join West Orange Republican Women Federated?", a: "Membership is open to women who support the principles and objectives of the Republican Party. We welcome new members who are eager to make a positive impact in our community." },
  { q: "How can I become a member?", a: "To join, please visit our Contact Us page and send us an email expressing your interest. We'll provide you with all the necessary information to get started." },
  { q: "What activities does WORWF engage in?", a: "Our organization participates in various activities, including hosting monthly luncheons, organizing community events, supporting local candidates, and promoting civic engagement through education and advocacy." },
  { q: "How can I stay informed about upcoming events?", a: "We regularly update our members and the public about upcoming events through our website and social media channels. Be sure to check our homepage for the latest news and event announcements." },
  { q: "Can I attend a meeting before deciding to join?", a: "Absolutely! We encourage prospective members to attend one of our meetings or events to learn more about our organization and meet our members." },
  { q: "How can I contact WORWF for more information?", a: "For any inquiries or additional information, please reach out to us via our Contact Us page. We're happy to answer any questions you may have." },
];

function Marquee() {
  // Alternating: solid, outlined, solid, outlined...
  const words = ["EDUCATE", "MOTIVATE", "ACTIVATE", "EDUCATE", "MOTIVATE", "ACTIVATE", "EDUCATE", "MOTIVATE", "ACTIVATE", "EDUCATE", "MOTIVATE", "ACTIVATE"];
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

const sliderImages = [
  { src: sliderCapitol, alt: "2023 Spring FFRW Conference - Steps of Capitol" },
  { src: sliderLegislative, alt: "2024 Legislative Day Tallahassee" },
  { src: sliderExec, alt: "2023 Exec Committee with Gordon Chang" },
  { src: sliderBarbara, alt: "2023 FFRW Conference with Barbara Price" },
  { src: sliderAwards, alt: "2023 FFRW Convention Presidential Awards" },
  { src: sliderConvention, alt: "2023 FFRW Convention" },
];

function ImageSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % sliderImages.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
      {sliderImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function CheckBadge() {
  return (
    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="size-3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function Index() {
  const [form, setForm] = useState({ first: "", last: "", phone: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" /> info@worwf.org
          </a>
          <p className="hidden font-semibold tracking-wide md:block">
            Educate. Motivate. Activate.
          </p>
          <a href="#membership" className="hidden text-sm font-medium hover:text-secondary md:block">
            Become a Member
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="#" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-16 object-contain" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`relative text-[15px] font-medium transition-colors hover:text-secondary ${
                  l.active ? "text-secondary" : "text-foreground"
                }`}
              >
                {l.label}
                {l.caret && <span className="ml-1">▾</span>}
                {l.active && (
                  <span className="absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-secondary" />
                )}
              </Link>
            ))}
            <div className="group relative">
              <button type="button" className="relative inline-flex items-center text-[15px] font-medium text-foreground transition-colors hover:text-secondary">
                Sponsors<span className="ml-1">▾</span>
              </button>
              <div className="absolute left-0 top-full z-50 hidden pt-3 group-hover:block">
                <div className="min-w-[210px] rounded-md border border-border bg-background py-2 shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Business Sponsors</a>
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Member Businesses</a>
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Candidate Sponsors</a>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-2">

            <Button asChild variant="outline" className="rounded-md border-2 border-accent bg-transparent px-6 font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground">

              <Link to="/events">EVENTS</Link>

            </Button>

            <Button variant="cta" className="rounded-md px-6 font-bold tracking-wider">DONATE</Button>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <video
          src={heroVideo}
          poster={heroFlag}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(110deg, oklch(0.20 0.08 25 / 0.92) 0%, oklch(0.20 0.08 25 / 0.6) 45%, oklch(0.45 0.2 27 / 0.4) 100%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="text-sm text-primary-foreground/90">— Women strengthening our community</p>
          <h1 className="mt-5 whitespace-nowrap text-xl font-bold leading-[1.1] text-primary-foreground sm:text-2xl md:text-3xl lg:text-5xl">
            West Orange Republican Women Federated
          </h1>
          <p className="mt-6 max-w-xl text-primary-foreground/90">
            United together to create positive change. Supporting good government and constitutional
            rights. Actively working for the good of our country.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button variant="cta" className="rounded-md px-6 font-bold tracking-wider">
              BECOME A MEMBER
            </Button>
            <button className="inline-flex h-9 items-center justify-center rounded-md border-2 border-primary-foreground bg-transparent px-6 text-sm font-bold tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary">
              DONATE US
            </button>
          </div>
        </div>
      </section>

      {/* Quote + 3 logos */}
      <section className="relative overflow-hidden bg-muted py-20">
        <div
          className="pointer-events-none absolute right-10 top-10 size-72 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.45 0.2 27) 0%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold italic leading-snug text-foreground md:text-4xl">
            "United together to create positive change. Supporting good government and constitutional
            rights."
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">– Women strengthening our community –</p>
        </div>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-12 px-6">
          <img src={worwfLogo} alt="WORWF" className="h-24 w-auto object-contain" />
          <a href="https://www.facebook.com/FFRWomen/" target="_blank" rel="noopener noreferrer">
            <img src={ffrwLogo} alt="Florida Federation of Republican Women" className="h-20 w-auto object-contain transition-opacity hover:opacity-80" />
          </a>
          <a href="https://www.nfrw.org/" target="_blank" rel="noopener noreferrer">
            <img src={nfrwLogo} alt="National Federation of Republican Women" className="h-24 w-auto object-contain transition-opacity hover:opacity-80" />
          </a>
        </div>
      </section>

      <Marquee />

      {/* What motivates us */}
      <section
        className="relative overflow-hidden bg-no-repeat py-20"
        style={{ backgroundImage: `url(${motivatesBg})`, backgroundSize: "100% 100%", backgroundPosition: "center" }}
      >
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              What Motivates Us
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-4xl">
              We love America and our Constitution - and take responsibility for both!
            </h2>
            <p className="mt-6 max-w-3xl text-muted-foreground">
              We advance the voice of 'We The People' so Americans are represented at the local
              level through our communications, connections, and activities as we strategically
              engage the important issues that support our Constitution, our Schools, and our
              Community.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                We Empower Women, Strengthen Community, and Uphold Values
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                The West Orange Republican Women Federated (WORWF) is an organization of passionate
                women dedicated to strengthening our community and advancing good government at the
                national, state, and local levels. We are part of the largest grassroots Republican
                Women's organization, committed to making a tangible difference.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {motivations.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckBadge />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImageSlider />

          </div>

          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" className="rounded-md px-7 font-semibold">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Events - curved navy section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-px h-12 bg-background"
          style={{ borderBottomLeftRadius: "50% 100%", borderBottomRightRadius: "50% 100%" }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Event &amp; Luncheon
                <br />
                Reservations
              </h2>
            </div>
            <div className="text-sm">
              <p>WORWF meets monthly at West Orange Country Club</p>
              <Link to="/events" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary-foreground hover:text-secondary">
                View All Events <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 h-px bg-primary-foreground/20" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { img: speakerMessina, date: "THURSDAY, MAY 14, 2026", title: "General Luncheon Meeting", speaker: "CHRIS MESSINA & BONNIE JACKSON", showSpeaker: true },
              { img: speakerIngoglia, date: "FRIDAY, JUNE 5, 2026", title: "Breakfast with Blaise", speaker: "BLAISE INGOGLIA, Florida CFO", showSpeaker: true },
            ].map((e, i) => (
              <article key={i} className="flex items-stretch gap-4 rounded-lg bg-card p-4 text-card-foreground shadow-[var(--shadow-elegant)]">
                <img src={e.img} alt="" className="size-32 shrink-0 rounded object-cover" loading="lazy" />
                <div className="flex flex-col py-1">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" /> {e.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{e.title}</h3>
                  <a href="#" className="mt-1 text-sm font-semibold italic text-secondary underline">
                    WEST ORANGE CC
                  </a>
                  {e.showSpeaker ? (
                    <>
                      <p className="mt-3 text-xs font-bold uppercase text-muted-foreground">Speaker:</p>
                      <p className="text-sm font-bold text-foreground">{e.speaker}</p>
                    </>
                  ) : (
                    <p className="mt-3 text-sm font-bold text-foreground">{e.speaker}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Voter resources */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Find Your Elected Officials, Check Your Voter Status, and Connect with Republican
            Organizations
          </h2>
          <Button variant="cta" size="lg" className="mt-8 rounded-md px-7 font-semibold">
            Voter Resources
          </Button>
        </div>
      </section>

      {/* Donate band */}
      <section
        className="relative overflow-hidden py-20 text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.45 0.2 27 / 0.85), oklch(0.35 0.18 27 / 0.85)), url(${groupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Together, we turn aspirations into reality.
            </h2>
            <div className="mt-12 rounded-lg bg-card p-8 text-card-foreground shadow-[var(--shadow-elegant)]">
              <h3 className="text-xl font-bold text-foreground">
                Support Our Mission, Invest in the Future
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Your donation helps us empower women, strengthen our community, and uphold the
                values that matter. Together, we can create lasting change and ensure strong
                leadership for the future.
              </p>
              <button className="mt-6 w-full rounded-md bg-primary py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Donate Us
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="max-w-sm text-sm">
              Show your support and donate – To invest in the future of our country and to keep
              electing our leadership
            </p>
            <div className="mt-6 h-px w-64 bg-primary-foreground/40" />
            <img src={worwfLogo} alt="WORWF" className="mt-12 size-44 object-contain lg:ml-auto" />
          </div>
        </div>
      </section>

      {/* Membership form */}
      <section id="membership" className="relative overflow-hidden py-20">
        <div className="absolute -left-20 top-20 size-72 rounded-full bg-secondary/15" />
        <div className="absolute -right-20 bottom-10 size-80 rounded-full bg-secondary/10" />
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Our movement needs you!
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Would you like to become one of our valued members?
            </h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch.");
            }}
            className="relative mt-12 rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-elegant)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">First Name</label>
                <Input className="mt-2 bg-muted" placeholder="First Name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <Input className="mt-2 bg-muted" placeholder="Last Name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone Number*</label>
                <Input type="tel" required className="mt-2 bg-muted" placeholder="Phone Number*" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input type="email" className="mt-2 bg-muted" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea rows={4} className="mt-2 bg-muted" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" variant="cta" className="mt-6 rounded-md px-7 font-semibold">
              Submit Form
            </Button>
          </form>
        </div>
      </section>

      <Marquee />

      {/* FAQ */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Frequently Asked Questions (FAQ)
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              We here to answer all your questions
            </h2>
          </div>
          <Accordion type="single" collapsible defaultValue="item-0" className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-md border border-border bg-card px-5 data-[state=open]:border-secondary"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {i + 1}. {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still you have a questions?{" "}
            <a href="#" className="font-semibold text-secondary underline">
              Contact with us
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0 0 0 / 0.85), oklch(0 0 0 / 0.78)), url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <img src={worwfLogo} alt="WORWF" className="size-14 object-contain" />
                <span className="text-lg font-semibold">West Orange Republican Women Federated</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Upcoming Events", "Donate", "Join Us", "Gallery", "Voter Resources", "About Us"].map((l) => (
                  <a key={l} href="#" className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <div className="flex items-center gap-3 lg:justify-end">
                <a href="#" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">
                  <Facebook className="size-4" />
                </a>
                <a href="#" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
              </div>
              <h4 className="mt-8 text-lg font-bold">Contact Info</h4>
              <p className="mt-3 flex items-center gap-2 text-sm lg:justify-end">
                info@worwf.org <Mail className="size-4" />
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/20 pt-8">
            <div className="flex items-center gap-3">
              <span className="text-sm">Sponsors</span>
              <div className="rounded-md bg-primary-foreground px-4 py-2 text-sm font-extrabold text-secondary">
                <span className="text-secondary">RBS</span>
                <span className="ml-1 text-[10px] text-primary">CONSTRUCTION &amp; ROOFING</span>
              </div>
            </div>
            <Button variant="cta" className="rounded-md px-6 font-semibold">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs">
            <p className="opacity-80">
              Copyright © 2025. West Orange Republican Women Federated. All rights reserved.
            </p>
            <div className="flex gap-5 opacity-80">
              <Link to="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
              <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 flex size-10 items-center justify-center rounded-md bg-card text-foreground shadow-lg hover:bg-muted"
        >
          <ChevronUp className="size-5" />
        </button>
      </footer>

    </div>
  );
}
