import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

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

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const, active: true },
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

function ContactPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">


      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 25 / 0.55), oklch(0.12 0.02 25 / 0.55)), url(${heroImg})`,
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
                  "linear-gradient(135deg, oklch(0.50 0.22 25), oklch(0.45 0.22 25))",
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
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
