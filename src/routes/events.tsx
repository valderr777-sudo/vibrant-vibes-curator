import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Facebook,
  ChevronUp,
  Calendar,
  Clock,
  CalendarPlus,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import venueImg from "@/assets/worwf/events/venue.jpg";
import messinaImg from "@/assets/worwf/events/messina.jpg";
import jacksonImg from "@/assets/worwf/events/jackson.jpg";
import ingogliaImg from "@/assets/worwf/events/ingoglia.jpg";
import america250Img from "@/assets/worwf/events/america250.jpg";
import elephantImg from "@/assets/worwf/elephant.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Event & Luncheon Reservations — WORWF" },
      {
        name: "description",
        content:
          "WORWF meets monthly at West Orange Country Club. Reserve your seat for the May 14, 2026 luncheon featuring Chris Messina and Bonnie Jackson.",
      },
      { property: "og:title", content: "Event & Luncheon Reservations — WORWF" },
      {
        property: "og:description",
        content:
          "Join us Thursday, May 14, 2026 — Make Informed Choices for Orange County Representation.",
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

const futureDates = [
  "Friday, June 5, 2026",
  "Thursday, July 9, 2026",
  "Thursday, August 13, 2026",
  "Thursday, September 10, 2026",
  "Thursday, October 8, 2026",
  "Thursday, November 12, 2026",
  "Thursday, December 10, 2026",
];

function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">


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

      {/* Venue */}
      <section className="bg-[oklch(0.97_0.02_25)] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <img src={venueImg} alt="West Orange Country Club entrance" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-lg bg-card p-8 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-3">
              <MapPin className="size-8 text-secondary" />
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">JOIN US FOR LUNCH!</h2>
            </div>
            <p className="mt-6 text-base">
              <span className="font-bold">WORWF meets monthly at </span>
              <span className="font-bold text-secondary">West Orange Country Club</span>
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

          <div className="mt-12 rounded-lg bg-[oklch(0.97_0.02_25)] p-8 md:p-12">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Calendar className="size-6 text-secondary" />
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                THURSDAY, MAY 14, 2026
              </h3>
            </div>

            <p className="mt-6 text-center text-lg font-bold uppercase text-secondary">
              Make Informed Choices for Orange County Representation!
            </p>

            <p className="mt-8 text-center text-sm font-bold uppercase tracking-wide">
              Guest Speakers:
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {/* Messina */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={messinaImg}
                  alt="Chris Messina"
                  className="w-56 rounded-md object-cover shadow-[var(--shadow-elegant)]"
                />
                <h4 className="mt-4 text-xl font-bold">CHRIS MESSINA</h4>
                <p className="mt-1 text-sm font-semibold uppercase text-muted-foreground">
                  Candidate for Orange County Mayor
                </p>
                <a
                  href="#"
                  className="mt-3 text-sm italic text-secondary underline hover:opacity-80"
                >
                  For Chris&apos;s vision for Orange County, CLICK HERE
                </a>
              </div>

              {/* Jackson */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={jacksonImg}
                  alt="Bonnie Jackson"
                  className="w-56 rounded-md object-cover shadow-[var(--shadow-elegant)]"
                />
                <h4 className="mt-4 text-xl font-bold">BONNIE JACKSON</h4>
                <p className="mt-1 text-sm font-semibold uppercase text-muted-foreground">
                  State Committeewoman for Orange County
                  <br />
                  Candidate for Florida House District 42
                </p>
                <a
                  href="#"
                  className="mt-3 text-sm italic text-secondary underline hover:opacity-80"
                >
                  For Bonnie&apos;s Plan to Represent District 42 in Tallahassee, CLICK HERE
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm font-bold uppercase tracking-wide">Topic:</p>
              <p className="mt-1 text-lg font-bold text-secondary">
                Winning to Represent Orange County
              </p>
            </div>

            <a
              href="#"
              className="mt-8 flex items-center justify-center gap-3 rounded-md bg-card px-6 py-4 text-sm font-bold text-secondary shadow-[var(--shadow-elegant)] hover:bg-muted"
            >
              <ArrowRight className="size-5" />
              CLICK HERE to reserve your seat thru SUNDAY, MAY 10th.
            </a>
          </div>

          {/* Pricing band */}
          <div className="mt-10 rounded-lg bg-[oklch(0.95_0.03_25)] p-10 text-center">
            <p className="text-base font-bold underline">EVENT PRICING – SUMMER SPECIAL:</p>
            <p className="mt-3 text-sm font-bold">$35 MEMBERS AND GUESTS</p>
            <p className="mt-1 text-sm font-bold">CANDIDATE SPECIAL: $25</p>
            <p className="mt-5 text-sm">
              Admission includes buffet lunch at West Orange Country Club.
            </p>
            <p className="mt-5 text-sm font-bold">
              **RESERVATIONS ARE REQUIRED FOR THURSDAY, MAY 14, 2026
              <br />
              AND MAY BE PURCHASED ONLINE THRU MAY 10TH.**
            </p>
            <p className="mt-3 text-sm font-bold">
              Candidates! Contact{" "}
              <a href="mailto:President@WORWF.org" className="text-secondary underline">
                President@WORWF.org
              </a>{" "}
              for time in Candidate&apos;s Corner
            </p>
            <p className="mt-3 text-sm font-bold">
              BRING A FRIEND! JOIN US TO TURN ORANGE COUNTY RED!
            </p>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-xs uppercase leading-relaxed text-muted-foreground">
            West Orange Republican Women, Federated, supports all Republican candidates in
            partisan and non-partisan elections, and does not endorse any candidate before the
            primary election. Any photos or information regarding candidates mentioned in this
            or any communication from WORWF is provided for your information, and should not be
            construed as an endorsement.
          </p>
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
            <article className="flex gap-4 rounded-lg bg-[oklch(0.97_0.02_25)] p-4 shadow-[var(--shadow-elegant)]">
              <img src={ingogliaImg} alt="Blaise Ingoglia" className="size-32 shrink-0 rounded object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold">
                  <Calendar className="size-4 text-secondary" /> FRIDAY, JUNE 5, 2026 · 9–11 AM
                </div>
                <h3 className="mt-3 text-lg font-bold">Breakfast with Blaise</h3>
                <p className="mt-1 text-sm font-semibold uppercase text-secondary underline">
                  West Orange CC
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide underline">Speaker:</p>
                <p className="mt-1 text-sm font-bold">BLAISE INGOGLIA, Florida CFO</p>
              </div>
            </article>

            <article className="flex gap-4 rounded-lg bg-[oklch(0.97_0.02_25)] p-4 shadow-[var(--shadow-elegant)]">
              <img src={america250Img} alt="Happy 250th Birthday America" className="size-32 shrink-0 rounded object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold">
                  <Calendar className="size-4 text-secondary" /> THURSDAY, JULY 9, 2026
                </div>
                <h3 className="mt-3 text-lg font-bold">A Hero Celebration!</h3>
                <p className="mt-1 text-sm font-semibold uppercase text-secondary underline">
                  West Orange CC
                </p>
                <p className="mt-3 text-sm font-semibold">General Luncheon Meeting</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Future Dates */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Calendar className="mx-auto size-8 text-secondary" />
          <h2 className="mt-3 text-2xl font-extrabold tracking-wide">FUTURE DATES!</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            2026 Monthly WORWF Meetings at West Orange Country Club
          </p>
          <div className="mx-auto mt-6 h-px w-full bg-border" />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {futureDates.map((d) => (
              <li
                key={d}
                className="rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold shadow-sm"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Special Events / Orange GOP Calendar */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-lg bg-[oklch(0.95_0.03_25)] p-10 text-center">
            <CalendarPlus className="mx-auto size-9 text-secondary" />
            <h3 className="mt-3 text-2xl font-bold">Special Events</h3>
            <div className="mx-auto mt-4 h-px w-full bg-border" />
            <p className="mt-8 text-sm italic text-muted-foreground">
              No special events at the moment. Stay tuned for updates!
            </p>
          </div>
          <div className="rounded-lg bg-[oklch(0.95_0.03_25)] p-10 text-center">
            <img src={elephantImg} alt="GOP" className="mx-auto size-12 object-contain" />
            <h3 className="mt-3 text-2xl font-bold">Orange GOP Calendar</h3>
            <div className="mx-auto mt-4 h-px w-full bg-border" />
            <Button variant="cta" className="mt-8 rounded-md px-6 font-semibold">
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
    </div>
  );
}
