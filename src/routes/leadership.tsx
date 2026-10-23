import { createFileRoute } from "@tanstack/react-router";
import worwfLogo from "@/assets/worwf/worwf-logo.png";
import founders from "@/assets/worwf/about/founders.jpg";
import carenBell from "@/assets/worwf/about/caren-bell.jpg";
import theresaMillay from "@/assets/worwf/about/theresa-millay.jpg";
import christineHayden from "@/assets/worwf/about/christine-hayden.jpg";
import nancyBorkes from "@/assets/worwf/about/nancy-borkes.jpg";
import brendaKnowles from "@/assets/worwf/about/brenda-knowles.jpg";
import teresaSnipes from "@/assets/worwf/about/teresa-snipes.jpg";

export const Route = createFileRoute("/leadership")({
  component: Leadership,
  head: () => ({ meta: [
    { title: "Leadership | West Orange Republican Women Federated" },
    { name: "description", content: "Meet WORWF's co-founders, legacy leaders, current president, executive committee, and standing and special committee chairs." },
    { property: "og:title", content: "WORWF Leadership" },
    { property: "og:description", content: "Meet the women leading WORWF, from our co-founders to our current president and committee chairs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const legacyLeaders = [
  { name: "Wendy West", term: "2008 to 2012" },
  { name: "Carolyn Sparks", term: "2013 to 2016" },
  { name: "Rebecca Mellen", term: "2017 to 2020", note: "Led the move to Bay Hill" },
  { name: "Teresa Snipes", term: "2021 to 2024", note: "Guided the club through President Trump's re-election" },
  { name: "Caren Bell", term: "Elected 2024", note: "Continues to lead with vision and energy" },
];

const president = {
    name: "Caren Bell",
    img: carenBell,
    title: "PRESIDENT 2025-2026",
    bio: "Caren Bell, our current President, was elected at the end of 2024 and has been a member of WORWF for over 8 years.",
    bio2:
      "Caren looks forward to helping WORWF continue to grow and impact our West Orange community. Join us as we turn Orange County RED!",
    email: "President@WORWF.org",
  };

const executive = [
  { name: "Caren Bell", role: "President", img: carenBell },
  { name: "Theresa Millay", role: "1st Vice President", img: theresaMillay },
  { name: "Christine Hayden", role: "2nd Vice President", img: christineHayden },
  { name: "Nancy Borkes", role: "Corresponding Secretary", img: nancyBorkes },
  { name: "Susan Roderick", role: "Recording Secretary", img: worwfLogo },
  { name: "Brenda Knowles", role: "Treasurer", img: brendaKnowles },
  { name: "Coming Soon", role: "Assistant Treasurer", img: worwfLogo },
  { name: "Teresa Snipes", role: "Immed. Past President", img: teresaSnipes },
];

const standing = [
  { name: "Christine Hayden", role: "Membership" },
  { name: "Nancy Borkes", role: "Public Relations" },
  { name: "Teresa Snipes", role: "Legislative" },
  { name: "Carol MacKeen", role: "Fundraising" },
  { name: "JuDian Guimbellot", role: "Campaign" },
  { name: "Theresa Millay", role: "Programs" },
];

const special = [
  { name: "Carolyn McAfee", role: "Americanism" },
  { name: "Erika Benkovich", role: "Armed Services" },
  { name: "Teresa Snipes", role: "Awards" },
  { name: "Nancy Borkes & Theresa Millay", role: "Bylaws Co-Chairs" },
  { name: "Rhonda Fontenault", role: "Caring for America" },
  { name: "Rebecca Mellen", role: "Club Chaplain" },
  { name: "Doris Sheppard", role: "Education" },
  { name: "Nancy Borkes", role: "Historian" },
  { name: "Emmie Rein", role: "Hospitality" },
  { name: "OPEN", role: "Leadership" },
  { name: "Rebecca Mellen", role: "Letter Writing" },
  { name: "Erika Benkovich", role: "Literacy" },
  { name: "Jennifer Hubbell", role: "Photographer" },
  { name: "Donna Brown", role: "Sunshine" },
];

function Leadership() {
  return (
    <>
      <div className="bg-background px-6 pt-12 text-center">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">Leadership</h1>
      </div>
      {/* Co-Founders */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="text-center">
            <span className="text-sm font-semibold tracking-wide text-secondary">
              CO-FOUNDERS
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              Wendy West &amp; Linda O'Keefe
            </h2>
            <p className="mt-6 text-muted-foreground">
              <strong>Wendy West</strong> and <strong>Linda O'Keefe</strong> are the visionary women
              behind the founding of the West Orange Republican Women, Federated. In 2008, they
              recognized the need for a local network of strong, like-minded Republican women in
              Southwest Orange County and took action.
            </p>
            <p className="mt-4 text-muted-foreground">
              Their leadership, courage, and commitment to conservative values laid the foundation
              for what WORWF has become today: a growing, dynamic, and influential club dedicated
              to civic engagement, community service, and Republican principles.
            </p>
          </div>

          <figure className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
            <img
              src={founders}
              alt="Co-Founders Linda O'Keefe and Wendy West"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
            <figcaption className="bg-card px-4 py-3 text-center text-sm italic text-muted-foreground">
              Co-Founders Linda O'Keefe (left) and Wendy West (right)
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Legacy Leadership */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold tracking-wide text-accent">OUR PRESIDENTS</span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">Legacy Leadership</h2>
          <ol className="mt-10 flex flex-wrap justify-center gap-6">
            {legacyLeaders.map((l) => (
              <li key={l.name} className="w-full border-t-4 border-accent pt-4 text-center sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
                <p className="text-xl font-bold text-foreground">{l.name}</p>
                <p className="text-sm font-semibold text-accent">{l.term}</p>
                {l.note && <p className="mt-1 text-sm text-muted-foreground">{l.note}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* President carousel */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold md:text-5xl">{president.title}</h2>
          </div>

          {(() => {
            return (
              <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">

                <div className="relative mx-auto w-full max-w-md">
                  <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elegant)]">
                    <img
                      src={president.img}
                      alt={president.name}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="absolute -bottom-4 -right-4 -z-10 size-full rounded-lg border-2 border-secondary"
                  />
                </div>

                <div className="text-center">
                  <p>{president.bio}</p>
                  <p className="mt-4 opacity-90">{president.bio2}</p>
                  <h3 className="mt-8 text-2xl font-bold">{president.name}</h3>
                  <p className="mt-1 text-sm">
                    Email:{" "}
                    <a href={`mailto:${president.email}`} className="font-semibold text-primary-foreground/90 hover:text-primary-foreground">
                      {president.email}
                    </a>
                  </p>

                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Executive Committee */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <img src={worwfLogo} alt="" className="size-6 object-contain" />
              Leadership
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-secondary md:text-5xl">
              Executive Committee 2025-2026
            </h2>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {executive.map((m) => (
              <article key={m.name} className="group w-full max-w-sm text-center sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-6rem)/4)]">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-lg bg-muted shadow-[var(--shadow-elegant)]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-contain pb-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-accent" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{m.name}</h3>
                <p className="text-sm font-medium text-accent">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standing Committees */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
              Standing Committees 2025-2026
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {standing.map((m) => (
              <article
                key={m.name + m.role}
                className="w-full rounded-lg border-t-4 border-accent bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)] sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)]"
              >
                <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Special Committees */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-foreground md:text-5xl">
              Special Committees 2025-2026
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {special.map((m, i) => (
              <article
                key={i}
                className="w-full rounded-lg border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)] sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
              >
                <h3 className="text-base font-bold text-foreground">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {m.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
