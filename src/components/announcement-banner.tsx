import { Link } from "@tanstack/react-router";
import { Megaphone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { announcements } from "@/content/site-content";

export function AnnouncementBanner() {
  const a = announcements[0];
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (a && localStorage.getItem(`worwf-announcement-${a.id}`) === "dismissed") setHidden(true);
  }, [a]);

  if (!a || hidden) return null;

  const dismiss = () => {
    localStorage.setItem(`worwf-announcement-${a.id}`, "dismissed");
    setHidden(true);
  };

  const linkClass = "font-semibold underline underline-offset-4 hover:text-accent";

  return (
    <div role="region" aria-label="Announcement" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-6 py-3">
        <p className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Megaphone className="size-3.5" /> {a.label}
          </span>
          <span>{a.message}</span>
          {a.linkText && a.to && (
            <Link to={a.to} className={linkClass}>{a.linkText}</Link>
          )}
          {a.linkText && !a.to && a.href && (
            <a href={a.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{a.linkText}</a>
          )}
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-secondary-foreground/10"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
