import worwfLogo from "@/assets/worwf/worwf-logo.png";
import ffrwLogo from "@/assets/worwf/ffrw.png";
import nfrwLogo from "@/assets/worwf/nfrw.png";

type UnitedQuoteBandProps = {
  background?: "muted" | "background";
  showQuote?: boolean;
};

export function UnitedQuoteBand({ background = "muted", showQuote = true }: UnitedQuoteBandProps) {
  const bgClass = background === "muted" ? "bg-muted" : "bg-background";
  return (
    <section className={`relative overflow-hidden ${bgClass} ${showQuote ? "py-20" : "py-12"}`}>
      {showQuote && (
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold italic leading-snug text-foreground md:text-4xl">
            "United together to create positive change. Supporting good government and constitutional
            rights."
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">Women strengthening our community</p>
        </div>
      )}
      <div className={`mx-auto flex max-w-4xl items-center justify-center gap-5 px-6 md:gap-14 ${showQuote ? "mt-12" : ""}`}>
        <a href="https://www.facebook.com/FFRWomen/" target="_blank" rel="noopener noreferrer">
          <img src={ffrwLogo} alt="Florida Federation of Republican Women" className="h-14 w-auto object-contain transition-opacity hover:opacity-80 md:h-24" />
        </a>
        <img src={worwfLogo} alt="WORWF" className="h-16 w-auto object-contain md:h-44" />
        <a href="https://www.nfrw.org/" target="_blank" rel="noopener noreferrer">
          <img src={nfrwLogo} alt="National Federation of Republican Women" className="h-14 w-auto object-contain transition-opacity hover:opacity-80 md:h-28" />
        </a>
      </div>
    </section>
  );
}
