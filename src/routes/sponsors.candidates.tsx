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
    ],
  }),
});
