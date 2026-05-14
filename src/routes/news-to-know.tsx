import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import heroImg from "@/assets/worwf/news/hero.jpg";
import goldAward from "@/assets/worwf/news/gold-award.jpg";
import foodDrive from "@/assets/worwf/news/food-drive.jpg";
import roundup from "@/assets/worwf/news/roundup.jpg";
import schoolImg from "@/assets/worwf/news/school.jpg";
import kirbyImg from "@/assets/worwf/news/kirby.jpg";
import activateBg from "@/assets/worwf/news/activate-bg.jpg";
import termLimitsBg from "@/assets/worwf/news/term-limits-bg.jpg";

export const Route = createFileRoute("/news-to-know")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News to Know — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Stay informed with WORWF: top news, member engagement, education updates, calls to action, and voter resources.",
      },
      { property: "og:title", content: "News to Know — WORWF" },
      {
        property: "og:description",
        content:
          "Membership engagement, education updates, calls to action and voter resources from West Orange Republican Women Federated.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Events", to: "/events" as const },
  { label: "News to Know", to: "/news-to-know" as const, caret: true, active: true },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

const memberCards = [
  {
    img: goldAward,
    title: "WORWF Members Attend FFRW Spring Conference",
    body:
      "WORWF Receives GOLD Award. The Florida Federation of Republican Women's Spring Conference was held in Orlando, FL on April 19–21. During the event, WORWF received the Gold Award for their 2022–2023 volunteer hours. All the hard work on behalf of getting Republicans...",
  },
  {
    img: foodDrive,
    title: "2025 Edgewood Children's Ranch Food Drive",
    body:
      "WORWF Caring for America. WORWF continues their Edgewood Children's Ranch Food Drive in 2025 as the club's Caring for America service project. In 2024, West Orange Republican Women members proudly donated 2,096 lbs. of groceries plus $740 in gift cards and...",
  },
  {
    img: roundup,
    title:
      "WORWF Members Attend Edgewood Children's Ranch 40th Annual Round Up Dinner & Auction",
    body:
      "40th Country Round-Up Dinner & Auction for Edgewood Children's Ranch. WORWF members saddled up to attend the 40th Annual Country Round-Up Dinner & Auction at Gaylord Palms Convention Center on September 23, 2023. The event benefits the Edgewood Children's...",
  },
];

const educationCards = [
  {
    img: schoolImg,
    title: "2024 Orange County School Board Meeting Dates",
    body:
      "Our Education Committee encourages members to attend the 2024 School Board Meetings. The school board will take public comments on non-agenda items at 4:00 p.m. concluding no later than 30 minutes after commencing. Procedures and all 2024 meeting dates can be found...",
  },
  {
    img: kirbyImg,
    title: "WORWF Education Committee on the Campaign Trail",
    body:
      "Our Education Team went to bat on Primary Election Day for WORWF Member Rachel Kirby, a conservative Orange County school board candidate. Though she did not win against the incumbent, Angie Gallo, Rachel is committed to speaking up against their liberal and woke...",
  },
  {
    img: schoolImg,
    title: "OCPS 2022 School Board Meeting Schedule",
    body:
      "YOU CAN MAKE A DIFFERENCE!! 2022 OCPS School Board Meeting Schedule. We encourage Members to attend the Orange County Public School Board meetings. The School Board conducts regular Board Meetings on the 2nd & 4th Tuesday of every month with several modifications...",
  },
];

const callsToAction = [
  {
    title: "OCREC – Become a Member",
    body:
      "Orange County Republican Executive Committee (OCREC) NEEDS YOU!! Next Meeting: Thursday, September 22, 2022 at 6:00 PM, Mark's Street Senior Center, Orlando. In Orange County, the Republican Executive Committee (OCREC) is the official organization of the Republican Party....",
  },
  {
    title: "Check Your Voter Status",
    body:
      "It's important that all our votes are counted! Here are three (3) ways to help with Election Integrity. While you are at it, share this information with your family, friends and neighbors. 1) Verify your Voter Registration Status. Check to ensure you are on the voter...",
  },
  {
    title: "Track 2022 FFRW Legislative Priorities for Florida",
    body:
      "Call-to-Action: Track 2022 FFRW Legislative Priorities for Florida. Get Involved... Pay Attention... Let your voices be heard! The list below is the FFRW Legislative Priorities for Florida. Track these bills at myfloridahouse.gov to see how they are making their way through...",
  },
];

