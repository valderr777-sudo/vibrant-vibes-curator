import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Facebook, Mail, Menu, X } from "lucide-react";
import tangerineIcon from "@/assets/tangerine-icon.png";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import worwfLogo from "@/assets/worwf/worwf-logo.png";

const primaryLinks: {
  label: string;
  to: "/about-us" | "/leadership" | "/membership" | "/events" | "/voter-resources" | "/gallery";
}[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Leadership", to: "/leadership" },
  { label: "Events", to: "/events" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "Gallery", to: "/gallery" },
  { label: "Membership", to: "/membership" },
];

const moreLinks: {
  label: string;
  to: "/contact-us" | "/members";
}[] = [
  { label: "Members Only", to: "/members" },
  { label: "Contact Us", to: "/contact-us" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const [sponsorsOpen, setSponsorsOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
    setSponsorsOpen(false);
  }, [pathname]);

  // Lock page scroll when menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const v = open ? "hidden" : "";
    document.body.style.overflow = v;
    document.documentElement.style.overflow = v;
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 text-xs md:px-6 py-2">
          <a href="mailto:info@worwf.org" className="flex shrink-0 items-center gap-2 hover:text-accent-light">
            <Mail className="size-4" />
            <span>info@worwf.org</span>
          </a>
          <div className="flex min-w-0 items-center gap-4">
            <p className="hidden font-semibold tracking-wide md:block">
              Educate. Motivate. Activate.
            </p>
            <a href="https://www.facebook.com/westorangerepublicanwomenfederated" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/90 transition-colors hover:text-accent-light">
              <Facebook className="size-4" />
            </a>
            <a href="https://x.com/worwf" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-primary-foreground/90 transition-colors hover:text-accent-light">
              <span className="text-sm font-bold leading-none">𝕏</span>
            </a>
            <a href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium hover:text-accent-light md:block">
              Donate
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-14 object-contain md:size-16" />
          </Link>

          <nav className="hidden min-w-0 items-center gap-2 lg:flex xl:gap-4">
            {primaryLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.label}
                  to={l.to}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors xl:text-[15px] hover:text-secondary ${
                    active ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <img
                      src={tangerineIcon}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-5 left-1/2 size-4 -translate-x-1/2 object-contain"
                    />
                  )}
                </Link>
              );
            })}
            <div className="group relative">
              <button
                type="button"
                className={`relative inline-flex items-center whitespace-nowrap text-sm xl:text-[15px] font-medium transition-colors hover:text-secondary ${
                  moreLinks.some((m) => m.to === pathname) ? "text-secondary" : "text-foreground"
                }`}
              >
                More<span className="ml-1">▾</span>
                {moreLinks.some((m) => m.to === pathname) && (
                  <img
                    src={tangerineIcon}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-5 left-1/2 size-4 -translate-x-1/2 object-contain"
                  />
                )}
              </button>
              <div className="absolute left-0 top-full z-50 hidden pt-3 group-hover:block">
                <div className="min-w-[210px] rounded-md border border-border bg-background py-2 shadow-lg">
                  {moreLinks.map((m) => (
                    <Link key={m.to} to={m.to} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="rounded-md border-2 border-accent bg-transparent px-3 text-xs font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground sm:px-6 sm:text-sm lg:px-3 xl:px-6">
              <a href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" target="_blank" rel="noopener noreferrer">DONATE</a>
            </Button>
            <Button asChild variant="cta" className="rounded-md px-3 text-xs font-bold tracking-wider sm:px-6 sm:text-sm lg:px-3 xl:px-6">
              <Link to="/membership">JOIN</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Full screen mobile menu */}
        {open && (
          <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-background lg:hidden" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between px-4 py-3">
              <Link to="/" className="flex items-center">
                <img src={worwfLogo} alt="WORWF" className="size-14 object-contain" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center gap-1 px-6 py-6 text-center">
              {primaryLinks.map((l) => {
                const active = pathname === l.to;
                return (
                  <Link
                    key={l.label}
                    to={l.to}
                    className={`w-full rounded-md px-3 py-3 text-xl font-medium transition-colors ${
                      active ? "text-secondary" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <button
                type="button"
                aria-expanded={sponsorsOpen}
                onClick={() => setSponsorsOpen((v) => !v)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md px-3 py-3 text-xl font-medium text-foreground hover:bg-muted"
              >
                More
                <ChevronDown className={`size-5 transition-transform ${sponsorsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid w-full transition-all duration-300 ${sponsorsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  {moreLinks.map((m) => (
                    <Link
                      key={m.to}
                      to={m.to}
                      className={`block rounded-md px-3 py-2 text-base font-normal ${
                        pathname === m.to ? "text-secondary" : "text-muted-foreground hover:text-secondary"
                      }`}
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid w-full gap-3">
                <Button asChild variant="outline" className="rounded-md border-2 border-accent bg-transparent font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground">
                  <a href="https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33" target="_blank" rel="noopener noreferrer">DONATE</a>
                </Button>
                <Button asChild variant="cta" className="rounded-md font-bold tracking-wider">
                  <Link to="/membership">JOIN</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="https://www.facebook.com/westorangerepublicanwomenfederated" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground">
                  <Facebook className="size-4" />
                </a>
                <a href="https://x.com/worwf" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground">
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a href="mailto:info@worwf.org" aria-label="Email" className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground">
                  <Mail className="size-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
