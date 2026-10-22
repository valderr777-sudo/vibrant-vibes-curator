// Public site content maintained by the WORWF developers.
// Edit the lists below to update announcements, speakers, events and service projects.
// Leave a date or link empty ("" or null) rather than guessing; the site hides or labels it.

import messinaImg from "@/assets/worwf/events/messina.jpg";
import jacksonImg from "@/assets/worwf/events/jackson.jpg";

// Use confirmed YYYY-MM-DD dates. Dates expire after the full Florida event day.
// Past records are retained here only for reference, never promoted.
export const archivedEvents = [
  { date: "2026-05-14", title: "General Luncheon Meeting" },
  { date: "2026-06-05", title: "Breakfast with Blaise" },
  { date: "2026-07-09", title: "A Hero Celebration!" },
  { date: "2026-08-13", title: "Monthly Meeting" },
  { date: "2026-09-10", title: "Monthly Meeting" },
  { date: "2026-10-08", title: "Monthly Meeting" },
];
// NEXT LUNCHEON: fill these fields only after confirmation, then add speakers below.
// An empty date hides the featured meeting. reservationHref may be a verified mailto or https URL.
export const featuredMeeting = {
  date: "", title: "", topic: "", rsvpDeadline: "", reservationHref: "",
  img: messinaImg, speaker: "",
};
type UpcomingEvent = { date: string; time: string; title: string; img: string; speaker: string; description: string; ticketsHref?: string };
export const upcomingEvents: UpcomingEvent[] = [];
export const homePromotedEvents = [
  ...(featuredMeeting.date ? [featuredMeeting] : []), ...upcomingEvents,
];
export const futureMeetingDates = [
  { date: "2026-11-12" }, { date: "2026-12-10" },
];

export const RSVP_EMAIL = "Reservations@WORWF.org";

export function rsvpMailto(eventTitle: string) {
  return `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(`RSVP: ${eventTitle}`)}`;
}

/* ---------- Homepage announcement banner ---------- */
export type Announcement = {
  id: string; // change the id to show a dismissed banner again
  label: string; // short tag, e.g. "Next Luncheon", "Voting Reminder"
  message: string;
  date?: string; // event date YYYY-MM-DD; omit for evergreen announcements
  linkText?: string;
  to?: "/events" | "/membership" | "/voter-resources" | "/about-us"; // internal page
  href?: string; // external link
};

// Shown in order; only the first is displayed. Empty list hides the banner.
// The next luncheon banner automatically uses the confirmed featured meeting above.
// Add other confirmed announcements here; do not reuse past luncheon copy.
export const announcements: Announcement[] = featuredMeeting.date ? [{
  id: `luncheon-${featuredMeeting.date}`, date: featuredMeeting.date, label: "Next Luncheon",
  message: `${featuredMeeting.title} at West Orange Country Club.`,
  linkText: "Event details", to: "/events",
}] : [];

/* ---------- Featured meeting speakers (one or many) ---------- */
export type Speaker = {
  name: string;
  title: string;
  img?: string;
  linkText?: string;
  href?: string; // leave empty to hide the link
};

export const archivedSpeakers: Speaker[] = [
  { name: "Chris Messina", title: "Candidate for Orange County Mayor", img: messinaImg },
  { name: "Bonnie Jackson", title: "State Committeewoman • Candidate for FL House District 42", img: jacksonImg, linkText: "District 42 Campaign Plan", href: "https://jacksonforflorida.com/" },
];
export const featuredSpeakers: Speaker[] = [];

/* ---------- Special events and campaign activities ---------- */
export type SpecialEvent = {
  title: string;
  kind: string; // e.g. "Campaign Activity", "Rally", "Phone Party"
  description: string;
  date?: string; // YYYY-MM-DD; leave empty until confirmed
  location?: string;
  rsvp?: boolean; // shows an RSVP button that emails Reservations
};

export const specialEvents: SpecialEvent[] = [
  {
    title: "Flag Waving",
    kind: "Campaign Activity",
    description: "Join fellow members on the roadside to show support for Republican candidates.",
    rsvp: true,
  },
  {
    title: "Phone and Call Parties",
    kind: "Campaign Activity",
    description: "Make calls together for Republican candidates in a friendly group setting.",
    rsvp: true,
  },
];

/* ---------- Committee events and activities ---------- */
export type CommitteeActivity = {
  committee: string;
  title: string;
  description: string;
  date?: string; // YYYY-MM-DD; leave empty until confirmed
};

export const committeeActivities: CommitteeActivity[] = [
  {
    committee: "Armed Services Committee",
    title: "Santa Sacks for Vets",
    description: "Members fill holiday gift sacks for local veterans.",
  },
  {
    committee: "Campaign Committee",
    title: "Flag Waving",
    description: "Roadside sign and flag waving in support of Republican candidates.",
  },
  {
    committee: "Campaign Committee",
    title: "Phone Banking",
    description: "Calling voters on behalf of Republican candidates.",
  },
];

/* ---------- Caring for America: Edgewood Children's Ranch food drive ---------- */
export type FoodTheme = { month: string; theme: string };

// Add months as themes are confirmed, e.g. { month: "June 2026", theme: "Breakfast items" }
export const foodThemes: FoodTheme[] = [];

// Actual existing 2026 PDF, verified publicly accessible, includes monthly donation items.
export const monthlyDonationListPdf = "https://worwf.org/wp-content/uploads/2026/02/EDGEWOOD-Ranch-Food-Drive-Themes-2026-v3.pdf";