const voterResources: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "National/State/Local",
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
    heading: "Florida Representative",
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
    links: [
      { label: "RNC Women", href: "https://www.gop.com/communities/rnc-women/" },
      { label: "National Federation of Republican Women", href: "https://www.nfrw.org/" },
      { label: "Florida Federation of Republican Women", href: "http://www.ffrw.net/home.php" },
    ],
  },
  {
    heading: "Voter ID/Status",
    links: [
      { label: "Check your Voter ID Status", href: "https://registration.elections.myflorida.com/CheckVoterStatus" },
      { label: "Voter Precinct Lookup", href: "https://dos.myflorida.com/elections/for-voters/check-your-voter-status-and-polling-place/voter-precinct-lookup/" },
    ],
  },
];

function Card({ img, title, body }: { img: string; title: string; body: string }) {
  return (
    <article className="flex flex-col">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <span className="mt-5 inline-block w-fit rounded bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
        Membership Engagement
      </span>
      <h3 className="mt-4 text-xl font-extrabold leading-snug md:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

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
        <div className="mx-auto max-w-7xl px-6 py-24 text-primary-foreground md:py-32">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            News to Know, Education, and Ways to Activate
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg">
            Join the community: stay informed with top news, educational updates, and voter resources.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/membership">
              <Button variant="destructive" className="rounded-md px-7 py-6 text-base font-semibold">
                Become a Member
              </Button>
            </Link>
            <Button className="rounded-md bg-primary px-7 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
              Donate Us
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Engagement */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            Membership Engagement
          </h2>
          <div className="mt-12 flex items-center gap-4">
            <button
              aria-label="Previous"
              className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary md:flex"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="grid flex-1 gap-10 md:grid-cols-3">
              {memberCards.map((c) => (
                <Card key={c.title} {...c} />
              ))}
            </div>
            <button
              aria-label="Next"
              className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary md:flex"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </section>

      {/* Term limits — members only */}
      <section
        className="relative text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.32 0.18 260 / 0.85), oklch(0.32 0.18 260 / 0.7)), url(${termLimitsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center text-3xl font-extrabold md:text-5xl">Term limits</h2>
          <div className="mt-12">
            <h3 className="text-xl font-bold md:text-2xl">Members Only Content</h3>
            <p className="mt-2 text-sm opacity-90">
              This content is available for logged-in users only.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            Education
          </h2>
          <div className="mt-12 flex items-center gap-4">
            <button
              aria-label="Previous"
              className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary md:flex"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="grid flex-1 gap-10 md:grid-cols-3">
              {educationCards.map((c) => (
                <article key={c.title} className="flex flex-col">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-primary">
                    <img src={c.img} alt="" className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-5 inline-block w-fit rounded bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
                    Education
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold leading-snug md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
            <button
              aria-label="Next"
              className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary md:flex"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </section>

      {/* Activate – Call to Action */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.2 0.04 260 / 0.6), oklch(0.2 0.04 260 / 0.6)), url(${activateBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-md p-8 md:p-14"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.16 260 / 0.92), oklch(0.28 0.16 260 / 0.92))",
            }}
          >
            <div className="text-center text-primary-foreground">
              <h2 className="text-3xl font-extrabold md:text-5xl">Activate – Call to Action</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded bg-amber-400" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {callsToAction.map((c) => (
                <div key={c.title} className="rounded-md bg-card p-7 shadow-lg">
                  <h3 className="text-lg font-extrabold leading-snug md:text-xl">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <a
                    href="#"
                    className="mt-5 inline-block text-sm font-semibold text-secondary hover:underline"
                  >
                    read more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voter Resources */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Voter Resources</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-amber-400" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {voterResources.map((col) => (
              <div key={col.heading}>
                <h3 className="font-serif text-2xl font-bold text-foreground">{col.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-sky-600 transition-colors hover:text-secondary hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
