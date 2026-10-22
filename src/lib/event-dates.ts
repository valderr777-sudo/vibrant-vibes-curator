// Confirmed event dates use YYYY-MM-DD and the club's Florida timezone.
export const EVENT_TIME_ZONE = "America/New_York";

export function floridaDate(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT_TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function validDate(date?: string): boolean {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T12:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}

export function eventStatus(date: string | undefined, today: string | null) {
  if (!today) return "pending";
  if (!validDate(date)) return "undated";
  if (date === today) return "today";
  return date && date < today ? "past" : "upcoming";
}

export function visibleEvents<T extends { date?: string }>(events: readonly T[], today: string | null): T[] {
  return events.filter((event) => {
    const status = eventStatus(event.date, today);
    return status !== "past" && status !== "pending";
  });
}

export function formatEventDate(date: string): string {
  if (!validDate(date)) return "Dates to be announced";
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}