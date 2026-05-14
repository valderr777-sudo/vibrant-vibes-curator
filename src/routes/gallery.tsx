import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, ChevronUp } from "lucide-react";

import worwfLogo from "@/assets/worwf/worwf-logo.png";
import groupImg from "@/assets/worwf/group.jpg";
import footerBg from "@/assets/worwf/footer-bg.jpg";
import campaignImg from "@/assets/worwf/gallery/campaign.jpg";
import committeeImg from "@/assets/worwf/gallery/committee.jpg";
import educationImg from "@/assets/worwf/gallery/education.jpg";
import speakersImg from "@/assets/worwf/gallery/speakers.jpg";
import historyImg from "@/assets/worwf/gallery/history.jpg";
import specialImg from "@/assets/worwf/gallery/special.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — West Orange Republican Women Federated" },
      {
        name: "description",
        content:
          "Browse photo galleries from WORWF: campaign activities, committee projects, education & literacy, guest speakers, history, and special events.",
      },
      { property: "og:title", content: "Gallery — WORWF" },
      {
        property: "og:description",
        content: "Photo galleries from WORWF events and activities.",
      },
    ],
  }),
});

const navLinks: { label: string; to: "/about-us" | "/membership" | "/voter-resources" | "/gallery" | "/contact-us"; active?: boolean; caret?: boolean }[] = [
  { label: "About Us", to: "/about-us" as const },
  { label: "Membership", to: "/membership" as const },
  { label: "Voter Resources", to: "/voter-resources" as const },
  { label: "Gallery", to: "/gallery" as const, active: true },
  { label: "Contact Us", to: "/contact-us" as const },
];

const galleries = [
  { title: "Campaign Activities", img: campaignImg },
  { title: "Club & Committee Projects", img: committeeImg },
  { title: "Education & Literacy", img: educationImg },
  { title: "Guest Speakers & Meetings", img: speakersImg },
  { title: "History", img: historyImg },
  { title: "Special Events", img: specialImg },
];

function GalleryPage() {
  return (
    <>


      {/* Hero */}
      <section
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, oklch(0.35 0.20 25 / 0.78), oklch(0.55 0.20 25 / 0.55), oklch(0.35 0.20 25 / 0.78)), url(${groupImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-28 md:py-40">
          <h1 className="text-center text-6xl font-extrabold tracking-wider text-primary-foreground md:text-7xl">
            GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((g) => (
            <article
              key={g.title}
              className="group overflow-hidden rounded-lg bg-card shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-1"
            >
              <a href="#" className="block overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="px-6 py-6 text-center">
                <h3 className="text-lg font-bold text-foreground">
                  <a href="#" className="hover:text-secondary">{g.title}</a>
                </h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary"
                >
                  View Gallery
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
    </>
  );
}
