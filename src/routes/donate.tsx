import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Lock, Users, GraduationCap, Flag, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import groupImg from "@/assets/worwf/group.jpg";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import {
  donationConfig,
  SQUARE_CARD_CONTAINER_ID,
  validateDonationAmount,
} from "@/lib/donations";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate | West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Support West Orange Republican Women Federated. Your gift funds candidate support, civic education, and community service in West Orange County.",
      },
      { property: "og:title", content: "Donate to WORWF" },
      {
        property: "og:description",
        content: "Help West Orange Republican Women Federated advance good government in our community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const impact = [
  { icon: Flag, title: "Campaign Support", text: "Volunteers, signs, and outreach for Republican candidates." },
  { icon: GraduationCap, title: "Civic Education", text: "Programs and literacy projects for our community." },
  { icon: Users, title: "Community Service", text: "Food drives, soldier support, and local outreach." },
];

const inputCls =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function DonatePage() {
  const [amount, setAmount] = useState<number>(donationConfig.defaultAmount);
  const [custom, setCustom] = useState("");
  const [info, setInfo] = useState({ firstName: "", lastName: "", email: "", phone: "", dedication: "" });
  const [error, setError] = useState<string | null>(null);
  const [handedOff, setHandedOff] = useState(false);

  const chosen = custom ? Number(custom) : amount;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountError = validateDonationAmount(chosen);
    if (amountError) return setError(amountError);
    if (!info.firstName.trim() || !info.lastName.trim() || !info.email.trim())
      return setError("Please enter your name and email.");
    setError(null);

    if (donationConfig.squareCheckoutEnabled) {
      // Square integration: tokenize the card from SQUARE_CARD_CONTAINER_ID and
      // send { amountCents: Math.round(chosen * 100), ...info } to the payment server function.
      return;
    }
    window.open(donationConfig.fallbackSquareUrl, "_blank", "noopener,noreferrer");
    setHandedOff(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="people-background responsive-parallax absolute inset-0 -z-10 lg:bg-fixed"
          style={{ backgroundImage: `url(${groupImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.20_0.10_250/0.85)] via-[oklch(0.25_0.10_25/0.7)] to-[oklch(0.20_0.08_25/0.85)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <Heart className="mx-auto size-10 fill-accent text-accent" />
          <h1 className="mt-5 animate-fade-in text-4xl font-extrabold text-primary-foreground [text-wrap:balance] sm:text-5xl md:text-6xl">
            Support Our Mission
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/90 [text-wrap:balance] md:text-lg">
            Your gift helps West Orange Republican Women Federated advance good government in our
            community, state, and nation.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.25fr]">
          {/* Why give */}
          <div className="lg:pt-4">
            <h2 className="text-3xl font-bold text-foreground [text-wrap:balance] md:text-4xl">
              Every gift makes a difference
            </h2>
            <div className="mt-4 h-1 w-14 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground [text-wrap:pretty]">
              Donations fund the work our members do all year long, from supporting candidates to
              serving families right here in West Orange County.
            </p>
            <ul className="mt-10 space-y-6">
              {impact.map((i) => (
                <li key={i.title} className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <i.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{i.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
              <img src={worwfLogo} alt="" className="size-14 object-contain" />
              <p className="text-sm text-muted-foreground [text-wrap:pretty]">
                Questions about giving? Email{" "}
                <a href="mailto:info@worwf.org" className="font-bold text-primary hover:underline">
                  info@worwf.org
                </a>
              </p>
            </div>
          </div>

          {/* Donation card */}
          <form
            onSubmit={submit}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] md:p-10"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" />

            {handedOff ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto size-14 text-primary" />
                <h2 className="mt-5 text-2xl font-bold text-foreground">Thank you, {info.firstName}!</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground [text-wrap:balance]">
                  Our secure Square checkout opened in a new tab. Enter ${chosen.toLocaleString()} there
                  to complete your gift.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild variant="cta">
                    <a href={donationConfig.fallbackSquareUrl} target="_blank" rel="noopener noreferrer">
                      Open checkout again
                    </a>
                  </Button>
                  <Button variant="outline" type="button" onClick={() => setHandedOff(false)}>
                    Back to form
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground">Make a Donation</h2>

                <fieldset className="mt-8">
                  <legend className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Choose an amount
                  </legend>
                  <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {donationConfig.presetAmounts.map((a) => {
                      const active = !custom && amount === a;
                      return (
                        <button
                          key={a}
                          type="button"
                          onClick={() => {
                            setAmount(a);
                            setCustom("");
                          }}
                          aria-pressed={active}
                          className={`rounded-lg border-2 py-3 text-lg font-bold transition-colors ${
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-foreground hover:border-primary"
                          }`}
                        >
                          ${a}
                        </button>
                      );
                    })}
                  </div>
                  <div className="relative mt-3">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">$</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={donationConfig.minimumAmount}
                      max={donationConfig.maximumAmount}
                      placeholder="Other amount"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="w-full rounded-lg border-2 border-border bg-background py-3 pl-8 pr-4 text-lg font-bold text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </fieldset>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {(
                    [
                      ["firstName", "First Name", "text", true],
                      ["lastName", "Last Name", "text", true],
                      ["email", "Email Address", "email", true],
                      ["phone", "Phone (optional)", "tel", false],
                    ] as const
                  ).map(([key, label, type, req]) => (
                    <label key={key} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {label} {req && <span className="text-primary">*</span>}
                      <input
                        type={type}
                        required={req}
                        maxLength={120}
                        value={info[key]}
                        onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
                        className={inputCls}
                      />
                    </label>
                  ))}
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:col-span-2">
                    In honor or memory of (optional)
                    <input
                      maxLength={200}
                      value={info.dedication}
                      onChange={(e) => setInfo({ ...info, dedication: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                </div>

                {/* Square card form mounts here once the integration is connected */}
                <div id={SQUARE_CARD_CONTAINER_ID} className={donationConfig.squareCheckoutEnabled ? "mt-8" : "hidden"} />

                {error && <p className="mt-6 text-sm font-semibold text-primary">{error}</p>}

                <Button type="submit" variant="cta" size="lg" className="mt-8 w-full text-base">
                  <Heart className="size-4" />
                  Donate ${Number.isFinite(chosen) && chosen > 0 ? chosen.toLocaleString() : "0"}
                </Button>
                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" />
                  Payments are processed securely by Square.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
