// Public site content maintained by the WORWF developers.
// Edit the lists below to update announcements, speakers, events and service projects.
// Leave a date or link empty ("" or null) rather than guessing; the site hides or labels it.

import messinaImg from "@/assets/worwf/events/messina.jpg";
import jacksonImg from "@/assets/worwf/events/jackson.jpg";
import voteImg from "@/assets/worwf/events/vote.jpg";

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
// UPCOMING LUNCHEONS: confirmed monthly meetings in date order (YYYY-MM-DD).
// The first record powers the homepage next-luncheon teaser and the speaker display.
// Move past records to archivedEvents; never list a date before it is confirmed.
// reservationHref may be a verified mailto or https URL; leave empty until verified.
export type LuncheonMeeting = {
  date: string;
  title: string;
  topic: string;
  rsvpDeadline: string;
  reservationHref: string;
  img: string;
  speaker: string;
};
export const upcomingMeetings: LuncheonMeeting[] = [
  {
    date: "2026-11-12",
    title: "General Luncheon Meeting",
    topic: "",
    rsvpDeadline: "",
    reservationHref: "",
    img: voteImg,
    speaker: "Guest speaker and topic to be announced",
  },
  {
    date: "2026-12-10",
    title: "General Luncheon Meeting",
    topic: "",
    rsvpDeadline: "",
    reservationHref: "",
    img: voteImg,
    speaker: "Guest speaker and topic to be announced",
  },
];
const emptyMeeting: LuncheonMeeting = {
  date: "",
  title: "",
  topic: "",
  rsvpDeadline: "",
  reservationHref: "",
  img: voteImg,
  speaker: "",
};
export const featuredMeeting = upcomingMeetings[0] ?? emptyMeeting;
type UpcomingEvent = {
  date: string;
  time: string;
  title: string;
  img: string;
  speaker: string;
  description: string;
  ticketsHref?: string;
};
export const upcomingEvents: UpcomingEvent[] = [];
export const homePromotedEvents = [
  ...upcomingMeetings.filter((meeting) => meeting.date),
  ...upcomingEvents,
];

export const RSVP_EMAIL = "Reservations@WORWF.org";

export function rsvpMailto(eventTitle: string) {
  return `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(`RSVP: ${eventTitle}`)}`;
}

/* ---------- Homepage next-luncheon teaser (red Event & Luncheon Reservations section) ---------- */
export type Announcement = {
  id: string; // change the id to show a dismissed banner again
  label: string; // short tag, e.g. "Next Luncheon", "Voting Reminder"
  message: string;
  date?: string; // event date YYYY-MM-DD; omit for evergreen announcements
  linkText?: string;
  to?: "/events" | "/membership" | "/voter-resources" | "/about-us"; // internal page
  href?: string; // external link
};

// Only the first record is shown, as the teaser inside the red reservations section.
// It follows the confirmed featured meeting above; an empty date hides the teaser.
// Add other confirmed announcements here; do not reuse past luncheon copy.
export const announcements: Announcement[] = featuredMeeting.date
  ? [
      {
        id: `luncheon-${featuredMeeting.date}`,
        date: featuredMeeting.date,
        label: "Next Luncheon",
        message: `${featuredMeeting.title} at West Orange Country Club.`,
        linkText: "Event details",
        to: "/events",
      },
    ]
  : [];

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
  {
    name: "Bonnie Jackson",
    title: "State Committeewoman • Candidate for FL House District 42",
    img: jacksonImg,
    linkText: "District 42 Campaign Plan",
    href: "https://jacksonforflorida.com/",
  },
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

export const luncheonInformation = {
  admission: [
    "All Republicans are welcome. Payment in advance is required; walk-in seating is not available.",
    "Admission includes buffet lunch at West Orange Country Club.",
    "Reservations are required by the stated RSVP date. Late entries may not be accommodated.",
    "Select Member or Non-Member admission when purchasing online. Guests should select Non-Member admission.",
    "If purchasing multiple tickets, list all attendee names in the Notes field at checkout.",
    "Your email receipt is your ticket. All purchases are final and non-refundable.",
  ],
  memberCheckEmail: "Reservations@WORWF.org",
  candidateAgendaEmail: "President@WORWF.org",
  candidateMinutes: 2,
};

// Actual existing 2026 PDF, verified publicly accessible, includes monthly donation items.
export const monthlyDonationListPdf =
  "/__l5e/assets-v1/d1bc6086-dea9-4e84-bbf0-937cc889dde0/EDGEWOOD-Ranch-Food-Drive-Themes-2026-v3.pdf";
