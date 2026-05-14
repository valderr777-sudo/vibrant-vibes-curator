import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "How WORWF collects, uses, shares, and protects your personal information on worwf.org.",
      },
      { property: "og:title", content: "Privacy Policy — WORWF" },
      { property: "og:description", content: "Privacy practices for worwf.org." },
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

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: "oklch(0.20 0.08 25)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-primary-foreground md:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">Effective date: August 26, 2025</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            This Privacy Policy explains how West Orange Republican Women Federated
            (WORWF, &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) collects,
            uses, shares, and protects personal information when you visit worwf.org or
            interact with our services.
          </p>

          <Section number="1" title="Scope & who we are">
            <p>
              This Policy applies to personal data collected on the Site and through
              related services (membership, event sign-ups, donations). WORWF serves
              the West Orange County / Central Florida community. Contact:{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>
              .
            </p>
          </Section>

          <Section number="2" title="Information we may collect">
            <p>We collect different types of personal information depending on how you use the Site:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-foreground">Contact information:</strong> name,
                email address, phone number when you contact us or join as a member.
              </li>
              <li>
                <strong className="text-foreground">Payment/donation data:</strong> when
                you donate we process payment via a third-party. We do not store full
                card details on our servers.
              </li>
              <li>
                <strong className="text-foreground">Communications:</strong> messages,
                comments, or content you provide.
              </li>
              <li>
                <strong className="text-foreground">Technical &amp; usage data:</strong>{" "}
                IP address, browser type, pages visited, cookies and similar
                technologies.
              </li>
              <li>
                <strong className="text-foreground">Social media data:</strong> if you
                interact with social widgets, those platforms may collect data under
                their policies.
              </li>
            </ul>
          </Section>

          <Section number="3" title="How we use personal data">
            <p>We use personal data to:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>Provide and operate the Site and services (memberships, events).</li>
              <li>Process donations and send receipts.</li>
              <li>Communicate with you (newsletters, event info) where you&rsquo;ve consented.</li>
              <li>Improve the Site, monitor analytics, and ensure security.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </Section>

          <Section number="4" title="Legal bases and residents’ rights">
            <p>
              For U.S. visitors we rely on legitimate interests, contractual necessity,
              or consent where required. For visitors from regions with data-protection
              laws, such as the EU/EEA/UK, processing is based on lawful bases such as
              consent or legitimate interest. State privacy laws (for example those in
              California or Florida) may provide additional rights to residents.
            </p>
          </Section>

          <Section number="5" title="How to exercise your rights">
            <p>
              To exercise privacy rights (access, correction, deletion, opt-out), email{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>{" "}
              with subject line &ldquo;Privacy Rights Request&rdquo;. We will verify
              your identity before responding and will respond in accordance with
              applicable law.
            </p>
          </Section>

          <Section number="6" title="Sharing & disclosure">
            <p>We may share personal data:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                With service providers (payment processors, hosting, email providers)
                who act as processors on our behalf.
              </li>
              <li>When required by law or to protect rights and safety.</li>
              <li>
                In connection with mergers or transfers (in the event of organizational
                changes).
              </li>
            </ul>
            <p>
              We do not sell personal data for money; if applicable laws consider any
              transfer a &ldquo;sale,&rdquo; you may have a right to opt out.
            </p>
          </Section>

          <Section number="7" title="Data retention & security">
            <p>
              We retain personal data only as long as necessary to fulfill the purposes
              described or as required by law. We implement reasonable administrative,
              technical, and physical safeguards to protect personal data, but no
              internet transmission is completely secure. If you believe your data has
              been compromised contact{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>{" "}
              immediately.
            </p>
          </Section>

          <Section number="8" title="Children’s privacy">
            <p>
              We do not knowingly collect or solicit personal information from children
              under 13 (or the age required by local law). If we learn we collected
              personal data from a child under the applicable threshold we will delete
              it.
            </p>
          </Section>

          <Section number="9" title="International transfers">
            <p>
              If personal data is transferred outside your country, we will take steps
              required by law to protect it (e.g., contractual safeguards). Visitors
              from the EU/EEA should be aware their data may be transferred to the U.S.
            </p>
          </Section>

          <Section number="10" title="Links to other sites">
            <p>
              Our Site contains links to third-party sites (social media, donation
              processors). This Privacy Policy does not cover those sites. Please
              review third-party policies before providing personal data.
            </p>
          </Section>

          <Section number="11" title="Updates to this Policy">
            <p>
              We may update this Privacy Policy. The &ldquo;Effective date&rdquo; will
              indicate when the current version takes effect. Where required by law or
              when changes are material, we will provide notice.
            </p>
          </Section>

          <Section number="12" title="Contact">
            <p>
              Questions, requests, or privacy concerns:{" "}
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
