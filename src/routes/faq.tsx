import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import heroImg from "@/assets/worwf/contact/hero.jpg";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ | West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Answers to common questions about WORWF membership, meetings, events, and how to get involved.",
      },
      { property: "og:title", content: "Frequently Asked Questions | WORWF" },
      {
        property: "og:description",
        content: "Common questions about joining and taking part in West Orange Republican Women Federated.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.lovable.app/__l5e/assets-v1/79ed99b0-953b-4fd4-81a0-4ea016868c57/social-share.jpg" },
      { name: "twitter:image", content: "https://worwf.lovable.app/__l5e/assets-v1/79ed99b0-953b-4fd4-81a0-4ea016868c57/social-share.jpg" },
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
    a: "Membership is open to registered Republican women who support the principles and objectives of the Republican Party. We welcome new members who are eager to make a positive impact in our community.",
  },
  {
    q: "How can I become a member?",
    a: "Visit our Membership page and complete the application. If you have questions first, send us a note through our Contact Us page and we'll provide all the information you need to get started.",
  },
  {
    q: "What activities does WORWF engage in?",
    a: "Our organization participates in various activities, including hosting monthly luncheons, organizing community events, supporting local candidates, and promoting civic engagement through education and advocacy.",
  },
  {
    q: "How can I stay informed about upcoming events?",
    a: "We regularly update our members and the public about upcoming events through our website and social media channels. Be sure to check our Events page for the latest news and announcements.",
  },
  {
    q: "Can I attend a meeting before deciding to join?",
    a: "Absolutely! We encourage prospective members to attend one of our meetings or events to learn more about our organization and meet our members.",
  },
  {
    q: "How can I contact WORWF for more information?",
    a: "For any inquiries or additional information, please reach out to us through our Contact Us page. We're happy to answer any questions you may have.",
  },
];

function FaqPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="people-background responsive-parallax absolute inset-0 -z-10 lg:bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.20_0.08_25/0.85)] via-[oklch(0.25_0.10_25/0.75)] to-[oklch(0.20_0.10_250/0.85)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <h1 className="animate-fade-in text-4xl font-extrabold text-primary-foreground [text-wrap:balance] sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/90 [text-wrap:balance] md:text-lg">
            Answers to the questions we hear most about membership, meetings, and getting involved.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 transition-colors data-[state=open]:border-primary data-[state=open]:shadow-[var(--shadow-elegant)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
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
            <h2 className="mt-4 text-xl font-bold text-foreground">Still have questions?</h2>
            <p className="mt-2 text-sm text-muted-foreground [text-wrap:balance]">
              Reach out directly and we&apos;ll get back to you personally.
            </p>
            <Button asChild variant="cta" className="mt-5">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
