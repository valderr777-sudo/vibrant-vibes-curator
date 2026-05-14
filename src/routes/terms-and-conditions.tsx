import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Terms and conditions governing your use of worwf.org and services from West Orange Republican Women Federated.",
      },
      { property: "og:title", content: "Terms & Conditions — WORWF" },
      {
        property: "og:description",
        content: "The terms governing your use of worwf.org.",
      },
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

function TermsPage() {
  return (
    <>


      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.12 0.02 25 / 0.7), oklch(0.12 0.02 25 / 0.7))`,
          backgroundColor: "oklch(0.20 0.08 25)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-primary-foreground md:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-base opacity-90 md:text-lg">
            Effective date: August 26, 2025
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Welcome to worwf.org. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern
            your use of the website and any services accessible at or through worwf.org
            (the &ldquo;Site&rdquo;). By accessing or using the Site you agree to these
            Terms. If you do not agree, please do not use the Site.
          </p>

          <Section number="1" title="Who we are / Contact">
            <p>
              The Site is operated by West Orange Republican Women Federated
              (&ldquo;WORWF,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
              You can contact us at{" "}
              <a
                href="mailto:info@worwf.org"
                className="text-sky-600 hover:text-secondary hover:underline"
              >
                info@worwf.org
              </a>
              . Our activities serve members and the public in West Orange County,
              Florida.
            </p>
          </Section>

          <Section number="2" title="Use of the Site">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                You may use the Site for lawful, personal, informational, and
                non-commercial purposes only.
              </li>
              <li>
                You must not use the Site in any way that violates applicable law or
                these Terms. Prohibited conduct includes, but is not limited to, fraud,
                harassment, transmitting malware, or attempting unauthorized access to
                systems.
              </li>
            </ol>
          </Section>

          <Section number="3" title="Memberships, Donations & Payments">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                Membership sign-ups, event reservations, and donations may be processed
                through third-party services. By submitting payment or donation details
                you agree to the third-party provider&rsquo;s terms.
              </li>
              <li>
                All donations are final unless otherwise stated. Receipts and
                tax-deduction eligibility (if any) are subject to applicable laws.
              </li>
            </ol>
          </Section>

          <Section number="4" title="Content & Intellectual Property">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                The Site&rsquo;s content (text, logos, images) is owned by WORWF or
                licensed to WORWF. You may not reproduce, distribute, or create
                derivative works from the Site&rsquo;s content without written
                permission.
              </li>
              <li>
                If you send us content (messages, images, feedback) you grant WORWF a
                non-exclusive, royalty-free right to use, reproduce, and publish that
                content for the Site&rsquo;s purposes (subject to any applicable
                member/privacy agreements).
              </li>
            </ol>
          </Section>

          <Section number="5" title="External Links & Third-Party Sites">
            <p>
              The Site may link to third-party websites (social media, donation
              portals). We do not control those sites and are not responsible for their
              content, privacy practices, or terms. Links are provided for convenience
              only.
            </p>
          </Section>

          <Section number="6" title="Disclaimers & Limitation of Liability">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                The Site is provided &ldquo;as is.&rdquo; To the fullest extent
                permitted by law, WORWF disclaims all warranties (express or implied).
              </li>
              <li>
                WORWF is not liable for indirect, incidental, special, or consequential
                damages arising from use of the Site. Our aggregate liability to you
                for any claim arising hereunder will not exceed $100 (or the minimum
                allowed by applicable law).
              </li>
            </ol>
          </Section>

          <Section number="7" title="Indemnification">
            <p>
              You agree to indemnify and hold WORWF harmless from any claims,
              liabilities, damages, losses, or expenses (including reasonable legal
              fees) arising from your violation of these Terms or your use of the Site.
            </p>
          </Section>

          <Section number="8" title="Governing Law; Dispute Resolution">
            <p>
              These Terms are governed by the laws of the State of Florida, United
              States. Any disputes will be resolved under Florida law.
            </p>
          </Section>

          <Section number="9" title="Changes to Terms">
            <p>
              We may update these Terms at any time. The &ldquo;Effective date&rdquo;
              above shows when the current Terms take effect. Continued use of the Site
              after changes constitutes acceptance.
            </p>
          </Section>

          <Section number="10" title="Contact">
            <p>
              Questions about these Terms:{" "}
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

      {/* Footer */}
    </>
  );
}
