import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "How worwf.org uses cookies and similar technologies, and how to manage your preferences.",
      },
      { property: "og:title", content: "Cookie Policy — WORWF" },
      { property: "og:description", content: "Cookie usage on worwf.org." },
    ],
  }),
});

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Contact Us", to: "/contact-us" as const },
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function CookiePolicyPage() {
  return (
    <>


      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: "oklch(0.20 0.08 25)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-primary-foreground md:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">Effective date: August 26, 2025</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            This Cookie Policy explains what cookies and similar technologies we use on
            worwf.org and why. It also explains how you can control cookie preferences.
          </p>

          <Section number="1" title="What are cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a
              website. They help the site remember your preferences and understand how
              you use the Site. For visitors in jurisdictions with privacy laws (for
              example the EU/EEA/UK), non-essential cookies may require consent.
            </p>
          </Section>

          <Section number="2" title="Types of cookies we may use">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-foreground">Strictly necessary cookies:</strong>{" "}
                Required for the Site to function (session, security). These do not
                require consent.
              </li>
              <li>
                <strong className="text-foreground">Performance / Analytics cookies:</strong>{" "}
                Help us understand site usage and improve performance (for example,
                Google Analytics). These collect aggregated, anonymous statistics.
              </li>
              <li>
                <strong className="text-foreground">Functionality cookies:</strong>{" "}
                Remember site preferences (language, display preferences).
              </li>
              <li>
                <strong className="text-foreground">Marketing / Advertising cookies:</strong>{" "}
                Used to deliver relevant adverts, measure ad effectiveness, or for
                social sharing (e.g., social widgets, pixels). These usually require
                consent for visitors in jurisdictions where consent is required.
              </li>
            </ul>
          </Section>

          <Section number="3" title="Third-party cookies & services">
            <p>
              The Site may include integrations with social platforms (e.g., Facebook,
              X) and may use third-party payment or donation processors. Those third
              parties may set cookies on their domains when you interact with their
              features. Please review third-party privacy/cookie policies for details.
            </p>
          </Section>

          <Section number="4" title="Consent and managing cookies">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                If you are in a jurisdiction that requires consent for non-essential
                cookies, we obtain consent before setting those cookies and provide a
                way to accept or decline categories.
              </li>
              <li>
                To manage cookies generally: most browsers let you view, control, and
                delete cookies via browser settings. You can also opt out of many
                analytics providers via their opt-out tools.
              </li>
            </ul>
          </Section>

          <Section number="5" title="How long cookies last">
            <p>
              Cookie lifetimes vary: session cookies expire after you close the
              browser; persistent cookies remain for a set period (e.g., 30 days)
              depending on purpose.
            </p>
          </Section>

          <Section number="6" title="Changes to this Cookie Policy">
            <p>
              We may update this policy; the Effective date at the top will reflect
              changes.
            </p>
          </Section>

          <Section number="7" title="Contact">
            <p>
              For cookie questions:{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>
              .
            </p>
          </Section>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
  );
}
