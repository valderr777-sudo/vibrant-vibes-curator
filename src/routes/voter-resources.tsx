import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, ChevronUp, ArrowUpRight, Globe2, Landmark, Users, BadgeCheck } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import heroImg from "@/assets/worwf/news/hero.jpg";

export const Route = createFileRoute("/voter-resources")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Voter Resources — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Stay informed with WORWF: top news, member engagement, education updates, calls to action, and voter resources.",
      },
      { property: "og:title", content: "Voter Resources — WORWF" },
      {
        property: "og:description",
        content:
          "Membership engagement, education updates, calls to action and voter resources from West Orange Republican Women Federated.",
      },
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

const voterResources: {
  heading: string;
  description: string;
  icon: typeof Globe2;
  accent: string;
  links: { label: string; href: string }[];
}[] = [
  {
    heading: "National / State / Local",
    description: "Official party, government, and policy resources from the national level down to Orange County.",
    icon: Globe2,
    accent: "from-accent/20 to-accent/0 text-accent",
    links: [
      { label: "RNC", href: "https://gop.com/" },
      { label: "US House of Representatives", href: "https://www.house.gov/" },
      { label: "US Senate", href: "https://www.senate.gov/senators/senators-contact.htm" },
      { label: "Sunshine State Government Resource Site", href: "http://www.myflorida.com/" },
      { label: "Republican Party of Florida", href: "https://florida.gop/" },
      { label: "Orange County Government Florida", href: "https://www.orangecountyfl.net/" },
      { label: "Orange County Republican Executive Committee", href: "https://www.orangefl.gop/" },
      { label: "Sayfie Review", href: "https://www.sayfiereview.com/" },
      { label: "Florida Republican Assembly", href: "http://www.fraoc.org/" },
    ],
  },
  {
    heading: "Florida Representatives",
    description: "Find and contact your elected officials at the state level — governor, senators, and representatives.",
    icon: Landmark,
    accent: "from-accent/20 to-accent/0 text-accent",
    links: [
      { label: "Florida Governor – Ron DeSantis", href: "https://flgov.com/contact-governor/" },
      { label: "Find your Legislator", href: "https://www.flsenate.gov/senators/find" },
      { label: "Find your Representative", href: "https://www.myfloridahouse.gov/findyourrepresentative" },
      { label: "Florida House of Representatives", href: "https://www.myfloridahouse.gov/" },
      { label: "Florida Senate", href: "https://www.flsenate.gov/Senators" },
      { label: "Florida Legislator", href: "http://www.leg.state.fl.us/Welcome/index.cfm" },
      { label: "Florida Division of Elections", href: "https://dos.myflorida.com/elections/" },
      { label: "Florida Redistricting", href: "https://www.floridaredistricting.gov/" },
    ],
  },
  {
    heading: "Republican Women",
    description: "Connect with the wider network of Republican Women's organizations across the country and Florida.",
    icon: Users,
    accent: "from-accent/20 to-accent/0 text-accent",
    links: [
      { label: "RNC Women", href: "https://www.gop.com/communities/rnc-women/" },
      { label: "National Federation of Republican Women", href: "https://www.nfrw.org/" },
      { label: "Florida Federation of Republican Women", href: "http://www.ffrw.net/home.php" },
    ],
  },
  {
    heading: "Voter ID & Status",
    description: "Verify your registration, find your polling place, and make sure your vote is ready to count.",
    icon: BadgeCheck,
    accent: "from-accent/20 to-accent/0 text-accent",
    links: [
      { label: "Check your Voter ID Status", href: "https://registration.elections.myflorida.com/CheckVoterStatus" },
      { label: "Voter Precinct Lookup", href: "https://dos.myflorida.com/elections/for-voters/check-your-voter-status-and-polling-place/voter-precinct-lookup/" },
    ],
  },
];

function NewsPage() {
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
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 25 / 0.55), oklch(0.12 0.02 25 / 0.55)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 text-primary-foreground md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            Voter Resources
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Everything you need to stay informed and ready to vote.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg">
            A curated hub of official, trusted links — from national leadership down to your local precinct.
          </p>
        </div>
      </section>

      {/* Voter Resources */}
      <section className="relative overflow-hidden bg-muted/30 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent"
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              <span className="h-px w-8 bg-secondary" />
              Trusted Links
              <span className="h-px w-8 bg-secondary" />
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Voter Resources
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Browse by category. Every link opens an official site in a new tab.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {voterResources.map((col) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.heading}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${col.accent} opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${col.accent} ring-1 ring-border`}>
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                      {col.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {col.description}
                    </p>

                    <ul className="mt-6 divide-y divide-border/70 border-t border-border/70">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center justify-between gap-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-secondary"
                          >
                            <span className="flex-1 leading-snug">{l.label}</span>
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 group-hover/link:bg-secondary group-hover/link:text-secondary-foreground group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                              <ArrowUpRight className="size-4" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
