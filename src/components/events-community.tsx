import {
  CalendarPlus,
  Sparkles,
  Users,
  HeartHandshake,
  FileDown,
  ArrowUpRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { EventTodayTag } from "@/components/event-today-tag";
import {
  specialEvents,
  committeeActivities,
  foodThemes,
  monthlyDonationListPdf,
  luncheonInformation,
} from "@/content/site-content";
import { visibleEvents, formatEventDate } from "@/lib/event-dates";
import { RsvpDialog } from "@/components/rsvp-dialog";

export function EventsCommunity({ today }: { today: string | null }) {
  const activities = visibleEvents(specialEvents, today);
  const committees = visibleEvents(committeeActivities, today);
  const rows = [
    {
      value: "special",
      title: "Special Events",
      subtitle: "Campaign activities & member gatherings",
      icon: Sparkles,
    },
    {
      value: "calendar",
      title: "Orange GOP Calendar",
      subtitle: "Republican Party of Orange County",
      icon: CalendarPlus,
    },
    {
      value: "committees",
      title: "Committee Activities",
      subtitle: "Service projects throughout the year",
      icon: Users,
    },
    {
      value: "caring",
      title: "Caring for America",
      subtitle: "Edgewood Children's Ranch food drive",
      icon: HeartHandshake,
    },
    {
      value: "admission",
      title: "Reservations & Admission",
      subtitle: "Payment, tickets & candidate participation",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Beyond the Luncheon</h2>
          <p className="text-sm text-muted-foreground">Community, service &amp; local events</p>
        </div>
        <Accordion type="multiple" defaultValue={["caring"]} className="border-t border-border">
          {rows.map(({ value, title, subtitle, icon: Icon }) => (
            <AccordionItem
              key={value}
              value={value}
              id={value === "caring" ? "caring-for-america" : undefined}
              className="group scroll-mt-36"
            >
              <AccordionTrigger className="gap-4 py-6 hover:no-underline [&>svg]:size-5 [&>svg]:text-primary">
                <span className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
                  <Icon className="size-6 shrink-0 text-primary transition-colors group-data-[state=open]:text-accent" />
                  <span className="grid min-w-0 gap-1 md:flex md:flex-1 md:items-center md:justify-between md:gap-6">
                    <span className="text-xl font-bold text-foreground md:text-2xl">{title}</span>
                    <span className="text-sm font-normal text-muted-foreground">{subtitle}</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8 md:pl-12">
                {value === "special" && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {activities.length === 0 && (
                      <p className="text-muted-foreground">
                        Special event dates will be announced when confirmed.
                      </p>
                    )}
                    {activities.map((event) => (
                      <article key={event.title} className="border-l-2 border-accent pl-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {event.kind}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-foreground">{event.title}</h3>
                        <p className="mt-2 text-muted-foreground">{event.description}</p>
                        <p className="mt-3 text-sm font-medium text-muted-foreground">
                          {event.date ? formatEventDate(event.date) : "Dates to be announced"}
                          {event.location ? ` • ${event.location}` : ""}
                        </p>
                        <EventTodayTag date={event.date} today={today} />
                        {event.rsvp && <RsvpDialog eventTitle={event.title} />}
                      </article>
                    ))}
                  </div>
                )}
                {value === "calendar" && (
                  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-base text-muted-foreground">
                      View upcoming events on the Republican Party of Orange County calendar.
                    </p>
                    <Button
                      asChild
                      variant="cta"
                      className="h-auto shrink-0 whitespace-normal text-left"
                    >
                      <a
                        href="https://www.orangefl.gop/calendar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GOP Calendar <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                )}
                {value === "committees" && (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {committees.length === 0 && (
                      <p className="text-muted-foreground">
                        Committee activity dates will be announced when confirmed.
                      </p>
                    )}
                    {committees.map((activity) => (
                      <article
                        key={activity.committee + activity.title}
                        className="border-l-2 border-accent pl-5"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {activity.committee}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-foreground">{activity.title}</h3>
                        <p className="mt-2 text-muted-foreground">{activity.description}</p>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {activity.date ? formatEventDate(activity.date) : "Dates to be announced"}
                        </p>
                        <EventTodayTag date={activity.date} today={today} />
                      </article>
                    ))}
                  </div>
                )}
                {value === "caring" && (
                  <div className="flex flex-col items-start gap-6 md:flex-row md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Each month our members collect food donations for Edgewood Children's Ranch.
                        Bring items from the monthly donation list to our luncheon and help care for
                        children in our community.
                      </p>
                      {foodThemes.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {foodThemes.map((theme) => (
                            <li key={theme.month}>
                              <strong>{theme.month}:</strong> {theme.theme}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {monthlyDonationListPdf && (
                      <Button
                        asChild
                        variant="secondary"
                        className="h-auto max-w-full whitespace-normal py-3 text-left"
                      >
                        <a href={monthlyDonationListPdf} target="_blank" rel="noopener noreferrer">
                          <FileDown /> 2026 Monthly Donation List &amp; Food Themes (PDF)
                        </a>
                      </Button>
                    )}
                  </div>
                )}
                {value === "admission" && (
                  <div>
                    <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                      {luncheonInformation.admission.map((note) => (
                        <li key={note} className="flex gap-3 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
                      <p className="text-muted-foreground">
                        Members paying by check: email your RSVP to{" "}
                        <a
                          className="break-all font-semibold text-primary hover:underline"
                          href={`mailto:${luncheonInformation.memberCheckEmail}`}
                        >
                          {luncheonInformation.memberCheckEmail}
                        </a>
                        .
                      </p>
                      <p className="text-muted-foreground">
                        Republican candidates are welcome to speak for{" "}
                        {luncheonInformation.candidateMinutes} minutes at General Meetings. Request
                        agenda time in advance at{" "}
                        <a
                          className="break-all font-semibold text-primary hover:underline"
                          href={`mailto:${luncheonInformation.candidateAgendaEmail}`}
                        >
                          {luncheonInformation.candidateAgendaEmail}
                        </a>
                        .
                      </p>
                    </div>
                    <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                      WORWF supports all Republican candidates in partisan and non-partisan
                      elections and does not officially endorse any specific candidate prior to the
                      primary election.
                    </p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
