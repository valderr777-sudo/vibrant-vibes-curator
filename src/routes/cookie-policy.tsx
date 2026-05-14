import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "How worwf.org uses cookies and similar technologies, and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy — WORWF" },
      { property: "og:description", content: "Cookie usage on worwf.org." },
    ],
  }),
});

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
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

function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">Effective date: August 26, 2025</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            This Cookie Policy explains what cookies and similar technologies we use on
            worwf.org and why. It also explains how you can control cookie preferences.
          </p>

          <Section number="1" title="What are cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a
              website. They help the site remember your preferences and understand how
              you use the Site. For visitors in jurisdictions with privacy laws (for
              example the EU/EEA/UK), non-essential cookies may require consent.
            </p>
          </Section>

          <Section number="2" title="Types of cookies we may use">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-foreground">Strictly necessary cookies:</strong>{" "}
                Required for the Site to function (session, security). These do not
                require consent.
              </li>
              <li>
                <strong className="text-foreground">Performance / Analytics cookies:</strong>{" "}
                Help us understand site usage and improve performance (for example,
                Google Analytics). These collect aggregated, anonymous statistics.
              </li>
              <li>
                <strong className="text-foreground">Functionality cookies:</strong>{" "}
                Remember site preferences (language, display preferences).
              </li>
              <li>
                <strong className="text-foreground">Marketing / Advertising cookies:</strong>{" "}
                Used to deliver relevant adverts, measure ad effectiveness, or for
                social sharing (e.g., social widgets, pixels). These usually require
                consent for visitors in jurisdictions where consent is required.
              </li>
            </ul>
          </Section>

          <Section number="3" title="Third-party cookies & services">
            <p>
              The Site may include integrations with social platforms (e.g., Facebook,
              X) and may use third-party payment or donation processors. Those third
              parties may set cookies on their domains when you interact with their
              features. Please review third-party privacy/cookie policies for details.
            </p>
          </Section>

          <Section number="4" title="Consent and managing cookies">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                If you are in a jurisdiction that requires consent for non-essential
                cookies, we obtain consent before setting those cookies and provide a
                way to accept or decline categories.
              </li>
              <li>
                To manage cookies generally: most browsers let you view, control, and
                delete cookies via browser settings. You can also opt out of many
                analytics providers via their opt-out tools.
              </li>
            </ul>
          </Section>

          <Section number="5" title="How long cookies last">
            <p>
              Cookie lifetimes vary: session cookies expire after you close the
              browser; persistent cookies remain for a set period (e.g., 30 days)
              depending on purpose.
            </p>
          </Section>

          <Section number="6" title="Changes to this Cookie Policy">
            <p>
              We may update this policy; the Effective date at the top will reflect
              changes.
            </p>
          </Section>

          <Section number="7" title="Contact">
            <p>
              For cookie questions:{" "}
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

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
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
  );
}
