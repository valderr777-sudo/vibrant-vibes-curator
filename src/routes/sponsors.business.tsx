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
    ],
  }),
});
