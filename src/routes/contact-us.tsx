import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Facebook,
  Phone,
  Clock,
  Send,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
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

const faqs = [
  {
    q: "What is WORWF?",
    a: "WORWF stands for West Orange Republican Women Federated. We are a group of passionate women dedicated to advancing the cause of good government in our community, state, and nation.",
  },
  {
    q: "Who can join West Orange Republican Women Federated?",
    a: "Membership is open to women who support the principles and objectives of the Republican Party. We welcome new members who are eager to make a positive impact in our community.",
  },
  {
    q: "How can I become a member?",
    a: "To join, please visit our Contact Us page and send us an email expressing your interest. We'll provide you with all the necessary information to get started.",
  },
  {
    q: "What activities does WORWF engage in?",
    a: "Our organization participates in various activities, including hosting monthly luncheons, organizing community events, supporting local candidates, and promoting civic engagement through education and advocacy.",
  },
  {
    q: "How can I stay informed about upcoming events?",
    a: "We regularly update our members and the public about upcoming events through our website and social media channels. Be sure to check our homepage for the latest news and event announcements.",
  },
  {
    q: "Can I attend a meeting before deciding to join?",
    a: "Absolutely! We encourage prospective members to attend one of our meetings or events to learn more about our organization and meet our members.",
  },
  {
    q: "How can I contact WORWF for more information?",
    a: "For any inquiries or additional information, please reach out to us via our Contact Us page. We're happy to answer any questions you may have.",
  },
];

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "info@WORWF.org",
    href: "mailto:info@worwf.org",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "West Orange County, FL",
    href: "#",
  },
  {
    icon: Clock,
    label: "Meetings",
    value: "Monthly Luncheons",
    href: "#",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    referral: "",
    message: "",
  });

  return (
    <>
      {/* Hero with parallax */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.20_0.08_25/0.85)] via-[oklch(0.25_0.10_25/0.75)] to-[oklch(0.20_0.10_250/0.85)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-secondary" />
              Get in Touch
            </span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-primary-foreground md:text-7xl">
              Let&apos;s Start a<br />
              <span className="text-secondary">Conversation</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              Whether you&apos;re curious about membership, have a question about an
              event, or just want to say hello — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards — overlap hero */}
      <section className="relative -mt-20 px-6">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="size-5" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {c.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">{c.value}</p>
              <ArrowRight className="absolute right-6 top-6 size-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </section>

      {/* Form + Aside */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Aside */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Send a Message
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              We protect your privacy &amp; reply quickly.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Complete the form and a member of our team will be in contact with you
              shortly. Your information stays private and is never shared with third
              parties.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Personal response within 48 hours",
                "Information about upcoming events",
                "Membership guidance & referrals",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg viewBox="0 0 12 12" className="size-3" fill="none">
                      <path
                        d="M2.5 6.5L5 9L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow us
              </span>
              <div className="h-px flex-1 bg-border" />
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="text-sm font-bold">𝕏</span>
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
                alert("Please fill in your name, email, and message.");
                return;
              }
              alert("Thanks! We'll be in touch shortly.");
            }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-10"
          >
            {/* Decorative accent */}
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/5" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/5" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                maxLength={100}
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                maxLength={30}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Email Address"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  maxLength={255}
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="How did you hear about us?"
                  value={form.referral}
                  onChange={(v) => setForm({ ...form, referral: v })}
                  maxLength={200}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us a little about how we can help…"
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <p className="mt-1 text-right text-xs text-muted-foreground">
                  {form.message.length}/1000
                </p>
              </div>
            </div>

            <div className="relative mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by WORWF.
              </p>
              <Button type="submit" variant="cta" size="lg" className="px-8">
                <Send className="size-4" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <HelpCircle className="size-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Answers to the questions we hear most
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 transition-colors data-[state=open]:border-primary data-[state=open]:shadow-[var(--shadow-elegant)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elegant)]">
            <img src={worwfLogo} alt="WORWF" className="mx-auto size-16 object-contain" />
            <h3 className="mt-4 text-xl font-bold text-foreground">Still have questions?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach out directly and we&apos;ll get back to you personally.
            </p>
            <Button asChild variant="cta" className="mt-5">
              <a href="mailto:info@worwf.org">
                <Mail className="size-4" />
                info@WORWF.org
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
