// Auto-loaded committee project images
const modules = import.meta.glob("./*.{jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function toAlt(filename: string): string {
  return filename
    .replace(/\.(jpe?g|png)$/i, "")
    .replace(/-?\d+x\d+$/i, "")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type CommitteeImage = { id: string; src: string; alt: string };

export const committeeImages: CommitteeImage[] = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop() ?? path;
    return { id: filename, src, alt: toAlt(filename) };
  })
  .sort((a, b) => a.id.localeCompare(b.id));
