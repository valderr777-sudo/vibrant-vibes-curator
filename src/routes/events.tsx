import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, MapPin } from "lucide-react";

import { EventsCommunity } from "@/components/events-community";

import venueImg from "@/assets/worwf/gallery/speakers/10.23-Members-with-Guest-Speaker-Ambassador-Nancy-Brinker-1080x493.jpg";
import { useEventDay } from "@/hooks/use-event-day";
import { eventStatus, visibleEvents, formatEventDate } from "@/lib/event-dates";
import { EventTodayTag } from "@/components/event-today-tag";
import { featuredSpeakers, upcomingMeetings, upcomingEvents } from "@/content/site-content";

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
  const activeMeetings = visibleEvents(upcomingMeetings, today);
  const activeUpcoming = visibleEvents(upcomingEvents, today);
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

      {/* Upcoming luncheons in the venue card format */}
      {activeMeetings.length > 0 && (
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            {activeMeetings.map((meeting, meetingIndex) => (
              <div key={meeting.date} className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:flex-row md:col-span-2">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      {meeting.title}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-secondary md:text-3xl [text-wrap:balance]">
                      {formatEventDate(meeting.date)}
                    </h2>
                    <EventTodayTag date={meeting.date} today={today} />
                    <p className="mt-2 text-muted-foreground">
                      WORWF meets monthly at{" "}
                      <span className="font-semibold text-foreground">
                        West Orange Country Club
                      </span>
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
                    {meetingIndex === 0 && featuredSpeakers.length > 0 ? (
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {featuredSpeakers.map((sp) => (
                          <div key={sp.name} className="flex items-center gap-4">
                            {sp.img && (
                              <img
                                src={sp.img}
                                alt={sp.name}
                                className="size-20 shrink-0 rounded-lg border-2 border-card bg-muted object-contain shadow-md"
                              />
                            )}
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                Guest Speaker
                              </p>
                              <p className="font-bold text-secondary">{sp.name}</p>
                              <p className="text-sm text-muted-foreground">{sp.title}</p>
                              {sp.href && sp.linkText && (
                                <a
                                  href={sp.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-1 inline-flex items-center text-sm font-bold text-primary hover:underline"
                                >
                                  {sp.linkText}
                                  <ArrowRight className="ml-1 size-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-sm font-medium text-muted-foreground">
                        {meeting.speaker || "Guest speaker and topic to be announced"}
                      </p>
                    )}
                    {meeting.topic && (
                      <p className="mt-3 text-lg font-extrabold text-secondary">{meeting.topic}</p>
                    )}
                    {meeting.reservationHref && (
                      <Button asChild variant="cta" className="mt-6">
                        <a href={meeting.reservationHref}>
                          Reserve Your Seat Today <ArrowRight className="size-5" />
                        </a>
                      </Button>
                    )}
                    {meeting.rsvpDeadline && (
                      <p className="mt-3 text-sm font-semibold text-primary">
                        RSVP by {formatEventDate(meeting.rsvpDeadline)}
                      </p>
                    )}
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
                    <span className="mt-2 text-xs opacity-80">Buffet lunch included</span>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-center text-xs uppercase leading-relaxed text-muted-foreground">
              West Orange Republican Women, Federated, supports all Republican candidates in
              partisan and non-partisan elections, and does not endorse any candidate before the
              primary election.
            </p>
          </div>
        </section>
      )}

      {/* Other upcoming events */}
      {activeUpcoming.length > 0 && (
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h3 className="border-l-4 border-primary pl-5 text-3xl font-extrabold text-secondary md:text-4xl">
              Upcoming Events
            </h3>
            <div className="mt-10 space-y-6">
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
                      <Calendar className="size-3.5" /> {formatEventDate(event.date)} · {event.time}
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
          </div>
        </section>
      )}

      <EventsCommunity today={today} />
    </>
  );
}
