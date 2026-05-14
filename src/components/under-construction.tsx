import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Mail } from "lucide-react";

type UnderConstructionProps = {
  title: string;
  description?: string;
};

export function UnderConstruction({ title, description }: UnderConstructionProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(135deg, oklch(0.20 0.08 25 / 0.97) 0%, oklch(0.30 0.14 25 / 0.92) 60%, oklch(0.45 0.20 27 / 0.92) 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[640px] rounded-full border border-primary-foreground/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 -z-10 size-[520px] rounded-full border border-primary-foreground/10"
      />

      <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center text-primary-foreground">
        <div className="mb-8 flex size-24 items-center justify-center rounded-3xl bg-primary-foreground/10 backdrop-blur-sm ring-1 ring-primary-foreground/20">
          <Construction className="size-12 text-primary-foreground" />
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em]">
          Coming Soon
        </span>

        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-xl text-base text-primary-foreground/85 md:text-lg">
          {description ??
            "This page is currently under construction. We're working hard to bring you something great — please check back soon."}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild variant="cta" className="rounded-md px-6 font-bold tracking-wider">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" /> Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-md border-2 border-primary-foreground bg-transparent px-6 font-bold tracking-wider text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="mailto:info@worwf.org">
              <Mail className="mr-2 size-4" /> Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
