import { describe, expect, it } from "vitest";
import { eventStatus, floridaDate, formatEventDay, formatEventWeekday, visibleEvents } from "./event-dates";

describe("Florida event-day rules", () => {
  it("keeps a May 14 event visible through the full May 14 day", () => {
    const today = floridaDate(new Date("2026-05-15T03:59:59.999Z"));
    expect(today).toBe("2026-05-14");
    expect(visibleEvents([{ date: "2026-05-14" }], today)).toHaveLength(1);
  });
  it("splits a confirmed date into weekday and month-day-year for the teaser", () => {
    expect(formatEventWeekday("2026-11-12")).toBe("Thursday");
    expect(formatEventDay("2026-11-12")).toBe("November 12, 2026");
    expect(formatEventDay("")).toBe("Dates to be announced");
  });
  it("removes the May 14 event at midnight on May 15 in Florida", () => {
    const today = floridaDate(new Date("2026-05-15T04:00:00Z"));
    expect(today).toBe("2026-05-15");
    expect(visibleEvents([{ date: "2026-05-14" }], today)).toEqual([]);
  });
  it("marks May 14 as today only on May 14", () => {
    expect(eventStatus("2026-05-14", "2026-05-14")).toBe("today");
    expect(eventStatus("2026-05-14", "2026-05-13")).toBe("upcoming");
    expect(eventStatus("2026-05-14", "2026-05-15")).toBe("past");
  });
  it("retains confirmed future dates and undated activities", () => {
    expect(visibleEvents([{ date: "2026-05-15" }, {}], "2026-05-14")).toHaveLength(2);
  });
  it("uses Florida midnight in winter as well as summer", () => {
    expect(eventStatus("2026-12-10", floridaDate(new Date("2026-12-11T04:59:59Z")))).toBe("today");
    expect(eventStatus("2026-12-10", floridaDate(new Date("2026-12-11T05:00:00Z")))).toBe("past");
  });
  it("handles daylight-saving boundaries using Florida's calendar", () => {
    expect(eventStatus("2026-03-08", floridaDate(new Date("2026-03-09T04:00:00Z")))).toBe("past");
    expect(eventStatus("2026-11-01", floridaDate(new Date("2026-11-02T04:59:59Z")))).toBe("today");
    expect(eventStatus("2026-11-01", floridaDate(new Date("2026-11-02T05:00:00Z")))).toBe("past");
  });
  it("does not flash expired promotions before the live date is available", () => {
    expect(visibleEvents([{ date: "2026-05-14" }], null)).toEqual([]);
  });
  it("does not silently expire invalid or unconfirmed dates", () => {
    expect(eventStatus("2026-02-30", "2026-05-14")).toBe("undated");
  });
  it("excludes all past promoted event dates in the October 22 final review", () => {
    const dates = ["2026-05-14", "2026-06-05", "2026-07-09", "2026-08-13", "2026-09-10", "2026-10-08", "2026-11-12", "2026-12-10"];
    expect(visibleEvents(dates.map((date) => ({ date })), "2026-10-22")).toEqual([
      { date: "2026-11-12" }, { date: "2026-12-10" },
    ]);
  });
});