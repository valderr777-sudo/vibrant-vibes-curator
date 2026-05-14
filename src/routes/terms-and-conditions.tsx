import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Terms and conditions governing your use of worwf.org and services from West Orange Republican Women Federated.",
      },
      { property: "og:title", content: "Terms & Conditions — WORWF" },
      {
        property: "og:description",
        content: "The terms governing your use of worwf.org.",
      },
    ],
  }),
});

const navLinks = [
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function TermsPage() {
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
                className="relative text-[15px] font-medium text-foreground transition-colors hover:text-secondary"
              >
                {l.label}
                {l.caret && <span className="ml-1">▾</span>}
              </Link>
            ))}
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
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 25 / 0.7), oklch(0.12 0.02 25 / 0.7))`,
          backgroundColor: "oklch(0.20 0.08 25)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-primary-foreground md:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">
            Effective date: August 26, 2025
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Welcome to worwf.org. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern
            your use of the website and any services accessible at or through worwf.org
            (the &ldquo;Site&rdquo;). By accessing or using the Site you agree to these
            Terms. If you do not agree, please do not use the Site.
          </p>

          <Section number="1" title="Who we are / Contact">
            <p>
              The Site is operated by West Orange Republican Women Federated
              (&ldquo;WORWF,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
              You can contact us at{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>
              . Our activities serve members and the public in West Orange County,
              Florida.
            </p>
          </Section>

          <Section number="2" title="Use of the Site">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                You may use the Site for lawful, personal, informational, and
                non-commercial purposes only.
              </li>
              <li>
                You must not use the Site in any way that violates applicable law or
                these Terms. Prohibited conduct includes, but is not limited to, fraud,
                harassment, transmitting malware, or attempting unauthorized access to
                systems.
              </li>
            </ol>
          </Section>

          <Section number="3" title="Memberships, Donations & Payments">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                Membership sign-ups, event reservations, and donations may be processed
                through third-party services. By submitting payment or donation details
                you agree to the third-party provider&rsquo;s terms.
              </li>
              <li>
                All donations are final unless otherwise stated. Receipts and
                tax-deduction eligibility (if any) are subject to applicable laws.
              </li>
            </ol>
          </Section>

          <Section number="4" title="Content & Intellectual Property">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                The Site&rsquo;s content (text, logos, images) is owned by WORWF or
                licensed to WORWF. You may not reproduce, distribute, or create
                derivative works from the Site&rsquo;s content without written
                permission.
              </li>
              <li>
                If you send us content (messages, images, feedback) you grant WORWF a
                non-exclusive, royalty-free right to use, reproduce, and publish that
                content for the Site&rsquo;s purposes (subject to any applicable
                member/privacy agreements).
              </li>
            </ol>
          </Section>

          <Section number="5" title="External Links & Third-Party Sites">
            <p>
              The Site may link to third-party websites (social media, donation
              portals). We do not control those sites and are not responsible for their
              content, privacy practices, or terms. Links are provided for convenience
              only.
            </p>
          </Section>

          <Section number="6" title="Disclaimers & Limitation of Liability">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                The Site is provided &ldquo;as is.&rdquo; To the fullest extent
                permitted by law, WORWF disclaims all warranties (express or implied).
              </li>
              <li>
                WORWF is not liable for indirect, incidental, special, or consequential
                damages arising from use of the Site. Our aggregate liability to you
                for any claim arising hereunder will not exceed $100 (or the minimum
                allowed by applicable law).
              </li>
            </ol>
          </Section>

          <Section number="7" title="Indemnification">
            <p>
              You agree to indemnify and hold WORWF harmless from any claims,
              liabilities, damages, losses, or expenses (including reasonable legal
              fees) arising from your violation of these Terms or your use of the Site.
            </p>
          </Section>

          <Section number="8" title="Governing Law; Dispute Resolution">
            <p>
              These Terms are governed by the laws of the State of Florida, United
              States. Any disputes will be resolved under Florida law.
            </p>
          </Section>

          <Section number="9" title="Changes to Terms">
            <p>
              We may update these Terms at any time. The &ldquo;Effective date&rdquo;
              above shows when the current Terms take effect. Continued use of the Site
              after changes constitutes acceptance.
            </p>
          </Section>

          <Section number="10" title="Contact">
            <p>
              Questions about these Terms:{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>
              .
            </p>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0 0 0 / 0.85), oklch(0 0 0 / 0.78)), url(${groupImg})`,
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
              <Button variant="cta" className="rounded-md px-6 font-semibold">
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
