import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, ChevronUp, ArrowUpRight, Globe2, Landmark, Users, BadgeCheck } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import heroImg from "@/assets/worwf/voter-resources-hero.jpg";
import sponsorRbs from "@/assets/worwf/sponsors/rbs.png";
import sponsorStars from "@/assets/worwf/sponsors/stars-and-stripes.jpg";

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


      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(110deg, oklch(0.20 0.08 25 / 0.92) 0%, oklch(0.20 0.08 25 / 0.6) 45%, oklch(0.45 0.2 27 / 0.4) 100%), url(${heroImg})`,
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
                            className="group/link flex items-center justify-between gap-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
                          >
                            <span className="flex-1 leading-snug">{l.label}</span>
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-200 group-hover/link:bg-accent group-hover/link:text-accent-foreground group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
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

    </div>
  );
}
