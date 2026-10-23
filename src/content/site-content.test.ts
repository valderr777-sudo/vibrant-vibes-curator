import { describe, expect, it } from "vitest";
import {
  announcements,
  featuredMeeting,
  featuredSpeakers,
  homePromotedEvents,
  luncheonInformation,
} from "./site-content";
import { visibleEvents } from "@/lib/event-dates";

describe("confirmed event reference", () => {
  it("promotes both confirmed luncheons without October's expired event on October 22", () => {
    expect(visibleEvents(homePromotedEvents, "2026-10-22").map((event) => event.date)).toEqual([
      "2026-11-12",
      "2026-12-10",
    ]);
    expect(featuredMeeting.date).toBe("2026-11-12");
    expect(featuredMeeting.title).toBe("General Luncheon Meeting");
  });
  it("promotes the next luncheon teaser from the featured meeting and hides it after its event day", () => {
    expect(announcements[0]?.label).toBe("Next Luncheon");
    expect(announcements[0]?.date).toBe(featuredMeeting.date);
    expect(visibleEvents(announcements, "2026-11-13").length).toBe(0);
  });
  it("drops the November luncheon once its Florida event day passes", () => {
    expect(visibleEvents(homePromotedEvents, "2026-11-13").map((event) => event.date)).toEqual([
      "2026-12-10",
    ]);
  });
  it("does not invent November speaker, topic, RSVP deadline or ticket link", () => {
    expect(featuredSpeakers).toEqual([]);
    expect(featuredMeeting.topic).toBe("");
    expect(featuredMeeting.rsvpDeadline).toBe("");
    expect(featuredMeeting.reservationHref).toBe("");
  });
  it("allows two-minute candidate participation with an advance agenda request destination", () => {
    expect(luncheonInformation.candidateMinutes).toBe(2);
    expect(luncheonInformation.candidateAgendaEmail).toBe("President@WORWF.org");
  });
  it("retains the member check RSVP destination", () => {
    expect(luncheonInformation.memberCheckEmail).toBe("Reservations@WORWF.org");
  });
});
