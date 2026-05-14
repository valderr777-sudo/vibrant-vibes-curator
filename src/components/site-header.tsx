import { Link, useLocation } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import worwfLogo from "@/assets/worwf/worwf-logo.png";

const navLinks: {
  label: string;
  to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us";
}[] = [
  { label: "About Us", to: "/about-us" },
  { label: "Membership", to: "/membership" },
  { label: "Voter Resources", to: "/voter-resources" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact-us" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={worwfLogo} alt="WORWF" className="size-16 object-contain" />
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
                  <Link to="/sponsors/business" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Business Sponsors</Link>
                  <Link to="/sponsors/member-businesses" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Member Businesses</Link>
                  <Link to="/sponsors/candidates" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary">Candidate Sponsors</Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="rounded-md border-2 border-accent bg-transparent px-6 font-bold tracking-wider text-foreground hover:bg-accent hover:text-accent-foreground">
              <Link to="/events">EVENTS</Link>
            </Button>
            <Button variant="cta" className="rounded-md px-6 font-bold tracking-wider">DONATE</Button>
          </div>
        </div>
      </header>
    </>
  );
}
