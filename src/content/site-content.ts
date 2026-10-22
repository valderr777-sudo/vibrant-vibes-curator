// Public site content maintained by the WORWF developers.
// Edit the lists below to update announcements, speakers, events and service projects.
// Leave a date or link empty ("" or null) rather than guessing; the site hides or labels it.

import messinaImg from "@/assets/worwf/events/messina.jpg";
import jacksonImg from "@/assets/worwf/events/jackson.jpg";

export const RSVP_EMAIL = "Reservations@WORWF.org";

export function rsvpMailto(eventTitle: string) {
  return `mailto:${RSVP_EMAIL}?subject=${encodeURIComponent(`RSVP: ${eventTitle}`)}`;
}

/* ---------- Homepage announcement banner ---------- */
export type Announcement = {
  id: string; // change the id to show a dismissed banner again
  label: string; // short tag, e.g. "Next Luncheon", "Voting Reminder"
  message: string;
  linkText?: string;
  to?: string; // internal page, e.g. "/events"
  href?: string; // external link
};

// Shown in order; only the first is displayed. Empty list hides the banner.
export const announcements: Announcement[] = [
  {
    id: "luncheon-2026-05-14",
    label: "Next Luncheon",
    message: "Thursday, May 14, 2026 at West Orange Country Club. RSVP by May 10.",
    linkText: "Event details",
    to: "/events",
  },
];

/* ---------- Featured meeting speakers (one or many) ---------- */
export type Speaker = {
  name: string;
  title: string;
  img?: string;
  linkText?: string;
  href?: string; // leave empty to hide the link
};

export const featuredSpeakers: Speaker[] = [
  { name: "Chris Messina", title: "Candidate for Orange County Mayor", img: messinaImg, linkText: "Candidate Vision Statement", href: "" },
  { name: "Bonnie Jackson", title: "State Committeewoman • Candidate for FL House District 42", img: jacksonImg, linkText: "District 42 Campaign Plan", href: "https://jacksonforflorida.com/" },
];

/* ---------- Special events and campaign activities ---------- */
export type SpecialEvent = {
  title: string;
  kind: string; // e.g. "Campaign Activity", "Rally", "Phone Party"
  description: string;
  date?: string; // leave empty until confirmed
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
  date?: string;
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

// Set to the PDF's URL once the client supplies the Monthly Donation List.
export const monthlyDonationListPdf = "";
