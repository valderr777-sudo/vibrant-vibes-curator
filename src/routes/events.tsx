import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Facebook,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  CalendarPlus,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import venueImg from "@/assets/worwf/events/venue.jpg";
import torisiImg from "@/assets/worwf/events/torisi.jpg";
import voteImg from "@/assets/worwf/events/vote.jpg";
import elephantImg from "@/assets/worwf/elephant.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Event & Luncheon Reservations — WORWF" },
      {
        name: "description",
        content:
          "WORWF meets monthly at West Orange Country Club. Reserve your seat for upcoming luncheons and special events.",
      },
      { property: "og:title", content: "Event & Luncheon Reservations — WORWF" },
      {
        property: "og:description",
        content:
          "Monthly luncheons at West Orange Country Club. RSVP for our next featured speaker.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Events", to: "/events" as const, active: true },
  { label: "News to Know", to: "/news-to-know" as const, caret: true },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

const futureDates = [
  { n: 2, date: "Thursday, September 11", venue: "West Orange CC" },
  { n: 3, date: "Thursday, October 9th", venue: "West Orange CC" },
  { n: 4, date: "Thursday, November 13th", venue: "West Orange CC" },
];

function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" /> info@worwf.org
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
      <section className="relative isolate overflow-hidden bg-primary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <h1 className="text-5xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            Event &amp;<br />Luncheon<br />Reservations
          </h1>
          <div className="flex justify-center md:justify-end">
            <img src={worwfLogo} alt="WORWF seal" className="size-56 object-contain md:size-72" />
          </div>
        </div>
      </section>

      {/* New Venue */}
      <section className="bg-[oklch(0.96_0.02_250)] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <img src={venueImg} alt="West Orange Country Club entrance" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-lg bg-card p-8 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-3">
              <MapPin className="size-8 text-secondary" />
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">NEW VENUE!</h2>
            </div>
            <p className="mt-6 text-base">
              <span className="font-bold">WORWF meets monthly at </span>
              <span className="font-bold text-secondary">West Orange Country Club</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              3300 West Orange Country Club Drive, Winter Garden, FL 34787
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-md bg-muted p-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-secondary" />
              <p className="text-sm text-muted-foreground">
                The meeting begins promptly at 11:30 am and ends at 1:30 pm.{" "}
                <em>*Doors open at 11:00 am.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meeting Event */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-foreground md:text-5xl">
            Featured Meeting Event
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />

          <div className="mt-12 grid items-start gap-10 rounded-lg bg-[oklch(0.96_0.02_265)] p-8 md:grid-cols-[auto_1fr] md:p-12">
            <img
              src={torisiImg}
              alt="Michael Troisi, retired NYPD"
              className="mx-auto w-72 rounded-md object-cover shadow-[var(--shadow-elegant)]"
            />
            <div>
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Calendar className="size-6 text-secondary" />
                <h3 className="text-xl font-bold text-foreground md:text-2xl">
                  THURSDAY, SEPTEMBER 11, 2025
                </h3>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
                <p>
                  <strong>TOPIC:</strong> In The Line of Duty: An NYPD Sergeant&apos;s First-Hand
                  Account of 9/11
                </p>
                <p>
                  <strong>Guest Speaker:</strong> Michael Troisi, Former NYPD Sergeant On Duty at
                  World Trade Center on September 11, 2001
                </p>
                <p>
                  <strong>Location:</strong> West Orange Country Club – 3300 West Orange Country
                  Club Drive, Winter Garden, FL 34787
                </p>
                <p>
                  <strong>Michael Troisi</strong> is a 20-year veteran of the NYPD. He was hired in
                  1986 as a Police Officer in Brooklyn, New York. He was promoted to Sergeant in
                  1994 and retired in 2006.
                </p>
                <p>
                  Sgt. Troisi was on duty as the{" "}
                  <strong>Patrol Supervisor in the NYPD 23rd Precinct</strong> when the September
                  11th terrorist attack occurred. Along with eight NYPD Police Officers, he was
                  mobilized to the <strong>World Trade Center</strong> to assist with the rescue
                  efforts. Sgt. Troisi and his officers reported to the tower area, only to be
                  engulfed in a massive white dust cloud, where he was separated from all but one
                  of his officers during the first collapse. Sgt. Troisi continued rescue efforts
                  with other first responders. He eventually received medical attention and was
                  transported to a Staten Island hospital.
                </p>
                <p>
                  Sgt. Troisi was born in <strong>Brooklyn, NY</strong>. He and his family lived in
                  the NYC area until their move to Florida in 2005. Sgt. Troisi has been married to
                  his wife, <strong>Nancy,</strong> for 35 years. They have four adult children and
                  three grandchildren. They continue to give back and are involved in various
                  church ministries.
                </p>
                <p className="font-bold text-secondary">
                  Remember 9/11 and the attack on NYC through the eyes of this Outstanding
                  Speaker!
                </p>
              </div>

              <a
                href="#"
                className="mt-8 flex items-center justify-center gap-3 rounded-md bg-card px-6 py-4 text-sm font-bold text-secondary shadow-[var(--shadow-elegant)] hover:bg-muted"
              >
                <ArrowRight className="size-5" />
                CLICK HERE to reserve your seat AUGUST 27 thru SUNDAY, SEPTEMBER 7th.
              </a>
            </div>
          </div>

          {/* Pricing band */}
          <div className="mt-10 rounded-lg bg-[oklch(0.93_0.03_280)] p-10 text-center">
            <p className="text-base font-bold">EVENT PRICING: $35 Members, $45 Non-Members</p>
            <p className="mt-3 text-sm">End of Summer Guest Special — only $35!</p>
            <p className="mt-3 text-sm">
              Admission includes buffet lunch at West Orange Country Club, Winter Garden, FL.
            </p>
            <p className="mt-5 text-sm font-bold">
              **RESERVATIONS ARE REQUIRED for THURSDAY, SEPTEMBER 11, 2025
              <br />
              and may be purchased online thru SEPTEMBER 7th.**
            </p>
            <p className="mt-3 text-sm font-bold">
              BRING A FRIEND! JOIN US TO TURN ORANGE COUNTY RED!
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-foreground md:text-5xl">
            Upcoming Events
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                img: torisiImg,
                date: "THURSDAY, SEPTEMBER 11, 2025",
                title: "General Luncheon Meeting",
                venue: "WEST ORANGE CC",
                meta: (
                  <>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wide underline">
                      Speaker:
                    </p>
                    <p className="mt-1 text-sm font-bold">MICHAEL TORISI, Retired NYPD</p>
                  </>
                ),
              },
              {
                img: voteImg,
                date: "THURSDAY, OCTOBER 9th",
                title: "General Luncheon Meeting",
                venue: "WEST ORANGE CC",
                meta: <p className="mt-3 text-sm font-semibold">TOPIC: TBA</p>,
              },
            ].map((e) => (
              <article
                key={e.date}
                className="flex gap-4 rounded-lg bg-[oklch(0.96_0.02_250)] p-4 shadow-[var(--shadow-elegant)]"
              >
                <img src={e.img} alt={e.title} className="size-32 shrink-0 rounded object-cover" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold">
                    <Calendar className="size-4 text-secondary" /> {e.date}
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{e.title}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase text-secondary underline">
                    {e.venue}
                  </p>
                  {e.meta}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Dates */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Calendar className="mx-auto size-8 text-secondary" />
          <h2 className="mt-3 text-2xl font-extrabold tracking-wide">FUTURE DATES!</h2>
          <div className="mx-auto mt-4 h-px w-full bg-border" />

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {futureDates.map((d) => (
              <div key={d.n} className="flex flex-col items-center">
                <div className="flex size-28 items-center justify-center rounded-full border-2 border-dashed border-secondary/40 bg-secondary/5 text-3xl font-bold text-secondary">
                  {d.n}
                </div>
                <p className="mt-6 text-base font-bold">{d.date}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d.venue}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 h-px w-full bg-border" />
          <div className="mt-6 flex justify-center gap-3">
            <button className="flex size-10 items-center justify-center rounded bg-primary text-primary-foreground hover:opacity-90">
              <ChevronLeft className="size-5" />
            </button>
            <button className="flex size-10 items-center justify-center rounded bg-primary text-primary-foreground hover:opacity-90">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Special Events / Orange GOP Calendar */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-lg bg-[oklch(0.93_0.03_265)] p-10 text-center">
            <CalendarPlus className="mx-auto size-9 text-secondary" />
            <h3 className="mt-3 text-2xl font-bold">Special Events</h3>
            <div className="mx-auto mt-4 h-px w-full bg-border" />
            <p className="mt-8 text-sm italic text-muted-foreground">
              No special events at the moment. Stay tuned for updates!
            </p>
          </div>
          <div className="rounded-lg bg-[oklch(0.93_0.03_265)] p-10 text-center">
            <img src={elephantImg} alt="GOP" className="mx-auto size-12 object-contain" />
            <h3 className="mt-3 text-2xl font-bold">Orange GOP Calendar</h3>
            <div className="mx-auto mt-4 h-px w-full bg-border" />
            <Button variant="destructive" className="mt-8 rounded-md px-6 font-semibold">
              View Orange GOP Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Please Note */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AlertTriangle className="mx-auto size-10 text-secondary" />
          <h3 className="mt-4 text-2xl font-bold">PLEASE NOTE:</h3>
          <div className="mx-auto mt-4 h-px w-3/4 bg-border" />
          <div className="mt-8 space-y-3 text-sm text-foreground">
            <p>**All Republicans are welcome.</p>
            <p>*Payment in advance is required. Walk-in seating is not available.</p>
            <p>** Reservations are required by the RSVP date stated before the luncheon.</p>
            <p>**Please purchase your admission online. Select Member or Non-Member Admission.</p>
            <p>If purchasing more than one ticket, please list attendees in the <strong>NOTES</strong> field at Checkout.</p>
            <p className="italic">**Your email receipt is your ticket. Purchase is final and Non-Refundable.</p>
            <p>
              **<strong>MEMBERS:</strong> if you would like to pay by check, please email RSVP to:{" "}
              <a href="mailto:Reservations@WORWF.org" className="text-secondary underline">
                Reservations@WORWF.org
              </a>
            </p>
            <p className="font-semibold">
              <span className="text-secondary">REPUBLICAN CANDIDATES</span> are welcome to join us at General Meetings and speak for two minutes with advance request for agenda time to{" "}
              <a href="mailto:President@WORWF.org" className="text-secondary underline">
                President@WORWF.org
              </a>.
            </p>
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
                info@worwf.org <Mail className="size-4" />
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
            <Button variant="destructive" className="rounded-md px-6 font-semibold">
              Contact Us
            </Button>
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
