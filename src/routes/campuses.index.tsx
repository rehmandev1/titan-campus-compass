import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowRight, Navigation } from "lucide-react";
import { CAMPUSES, mapsUrl, type Campus } from "@/data/campuses";
import { PageHero } from "@/components/site/PageHero";
import { SindhMap } from "@/components/site/SindhMap";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/campuses/")({
  head: () => ({
    meta: [
      { title: "Campuses — TITAN in Sukkur & Karachi" },
      { name: "description", content: "Find TITAN's Sukkur and Karachi campuses on our interactive map of Sindh." },
      { property: "og:title", content: "TITAN Campuses — Sukkur & Karachi" },
      { property: "og:description", content: "Explore TITAN's two campuses across Sindh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CampusesPage,
});

function CampusesPage() {
  const [active, setActive] = useState<Campus["slug"] | null>(null);
  return (
    <>
      <PageHero
        crumbs={[{ label: "Campuses" }]}
        title={
          <>
            Two Campuses, <span className="text-gradient-gold">One Standard</span>
          </>
        }
        description="Practical technology education in Upper Sindh and on the coast. Hover or tap a pin to explore."
      />
      <section className="section-pad bg-navy-tint">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-card p-5 shadow-lift sm:p-10">
            <SindhMap active={active} onActiveChange={setActive} className="mx-auto max-w-[560px]" />
          </div>
          <div className="space-y-6">
            {CAMPUSES.map((c) => (
              <article
                key={c.slug}
                onMouseEnter={() => setActive(c.slug)}
                onMouseLeave={() => setActive(null)}
                className={cn(
                  "rounded-3xl border bg-card p-7 shadow-card transition-all duration-300",
                  active === c.slug ? "-translate-y-1 border-gold shadow-gold" : "border-border",
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold">
                    <MapPin className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy">{c.name}</h2>
                    <p className="text-sm text-muted-foreground">{c.city}, Sindh</p>
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-navy/80">
                  <li className="flex gap-2"><MapPin className="size-4 text-gold-deep" aria-hidden /> <span className="italic">{c.address}</span></li>
                  <li className="flex gap-2"><Phone className="size-4 text-gold-deep" aria-hidden /> <span className="italic">{c.phone}</span></li>
                  <li className="flex gap-2"><Clock className="size-4 text-gold-deep" aria-hidden /> <span className="italic">{c.hours}</span></li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="navy">
                    <Link to="/campuses/$slug" params={{ slug: c.slug }}>
                      View Details <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline-brand">
                    <a href={mapsUrl(c)} target="_blank" rel="noopener noreferrer">
                      <Navigation /> {c.city} on Google Maps
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
