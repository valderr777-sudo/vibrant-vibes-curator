import { createFileRoute } from "@tanstack/react-router";
import { UnderConstruction } from "@/components/under-construction";

export const Route = createFileRoute("/sponsors/member-businesses")({
  component: () => (
    <UnderConstruction
      title="Member Businesses"
      description="Our Member Businesses directory is under construction. Check back soon to discover and support businesses owned by WORWF members."
    />
  ),
  head: () => ({
    meta: [
      { title: "Member Businesses — WORWF" },
      { name: "description", content: "Member Businesses page — coming soon." },
      { property: "og:title", content: "Member Businesses | WORWF" },
      { property: "og:description", content: "Member Businesses page | coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
      { name: "twitter:image", content: "https://worwf.mwsssms2.workers.dev/social-share.png" },
    ],
  }),
});
