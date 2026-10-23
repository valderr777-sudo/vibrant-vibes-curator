import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

import { EventsCommunity } from "@/components/events-community";

import venueImg from "@/assets/worwf/gallery/speakers/10.23-Members-with-Guest-Speaker-Ambassador-Nancy-Brinker-1080x493.jpg";
import { useEventDay } from "@/hooks/use-event-day";
import { eventStatus, visibleEvents, formatEventDate } from "@/lib/event-dates";
import { EventTodayTag } from "@/components/event-today-tag";
import {
  featuredSpeakers,
  featuredMeeting,
  upcomingEvents,
  futureMeetingDates,
} from "@/content/site-content";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Event & Luncheon Reservations | WORWF" },
      {
        name: "description",
        content:
          "Explore WORWF's upcoming luncheons, speakers and community events at West Orange Country Club.",
      },
      { property: "og:title", content: "Event & Luncheon Reservations | WORWF" },
      {
        property: "og:description",
        content:
          "Join WORWF for upcoming meetings, guest speakers and community activities in West Orange County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});

function EventsPage() {
  const today = useEventDay();
  const showFeatured =
    Boolean(featuredMeeting.date) && visibleEvents([featuredMeeting], today).length > 0;
  const activeUpcoming = visibleEvents(upcomingEvents, today);
  const activeDates = visibleEvents(futureMeetingDates, today).filter(
    (meeting) => !showFeatured || meeting.date !== featuredMeeting.date,
  );
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (
      !window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches
    )
      return;
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
          className="people-background responsive-parallax absolute inset-0 z-0 will-change-transform"
          style={{
            backgroundImage: `url(${venueImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate3d(0, ${Math.min(scrollY * 0.08, 24)}px, 0)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `linear-gradient(110deg, oklch(0.18 0.12 250 / 0.85) 0%, oklch(0.22 0.16 320 / 0.75) 50%, oklch(0.28 0.20 25 / 0.80) 100%)`,
          }}
        />
        <div aria-hidden className="absolute inset-0 z-[1] bg-black/30" />
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
          <div className="md:col-span-2 flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:flex-row">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary md:text-3xl">Join Us For Lunch!</h2>
              <p className="mt-2 text-muted-foreground">
                WORWF meets monthly at{" "}
                <span className="font-semibold text-foreground">West Orange Country Club</span>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=West+Orange+Country+Club+3300+West+Orange+Country+Club+Drive+Winter+Garden+FL+34787"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                3300 West Orange Country Club Drive, Winter Garden, FL 34787
              </a>
              <div className="mt-5 grid gap-3 rounded-lg border border-border bg-muted/60 p-4 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> Doors open{" "}
                  <strong className="text-foreground">11:00 AM</strong>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-4 text-secondary" /> Meeting{" "}
                  <strong className="text-foreground">11:30 AM – 1:30 PM</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Event Pricing
            </span>
            <div className="mt-2 text-5xl font-extrabold">$35</div>
            <div className="text-sm font-medium opacity-90">Members</div>
            <div className="mt-4 grid w-full gap-1 border-t border-primary-foreground/20 pt-4 text-sm">
              <span>
                Non-Members / Guests: <strong>$45</strong>
              </span>
              <span>
                Candidates: <strong>$25</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meeting Event */}
      {showFeatured && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="inline-block text-4xl font-extrabold text-secondary md:text-5xl">
                Featured Meeting Event
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />
            </div>

            <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-elegant)]">
              <div className="flex flex-col items-center justify-between gap-3 bg-primary px-6 py-5 text-primary-foreground sm:flex-row sm:px-8">
                <div className="flex items-center gap-3">
                  <Calendar className="size-6 opacity-80" />
                  <span className="text-base font-bold tracking-widest md:text-lg">
                    {formatEventDate(featuredMeeting.date).toUpperCase()}
                  </span>
                  <EventTodayTag date={featuredMeeting.date} today={today} />
                </div>
                {featuredMeeting.rsvpDeadline && featuredMeeting.reservationHref && (
                  <a
                    href={featuredMeeting.reservationHref}
                    className="rounded-md bg-primary-foreground/20 px-5 py-2 text-base font-extrabold uppercase tracking-widest transition-colors hover:bg-primary-foreground hover:text-primary md:text-lg"
                  >
                    RSVP by {formatEventDate(featuredMeeting.rsvpDeadline)}
                  </a>
                )}
              </div>

              <div className="px-6 py-12 text-center md:px-16">
                <h3 className="mx-auto max-w-2xl text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                  {featuredMeeting.title}
                </h3>
                {featuredSpeakers.length > 0 ? (
                  <>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      {featuredSpeakers.length === 1 ? "Guest Speaker" : "Guest Speakers"}
                    </p>

                    <div
                      className={`mx-auto mt-12 grid gap-12 md:gap-16 ${
                        featuredSpeakers.length === 1
                          ? "max-w-md"
                          : featuredSpeakers.length === 2
                            ? "md:grid-cols-2"
                            : "sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {featuredSpeakers.map((sp, i) => (
                        <div key={sp.name} className="group">
                          {sp.img && (
                            <div className="relative mx-auto mb-8 size-56">
                              <div
                                className={`absolute inset-0 rounded-[2.5rem] transition-transform duration-300 ${
                                  i % 2 === 0
                                    ? "rotate-3 bg-primary group-hover:rotate-6"
                                    : "-rotate-3 bg-secondary group-hover:-rotate-6"
                                }`}
                              />
                              <img
                                src={sp.img}
                                alt={sp.name}
                                className="relative size-full rounded-lg border-4 border-card bg-muted object-contain shadow-xl"
                              />
                            </div>
                          )}
                          <h4 className="text-2xl font-bold text-secondary">{sp.name}</h4>
                          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            {sp.title}
                          </p>
                          {sp.href && sp.linkText && (
                            <a
                              href={sp.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center border-b-2 border-transparent pb-1 text-sm font-bold text-primary transition-all hover:border-primary"
                            >
                              {sp.linkText}
                              <ArrowRight className="ml-2 size-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:text-left">
                    <img
                      src={featuredMeeting.img}
                      alt="Patriotic voting illustration"
                      className="size-40 shrink-0 rounded-lg bg-muted object-contain"
                    />
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        Guest speaker to be announced
                      </p>
                      <p className="mt-2 text-base text-muted-foreground">Topic to be announced</p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        West Orange Country Club · 11:30 AM to 1:30 PM
                      </p>
                    </div>
                  </div>
                )}

                {featuredMeeting.topic && (
                  <div className="mx-auto mt-14 max-w-3xl rounded-lg border border-border bg-muted p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                      Main Topic
                    </p>
                    <p className="mt-3 text-2xl font-extrabold text-secondary md:text-3xl">
                      {featuredMeeting.topic}
                    </p>
                  </div>
                )}

                {featuredMeeting.reservationHref && (
                  <Button
                    asChild
                    variant="cta"
                    className="mx-auto mt-10 flex w-full max-w-2xl gap-3"
                  >
                    <a href={featuredMeeting.reservationHref}>
                      Reserve Your Seat Today <ArrowRight className="size-5" />
                    </a>
                  </Button>
                )}

                <div className="mt-6 flex flex-col justify-center gap-4 text-sm font-medium text-muted-foreground sm:flex-row sm:gap-8">
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" /> $35 Members
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" /> $45 Non-Members / Guests
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" /> $25 Candidates
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" /> Buffet Lunch Included
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-xs uppercase leading-relaxed text-muted-foreground">
              West Orange Republican Women, Federated, supports all Republican candidates in
              partisan and non-partisan elections, and does not endorse any candidate before the
              primary election.
            </p>
          </div>
        </section>
      )}

      {/* Upcoming + Future dates */}
      {(activeUpcoming.length > 0 || activeDates.length > 0) && (
        <section className="bg-muted py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3 lg:items-start">
            {activeUpcoming.length > 0 && (
              <div className="space-y-6 lg:col-span-2">
                <h3 className="border-l-4 border-primary pl-5 text-3xl font-extrabold text-secondary md:text-4xl">
                  Upcoming Events
                </h3>

                {activeUpcoming.map((event) => (
                  <article
                    key={event.date + event.title}
                    className="group grid justify-items-center gap-6 rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:grid-cols-[192px_minmax(0,1fr)] sm:justify-items-start"
                  >
                    <img
                      src={event.img}
                      alt={event.title}
                      className="size-48 shrink-0 rounded-lg bg-muted object-contain"
                    />
                    <div className="min-w-0 text-center sm:text-left">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        <Calendar className="size-3.5" /> {formatEventDate(event.date)} ·{" "}
                        {event.time}
                      </div>
                      <EventTodayTag date={event.date} today={today} />
                      <h4 className="mt-2 text-xl font-bold text-secondary">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    {event.ticketsHref && event.ticketsHref !== "#" && (
                      <Button asChild variant="cta" className="w-full sm:col-start-2 sm:w-auto">
                        <a href={event.ticketsHref} target="_blank" rel="noopener noreferrer">
                          Tickets
                        </a>
                      </Button>
                    )}
                  </article>
                ))}
              </div>
            )}

            {activeDates.length > 0 && (
              <div
                className={`rounded-lg bg-secondary p-8 text-secondary-foreground shadow-xl ${activeUpcoming.length === 0 ? "lg:col-span-3" : ""}`}
              >
                <div className="mb-6 flex items-center justify-center gap-3">
                  <Calendar className="size-6 text-primary" />
                  <h3 className="text-xl font-extrabold tracking-tight">Future Dates</h3>
                </div>
                <p className="mb-4 text-center text-xs uppercase tracking-widest opacity-70">
                  2026 Monthly Meetings
                </p>
                <div className="space-y-3">
                  {activeDates.map((d) => (
                    <div
                      key={d.date}
                      className="group flex items-center justify-between rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4 transition-colors hover:bg-secondary-foreground/10"
                    >
                      <span className="text-sm font-medium">
                        {formatEventDate(d.date).replace(/^\w+, /, "")}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-70">
                        {eventStatus(d.date, today) === "today" ? (
                          <EventTodayTag date={d.date} today={today} />
                        ) : (
                          "Thursday"
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <EventsCommunity today={today} />
    </>
  );
}
