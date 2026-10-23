import { describe, expect, it } from "vitest";
import { featuredMeeting, featuredSpeakers, homePromotedEvents, luncheonInformation } from "./site-content";
import { visibleEvents } from "@/lib/event-dates";

describe("confirmed event reference", () => {
  it("promotes November 12 without October's expired event on October 22", () => {
    expect(visibleEvents(homePromotedEvents, "2026-10-22").map((event) => event.date)).toEqual(["2026-11-12"]);
    expect(featuredMeeting.title).toBe("General Luncheon Meeting");
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