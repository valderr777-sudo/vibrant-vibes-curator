import { createFileRoute } from "@tanstack/react-router";
import { UnderConstruction } from "@/components/under-construction";

export const Route = createFileRoute("/sponsors/candidates")({
  component: () => (
    <UnderConstruction
      title="Candidate Sponsors"
      description="Our Candidate Sponsors page is under construction. Check back soon to see the candidates we proudly support."
    />
  ),
  head: () => ({
    meta: [
      { title: "Candidate Sponsors — WORWF" },
      { name: "description", content: "Candidate Sponsors page — coming soon." },
      { property: "og:title", content: "Candidate Sponsors | WORWF" },
      { property: "og:description", content: "Candidate Sponsors page | coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});
