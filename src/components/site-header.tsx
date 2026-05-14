import { Link, useLocation } from "@tanstack/react-router";
import { Facebook, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import worwfLogo from "@/assets/worwf/worwf-logo.png";

const navLinks: {
  label: string;
  to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us" | "/members";
}[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Membership", to: "/membership" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "Members Only", to: "/members" },
];

const sponsorLinks: { label: string; to: "/sponsors/business" | "/sponsors/member-businesses" | "/sponsors/candidates" }[] = [
  { label: "Business Sponsors", to: "/sponsors/business" },
  { label: "Member Businesses", to: "/sponsors/member-businesses" },
  { label: "Candidate Sponsors", to: "/sponsors/candidates" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <a href="mailto:info@worwf.org" className="flex items-center gap-2 hover:text-secondary">
            <Mail className="size-4" />
            <span>info@worwf.org</span>
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-14 object-contain md:size-16" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`relative text-[15px] font-medium transition-colors hover:text-secondary ${
                    active ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-secondary" />
                  )}
                </Link>
              );
            })}
            <div className="group relative">
              <button type="button" className="relative inline-flex items-center text-[15px] font-medium text-foreground transition-colors hover:text-secondary">
                Sponsors<span className="ml-1">▾</span>
              </button>
              <div className="absolute left-0 top-full z-50 hidden pt-3 group-hover:block">
                <div className="min-w-[210px] rounded-md border border-border bg-background py-2 shadow-lg">
                  {sponsorLinks.map((s) => (
                    <Link key={s.to} to={s.to} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden rounded-md border-2 border-accent bg-transparent px-6 font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground sm:inline-flex">
              <Link to="/events">EVENTS</Link>
            </Button>
            <Button asChild variant="cta" className="hidden rounded-md px-6 font-bold tracking-wider sm:inline-flex">
              <a href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" target="_blank" rel="noopener noreferrer">DONATE</a>
            </Button>
            <Button asChild variant="cta" className="mr-2 rounded-md px-4 text-xs font-bold tracking-wider sm:hidden">
              <a href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" target="_blank" rel="noopener noreferrer">DONATE</a>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="lg:hidden">
            <div className="border-t border-border bg-background">
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                {navLinks.map((l) => {
                  const active = pathname === l.to;
                  return (
                    <Link
                      key={l.label}
                      to={l.to}
                      className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                        active ? "bg-secondary/10 text-secondary" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
                <div className="mt-2 border-t border-border pt-2">
                  <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sponsors</p>
                  {sponsorLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
                  <Button asChild variant="outline" className="rounded-md border-2 border-accent bg-transparent font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground">
                    <Link to="/events">EVENTS</Link>
                  </Button>
                  <Button asChild variant="cta" className="rounded-md font-bold tracking-wider">
                    <Link to="/membership">BECOME A MEMBER</Link>
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 border-t border-border pt-4">
                  <a
                    href="https://www.facebook.com/westorangerepublicanwomenfederated"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href="https://x.com/worwf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <span className="text-sm font-bold">𝕏</span>
                  </a>
                  <a
                    href="mailto:info@worwf.org"
                    aria-label="Email"
                    className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Mail className="size-4" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
