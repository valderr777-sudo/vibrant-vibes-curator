import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroFlag from "@/assets/hero-flag.jpg";
import heroVideo from "@/assets/worwf/hero-bg.mp4";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import membershipBg from "@/assets/worwf/membership-bg.png";
import { CountUpStat } from "@/components/count-up-stat";

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
import { Mail, MapPin, Calendar, ArrowRight, Facebook, ChevronUp, Heart, Star, Users } from "lucide-react";

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
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>



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
            backgroundImage: `linear-gradient(110deg, oklch(0.25 0.12 250 / 0.85) 0%, oklch(0.30 0.15 255 / 0.65) 50%, oklch(0.40 0.18 250 / 0.55) 100%)`,
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
        className="relative overflow-hidden py-24 text-primary-foreground md:py-32"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.20 0.08 25 / 0.94) 0%, oklch(0.30 0.15 25 / 0.85) 55%, oklch(0.45 0.20 27 / 0.78) 100%), url(${groupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative star field */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
          <Star className="absolute left-[6%] top-[18%] size-6 fill-primary-foreground stroke-none" />
          <Star className="absolute left-[14%] top-[72%] size-4 fill-primary-foreground stroke-none" />
          <Star className="absolute right-[12%] top-[14%] size-5 fill-primary-foreground stroke-none" />
          <Star className="absolute right-[28%] bottom-[18%] size-4 fill-primary-foreground stroke-none" />
          <Star className="absolute left-[48%] top-[8%] size-3 fill-primary-foreground stroke-none" />
        </div>
        {/* Soft glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/2 size-[560px] -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.18 50 / 0.25), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            {/* Left: headline + impact */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <Heart className="size-3.5 fill-accent stroke-none" />
                Support WORWF
              </span>
              <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] md:text-6xl">
                Together, we turn{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-accent">aspirations</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm"
                    style={{ background: "oklch(0.72 0.18 50 / 0.35)" }}
                  />
                </span>{" "}
                into reality.
              </h2>
              <p className="mt-6 max-w-md text-base text-primary-foreground/85">
                Show your support and donate — invest in the future of our country and help us
                keep electing principled, conservative leadership.
              </p>

              {/* Impact stats */}
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur">
                {[
                  { icon: Users, target: 135, suffix: "+", label: "Active Members" },
                  { icon: Star, target: 16, suffix: "+", label: "Years of Impact" },
                  { icon: Heart, target: 100, suffix: "%", label: "Community First" },
                ].map((s) => (
                  <CountUpStat
                    key={s.label}
                    icon={s.icon}
                    target={s.target}
                    suffix={s.suffix}
                    label={s.label}
                  />
                ))}
              </dl>
            </div>

            {/* Right: donate card */}
            <div className="relative lg:pl-6">
              {/* WORWF logo badge floating */}
              <div className="absolute -top-8 right-4 z-20 hidden size-24 items-center justify-center overflow-hidden rounded-full border-4 border-primary-foreground/90 bg-primary shadow-[var(--shadow-elegant)] sm:flex">
                <img src={worwfLogo} alt="WORWF crest" className="h-full w-full object-cover" />
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-card p-8 text-card-foreground shadow-[var(--shadow-elegant)] md:p-10">
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: "var(--gradient-accent)" }}
                />
                {/* Stripes corner motif */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-10 size-40 rotate-12 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--primary) 0 10px, transparent 10px 20px)",
                  }}
                />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  Make a Difference
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
                  Support Our Mission, Invest in the Future
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Your donation helps us empower women, strengthen our community, and uphold the
                  values that matter. Together, we can create lasting change and ensure strong
                  leadership for the future.
                </p>

                <a
                  href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md py-3.5 font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Donate Now
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="mt-4 text-center text-[11px] uppercase tracking-wider text-muted-foreground">
                  Secure · Tax-deductible · 100% mission-driven
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership form */}
      <section
        id="membership"
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${membershipBg})` }}
      >
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

    </>
  );
}
