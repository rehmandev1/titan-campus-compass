import { FlaskConical, Briefcase, GraduationCap, Hammer, Cpu, TrendingUp } from "lucide-react";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const FEATURES = [
  { Icon: FlaskConical, title: "Practical Learning", text: "Lab-first sessions where you learn by doing.", pos: "left-[24%] top-0", line: [37, 12] },
  { Icon: Briefcase, title: "Industry-Relevant Skills", text: "Curriculum shaped around what employers need.", pos: "right-[24%] top-0", line: [63, 12] },
  { Icon: GraduationCap, title: "Professional Instructors", text: "Guidance from experienced practitioners.", pos: "left-0 top-1/2 -translate-y-1/2", line: [12, 50] },
  { Icon: Hammer, title: "Hands-On Projects", text: "Build a portfolio of real, working projects.", pos: "right-0 top-1/2 -translate-y-1/2", line: [88, 50] },
  { Icon: Cpu, title: "Modern Technology Education", text: "Current tools in networking, cloud, AI and more.", pos: "left-[24%] bottom-0", line: [37, 88] },
  { Icon: TrendingUp, title: "Career Development", text: "Portfolio, interview and freelancing support.", pos: "right-[24%] bottom-0", line: [63, 88] },
] as const;

function FeatureCard({ f, className, delay }: { f: (typeof FEATURES)[number]; className?: string; delay: number }) {
  return (
    <div className={cn("animate-float-slow", className)} style={{ animationDelay: `${delay * 0.7}s` }}>
      <div className="gradient-ring group flex h-full flex-col items-center rounded-3xl bg-card p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
        <span className="grid size-16 place-items-center rounded-2xl bg-gradient-navy text-gold-light shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <f.Icon className="size-7" aria-hidden />
        </span>
        <h3 className="mt-4 text-base font-bold text-navy">{f.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
      </div>
    </div>
  );
}

function CenterPanel() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-blueprint px-8 py-12 text-center shadow-lift sm:px-12">
      <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-gold-light/30" aria-hidden />
      <div className="pointer-events-none absolute -bottom-16 -right-16 size-48 rounded-full bg-gold/25 blur-3xl" aria-hidden />
      <Eyebrow className="relative bg-none bg-gradient-gold text-navy-deep">Why Choose TITAN?</Eyebrow>
      <h2 className="relative mt-5 text-3xl font-extrabold leading-tight text-on-navy sm:text-4xl">
        Skills You Can Use. <span className="text-gradient-gold">Careers You Can Build.</span>
      </h2>
      <p className="relative mt-4 text-on-navy-muted">
        Every TITAN programme is designed around practice, mentorship and real-world outcomes.
      </p>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" aria-hidden />
      <div className="container-site relative">
        {/* Desktop: floating composition around a blueprint centre */}
        <div className="relative hidden h-[780px] xl:block">
          <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {FEATURES.map((f) => (
              <line
                key={f.title}
                x1="50"
                y1="50"
                x2={f.line[0]}
                y2={f.line[1]}
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeDasharray="6 7"
                vectorEffect="non-scaling-stroke"
                className="animate-dash"
                opacity="0.6"
              />
            ))}
          </svg>
          <Reveal className="absolute left-1/2 top-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2">
            <CenterPanel />
          </Reveal>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={cn("absolute w-[250px]", f.pos)}>
              <Reveal delay={i * 90}>
                <FeatureCard f={f} delay={i} />
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile / tablet / laptop */}
        <div className="xl:hidden">
          <Reveal>
            <CenterPanel />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <FeatureCard f={f} delay={i} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
