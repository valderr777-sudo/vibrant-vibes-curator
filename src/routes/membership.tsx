import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Facebook, ChevronUp, Vote, Users, Check, X, User, Home, Lock, Phone, Calendar, FileText, ArrowRight, ArrowLeft, Printer, Sparkles, ShieldCheck, UserPlus, RefreshCw, Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import memberHero from "@/assets/worwf/member-hero.jpg";
import memberGroup from "@/assets/worwf/member-group.jpg";
import membersParallax from "@/assets/worwf/members-parallax.jpg";
import voterId from "@/assets/worwf/voter-id.jpg";
import precinctFlag from "@/assets/worwf/precinct-flag.jpg";
import christineHayden from "@/assets/worwf/about/christine-hayden.jpg";
import groveSunrise from "@/assets/groves/grove-sunrise.jpg.asset.json";

export const Route = createFileRoute("/membership")({
  component: Membership,
  head: () => ({
    meta: [
      { title: "Become a Member — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Join WORWF as a Primary or Associate Member. Registered Republicans can apply with a current Member Referral.",
      },
      { property: "og:title", content: "Become a Member — WORWF" },
      {
        property: "og:description",
        content: "Apply to join West Orange Republican Women Federated today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const, active: true },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

const membershipOptions = [
  "Primary Member - Voting Member",
  "Associate Members - Women (Member of another NFRW club)",
  "Associates (Men)",
  "Young Republican Member (18+ years, Post Secondary Student)",
];

const renewalOptions = [
  "Primary Member - Voting Member",
  "Associate Members - Women (Member of another NFRW club)",
  "Associates (Men)",
  "Young Republican Member (18+ years, Post Secondary Student)",
];


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
  const [mode, setMode] = useState<ApplyMode>("new");

  const signUp = (tier: string) => {
    setMode("new");
    setForm((prev) => ({ ...prev, newMember: tier }));
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
      `}</style>



      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Parallax background */}
        <div
          className="people-background hero-phone-top responsive-parallax absolute inset-0 -z-10 bg-fixed"
          style={{ backgroundImage: `url(${memberHero})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.20_0.08_25/0.65)] to-[oklch(0.20_0.08_25/0.85)]"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-24 md:py-36">
          <h1 className="animate-fade-in text-center text-5xl font-light text-primary-foreground md:text-7xl">
            Become a Member
          </h1>
        </div>
        <div className="relative isolate overflow-hidden bg-primary py-5">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath fill='white' d='M14 4l2.4 7.2H24l-6.1 4.5 2.3 7.3L14 18.5 7.8 23l2.3-7.3L4 11.2h7.6zM42 32l2.4 7.2H52l-6.1 4.5 2.3 7.3-6.2-4.5-6.2 4.5 2.3-7.3-6.1-4.5h7.6z'/%3E%3C/svg%3E\")",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="mx-auto max-w-5xl px-6 text-center text-primary-foreground">
            <p className="text-sm font-bold tracking-wide [text-wrap:balance] md:text-base">
              According to Article II of the NFRW Bylaws, you must be a registered Republican to be
              eligible for membership.
            </p>
          </div>
        </div>
      </section>

      {/* Note from Membership Chair */}
      <section className="relative isolate overflow-hidden bg-background py-20 md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${groveSunrise.url})` }}
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              A Personal Welcome
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-secondary [text-wrap:balance] md:text-5xl">
              A Note from Our Membership Chair
            </h2>
            <span aria-hidden className="mx-auto mt-5 block h-1 w-16 bg-accent" />
          </div>

          <article className="relative rounded-sm border border-border bg-card px-8 py-12 shadow-[var(--shadow-elegant)] sm:px-14 md:px-20 md:py-16">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary"
            />
            <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
              <img src={worwfLogo} alt="" loading="lazy" className="size-14 object-contain" />
              <p className="text-right text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                West Orange Republican
                <br />
                Women, Federated
              </p>
            </div>

            <p className="mt-10 font-display text-2xl font-bold text-secondary">Dear New Member,</p>
            <p className="mt-6 text-lg leading-[1.9] text-muted-foreground [text-wrap:pretty]">
              Thank you for joining WORWF! You will discover a very active and outgoing club. As a
              member, you will receive by email: newsletter communications, club announcements,
              special events, and participation opportunities.
            </p>
            <p className="mt-6 text-lg font-bold text-primary">We are glad you are one of us!!</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
              If you would like more information about Membership, please contact me at{" "}
              <a
                href="mailto:Membership@WORWF.org"
                className="inline-flex items-center gap-2 font-bold text-primary underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-secondary"
              >
                <Mail className="size-4 shrink-0" />
                Membership@WORWF.org
              </a>
            </p>

            <div className="mt-12 flex items-center gap-5">
              <img
                src={christineHayden}
                alt="Christine Hayden, 2nd Vice President and Membership Chair"
                loading="lazy"
                className="size-24 shrink-0 rounded-full border-4 border-accent object-cover object-top shadow-[var(--shadow-elegant)]"
              />
              <div>
                <p className="text-base text-muted-foreground">Warmly,</p>
                <p
                  className="text-5xl leading-tight text-secondary md:text-6xl"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  Chrissy Hayden
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  2nd VP, Membership Chair
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>



      {/* Active / Associate Members */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        {/* Parallax background covering full section */}
        <div
          className="responsive-parallax absolute inset-0 bg-cover bg-center lg:bg-fixed opacity-30"
          style={{ backgroundImage: `url(${membersParallax})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-muted/20 via-muted/10 to-muted/30"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Membership Tiers
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Two Ways to Join Our Community
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* ACTIVE */}
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border-t-4 border-primary bg-card p-8 shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute right-6 top-6 text-6xl font-black text-primary/10">01</div>
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Vote className="size-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Tier 01
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">Primary Members</h3>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                To be a Primary Member, you must be in good standing. Primary membership includes
                membership in the National Federation of Republican Women and in the Florida
                Federation of Republican Women.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Voting privileges in club decisions",
                  "Participate in debates & hold office",
                  "Serve as delegate at National & State Conventions",
                  "Includes NFRW + FFRW membership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button variant="cta" className="w-full gap-2" onClick={() => signUp("Primary Member - Voting Member")}>
                  Sign Up <ArrowRight className="size-4" />
                </Button>
              </div>
            </article>

            {/* ASSOCIATE */}
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border-t-4 border-secondary bg-card p-8 shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute right-6 top-6 text-6xl font-black text-secondary/10">02</div>
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Users className="size-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Tier 02
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">Associate Members</h3>
                  <p className="text-xs text-muted-foreground">Women (Member of another NFRW club) and Associates (Men)</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                To be an Associate Member, you must be in good standing — that includes your
                membership in another Federated club. Men are warmly welcomed to join as
                Associate Members.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {[
                  { ok: true, text: "Open to members of other Federated clubs" },
                  { ok: true, text: "Men are welcome as Associate Members" },
                  { ok: false, text: "No voting rights or office holding" },
                  { ok: false, text: "Cannot serve as WORWF delegate" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    {item.ok ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    )}
                    <span className={item.ok ? "text-foreground/80" : "text-muted-foreground line-through"}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button variant="cta" className="w-full gap-2" onClick={() => signUp("Associate Members - Women (Member of another NFRW club)")}>
                  Sign Up <ArrowRight className="size-4" />
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Become a member red band */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 px-6 md:grid-cols-[auto_1fr_auto]">
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
      <MembershipForm form={form} setForm={setForm} mode={mode} setMode={setMode} />


      {/* Footer */}
    </>
  );
}

type FormState = {
  newMember: string;
  spouse: string;
  voterReg: string;
  renewal: string;
  precinct: string;
  learn: string;
  firstName: string;
  referral: string;
  lastName: string;
  username: string;
  street: string;
  password: string;
  city: string;
  confirmPassword: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  confirmEmail: string;
  birthday: string;
  phone: string;
  accepted: boolean;
};

type ApplyMode = "new" | "renew";

function MembershipForm({
  form,
  setForm,
  mode,
  setMode,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  mode: ApplyMode;
  setMode: React.Dispatch<React.SetStateAction<ApplyMode>>;
}) {
  const [step, setStep] = useState(0);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const steps = [
    { id: "tier", label: "Membership", icon: ShieldCheck },
    { id: "personal", label: "About You", icon: User },
    { id: "address", label: "Address", icon: Home },
    { id: "account", label: "Account", icon: Lock },
    { id: "review", label: "Review", icon: Check },
  ];

  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const tierOptions = mode === "new" ? membershipOptions : renewalOptions;
  const tierValue = mode === "new" ? form.newMember : form.renewal;
  const setTierValue = (v: string) =>
    mode === "new" ? update("newMember", v) : update("renewal", v);

  const canContinue = (() => {
    if (step === 0) return Boolean(tierValue);
    if (step === 1)
      return Boolean(form.firstName && form.lastName && form.email && form.confirmEmail && form.phone && form.birthday);
    if (step === 2) return Boolean(form.street && form.city && form.state && form.zip);
    if (step === 3)
      return Boolean(form.username && form.password && form.confirmPassword && form.referral && form.voterReg && form.precinct);
    if (step === 4) return form.accepted && form.email === form.confirmEmail && form.password === form.confirmPassword;
    return true;
  })();

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue) return;
    const subject = `WORWF Membership ${mode === "new" ? "Application" : "Renewal"}: ${form.firstName} ${form.lastName}`;
    const body = [
      `Membership type: ${tierValue}`,
      `Name: ${form.firstName} ${form.lastName}`,
      form.spouse ? `Spouse: ${form.spouse}` : "",
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Birthday: ${form.birthday}`,
      `Address: ${form.street}, ${form.city}, ${form.state} ${form.zip}, ${form.country}`,
      `Referral: ${form.referral}`,
      `Voter Registration #: ${form.voterReg}`,
      `Precinct #: ${form.precinct}`,
      form.learn ? `Heard about WORWF: ${form.learn}` : "",
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:Membership@WORWF.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="form" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" /> Join WORWF
          </span>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Membership Form</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Complete the form below to apply or renew. Required fields are marked with{" "}
            <span className="font-semibold text-secondary">*</span>.
          </p>
        </div>

        {/* Mode toggle + helpers */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4">
          <div className="grid w-full max-w-sm grid-cols-2 rounded-lg border border-border bg-card p-1 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setMode("new");
                setStep(0);
              }}
              className={`flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
                mode === "new" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserPlus className="size-4" /> New Membership
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("renew");
                setStep(0);
              }}
              className={`flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
                mode === "renew" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <RefreshCw className="size-4" /> Renew Membership
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:gap-4">
            {mode === "renew" && (
              <a
                href="http://worwf.square.site/product/membership/worwf/2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-secondary underline"
              >
                <RefreshCw className="size-3.5" /> Renew online via Square
              </a>
            )}
            <a
              href={mode === "renew" ? "/forms/worwf-membership-renewal.png" : "/forms/worwf-membership-new.png"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-secondary underline"
            >
              <Printer className="size-3.5" /> Printer-friendly {mode === "renew" ? "renewal" : "new member"} form
            </a>
          </div>

        </div>

        {/* Stepper */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const done = i < step;
              const active = i === step;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => i <= step && setStep(i)}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`flex size-10 items-center justify-center rounded-full border-2 transition-all ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : done
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="size-5" /> : <Icon className="size-5" />}
                  </div>
                  <span
                    className={`hidden text-[11px] font-semibold uppercase tracking-wider md:block ${
                      active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        {submitted ? (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-elegant)] md:p-10">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="size-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-foreground">Almost done!</h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your email app should have opened with your completed application addressed to{" "}
              <a href="mailto:Membership@WORWF.org" className="font-semibold text-secondary underline">
                Membership@WORWF.org
              </a>
              . Just press send, and our Membership Chair will confirm your application.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              To finish, pay your dues securely through Square:
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="cta" className="gap-2">
                <a href="http://worwf.square.site/product/membership/worwf/2" target="_blank" rel="noopener noreferrer">
                  Pay Dues on Square <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                }}
              >
                Start Over
              </Button>
            </div>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-10"
        >
          {/* Step 0: Tier */}
          {step === 0 && (
            <div className="animate-fade-in space-y-6">
              <StepHeader
                icon={ShieldCheck}
                title={mode === "new" ? "Choose Your Membership" : "Choose Renewal Type"}
                description={
                  mode === "new"
                    ? "Select the type of membership you'd like to sign up for."
                    : "Select the type of membership you wish to renew."
                }
              />
              <div className="grid gap-3">
                {tierOptions.map((opt) => {
                  const selected = tierValue === opt;
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border-2 p-4 transition-all ${
                        selected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="tier"
                        className="sr-only"
                        checked={selected}
                        onChange={() => setTierValue(opt)}
                      />
                      <div
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          selected ? "border-primary bg-primary" : "border-muted-foreground/40"
                        }`}
                      >
                        {selected && <div className="size-2 rounded-full bg-primary-foreground" />}
                      </div>
                      <span className="text-sm font-semibold text-foreground">{opt}</span>
                    </label>
                  );
                })}
              </div>
              <Field label="How did you learn about our organization?" required>
                <Input
                  className="bg-background"
                  value={form.learn}
                  onChange={(e) => update("learn", e.target.value)}
                  placeholder="Friend, event, social media…"
                />
              </Field>
            </div>
          )}

          {/* Step 1: Personal */}
          {step === 1 && (
            <div className="animate-fade-in space-y-6">
              <StepHeader icon={User} title="Tell Us About You" description="Your basic contact details." />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="First Name" required>
                  <Input className="bg-background" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                </Field>
                <Field label="Last Name" required>
                  <Input className="bg-background" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                </Field>
                <Field label="Spouse">
                  <Input className="bg-background" value={form.spouse} onChange={(e) => update("spouse", e.target.value)} />
                </Field>
                <Field label="Birthday (mo/day)" required icon={Calendar}>
                  <Input
                    className="bg-background"
                    placeholder="MM/DD"
                    value={form.birthday}
                    onChange={(e) => update("birthday", e.target.value)}
                  />
                </Field>
                <Field label="Email" required icon={Mail}>
                  <Input
                    type="email"
                    className="bg-background"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </Field>
                <Field label="Confirm Email" required icon={Mail}>
                  <Input
                    type="email"
                    className="bg-background"
                    value={form.confirmEmail}
                    onChange={(e) => update("confirmEmail", e.target.value)}
                  />
                  {form.confirmEmail && form.email !== form.confirmEmail && (
                    <p className="mt-1 text-xs text-destructive">Emails do not match</p>
                  )}
                </Field>
                <Field label="Phone" required icon={Phone}>
                  <Input
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    className="bg-background"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div className="animate-fade-in space-y-6">
              <StepHeader icon={Home} title="Mailing Address" description="Where can we send your member info?" />
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field label="Street Address" required icon={MapPin}>
                    <Input className="bg-background" value={form.street} onChange={(e) => update("street", e.target.value)} />
                  </Field>
                </div>
                <Field label="City" required>
                  <Input className="bg-background" value={form.city} onChange={(e) => update("city", e.target.value)} />
                </Field>
                <Field label="State" required>
                  <Input className="bg-background" value={form.state} onChange={(e) => update("state", e.target.value)} />
                </Field>
                <Field label="Zip" required>
                  <Input className="bg-background" value={form.zip} onChange={(e) => update("zip", e.target.value)} />
                </Field>
                <Field label="Country" required>
                  <Input className="bg-background" value={form.country} onChange={(e) => update("country", e.target.value)} />
                </Field>
              </div>
            </div>
          )}

          {/* Step 3: Account & Verification */}
          {step === 3 && (
            <div className="animate-fade-in space-y-6">
              <StepHeader
                icon={Lock}
                title="Account & Verification"
                description="Set up your login and verify your eligibility."
              />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Member Referral Name" required>
                  <Input
                    className="bg-background"
                    value={form.referral}
                    onChange={(e) => update("referral", e.target.value)}
                    placeholder="Name of current WORWF member"
                  />
                </Field>
                <Field label="Username" required>
                  <Input className="bg-background" value={form.username} onChange={(e) => update("username", e.target.value)} />
                </Field>
                <Field label="Voter Registration #" required>
                  <Input className="bg-background" value={form.voterReg} onChange={(e) => update("voterReg", e.target.value)} />
                </Field>
                <Field label="Precinct #" required hint="Located on Voter Registration Card">
                  <Input className="bg-background" value={form.precinct} onChange={(e) => update("precinct", e.target.value)} />
                </Field>
                <Field label="Password" required>
                  <div className="relative">
                    <Input
                      type={showPwd ? "text" : "password"}
                      className="bg-background pr-10"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </Field>
                <Field label="Confirm Password" required>
                  <div className="relative">
                    <Input
                      type={showConfirmPwd ? "text" : "password"}
                      className="bg-background pr-10"
                      value={form.confirmPassword}
                      onChange={(e) => update("confirmPassword", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPwd((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPwd ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                  {form.confirmPassword && form.password !== form.confirmPassword && (
                    <p className="mt-1 text-xs text-destructive">Passwords do not match</p>
                  )}
                </Field>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="animate-fade-in space-y-6">
              <StepHeader icon={Check} title="Review & Submit" description="Confirm your information below." />

              <div className="grid gap-4 md:grid-cols-2">
                <ReviewBlock title="Membership">
                  <ReviewRow label="Type" value={tierValue || "—"} />
                  <ReviewRow label="Source" value={form.learn || "—"} />
                </ReviewBlock>
                <ReviewBlock title="Contact">
                  <ReviewRow label="Name" value={`${form.firstName} ${form.lastName}`.trim() || "—"} />
                  <ReviewRow label="Email" value={form.email || "—"} />
                  <ReviewRow label="Phone" value={form.phone || "—"} />
                </ReviewBlock>
                <ReviewBlock title="Address">
                  <ReviewRow label="Street" value={form.street || "—"} />
                  <ReviewRow label="City/State/Zip" value={`${form.city}, ${form.state} ${form.zip}`} />
                </ReviewBlock>
                <ReviewBlock title="Verification">
                  <ReviewRow label="Referral" value={form.referral || "—"} />
                  <ReviewRow label="Voter Reg #" value={form.voterReg || "—"} />
                  <ReviewRow label="Precinct" value={form.precinct || "—"} />
                </ReviewBlock>
              </div>

              <label className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
                <Checkbox
                  checked={form.accepted}
                  onCheckedChange={(v) => update("accepted", Boolean(v))}
                  className="mt-0.5"
                />
                <span className="text-sm text-foreground">
                  I accept the{" "}
                  <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary underline">
                    Terms &amp; Conditions
                  </a>{" "}
                  and confirm that I am a registered Republican as required by NFRW Bylaws.
                </span>
              </label>
            </div>
          )}

          {/* Nav buttons */}
          <div className="mt-10 grid grid-cols-2 items-center gap-3 border-t border-border pt-6 sm:flex sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prev}
              disabled={step === 0}
              className="gap-2"
            >
              <ArrowLeft className="size-4" /> Back
            </Button>

            <span className="col-span-2 row-start-1 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Step {step + 1} of {totalSteps}
            </span>

            {step < totalSteps - 1 ? (
              <Button type="button" onClick={next} disabled={!canContinue} variant="cta" className="gap-2">
                Continue <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={!canContinue} variant="cta" className="gap-2">
                Register <Check className="size-4" />
              </Button>
            )}
          </div>
        </form>
        )}
      </div>
    </section>
  );
}

function StepHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof User;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 border-b border-border pb-5">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  icon: Icon,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  icon?: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
        {Icon && <Icon className="size-3.5 text-muted-foreground" />}
        {label}
        {required && <span className="text-secondary">*</span>}
      </Label>
      {children}
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function ReviewBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{title}</h4>
      <dl className="space-y-1">{children}</dl>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}


