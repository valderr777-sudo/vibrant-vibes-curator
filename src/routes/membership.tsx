import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import memberHero from "@/assets/worwf/member-hero.jpg";
import memberGroup from "@/assets/worwf/member-group.jpg";
import voterId from "@/assets/worwf/voter-id.jpg";
import precinctFlag from "@/assets/worwf/precinct-flag.jpg";
import fireworksBg from "@/assets/worwf/fireworks-bg.jpg";
import elephantImg from "@/assets/worwf/elephant.jpg";

export const Route = createFileRoute("/membership")({
  component: Membership,
  head: () => ({
    meta: [
      { title: "Become a Member — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Join WORWF as an Active or Associate Member. Registered Republicans can apply with a current Member Referral.",
      },
      { property: "og:title", content: "Become a Member — WORWF" },
      {
        property: "og:description",
        content: "Apply to join West Orange Republican Women Federated today.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const, active: true },
  { label: "Events", to: "/events" as const },
  { label: "News to Know", to: "/news-to-know" as const, caret: true },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

const membershipOptions = [
  "Active Member - Voting Member",
  "Associate Member - Member of another NFR Club",
  "Mens Associate Member",
  "Young Republicans Member",
];

const renewalOptions = [
  "Active Member - Voting Member",
  "Associate Member - Member of NFR Club",
  "Mens Associate Member",
  "Young Republicans Member",
];

function ElephantIcon({ className = "" }: { className?: string }) {
  return <img src={elephantImg} alt="GOP elephant" className={className} />;
}

function Membership() {
  const [form, setForm] = useState({
    newMember: "",
    spouse: "",
    voterReg: "",
    renewal: "",
    precinct: "",
    learn: "",
    firstName: "",
    referral: "",
    lastName: "",
    username: "",
    street: "",
    password: "",
    city: "",
    confirmPassword: "",
    state: "",
    zip: "",
    country: "United States (US)",
    email: "",
    confirmEmail: "",
    birthday: "",
    phone: "",
    accepted: false,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>

      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" /> info@worwf.org
          </a>
          <p className="hidden font-semibold tracking-wide md:block">
            Educate. Motivate. Activate.
          </p>
          <Link to="/membership" className="hidden text-sm font-medium hover:text-secondary md:block">
            Become a Member
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-16 object-contain" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`relative text-[15px] font-medium transition-colors hover:text-secondary ${
                  l.active ? "text-secondary" : "text-foreground"
                }`}
              >
                {l.label}
                {l.caret && <span className="ml-1">▾</span>}
                {l.active && (
                  <span className="absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-secondary" />
                )}
              </Link>
            ))}
          </nav>
          <Button variant="destructive" className="rounded-md px-6 font-bold tracking-wider">
            DONATE
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.22 0.14 265 / 0.65), oklch(0.22 0.14 265 / 0.85)), url(${memberHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-24 md:py-36">
          <h1 className="text-center text-5xl font-light italic text-primary-foreground md:text-7xl">
            Become a Member
          </h1>
        </div>
        <div className="bg-primary py-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
            <ElephantIcon className="hidden size-16 shrink-0 md:block" />
            <div className="text-center text-primary-foreground">
              <p className="text-base font-bold tracking-wide md:text-lg">
                ACCORDING TO ARTICLE II OF THE NFRW BYLAWS,
              </p>
              <p className="mt-2 text-base font-bold tracking-wide md:text-lg">
                YOU MUST BE A REGISTERED REPUBLICAN TO BE ELIGIBLE FOR MEMBERSHIP.
              </p>
            </div>
            <ElephantIcon className="hidden size-16 shrink-0 md:block" />
          </div>
        </div>
      </section>

      {/* Active / Associate Members */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <img src={memberGroup} alt="WORWF members at a community event" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-10 text-center">
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">ACTIVE MEMBERS:</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                To be an Active Member, you must be in good standing. Active members may vote,
                participate in debates, hold office, and serve as a delegate to National, State
                Conventions or Conferences. Active membership includes membership in the National
                Federation of Republican Women and in the Florida Federation of Republican Women.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary md:text-4xl">ASSOCIATE MEMBERS:</h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                To be an Associate Member, you must be in good standing – that includes your
                membership in another Federated club. Associate members may not vote, hold office,
                serve as a delegate or alternate for WORWF to National, State Conferences or
                Conventions. Men are welcome to join as Associate Members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a member red band */}
      <section className="bg-secondary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[auto_1fr_auto]">
          <img src={worwfLogo} alt="WORWF" className="size-32 object-contain md:size-40" />
          <div className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">TO BECOME A MEMBER:</h2>
            <p className="mt-5 text-sm md:text-base">
              To apply for Membership, you must have a current Member Referral.
            </p>
            <p className="mt-3 text-sm md:text-base">
              If you do not have a Member Referral, email{" "}
              <a href="mailto:Membership@WORWF.org" className="font-semibold text-primary-foreground underline">
                Membership@WORWF.org
              </a>{" "}
              for more information.
            </p>
            <p className="mt-3 text-sm font-semibold md:text-base">
              Come join us — together we can do this!
            </p>
          </div>
          <img src={worwfLogo} alt="WORWF" className="size-32 object-contain md:size-40" />
        </div>
      </section>

      {/* Membership Form */}
      <section id="form" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold text-primary md:text-5xl">Membership Form</h2>

          <div className="mt-8 space-y-3 text-center text-sm text-foreground">
            <p>
              <span className="font-semibold">RENEW Your Membership.</span>{" "}
              <a href="#" className="text-secondary underline">Click Here</a>.{" "}
              <strong>**For "Returning 2024 Members Only"**</strong>
            </p>
            <p className="italic text-muted-foreground">
              (It's a shortened renewal form to make your online renewal process quick &amp; easy.
              If you have a new email address/mailing address, please provide updated info in the
              'comments' section upon checkout.)
            </p>
            <p>
              Printer-friendly form available <a href="#" className="text-secondary underline">here.</a>
            </p>
            <p>
              <span className="font-semibold">NEW MEMBERSHIP:</span> If you have a{" "}
              <span className="underline">Current Member Referral</span> and desire to join today,
              complete the online form below.
            </p>
            <p>
              Printer-friendly form available <a href="#" className="text-secondary underline">here.</a>
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for registering! We'll be in touch shortly.");
            }}
            className="mt-12 grid gap-6 rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:grid-cols-2"
          >
            {/* New Member */}
            <div>
              <label className="block text-sm font-bold text-foreground">New Member</label>
              <select
                value={form.newMember}
                onChange={(e) => setForm({ ...form, newMember: e.target.value })}
                className="mt-2 h-28 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
                size={4}
              >
                {membershipOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-muted-foreground">
                NEW MEMBERS: Select the membership you wish to sign up for.
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground">
                <span className="text-secondary">*</span>Spouse
              </label>
              <Input className="mt-2 bg-muted" value={form.spouse} onChange={(e) => setForm({ ...form, spouse: e.target.value })} />

              <label className="mt-5 block text-sm font-bold text-foreground">
                <span className="text-secondary">*</span>Voter registration #
              </label>
              <Input className="mt-2 bg-muted" value={form.voterReg} onChange={(e) => setForm({ ...form, voterReg: e.target.value })} />
            </div>

            {/* Renewal */}
            <div>
              <label className="block text-sm font-bold text-foreground">Membership Renewal</label>
              <select
                value={form.renewal}
                onChange={(e) => setForm({ ...form, renewal: e.target.value })}
                className="mt-2 h-28 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm"
                size={4}
              >
                {renewalOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-muted-foreground">
                EXISTING MEMBERS: Select the membership you wish to renew.
              </p>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground">
                <span className="text-secondary">*</span>Precinct # (Located on Voter Registration Card)
              </label>
              <Input className="mt-2 bg-muted" value={form.precinct} onChange={(e) => setForm({ ...form, precinct: e.target.value })} />

              <label className="mt-5 block text-sm font-bold text-foreground">
                <span className="text-secondary">*</span>How did you learn about our organization?
              </label>
              <Input className="mt-2 bg-muted" value={form.learn} onChange={(e) => setForm({ ...form, learn: e.target.value })} />
            </div>

            {[
              { left: { label: "*First Name", key: "firstName" as const, type: "text" }, right: { label: "*Member Referral Name", key: "referral" as const, type: "text" } },
              { left: { label: "*Last Name", key: "lastName" as const, type: "text" }, right: { label: "*Username", key: "username" as const, type: "text" } },
              { left: { label: "*Street Address", key: "street" as const, type: "textarea" }, right: { label: "*Password", key: "password" as const, type: "password" } },
              { left: { label: "*City", key: "city" as const, type: "text" }, right: { label: "*Confirm Password", key: "confirmPassword" as const, type: "password" } },
              { left: { label: "*State", key: "state" as const, type: "text" }, right: null },
              { left: { label: "*Zip", key: "zip" as const, type: "text" }, right: { label: "*Country", key: "country" as const, type: "text" } },
              { left: { label: "*Email", key: "email" as const, type: "email" }, right: null },
              { left: { label: "*Confirm Email", key: "confirmEmail" as const, type: "email" }, right: null },
              { left: { label: "*Birthday (mo/day)", key: "birthday" as const, type: "text" }, right: null },
              { left: { label: "*Phone (xxx-xxx-xxxx)", key: "phone" as const, type: "tel" }, right: null },
            ].map((row, i) => (
              <RowField key={i} row={row} form={form as unknown as Record<string, unknown>} setForm={setForm as unknown as (v: Record<string, unknown>) => void} />
            ))}

            <div className="md:col-start-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.accepted}
                  onChange={(e) => setForm({ ...form, accepted: e.target.checked })}
                  className="size-4"
                />
                <a href="#" className="text-secondary underline">Accept our Terms&amp;Conditions</a>
              </label>
            </div>

            <div className="md:col-span-2 flex justify-center pt-4">
              <Button type="submit" variant="destructive" className="rounded-md px-12 py-6 text-base font-semibold">
                Register
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Two CTA banners */}
      <section className="grid gap-6 px-6 pb-20 md:grid-cols-2 md:gap-0 md:px-0">
        <a
          href="#"
          className="relative flex h-56 items-center justify-center overflow-hidden text-primary-foreground"
          style={{
            backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.7), oklch(0.45 0.2 27 / 0.6)), url(${precinctFlag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Check precinct information</h3>
            <span className="mt-4 inline-block rounded-md bg-card px-6 py-2 text-sm font-semibold text-foreground">
              Click Here
            </span>
          </div>
        </a>
        <a
          href="#"
          className="relative flex h-56 items-center justify-center overflow-hidden text-primary-foreground"
          style={{
            backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.55), oklch(0.45 0.2 27 / 0.7)), url(${voterId})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Check voter ID Status</h3>
            <span className="mt-4 inline-block rounded-md bg-card px-6 py-2 text-sm font-semibold text-foreground">
              Click Here
            </span>
          </div>
        </a>
      </section>

      {/* Note from Membership Chair */}
      <section
        className="relative py-24 text-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.45 0.2 27 / 0.75), oklch(0.22 0.14 265 / 0.75)), url(${fireworksBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-lg bg-card p-10 shadow-[var(--shadow-elegant)]">
            <h3 className="text-center text-2xl font-semibold text-foreground">
              A Note from our Membership Chair
            </h3>
            <div className="mx-auto mt-3 h-1 w-12 bg-secondary" />
            <p className="mt-6 text-center text-sm italic text-muted-foreground">
              From our 2nd VP/Membership Chair, Chrissy Hayden
            </p>
            <h4 className="mt-6 text-lg font-bold text-foreground">Thank you for joining WORWF!</h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You will discover a very active and outgoing club. As a member, you will receive by
              email: newsletter communications, club announcements, special events, and
              participation opportunities.
            </p>
            <p className="mt-4 text-sm font-semibold text-secondary">
              We are glad you are one of us!!
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-md bg-muted p-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-secondary" />
              <p className="text-sm text-muted-foreground">
                If you would like more information about Membership, please contact Chrissy at{" "}
                <a href="mailto:Membership@WORWF.org" className="font-semibold text-secondary underline">
                  Membership@WORWF.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.22 0.14 265 / 0.92), oklch(0.22 0.14 265 / 0.85)), url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <img src={worwfLogo} alt="WORWF" className="size-14 object-contain" />
                <span className="text-lg font-semibold">
                  West Orange Republican Women Federated
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Upcoming Events", "Donate", "Join Us", "Gallery", "Voter Resources", "News to Know", "About Us"].map((l) => (
                  <a key={l} href="#" className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:text-right">
              <div className="flex items-center gap-3 lg:justify-end">
                <a href="#" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">
                  <Facebook className="size-4" />
                </a>
                <a href="#" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
              </div>
              <h4 className="mt-8 text-lg font-bold">Contact Info</h4>
              <p className="mt-4 flex items-start gap-2 text-sm lg:justify-end">
                <span>3300 West Orange Country Club Drive,<br />Winter Garden, FL 34787</span>
                <MapPin className="mt-1 size-4 shrink-0" />
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm lg:justify-end">
                info@worwf.org <Mail className="size-4" />
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/20 pt-8">
            <div className="flex items-center gap-3">
              <span className="text-sm">Sponsors</span>
              <div className="rounded-md bg-primary-foreground px-4 py-2 text-sm font-extrabold text-secondary">
                <span className="text-secondary">RBS</span>
                <span className="ml-1 text-[10px] text-primary">CONSTRUCTION &amp; ROOFING</span>
              </div>
            </div>
            <Button variant="destructive" className="rounded-md px-6 font-semibold">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs">
            <p className="opacity-80">
              Copyright © 2025. West Orange Republican Women Federated. All rights reserved.
            </p>
            <div className="flex gap-5 opacity-80">
              <Link to="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
              <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 flex size-10 items-center justify-center rounded-md bg-card text-foreground shadow-lg hover:bg-muted"
        >
          <ChevronUp className="size-5" />
        </button>
      </footer>
    </div>
  );
}

function RowField({
  row,
  form,
  setForm,
}: {
  row: {
    left: { label: string; key: string; type: string };
    right: { label: string; key: string; type: string } | null;
  };
  form: Record<string, unknown>;
  setForm: (v: Record<string, unknown>) => void;
}) {
  const renderField = (f: { label: string; key: string; type: string }) => (
    <div>
      <label className="block text-sm font-bold text-foreground">
        {f.label.startsWith("*") && <span className="text-secondary">*</span>}
        {f.label.replace(/^\*/, "")}
      </label>
      {f.type === "textarea" ? (
        <Textarea
          rows={3}
          className="mt-2 bg-muted"
          value={String(form[f.key] ?? "")}
          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
        />
      ) : (
        <Input
          type={f.type}
          className="mt-2 bg-muted"
          value={String(form[f.key] ?? "")}
          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
        />
      )}
    </div>
  );
  return (
    <>
      {renderField(row.left)}
      {row.right ? renderField(row.right) : <div className="hidden md:block" />}
    </>
  );
}

