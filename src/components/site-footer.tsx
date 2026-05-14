import { Link } from "@tanstack/react-router";
import { Mail, Facebook, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import sponsorRbs from "@/assets/worwf/sponsors/rbs.png";
import sponsorStars from "@/assets/worwf/sponsors/stars-and-stripes.png";

const footerLinks: { label: string; to: "/events" | "/membership" | "/gallery" | "/voter-resources" | "/about-us" | "/"; external?: string }[] = [
  { label: "Upcoming Events", to: "/events" },
  { label: "Donate", to: "/", external: "https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" },
  { label: "Join Us", to: "/membership" },
  { label: "Gallery", to: "/gallery" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "About Us", to: "/about-us" },
];

export function SiteFooter() {
  return (
    <footer
      className="relative text-primary-foreground"
      style={{
        backgroundImage: `linear-gradient(135deg, oklch(0 0 0 / 0.85), oklch(0 0 0 / 0.78)), url(${footerBg})`,
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
              {footerLinks.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="rounded-md border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="lg:text-right">
            <div className="flex items-center gap-3 lg:justify-end">
              <a
                href="https://www.facebook.com/westorangerepublicanwomenfederated"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://x.com/worwf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary"
              >
                <span className="text-sm font-bold">𝕏</span>
              </a>
            </div>
            <h4 className="mt-8 text-lg font-bold">Contact Info</h4>
            <p className="mt-3 flex items-center gap-2 text-sm lg:justify-end">
              <span>info@worwf.org</span> <Mail className="size-4" />
            </p>
            <Link to="/contact-us" className="mt-6 inline-block lg:hidden">
              <Button variant="cta" className="rounded-md px-6 font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm">Sponsors</span>
            <a href="https://www.rbsroofing.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-md px-4 py-3">
              <img src={sponsorRbs} alt="RBS Construction & Roofing" className="h-20 w-auto object-contain" />
            </a>
            <a href="https://www.starsandstripesmarketing.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-md px-4 py-3">
              <img src={sponsorStars} alt="Stars and Stripes Marketing Studios" className="h-20 w-auto object-contain" />
            </a>
          </div>
          <Link to="/contact-us">
            <Button variant="cta" className="rounded-md px-6 font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col-reverse flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs lg:flex-row">
          <p className="text-center opacity-80 lg:text-left">
            Copyright © 2025. West Orange Republican Women Federated. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5 opacity-80">
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
  );
}
