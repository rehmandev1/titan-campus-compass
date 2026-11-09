import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { CAMPUSES, type Campus } from "@/data/campuses";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SindhMap } from "@/components/site/SindhMap";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CampusSection() {
  const [active, setActive] = useState<Campus["slug"] | null>(null);

  return (
    <section className="section-pad relative overflow-hidden bg-navy-tint">
      <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-gold-light/30 blur-3xl" aria-hidden />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Campuses"
            title={
              <>
                Discover <span className="text-gradient-gold">TITAN</span> Across Sindh
              </>
            }
            description="Two campuses, one standard of practical technology education — from Upper Sindh to the coast."
          />
          <ul className="mt-8 space-y-4">
            {CAMPUSES.map((c) => {
              const on = active === c.slug;
              return (
                <li key={c.slug}>
                  <Link
                    to="/campuses/$slug"
                    params={{ slug: c.slug }}
                    onMouseEnter={() => setActive(c.slug)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(c.slug)}
                    onBlur={() => setActive(null)}
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-soft transition-all duration-300",
                      on ? "-translate-y-0.5 border-gold shadow-gold" : "border-border hover:border-gold",
                    )}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold">
                      <MapPin className="size-6" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-bold text-navy">{c.name}</span>
                      <span className="block text-sm text-muted-foreground">
                        {c.city}, Sindh · <span className="italic">{c.address}</span>
                      </span>
                    </span>
                    <ArrowRight className="size-5 text-gold-deep transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button asChild variant="navy" size="lg" className="mt-8">
            <Link to="/campuses">
              View All Campuses <ArrowRight />
            </Link>
          </Button>
        </div>
        <Reveal>
          <div className="rounded-[2rem] bg-card p-5 shadow-lift sm:p-10">
            <SindhMap active={active} onActiveChange={setActive} className="mx-auto max-w-[520px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
