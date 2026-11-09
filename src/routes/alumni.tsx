import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ALUMNI } from "@/data/people";
import { PageHero } from "@/components/site/PageHero";
import { AlumniCard } from "@/components/site/AlumniCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — TITAN Graduates" },
      { name: "description", content: "Meet graduates of TITAN — Taj Institute of Technology & Applied Networks." },
      { property: "og:title", content: "TITAN Alumni" },
      { property: "og:description", content: "Stories and achievements of TITAN graduates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AlumniPage,
});

function AlumniPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Alumni" }]}
        title={
          <>
            Our <span className="text-gradient-gold">Alumni</span>
          </>
        }
        description="Verified graduate profiles will be published here with each alumnus's consent. The cards below are placeholders."
      />
      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ALUMNI.map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className="h-full">
                <AlumniCard person={p} />
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] bg-blueprint p-10 text-center text-on-navy shadow-lift">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Are you a <span className="text-gradient-gold">TITAN graduate?</span>
            </h2>
            <p className="mt-3 text-on-navy-muted">We'd love to feature your journey. Get in touch to share your story.</p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link to="/contact">
                Share your story <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
