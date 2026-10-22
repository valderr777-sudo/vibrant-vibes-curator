import { createFileRoute } from "@tanstack/react-router";
import { UnderConstruction } from "@/components/under-construction";

export const Route = createFileRoute("/sponsors/business")({
  component: () => (
    <UnderConstruction
      title="Business Sponsors"
      description="Our Business Sponsors page is under construction. Check back soon to meet the local businesses standing with WORWF."
    />
  ),
  head: () => ({
    meta: [
      { title: "Business Sponsors — WORWF" },
      { name: "description", content: "Business Sponsors page — coming soon." },
      { property: "og:title", content: "Business Sponsors | WORWF" },
      { property: "og:description", content: "Business Sponsors page | coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});
