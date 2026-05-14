import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CalendarPlus,
  AlertTriangle,
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Mail,
} from "lucide-react";

import venueImg from "@/assets/worwf/gallery/speakers/10.23-Members-with-Guest-Speaker-Ambassador-Nancy-Brinker-1080x493.jpg";
import messinaImg from "@/assets/worwf/events/messina.jpg";
import jacksonImg from "@/assets/worwf/events/jackson.jpg";
import ingogliaImg from "@/assets/worwf/events/ingoglia.jpg";
import america250Img from "@/assets/worwf/events/america250.jpg";

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

const futureDates = [
  { date: "August 13, 2026", day: "Thursday" },
  { date: "September 10, 2026", day: "Thursday" },
  { date: "October 8, 2026", day: "Thursday" },
  { date: "November 12, 2026", day: "Thursday" },
  { date: "December 10, 2026", day: "Thursday" },
];

function EventsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Page hero — matches other pages */}
      <section className="relative overflow-hidden text-primary-foreground min-h-[60vh] flex items-center py-24 md:py-32">
        <div
          aria-hidden
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            backgroundImage: `url(${venueImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(1.15)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `linear-gradient(110deg, oklch(0.18 0.12 250 / 0.85) 0%, oklch(0.22 0.16 320 / 0.75) 50%, oklch(0.28 0.20 25 / 0.80) 100%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1] bg-black/30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 z-[2] size-[640px] rounded-full border border-primary-foreground/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 z-[2] size-[480px] rounded-full border border-primary-foreground/10"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center w-full">
          <p className="text-sm font-semibold tracking-wide text-primary-foreground/80">
            Educate. Motivate. Activate.
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Event &amp; Luncheon Reservations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Join the West Orange Republican Women Federated for our monthly meetings, networking,
            and community impact.
          </p>
        </div>
      </section>

      {/* Venue logistics */}
      <section className="bg-muted py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <div className="md:col-span-2 flex items-start gap-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary md:text-3xl">Join Us For Lunch!</h2>
              <p className="mt-2 text-muted-foreground">
                WORWF meets monthly at <span className="font-semibold text-foreground">West Orange Country Club</span>
              </p>
              <div className="mt-5 grid gap-3 rounded-lg border border-border bg-muted/60 p-4 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> Doors open <strong className="text-foreground">11:00 AM</strong>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-4 text-secondary" /> Meeting <strong className="text-foreground">11:30 AM – 1:30 PM</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Event Pricing</span>
            <div className="mt-2 text-5xl font-extrabold">$35</div>
            <div className="text-sm font-medium opacity-90">Members &amp; Guests</div>
            <div className="mt-4 w-full border-t border-primary-foreground/20 pt-4 text-xs">
              Candidate Special: <strong>$25</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meeting Event */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="inline-block text-4xl font-extrabold text-secondary md:text-5xl">
              Featured Meeting Event
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div className="flex flex-col items-center justify-between gap-3 bg-primary px-6 py-5 text-primary-foreground sm:flex-row sm:px-8">
              <div className="flex items-center gap-3">
                <Calendar className="size-6 opacity-80" />
                <span className="text-base font-bold tracking-widest md:text-lg">
                  THURSDAY, MAY 14, 2026
                </span>
              </div>
              <span className="rounded-full bg-primary-foreground/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                RSVP by May 10th
              </span>
            </div>

            <div className="px-6 py-12 text-center md:px-16">
              <h3 className="mx-auto max-w-2xl text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                Make Informed Choices for Orange County Representation
              </h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Guest Speakers
              </p>

              <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
                {/* Messina */}
                <div className="group">
                  <div className="relative mx-auto mb-8 size-56">
                    <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-primary transition-transform duration-300 group-hover:rotate-6" />
                    <img
                      src={messinaImg}
                      alt="Chris Messina"
                      className="relative size-full rounded-[2rem] border-4 border-card object-cover shadow-xl transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary">Chris Messina</h4>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Candidate for Orange County Mayor
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center border-b-2 border-transparent pb-1 text-sm font-bold text-primary transition-all hover:border-primary"
                  >
                    Candidate Vision Statement
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </div>

                {/* Jackson */}
                <div className="group">
                  <div className="relative mx-auto mb-8 size-56">
                    <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-secondary transition-transform duration-300 group-hover:-rotate-6" />
                    <img
                      src={jacksonImg}
                      alt="Bonnie Jackson"
                      className="relative size-full rounded-[2rem] border-4 border-card object-cover shadow-xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary">Bonnie Jackson</h4>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    State Committeewoman • Candidate for FL House District 42
                  </p>
                  <a
                    href="https://jacksonforflorida.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center border-b-2 border-transparent pb-1 text-sm font-bold text-primary transition-all hover:border-primary"
                  >
                    District 42 Campaign Plan
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-muted p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Main Topic
                </p>
                <p className="mt-3 text-2xl font-extrabold text-secondary md:text-3xl">
                  Winning to Represent Orange County
                </p>
              </div>

              <a
                href="#"
                className="mx-auto mt-10 flex w-full max-w-2xl items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95 md:text-lg"
              >
                Reserve Your Seat Today
                <ArrowRight className="size-5" />
              </a>

              <div className="mt-6 flex flex-col justify-center gap-4 text-sm font-medium text-muted-foreground sm:flex-row sm:gap-8">
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> $35 Members &amp; Guests
                </span>
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> $25 Candidate Special
                </span>
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Buffet Lunch Included
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs uppercase leading-relaxed text-muted-foreground">
            West Orange Republican Women, Federated, supports all Republican candidates in partisan
            and non-partisan elections, and does not endorse any candidate before the primary
            election.
          </p>
        </div>
      </section>

      {/* Upcoming + Future dates */}
      <section className="bg-muted py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3 lg:items-start">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="border-l-4 border-primary pl-5 text-3xl font-extrabold text-secondary md:text-4xl">
              Upcoming Events
            </h3>

            <article className="group flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:flex-row">
              <img
                src={ingogliaImg}
                alt="Blaise Ingoglia"
                className="size-24 shrink-0 rounded-full border-4 border-muted object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <Calendar className="size-3.5" /> Friday, June 5, 2026 · 9–11 AM
                </div>
                <h4 className="mt-2 text-xl font-bold text-secondary">Breakfast with Blaise</h4>
                <p className="text-sm text-muted-foreground">
                  Guest: Blaise Ingoglia, Florida CFO • West Orange CC
                </p>
              </div>
              <a
                href="#"
                className="w-full rounded-xl bg-secondary px-6 py-3 text-center text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/90 sm:w-auto"
              >
                Tickets
              </a>
            </article>

            <article className="group flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:flex-row">
              <img
                src={america250Img}
                alt="A Hero Celebration"
                className="size-24 shrink-0 rounded-full border-4 border-muted object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  <Calendar className="size-3.5" /> Thursday, July 9, 2026 · 11:30 AM
                </div>
                <h4 className="mt-2 text-xl font-bold text-secondary">A Hero Celebration!</h4>
                <p className="text-sm text-muted-foreground">
                  General Luncheon Meeting • West Orange CC
                </p>
              </div>
              <a
                href="#"
                className="w-full rounded-xl bg-secondary px-6 py-3 text-center text-sm font-bold text-secondary-foreground transition-colors hover:bg-secondary/90 sm:w-auto"
              >
                Tickets
              </a>
            </article>
          </div>

          <div className="rounded-3xl bg-secondary p-8 text-secondary-foreground shadow-xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Calendar className="size-6 text-primary" />
              <h3 className="text-xl font-extrabold tracking-tight">Future Dates</h3>
            </div>
            <p className="mb-4 text-center text-xs uppercase tracking-widest opacity-70">
              2026 Monthly Meetings
            </p>
            <div className="space-y-3">
              {futureDates.map((d) => (
                <div
                  key={d.date}
                  className="group flex items-center justify-between rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 transition-colors hover:bg-secondary-foreground/10"
                >
                  <span className="text-sm font-medium">{d.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-70">
                    {d.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special events + GOP calendar */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-sm transition-all hover:shadow-xl">
            <div className="absolute -right-10 -top-10 size-32 rounded-bl-full bg-primary/5 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <Sparkles className="size-7" />
              </div>
              <h4 className="text-3xl font-extrabold text-secondary">Special Events</h4>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Beyond our monthly luncheons, we host rallies, community workshops, and candidate
                forums throughout the year.
              </p>
              <div className="mt-6 inline-flex rounded-full bg-muted px-5 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Stay tuned for updates
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-sm transition-all hover:shadow-xl">
            <div className="absolute -right-10 -top-10 size-32 rounded-bl-full bg-secondary/5 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg">
                <CalendarPlus className="size-7" />
              </div>
              <h4 className="text-3xl font-extrabold text-secondary">Orange GOP Calendar</h4>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Interested in what else is happening in the county? View the full Republican Party
                of Orange County master calendar.
              </p>
              <Button asChild variant="cta" className="mt-6 rounded-xl px-6 font-semibold">
                <a href="https://www.orangefl.gop/calendar" target="_blank" rel="noopener noreferrer">
                  View GOP Master Calendar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-border bg-card p-10 shadow-sm md:p-14">
            <div className="mb-10 flex items-center gap-5">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-accent/20 text-accent-foreground">
                <AlertTriangle className="size-7 text-primary" />
              </div>
              <h4 className="text-2xl font-extrabold uppercase tracking-wide text-secondary">
                Important Information
              </h4>
            </div>
            <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
              {[
                "All Republicans are welcome. Advanced payment is required; walk-in seating is not available due to catering contracts.",
                "Reservations are required by the RSVP date stated. Late entries may not be accommodated.",
                "If purchasing multiple tickets, list all attendee names in the Notes field at checkout.",
                "Your email receipt is your ticket. All purchases are final and non-refundable.",
                "Members: to pay by check, email RSVP to Reservations@WORWF.org.",
                "Republican candidates may speak for 2 minutes — request agenda time via President@WORWF.org.",
              ].map((note) => (
                <div key={note} className="flex items-start gap-4">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 md:flex-row">
              <p className="max-w-2xl text-center text-[11px] italic leading-relaxed text-muted-foreground md:text-left">
                WORWF supports all Republican candidates in partisan and non-partisan elections and
                does not officially endorse any specific candidate prior to the primary election.
              </p>
              <div className="flex flex-col items-center md:items-end">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Member Inquiry
                </p>
                <a
                  href="mailto:Reservations@WORWF.org"
                  className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline"
                >
                  <Mail className="size-4" /> Reservations@WORWF.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
