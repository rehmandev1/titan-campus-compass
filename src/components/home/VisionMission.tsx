import { Link } from "@tanstack/react-router";
import { Eye, Target, Layers, Wrench, Users, Compass, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

const GOALS = [
  { Icon: Layers, title: "Future-ready curriculum", text: "Programmes that evolve with networking, cloud, AI and software." },
  { Icon: Wrench, title: "Practice before theory", text: "Labs, projects and real tools in every course." },
  { Icon: Users, title: "Learning for everyone", text: "Welcoming learners from every background across Sindh." },
  { Icon: Compass, title: "Pathways to work", text: "Guidance toward employment, freelancing and further study." },
];

export function VisionMission() {
  return (
    <section className="section-pad relative overflow-hidden bg-blueprint text-on-navy">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="gold">Vision &amp; Mission</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Education with a <span className="text-gradient-gold">Purpose</span>
          </h2>
          <p className="mt-4 text-lg text-on-navy-muted">
            TITAN exists to make high-quality, practical technology education accessible — and to help every learner turn
            curiosity into capability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              Icon: Eye,
              title: "Our Vision",
              text: "A Sindh where every motivated learner has access to the technology skills that open doors — to meaningful work, entrepreneurship and lifelong growth.",
            },
            {
              Icon: Target,
              title: "Our Mission",
              text: "To deliver applied, industry-relevant training in IT and networking through skilled instructors, hands-on labs and real projects — preparing graduates to contribute with confidence.",
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 120}>
              <article className="group h-full rounded-3xl border border-on-navy/10 bg-on-navy/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-on-navy/10 sm:p-10">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-gold text-navy-deep shadow-gold transition-transform duration-500 group-hover:rotate-6">
                  <b.Icon className="size-7" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-on-navy-muted">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GOALS.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-on-navy/10 bg-navy-deep/40 p-6 transition-colors duration-300 hover:border-gold/50">
                <g.Icon className="size-6 text-gold" aria-hidden />
                <p className="mt-3 font-display font-bold">{g.title}</p>
                <p className="mt-1 text-sm text-on-navy-muted">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button asChild variant="gold" size="xl">
            <Link to="/enroll" search={{}}>
              Join TITAN <ArrowRight />
            </Link>
          </Button>
          <p className="text-xs text-on-navy-muted">Draft copy — to be confirmed by TITAN leadership.</p>
        </div>
      </div>
    </section>
  );
}
