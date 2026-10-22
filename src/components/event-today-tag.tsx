import { eventStatus } from "@/lib/event-dates";

export function EventTodayTag({ date, today }: { date?: string; today: string | null }) {
  if (eventStatus(date, today) !== "today") return null;
  return <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent">Happening Today</span>;
}