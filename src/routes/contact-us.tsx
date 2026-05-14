import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp, Plus, X, HelpCircle } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import heroImg from "@/assets/worwf/contact/hero.jpg";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Get in touch with WORWF. Send a message, find answers in our FAQ, or reach us by email at info@worwf.org.",
      },
      { property: "og:title", content: "Contact Us — WORWF" },
      {
        property: "og:description",
        content: "Send a message to West Orange Republican Women Federated.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Events", to: "/events" as const },
  { label: "News to Know", to: "/news-to-know" as const, caret: true },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const, active: true },
];

const faqs = [
  {
    q: "1. What is WORWF?",
    a: "WORWF stands for West Orange Republican Women Federated. We are a group of passionate women dedicated to advancing the cause of good government in our community, state, and nation.",
  },
  {
    q: "2. Who can join West Orange Republican Women Federated?",
    a: "Membership is open to women who support the principles and objectives of the Republican Party. We welcome new members who are eager to make a positive impact in our community.",
  },
  {
    q: "3. How can I become a member?",
    a: "To join, please visit our Contact Us page and send us an email expressing your interest. We'll provide you with all the necessary information to get started.",
  },
  {
    q: "4. What activities does WORWF engage in?",
    a: "Our organization participates in various activities, including hosting monthly luncheons, organizing community events, supporting local candidates, and promoting civic engagement through education and advocacy.",
  },
  {
    q: "5. How can I stay informed about upcoming events?",
    a: "We regularly update our members and the public about upcoming events through our website and social media channels. Be sure to check our homepage for the latest news and event announcements.",
  },
  {
    q: "6. Can I attend a meeting before deciding to join?",
    a: "Absolutely! We encourage prospective members to attend one of our meetings or events to learn more about our organization and meet our members.",
  },
  {
    q: "7. How can I contact WORWF for more information?",
    a: "For any inquiries or additional information, please reach out to us via our Contact Us page. We're happy to answer any questions you may have.",
  },
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" />
            <span>info@worwf.org</span>
          </a>
          <p className="hidden font-semibold tracking-wide md:block">
            Educate. Motivate. Activate.
          </p>
          <Link to="/membership" className="hidden text-sm font-medium hover:text-secondary md:block">
            Become a Member
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-16 object-contain" />
          </Link>
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
          </nav>
          <Button variant="destructive" className="rounded-md px-6 font-bold tracking-wider">
            DONATE
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.18 0.05 260 / 0.55), oklch(0.18 0.05 260 / 0.55)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 text-primary-foreground md:grid-cols-2 md:py-28">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">Contact Us</h1>
          <div className="flex flex-col items-start md:items-center md:text-center">
            <h3 className="text-lg font-semibold">Email Us</h3>
            <a href="mailto:info@worwf.org" className="mt-3 flex items-center gap-3 text-lg hover:text-secondary">
              <span className="flex size-9 items-center justify-center rounded bg-primary-foreground/15">
                <Mail className="size-4" />
              </span>
              <span className="underline underline-offset-4">info@WORWF.org</span>
            </a>
            <h3 className="mt-8 text-lg font-semibold">Follow us</h3>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex size-10 items-center justify-center rounded bg-primary-foreground/15 hover:bg-primary-foreground hover:text-primary">
                <Facebook className="size-4" />
              </a>
              <a href="#" aria-label="X" className="flex size-10 items-center justify-center rounded bg-primary-foreground/15 hover:bg-primary-foreground hover:text-primary">
                <span className="text-sm font-bold">𝕏</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form card overlay */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 pb-20">
            <div
              className="relative overflow-hidden rounded-md p-8 shadow-2xl md:p-12"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.45 0.18 260), oklch(0.38 0.18 260))",
              }}
            >
              <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
                <div className="text-primary-foreground">
                  <h2 className="text-4xl font-bold leading-tight">Send a<br />Message</h2>
                  <p className="mt-6 text-sm leading-relaxed opacity-95">
                    We would love to hear from you! If you would like to receive more information and learn how you can stay informed on important issues, club activities, or membership, please complete this form and we will be in contact with you shortly. We protect the privacy of your information.
                  </p>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks! We'll be in touch shortly.");
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name"
                      maxLength={100}
                      className="w-full rounded border border-primary-foreground/40 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      maxLength={30}
                      className="w-full rounded border border-primary-foreground/40 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    maxLength={255}
                    className="w-full rounded border border-primary-foreground/40 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    maxLength={200}
                    className="w-full rounded border border-primary-foreground/40 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded border border-primary-foreground/40 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/70 focus:border-primary-foreground focus:outline-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded bg-primary-foreground px-8 py-3 text-sm font-bold tracking-widest text-primary hover:bg-secondary hover:text-primary-foreground"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Red bottom band */}
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-secondary" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <img src={worwfLogo} alt="WORWF" className="size-8 object-contain" />
              <span className="text-sm font-medium text-foreground">Frequently Asked Questions (FAQ)</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              We here to answer all your questions
            </h2>
          </div>

          <div className="relative mt-12">
            <HelpCircle className="pointer-events-none absolute -left-10 top-0 size-28 text-muted-foreground/20" strokeWidth={1} />
            <div className="space-y-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`overflow-hidden rounded-md border bg-card transition-shadow ${
                      isOpen ? "border-secondary shadow-md" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-bold md:text-lg">{f.q}</span>
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded ${
                          isOpen ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            Still you have a questions?{" "}
            <Link to="/contact-us" className="font-semibold text-secondary hover:underline">
              Contact with us
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.92), oklch(0.22 0.14 265 / 0.85)), url(${groupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <img src={worwfLogo} alt="WORWF" className="size-14 object-contain" />
                <span className="text-lg font-semibold">
                  West Orange Republican Women Federated
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Upcoming Events", "Donate", "Join Us", "Gallery", "Voter Resources", "News to Know", "About Us"].map((l) => (
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
              <p className="mt-4 flex items-start gap-2 text-sm lg:justify-end">
                <span>3300 West Orange Country Club Drive,<br />Winter Garden, FL 34787</span>
                <MapPin className="mt-1 size-4 shrink-0" />
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm lg:justify-end">
                <span>info@worwf.org</span> <Mail className="size-4" />
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
            <Link to="/contact-us">
              <Button variant="destructive" className="rounded-md px-6 font-semibold">
                Contact Us
              </Button>
            </Link>
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
