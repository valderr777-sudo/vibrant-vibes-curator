// Auto-loaded education & literacy images
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

export type EducationImage = { id: string; src: string; alt: string };

export const educationImages: EducationImage[] = Object.entries(modules)
  .map(([path, src]) => {
    const filename = path.split("/").pop() ?? path;
    return { id: filename, src, alt: toAlt(filename) };
  })
  .sort((a, b) => a.id.localeCompare(b.id));
