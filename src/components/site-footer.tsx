import { Link } from "@tanstack/react-router";
import { Mail, Facebook, ChevronUp, MapPin, Clock } from "lucide-react";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import ssmLogo from "@/assets/worwf/sponsors/stars-and-stripes-white.png.asset.json";

const exploreLinks: { label: string; to: "/events" | "/membership" | "/gallery" | "/voter-resources" | "/about-us" | "/leadership" }[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Leadership", to: "/leadership" },
  { label: "Events", to: "/events" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "Gallery", to: "/gallery" },
];

type GetInvolvedLink = { label: string; to?: string; href?: string };

const getInvolvedLinks: GetInvolvedLink[] = [
  { label: "Become a Member", to: "/membership" },
  { label: "Donate", href: "https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" },
  { label: "Members Only", to: "/members" },
  { label: "Contact Us", to: "/contact-us" },
];

function FooterLink({ children, href, to }: { children: React.ReactNode; href?: string; to?: string }) {
  const className =
    "text-sm text-secondary-foreground/80 transition-colors hover:text-accent-light";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary-foreground">
      {children}
    </h4>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={worwfLogo} alt="WORWF" className="size-14 object-contain" />
              <span className="text-base leading-snug font-semibold">
                West Orange Republican Women Federated
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/80">
              A Federated Republican women's club serving West Orange County, Florida
              through education, community service, and political engagement.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/westorangerepublicanwomenfederated"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center border border-primary-foreground/30 transition-colors hover:border-accent-light hover:text-accent-light"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://x.com/worwf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex size-9 items-center justify-center border border-primary-foreground/30 transition-colors hover:border-accent-light hover:text-accent-light"
              >
                <span className="text-sm font-bold">𝕏</span>
              </a>
              <a
                href="mailto:info@worwf.org"
                aria-label="Email"
                className="flex size-9 items-center justify-center border border-primary-foreground/30 transition-colors hover:border-accent-light hover:text-accent-light"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.to}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="lg:col-span-2">
            <FooterHeading>Get Involved</FooterHeading>
            <ul className="mt-5 space-y-3">
              {getInvolvedLinks.map((l) => (
                <li key={l.label}>
                  <FooterLink to={l.to} href={l.href}>
                    {l.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Meetings */}
          <div className="lg:col-span-4">
            <FooterHeading>Monthly Luncheon</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-light" />
                <span>
                  West Orange Country Club
                  <br />
                  3300 West Orange Country Club Drive, Winter Garden, FL 34787
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent-light" />
                <span>
                  Doors open 11:00 AM
                  <br />
                  Meeting 11:30 AM to 1:30 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent-light" />
                <a
                  href="mailto:Reservations@WORWF.org"
                  className="transition-colors hover:text-accent-light"
                >
                  Reservations@WORWF.org
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View Upcoming Events
              </Link>
              <a
                href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent-light hover:text-accent-light"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <p className="text-center text-xs text-secondary-foreground/70 lg:text-left">
              Copyright © 2026. West Orange Republican Women Federated. All rights reserved.
            </p>
            <a
              href="https://www.starsandstripesmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-secondary-foreground/70 transition-colors hover:text-secondary-foreground lg:justify-start"
            >
              <img
                src={ssmLogo.url}
                alt=""
                aria-hidden="true"
                className="h-8 w-auto shrink-0"
              />


              <span className="[text-wrap:balance]">
                Created and powered by{" "}
                <span className="font-semibold">Stars and Stripes Marketing Services</span>
              </span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-secondary-foreground/70 lg:justify-end">
            <Link to="/terms-and-conditions" className="transition-colors hover:text-secondary-foreground">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="transition-colors hover:text-secondary-foreground">Cookie Policy</Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-secondary-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex size-10 items-center justify-center bg-card text-foreground shadow-lg transition-colors hover:bg-muted"
      >
        <ChevronUp className="size-5" />
      </button>
    </footer>
  );
}
