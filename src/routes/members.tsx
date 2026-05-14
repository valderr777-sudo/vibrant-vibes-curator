import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Lock, FileText, ExternalLink, ScrollText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MEMBERS_PASSWORD = "WORWF1776";
const STORAGE_KEY = "worwf-members-auth";

export const Route = createFileRoute("/members")({
  component: MembersPage,
  head: () => ({
    meta: [
      { title: "Members Only — WORWF" },
      { name: "description", content: "Password-protected resources for WORWF members." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
});

type LinkItem = { label: string; href: string };

const meetingMinutes: LinkItem[] = [
  { label: "May 2025", href: "https://worwf.org/wp-content/uploads/2025/07/WORWF-General-Meeting-Minutes-May-2025.pdf" },
  { label: "June 2025", href: "https://worwf.org/wp-content/uploads/2025/07/WORWF-General-Meeting-Minutes-June-2025.pdf" },
  { label: "July 2025", href: "https://worwf.org/wp-content/uploads/2025/08/WORWF-GENERAL-MEETING-JULY-10-2025-1.pdf" },
  { label: "August 2025", href: "https://worwf.org/wp-content/uploads/2025/08/WORWF-GENERAL-MEETING-AUIGUST-14-2025.pdf" },
  { label: "September 2025", href: "https://worwf.org/wp-content/uploads/2025/09/WORWF-GENERAL-MEETING-MINUTES-SEPTEMBER-11-2025-2.pdf" },
  { label: "October 2025", href: "https://worwf.org/wp-content/uploads/2025/11/WORWF-General-Meeting-October-9-2025-v2.pdf" },
  { label: "November 2025", href: "https://worwf.org/wp-content/uploads/2025/11/general-meeting-minutes-november-13-2025.pdf" },
  { label: "December 2025", href: "https://worwf.org/wp-content/uploads/2025/12/WORWF-General-Meeting-December-11-2025.pdf" },
  { label: "January 2026", href: "https://worwf.org/wp-content/uploads/2026/02/WORWF-General-Meeting-January-8-2026.pdf" },
  { label: "February 2026", href: "https://worwf.org/wp-content/uploads/2026/04/General-Meeting-Minutes-2026-Feb-12-Final.pdf" },
  { label: "March 2026", href: "https://worwf.org/wp-content/uploads/2026/03/General-Meeting-Minutes-2026-March-12.pdf" },
];

const committeeReports: LinkItem[] = [
  { label: "Armed Services — January 2026", href: "https://worwf.org/wp-content/uploads/2026/02/Armed-Services-Committee-Report-January-2026.pdf" },
  { label: "Campaign Committee — February 2026", href: "https://worwf.org/wp-content/uploads/2026/02/Campaign-Committee-Report-February-2026.pdf" },
  { label: "Spring 2026 Call Party Challenge", href: "https://worwf.org/wp-content/uploads/2026/03/WHAT-IS-A-CALL-PARTY-2026.pdf" },
  { label: "Caring for America — January 2026", href: "https://worwf.org/wp-content/uploads/2026/02/2026-Commitee-Report-January-Caring-for-America.pdf" },
  { label: "Edgewood Children's Ranch Food Drive 2026 Themes", href: "https://worwf.org/wp-content/uploads/2026/02/EDGEWOOD-Ranch-Food-Drive-Themes-2026-v3.pdf" },
  { label: "Education — February 2026", href: "https://worwf.org/wp-content/uploads/2026/02/2026-Education-Committee-Report-February-2026.pdf" },
  { label: "Fundraising — August 2025", href: "https://worwf.org/wp-content/uploads/2025/09/WORWF-FUNDRAISING-COMMITTEE-REPORT-August-2025.docx" },
  { label: "Legislative — February 2026", href: "https://worwf.org/members/Legislative%20Committee%20Report%20-%20February%202026" },
  { label: "Membership — January 2026", href: "https://worwf.org/members/WORWF%20MEMBERSHIP%20COMMITTEE%20REPORT%20-%20December%202025" },
];

const newsletters: LinkItem[] = [
  { label: "February 2026", href: "https://conta.cc/4a3So8F" },
  { label: "January 2026", href: "https://conta.cc/3SuE9Bu" },
  { label: "December 2025", href: "https://conta.cc/48p0VlN" },
  { label: "November 2025", href: "https://conta.cc/47vrPJL" },
  { label: "October 2025", href: "https://conta.cc/3IBfqu0" },
  { label: "September 2025", href: "https://conta.cc/3JH55go" },
  { label: "August 2025", href: "https://conta.cc/4ou5S48" },
  { label: "July 2025", href: "https://conta.cc/4nK2CBp" },
  { label: "June 2025", href: "https://conta.cc/3SuE9Bu" },
  { label: "May 2025", href: "https://conta.cc/4juos9f" },
];

const clubForms: LinkItem[] = [
  { label: "Adopt a Soldier Referral / Application", href: "https://worwf.org/wp-content/uploads/2022/11/Adopt-a-Soldier-Application-rev-8.30.22.pdf" },
  { label: "Volunteer Hours Digital Tracker", href: "https://docs.google.com/forms/d/e/1FAIpQLSdrDHHVBCcEph6kX-m-Flt2YOtN4YKzvIeiHpLrv9HriFK6Eg/viewform?pli=1" },
];

const orgDocs: LinkItem[] = [
  { label: "WORWF ByLaws & Standing Rules — 2024", href: "https://worwf.org/wp-content/uploads/2025/01/WEST-ORANGE-REPUBLICAN-WOMEN-FEDERATED-BYLAWS-2024.pdf" },
  { label: "FFRW Website", href: "https://www.ffrw.net/" },
  { label: "Contact a Committee Chair", href: "https://app.box.com/s/3r0a6lrsx2cje7ukhbyaq54lsvb20xiv" },
];

function MembersPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pw === MEMBERS_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setPw("");
  };

  if (!authed) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-muted px-6 py-20">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lock className="size-7" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-secondary">Members Only</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter the members password to access club resources.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Members password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoFocus
              autoComplete="current-password"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" variant="cta" className="w-full font-bold tracking-wide">
              Sign In
            </Button>
          </form>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Don't have the password? <a href="mailto:info@worwf.org" className="text-primary hover:underline">Contact us</a>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground py-14">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <div>
            <p className="text-sm font-semibold tracking-wide opacity-80">Members Area</p>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">Welcome, WORWF Members</h1>
            <p className="mt-3 max-w-2xl text-secondary-foreground/85">
              The latest meeting minutes, committee reports, newsletters, and forms from the past year.
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="hidden border-secondary-foreground/40 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 md:inline-flex">
            Sign out
          </Button>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <ResourceCard title="Club Organization" icon={<ScrollText className="size-5" />} items={orgDocs} />
          <ResourceCard title="General Meeting Minutes" icon={<FileText className="size-5" />} items={meetingMinutes} columns={3} />
          <ResourceCard title="Committee Reports" icon={<FileText className="size-5" />} items={committeeReports} columns={2} />
          <ResourceCard title="Newsletters" icon={<Mail className="size-5" />} items={newsletters} columns={3} />
          <ResourceCard title="Club Forms & Applications" icon={<FileText className="size-5" />} items={clubForms} columns={2} />

          <div className="md:hidden">
            <Button variant="outline" onClick={handleLogout} className="w-full">
              Sign out
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceCard({
  title,
  icon,
  items,
  columns = 1,
}: {
  title: string;
  icon: React.ReactNode;
  items: LinkItem[];
  columns?: 1 | 2 | 3;
}) {
  const colClass = columns === 3 ? "md:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "";
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-secondary md:text-2xl">{title}</h2>
      </div>
      <ul className={`grid gap-2 ${colClass}`}>
        {items.map((item) => (
          <li key={item.label + item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              <span>{item.label}</span>
              <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
