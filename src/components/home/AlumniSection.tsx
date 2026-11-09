import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ALUMNI } from "@/data/people";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AlumniCard } from "@/components/site/AlumniCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export function AlumniSection() {
  return (
    <section className="section-pad bg-gradient-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Alumni Showcase"
          title={
            <>
              Our Graduates, <span className="text-gradient-gold">Their Journeys</span>
            </>
          }
          description="Verified graduate stories will be featured here with each alumnus's permission."
        />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {ALUMNI.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="h-full">
              <AlumniCard person={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="navy" size="lg">
            <Link to="/alumni">
              Meet Our Alumni <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
