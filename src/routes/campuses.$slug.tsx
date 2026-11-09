import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation, ArrowRight } from "lucide-react";
import { getCampus, mapsUrl, CAMPUSES, type Campus } from "@/data/campuses";
import { COURSES } from "@/data/courses";
import { PageHero } from "@/components/site/PageHero";
import { SindhMap } from "@/components/site/SindhMap";
import { PlaceholderBadge } from "@/components/site/Notices";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/campuses/$slug")({
  loader: ({ params }) => {
    const campus = getCampus(params.slug);
    if (!campus) throw notFound();
    return { campus };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.campus;
    const title = c ? `${c.name} — TITAN` : "Campus not found — TITAN";
    const description = c?.description ?? "This campus could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(c ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site section-pad text-center">
      <h1 className="text-3xl font-bold text-navy">Campus not found</h1>
      <Button asChild variant="navy" size="lg" className="mt-6">
        <Link to="/campuses">See all campuses</Link>
      </Button>
    </div>
  ),
  component: CampusPage,
});

function CampusPage() {
  const { campus } = Route.useLoaderData();
  const [active, setActive] = useState<Campus["slug"] | null>(campus.slug);
  const other = CAMPUSES.find((c) => c.slug !== campus.slug);

  const info = [
    { Icon: MapPin, label: "Address", value: campus.address },
    { Icon: Phone, label: "Phone", value: campus.phone },
    { Icon: Clock, label: "Hours", value: campus.hours },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Campuses", to: "/campuses" }, { label: campus.city }]}
        title={
          <>
            {campus.city} <span className="text-gradient-gold">Titan Campus</span>
          </>
        }
        description={campus.description}
      />
      <section className="section-pad">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Campus information</h2>
              <PlaceholderBadge>To be confirmed</PlaceholderBadge>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {info.map((i) => (
                <div key={i.label} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold">
                    <i.Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.label}</dt>
                    <dd className="font-medium italic text-navy">{i.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/enroll" search={{ campus: campus.slug }}>
                  Enroll at {campus.city} <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-brand" size="lg">
                <a href={mapsUrl(campus)} target="_blank" rel="noopener noreferrer">
                  <Navigation /> {campus.city} on Google Maps
                </a>
              </Button>
            </div>
            <div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">Courses at this campus</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sample list — campus-specific offerings will be confirmed by admissions.</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {COURSES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/courses/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold-tint"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] bg-card p-5 shadow-lift sm:p-10 lg:sticky lg:top-28">
            <SindhMap active={active} onActiveChange={setActive} className="mx-auto max-w-[480px]" />
            {other && (
              <Link
                to="/campuses/$slug"
                params={{ slug: other.slug }}
                className="mt-6 flex items-center justify-between rounded-2xl bg-navy-tint px-5 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-tint"
              >
                Also visit: {other.name} <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
