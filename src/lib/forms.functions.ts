import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { upcomingMeetings } from "@/content/site-content";
import { floridaDate, formatEventDate, nextUpcomingEvent } from "@/lib/event-dates";

// Simple per-instance rate limit: max 5 submissions per IP-less key per 10 minutes.
const hits = new Map<string, number[]>();
function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) throw new Error("Too many submissions. Please try again later.");
  recent.push(now);
  hits.set(key, recent);
}

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().default(""),
  referral: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    rateLimit(`contact:${data.email.toLowerCase()}`);
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const id = crypto.randomUUID();
    await sendTemplateEmail("contact-notification", "info@worwf.org", {
      templateData: data,
      idempotencyKey: `contact-notify-${id}`,
      replyTo: data.email,
    });
    await sendTemplateEmail("contact-confirmation", data.email, {
      templateData: { name: data.name },
      idempotencyKey: `contact-confirm-${id}`,
    });
    return { ok: true };
  });

const membershipSchema = z.object({
  renewal: z.boolean(),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  lines: z.array(z.string().max(500)).max(30),
});

export const submitMembership = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => membershipSchema.parse(d))
  .handler(async ({ data }) => {
    rateLimit(`member:${data.email.toLowerCase()}`);
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const id = crypto.randomUUID();
    const title = `WORWF Membership ${data.renewal ? "Renewal" : "Application"}: ${data.firstName} ${data.lastName}`;
    await sendTemplateEmail("membership-notification", "Membership@WORWF.org", {
      templateData: { title, lines: data.lines },
      idempotencyKey: `member-notify-${id}`,
      replyTo: data.email,
    });
    const next = nextUpcomingEvent(upcomingMeetings, floridaDate(new Date()));
    await sendTemplateEmail("membership-welcome", data.email, {
      templateData: {
        name: data.firstName,
        renewal: data.renewal,
        meetingDate: next ? formatEventDate(next.date) : undefined,
        meetingVenue: next?.title,
      },
      idempotencyKey: `member-welcome-${id}`,
    });
    return { ok: true };
  });

const rsvpSchema = z.object({
  eventTitle: z.string().trim().min(1).max(200),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().default(""),
  guests: z.number().int().min(1).max(20),
  note: z.string().trim().max(1000).optional().default(""),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => rsvpSchema.parse(d))
  .handler(async ({ data }) => {
    const { specialEvents } = await import("@/content/site-content");
    const event = specialEvents.find((e) => e.rsvp && e.title === data.eventTitle);
    if (!event) throw new Error("This event is not accepting RSVPs.");
    rateLimit(`rsvp:${data.email.toLowerCase()}`);
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
    const id = crypto.randomUUID();
    const eventDate = event.date ? formatEventDate(event.date) : undefined;
    await sendTemplateEmail("rsvp-notification", "Reservations@WORWF.org", {
      templateData: { ...data, eventDate },
      idempotencyKey: `rsvp-notify-${id}`,
      replyTo: data.email,
    });
    await sendTemplateEmail("rsvp-confirmation", data.email, {
      templateData: { name: data.name, eventTitle: event.title, eventDate, guests: data.guests },
      idempotencyKey: `rsvp-confirm-${id}`,
    });
    return { ok: true };
  });
