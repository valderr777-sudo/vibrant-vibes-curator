import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

import { EventsCommunity } from "@/components/events-community";
import { LuncheonCard } from "@/components/luncheon-card";

import venueImg from "@/assets/worwf/gallery/speakers/10.23-Members-with-Guest-Speaker-Ambassador-Nancy-Brinker-1080x493.jpg";
import { useEventDay } from "@/hooks/use-event-day";
import { visibleEvents, formatEventDate } from "@/lib/event-dates";
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
              <LuncheonCard
                key={meeting.date}
                meeting={meeting}
                today={today}
                speakers={meetingIndex === 0 ? featuredSpeakers : []}
              />
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
