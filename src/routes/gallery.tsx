import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Images, X } from "lucide-react";

import heroImg from "@/assets/worwf/gallery/hero.png";
import campaignImg from "@/assets/worwf/gallery/campaign.jpg";
import committeeImg from "@/assets/worwf/gallery/committee.jpg";
import educationImg from "@/assets/worwf/gallery/education.jpg";
import speakersImg from "@/assets/worwf/gallery/speakers.jpg";
import historyImg from "@/assets/worwf/gallery/history.jpg";
import specialImg from "@/assets/worwf/gallery/special.jpg";
import groupImg from "@/assets/worwf/group.jpg";

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
  { id: 1, src: campaignImg, alt: "Campaign volunteers rallying", category: "Campaign Activities" },
  { id: 2, src: committeeImg, alt: "Committee members at work", category: "Committee Projects" },
  { id: 3, src: educationImg, alt: "Literacy program in action", category: "Education & Literacy" },
  { id: 4, src: speakersImg, alt: "Guest speaker addressing members", category: "Guest Speakers" },
  { id: 5, src: historyImg, alt: "Historic moment from WORWF archives", category: "History" },
  { id: 6, src: specialImg, alt: "Members at a special event", category: "Special Events" },
  { id: 7, src: groupImg, alt: "Group photo of the chapter", category: "Special Events" },
  { id: 8, src: campaignImg, alt: "Door-to-door canvassing", category: "Campaign Activities" },
  { id: 9, src: speakersImg, alt: "Monthly luncheon meeting", category: "Guest Speakers" },
  { id: 10, src: committeeImg, alt: "Outreach committee meeting", category: "Committee Projects" },
  { id: 11, src: educationImg, alt: "Voter education workshop", category: "Education & Literacy" },
  { id: 12, src: historyImg, alt: "Founding members commemorated", category: "History" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );

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
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.18_0.08_25/0.55)] via-[oklch(0.18_0.08_25/0.30)] to-[oklch(0.15_0.05_250/0.85)]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              Moments that <span className="text-orange-500">Move Us</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/90 md:text-lg">
              A look at the campaigns, gatherings, and friendships that make WORWF
              who we are. Filter by category to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
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

          {/* Filter chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={[
                    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]"
                      : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
                  ].join(" ")}
                >
                  {c}
                  <span
                    className={[
                      "rounded-full px-2 py-0.5 text-[10px] font-bold tabular-nums",
                      active
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                    ].join(" ")}
                  >
                    {counts.get(c) ?? 0}
                  </span>
                </button>
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
              {filtered.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setLightbox(p)}
                  className={[
                    "group relative overflow-hidden rounded-xl bg-muted shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:-translate-y-1",
                    i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square",
                  ].join(" ")}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">
                      {p.category}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm font-semibold text-white">{p.alt}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-5xl"
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400">
                {lightbox.category}
              </p>
              <p className="mt-1 text-sm text-white/90">{lightbox.alt}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
