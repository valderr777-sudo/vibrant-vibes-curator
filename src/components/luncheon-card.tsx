import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventTodayTag } from "@/components/event-today-tag";
import { formatEventDate } from "@/lib/event-dates";
import type { LuncheonMeeting, Speaker } from "@/content/site-content";

export function LuncheonCard({ meeting, today, speakers = [] }: {
  meeting: LuncheonMeeting;
  today: string | null;
  speakers?: Speaker[];
}) {
  return (
              <div className="grid gap-6 md:grid-cols-3">
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
                    {speakers.length > 0 ? (
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {speakers.map((sp) => (
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
  );
}
