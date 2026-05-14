import worwfLogo from "@/assets/worwf/worwf-logo.png";
import ffrwLogo from "@/assets/worwf/ffrw.png";
import nfrwLogo from "@/assets/worwf/nfrw.png";

type UnitedQuoteBandProps = {
  background?: "muted" | "background";
};

export function UnitedQuoteBand({ background = "muted" }: UnitedQuoteBandProps) {
  const bgClass = background === "muted" ? "bg-muted" : "bg-background";
  return (
    <section className={`relative overflow-hidden ${bgClass} py-20`}>
      <div
        className="pointer-events-none absolute right-10 top-10 size-72 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.45 0.2 27) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold italic leading-snug text-foreground md:text-4xl">
          "United together to create positive change. Supporting good government and constitutional
          rights."
        </h2>
        <p className="mt-5 text-sm text-muted-foreground">– Women strengthening our community –</p>
      </div>
      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-12 px-6">
        <img src={worwfLogo} alt="WORWF" className="h-36 w-auto object-contain md:h-32 lg:h-24" />
        <a href="https://www.facebook.com/FFRWomen/" target="_blank" rel="noopener noreferrer">
          <img
            src={ffrwLogo}
            alt="Florida Federation of Republican Women"
            className="h-32 w-auto object-contain transition-opacity hover:opacity-80 md:h-28 lg:h-20"
          />
        </a>
        <a href="https://www.nfrw.org/" target="_blank" rel="noopener noreferrer">
          <img
            src={nfrwLogo}
            alt="National Federation of Republican Women"
            className="h-36 w-auto object-contain transition-opacity hover:opacity-80 md:h-32 lg:h-24"
          />
        </a>
      </div>
    </section>
  );
}
