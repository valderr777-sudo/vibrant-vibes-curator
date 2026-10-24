import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitContact } from "@/lib/forms.functions";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, Send } from "lucide-react";

import heroImg from "@/assets/worwf/contact/hero.jpg";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Get in touch with WORWF. Send a message or reach us by email at info@worwf.org.",
      },
      { property: "og:title", content: "Contact Us | WORWF" },
      {
        property: "og:description",
        content: "Send a message to West Orange Republican Women Federated.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    referral: "",
    message: "",
  });

  return (
    <>
      {/* Hero with parallax */}
      <section className="relative isolate overflow-hidden">
        <div
          className="people-background responsive-parallax absolute inset-0 -z-10 lg:bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.20_0.08_25/0.85)] via-[oklch(0.25_0.10_25/0.75)] to-[oklch(0.20_0.10_250/0.85)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:whitespace-nowrap lg:text-7xl">
              Let&apos;s Start a <span className="text-orange-500">Conversation</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              Whether you&apos;re curious about membership, have a question about an
              event, or just want to say hello, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Aside */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact information */}
          <aside className="lg:self-start">
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <div className="mt-4 h-1 w-14 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
              Complete the form and a member of our team will be in contact with you shortly.
              Your information stays private and is never shared with third parties.
            </p>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              <div className="flex items-start gap-4 py-5">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <dt className="text-sm font-bold text-foreground">Email</dt>
                  <dd className="mt-1 text-base text-muted-foreground">
                    <a href="mailto:info@worwf.org" className="hover:text-primary hover:underline">
                      info@worwf.org
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <dt className="text-sm font-bold text-foreground">Location</dt>
                  <dd className="mt-1 text-base text-muted-foreground">
                    West Orange County, Florida
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm font-bold text-foreground">Follow us</span>
              <a
                href="https://www.facebook.com/westorangerepublicanwomenfederated"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://x.com/worwf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="text-sm font-bold">𝕏</span>
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
                alert("Please fill in your name, email, and message.");
                return;
              }
              try {
                await submitContact({ data: form });
                alert("Thanks! Your message was sent. Check your inbox for a confirmation.");
                setForm({ name: "", phone: "", email: "", referral: "", message: "" });
              } catch {
                alert("Sorry, your message could not be sent. Please email info@worwf.org.");
              }
            }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-10"
          >
            {/* Decorative accent */}
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/5" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/5" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                required
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                maxLength={100}
              />
              <Field
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                maxLength={30}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Email Address"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  maxLength={255}
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="How did you hear about us?"
                  value={form.referral}
                  onChange={(v) => setForm({ ...form, referral: v })}
                  maxLength={200}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us a little about how we can help…"
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <p className="mt-1 text-right text-xs text-muted-foreground">
                  {form.message.length}/1000
                </p>
              </div>
            </div>

            <div className="relative mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by WORWF.
              </p>
              <Button type="submit" variant="cta" size="lg" className="px-8">
                <Send className="size-4" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
