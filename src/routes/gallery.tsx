import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from "@/components/ui/dialog";

import heroImg from "@/assets/worwf/gallery/hero.png";
import campaignImg from "@/assets/worwf/gallery/campaign.jpg";
import committeeImg from "@/assets/worwf/gallery/committee.jpg";
import educationImg from "@/assets/worwf/gallery/education.jpg";
import speakersImg from "@/assets/worwf/gallery/speakers.jpg";
import historyImg from "@/assets/worwf/gallery/history.jpg";
import specialImg from "@/assets/worwf/gallery/special.jpg";
import groupImg from "@/assets/worwf/group.jpg";
import { campaignImages } from "@/assets/worwf/gallery/campaign";
import { committeeImages } from "@/assets/worwf/gallery/committee";
import { educationImages } from "@/assets/worwf/gallery/education";
import { speakersImages } from "@/assets/worwf/gallery/speakers";
import { historyImages } from "@/assets/worwf/gallery/history";
import { specialImages } from "@/assets/worwf/gallery/special";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Browse photos from WORWF: campaign activities, committee projects, education & literacy, guest speakers, history, and special events.",
      },
      { property: "og:title", content: "Gallery — WORWF" },
      {
        property: "og:description",
        content: "Photo gallery from WORWF events and activities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});

type Category =
  | "Campaign Activities"
  | "Committee Projects"
  | "Education & Literacy"
  | "Guest Speakers"
  | "History"
  | "Special Events";

const categories: Category[] = [
  "Campaign Activities",
  "Committee Projects",
  "Education & Literacy",
  "Guest Speakers",
  "History",
  "Special Events",
];

type Photo = { id: number; src: string; alt: string; category: Category };

const photos: Photo[] = [
  ...campaignImages.map((img, i) => ({
    id: 1000 + i,
    src: img.src,
    alt: img.alt,
    category: "Campaign Activities" as Category,
  })),
  ...committeeImages.map((img, i) => ({
    id: 2000 + i,
    src: img.src,
    alt: img.alt,
    category: "Committee Projects" as Category,
  })),
  ...educationImages.map((img, i) => ({
    id: 3000 + i,
    src: img.src,
    alt: img.alt,
    category: "Education & Literacy" as Category,
  })),
  ...speakersImages.map((img, i) => ({
    id: 4000 + i,
    src: img.src,
    alt: img.alt,
    category: "Guest Speakers" as Category,
  })),
  ...historyImages.map((img, i) => ({
    id: 5000 + i,
    src: img.src,
    alt: img.alt,
    category: "History" as Category,
  })),
  ...specialImages.map((img, i) => ({
    id: 6000 + i,
    src: img.src,
    alt: img.alt,
    category: "Special Events" as Category,
  })),
].sort((a, b) => photoDate(b.src) - photoDate(a.src));

// Newest first, using the event date in each photo's file name. Undated photos go last.
function photoDate(src: string): number {
  const name = decodeURIComponent(src.split("/").pop() ?? "");
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  let year = 0;
  let month = 0;
  const m1 = name.match(/(?:^|[^\d])(\d{1,2})\.(20\d{2})/);
  const m2 = name.match(/(?:^|[^\d])(\d{1,2})\.\d{1,2}\.(\d{2})(?:[^\d]|$)/);
  const y = name.match(/(20\d{2})/);
  if (m1) {
    month = Number(m1[1]);
    year = Number(m1[2]);
  } else if (m2) {
    month = Number(m2[1]);
    year = 2000 + Number(m2[2]);
  } else if (y) {
    year = Number(y[1]);
    const mi = months.findIndex((mo) => new RegExp(`(^|[^a-z])${mo}`, "i").test(name));
    month = mi >= 0 ? mi + 1 : 0;
  }
  return year * 100 + month;
}

void specialImg;
void groupImg;

void committeeImg;
void educationImg;
void speakersImg;
void campaignImg;
void historyImg;

function GalleryPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );

  const lightboxIndex = useMemo(
    () => (lightbox ? filtered.findIndex((p) => p.id === lightbox.id) : -1),
    [filtered, lightbox],
  );

  const showPreviousPhoto = () => {
    if (filtered.length === 0 || lightboxIndex < 0) return;
    setLightbox(filtered[(lightboxIndex - 1 + filtered.length) % filtered.length]);
  };

  const showNextPhoto = () => {
    if (filtered.length === 0 || lightboxIndex < 0) return;
    setLightbox(filtered[(lightboxIndex + 1) % filtered.length]);
  };

  useEffect(() => {
    if (!lightbox) return;
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const counts = useMemo(() => {
    const map = new Map<Category | "All", number>();
    map.set("All", photos.length);
    for (const c of categories) {
      map.set(c, photos.filter((p) => p.category === c).length);
    }
    return map;
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="people-background absolute inset-0 -z-10"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(110deg, oklch(0.18 0.10 250 / 0.85) 0%, oklch(0.22 0.14 320 / 0.75) 50%, oklch(0.30 0.18 25 / 0.80) 100%), linear-gradient(oklch(0 0 0 / 0.35), oklch(0 0 0 / 0.35))`,
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              Moments that <span className="text-orange-500">Move Us</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              A look at the campaigns, gatherings, and friendships that make WORWF who we are.
              Filter by category to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Images className="size-3.5" />
                Photo Gallery
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                Browse the collection
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
              {photos.length} photos
            </p>
          </div>

          {/* Mobile dropdown filter (sticky under header) */}
          <div className="sticky top-20 z-30 -mx-6 mt-6 border-b border-border bg-background px-6 py-3 md:hidden">
            <label htmlFor="gallery-filter" className="sr-only">
              Filter category
            </label>
            <div className="relative">
              <select
                id="gallery-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value as Category | "All")}
                className="w-full appearance-none rounded-md border border-border bg-card px-4 py-2.5 pr-10 text-sm font-semibold text-foreground shadow-sm focus:border-primary focus:outline-none"
              >
                {(["All", ...categories] as const).map((c) => (
                  <option key={c} value={c}>
                    {c} ({counts.get(c) ?? 0})
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">▾</span>
            </div>
          </div>

          {/* Desktop filter chips */}
          <div className="mt-8 hidden flex-wrap gap-2 md:flex">
            {(["All", ...categories] as const).map((c) => {
              const active = filter === c;
              return (
                <Button
                  key={c}
                  variant="outline"
                  aria-pressed={active}
                  onClick={() => setFilter(c)}
                  className={[
                    "group inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-all",
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                      : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
                  ].join(" ")}
                >
                  {c}
                  <span
                    className={[
                      "rounded-md px-2 py-0.5 text-[10px] font-bold tabular-nums",
                      active
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                    ].join(" ")}
                  >
                    {counts.get(c) ?? 0}
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Masonry-style grid */}
          {filtered.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-dashed border-border bg-card p-16 text-center">
              <p className="text-sm text-muted-foreground">No photos in this category yet.</p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((p) => (
                <Button
                  key={p.id}
                  variant="ghost"
                  aria-label={`Open photo: ${p.alt}`}
                  onClick={() => setLightbox(p)}
                  className="group relative aspect-square h-auto w-full overflow-hidden rounded-lg bg-muted p-0 shadow-[var(--shadow-elegant)] transition-colors hover:bg-muted"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-contain"
                  />
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={Boolean(lightbox)} onOpenChange={(open) => { if (!open) setLightbox(null); }}>
        {lightbox && (
          <DialogPortal>
            <DialogOverlay className="z-[60] bg-secondary/95" />
            <DialogPrimitive.Content
              aria-describedby={undefined}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") { e.preventDefault(); showPreviousPhoto(); }
                if (e.key === "ArrowRight") { e.preventDefault(); showNextPhoto(); }
              }}
              className="fixed inset-0 z-[61] grid h-dvh grid-rows-[auto_minmax(0,1fr)_auto] gap-4 p-4 text-secondary-foreground outline-none md:p-8"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <DialogTitle className="text-base text-secondary-foreground">{lightbox.category}</DialogTitle>
                <Button variant="ghost" size="icon" className="size-11" onClick={() => setLightbox(null)} aria-label="Close">
                  <X />
                </Button>
              </div>
              <div className="flex min-h-0 min-w-0 items-center justify-center">
                <img src={lightbox.src} alt={lightbox.alt} className="h-full w-full max-w-6xl object-contain" />
              </div>
              <div className="mx-auto grid w-full max-w-3xl grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-3">
                <Button variant="ghost" size="icon" disabled={filtered.length < 2} onClick={showPreviousPhoto} className="size-11" aria-label="Previous photo"><ChevronLeft /></Button>
                <div className="min-w-0 text-center" aria-live="polite">
                  <p className="line-clamp-2 break-words text-sm">{lightbox.alt}</p>
                  <p className="mt-1 text-xs text-secondary-foreground/70">{lightboxIndex + 1} / {filtered.length}</p>
                </div>
                <Button variant="ghost" size="icon" disabled={filtered.length < 2} onClick={showNextPhoto} className="size-11" aria-label="Next photo"><ChevronRight /></Button>
              </div>
            </DialogPrimitive.Content>
          </DialogPortal>
        )}
      </Dialog>
    </>
  );
}
