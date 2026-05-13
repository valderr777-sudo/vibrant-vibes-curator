import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroFlag from "@/assets/hero-flag.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Calendar, MapPin, Users, BookOpen, Megaphone, HandHeart, Vote, Check } from "lucide-react";

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

const navLinks = ["Home", "About Us", "Membership", "Events", "News to Know", "Gallery", "Contact Us"];

const motivations = [
  { icon: Users, text: "Grassroots advocacy and voter registration" },
  { icon: Vote, text: "Supporting Republican candidates through campaigns" },
  { icon: Megaphone, text: "Legislative engagement with elected officials" },
  { icon: BookOpen, text: "Promoting conservative values and constitutional rights" },
  { icon: Calendar, text: "Monthly educational meetings with guest speakers" },
  { icon: Users, text: "Networking opportunities for like-minded individuals" },
  { icon: HandHeart, text: "Community service through charitable initiatives" },
  { icon: Megaphone, text: "Encouraging active participation of women in politics" },
];

const events = [
  {
    date: "THURSDAY, SEPTEMBER 11, 2025",
    title: "General Luncheon Meeting",
    venue: "WEST ORANGE CC",
    speaker: "MICHAEL TORISI, Retired NYPD",
  },
  {
    date: "THURSDAY, OCTOBER 9, 2025",
    title: "General Luncheon Meeting",
    venue: "WEST ORANGE CC",
    speaker: "TOPIC: TBA",
  },
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
  const items = ["Educate", "Motivate", "Activate"];
  const repeated = Array(8).fill(items).flat();
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-6">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap">
        {repeated.map((w, i) => (
          <span key={i} className="flex items-center gap-12 text-3xl font-bold tracking-wider text-primary-foreground/90 md:text-5xl">
            {w}
            <span className="inline-block size-2 rounded-full bg-secondary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [form, setForm] = useState({ first: "", last: "", phone: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" /> info@worwf.org
          </a>
          <p className="hidden font-semibold tracking-widest md:block">Educate. Motivate. Activate.</p>
          <a href="#membership" className="hidden font-medium hover:text-secondary md:block">
            Become a Member
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full border-4 border-primary bg-background font-black text-primary">
              <span className="text-xs">WORWF</span>
            </div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a key={l} href="#" className="text-sm font-medium text-foreground transition-colors hover:text-secondary">
                {l}
              </a>
            ))}
          </nav>
          <Button variant="destructive" className="font-bold tracking-wider">
            DONATE
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.88), oklch(0.45 0.2 27 / 0.55)), url(${heroFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-24 md:py-36">
          <p className="text-sm font-medium text-primary-foreground/90">— Women strengthening our community</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
            West Orange Republican Women Federated
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
            United together to create positive change. Supporting good government and constitutional rights. Actively
            working for the good of our country.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="destructive" size="lg" className="font-bold">
              Become a Member
            </Button>
            <Button size="lg" className="border border-primary-foreground/40 bg-transparent font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Donate Us
            </Button>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-secondary py-14 text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
            "United together to create positive change. Supporting good government and constitutional rights."
          </h2>
          <p className="mt-4 text-sm tracking-wider opacity-90">— Women strengthening our community —</p>
        </div>
      </section>

      <Marquee />

      {/* What motivates us */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">What Motivates Us</p>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              We love America and our Constitution — and take responsibility for both!
            </h2>
            <p className="mt-6 text-muted-foreground">
              We advance the voice of 'We The People' so Americans are represented at the local level through our
              communications, connections, and activities as we strategically engage the important issues that support
              our Constitution, our Schools, and our Community.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-primary">
              We Empower Women, Strengthen Community, and Uphold Values
            </h3>
            <p className="mt-3 text-muted-foreground">
              The West Orange Republican Women Federated (WORWF) is an organization of passionate women dedicated to
              strengthening our community and advancing good government at the national, state, and local levels.
            </p>
            <Button variant="destructive" className="mt-8 font-bold">
              Learn More About Us
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {motivations.map((m) => (
              <li
                key={m.text}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{m.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">Event &amp; Luncheon Reservations</h2>
            <p className="mt-4 text-muted-foreground">WORWF meets monthly at West Orange Country Club</p>
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> 3300 West Orange Country Club Drive, Winter Garden, FL 34787
            </p>
            <Button variant="destructive" className="mt-6 font-bold">
              View All Events
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {events.map((e) => (
              <article
                key={e.date}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-elegant)]"
              >
                <div className="flex aspect-[16/9] items-center justify-center bg-[var(--gradient-primary)] text-primary-foreground">
                  <Calendar className="size-20 opacity-40" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary">{e.date}</p>
                  <h3 className="mt-2 text-2xl font-bold text-primary">{e.title}</h3>
                  <p className="mt-2 text-sm font-semibold italic text-foreground">{e.venue}</p>
                  <p className="mt-4 text-sm font-bold uppercase text-muted-foreground">Speaker:</p>
                  <p className="text-lg font-semibold text-foreground">{e.speaker}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Voter resources band */}
      <section
        className="relative py-20 text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.92), oklch(0.45 0.2 27 / 0.7)), url(${heroFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Find Your Elected Officials, Check Your Voter Status, and Connect with Republican Organizations
          </h2>
          <Button variant="destructive" size="lg" className="mt-8 font-bold">
            Voter Resources
          </Button>
        </div>
      </section>

      {/* Donate */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Together, we turn aspirations into reality.</p>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">Support Our Mission, Invest in the Future</h2>
          <p className="mt-6 text-muted-foreground">
            Show your support and donate – To invest in the future of our country and to keep electing our leadership.
            Your donation helps us empower women, strengthen our community, and uphold the values that matter.
          </p>
          <Button variant="destructive" size="lg" className="mt-8 font-bold">
            Donate Us
          </Button>
        </div>
      </section>

      <Marquee />

      {/* Membership form */}
      <section id="membership" className="bg-muted py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Our movement needs you!</p>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Would you like to become one of our honourable members?
            </h2>
            <p className="mt-6 text-muted-foreground">
              Join a network of passionate women who are making a real impact in West Orange County and beyond. Fill
              out the form and we'll be in touch.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch.");
            }}
            className="space-y-4 rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="First Name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} required />
              <Input placeholder="Last Name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} required />
            </div>
            <Input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Textarea placeholder="Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" variant="destructive" className="w-full font-bold">
              Submit Form
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-secondary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-center text-4xl font-bold text-primary md:text-5xl">
            We're here to answer all your questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {i + 1}. {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">WORWF</h3>
            <p className="mt-3 text-sm opacity-80">
              West Orange Republican Women Federated. United together to create positive change.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Contact</h4>
            <p className="mt-3 flex items-center gap-2 text-sm opacity-90">
              <Mail className="size-4" /> info@worwf.org
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm opacity-90">
              <MapPin className="size-4 shrink-0" /> West Orange Country Club, Winter Garden, FL 34787
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Affiliations</h4>
            <p className="mt-3 text-sm opacity-90">Florida Federation of Republican Women (FFRW)</p>
            <p className="mt-2 text-sm opacity-90">National Federation of Republican Women (NFRW)</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/20 px-4 pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} West Orange Republican Women Federated. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
