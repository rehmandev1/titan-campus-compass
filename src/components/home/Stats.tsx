import { GraduationCap, Presentation, BookOpen, FolderKanban } from "lucide-react";
import { STATS } from "@/data/site";
import { useCountUp, useInView } from "@/hooks/use-reveal";
import { PlaceholderBadge } from "@/components/site/Notices";

const ICONS = { students: GraduationCap, trainers: Presentation, courses: BookOpen, projects: FolderKanban } as const;

function Stat({ stat, start, index }: { stat: (typeof STATS)[number]; start: boolean; index: number }) {
  const value = useCountUp(stat.value, start);
  const Icon = ICONS[stat.key];
  return (
    <div className="group relative flex items-center gap-4 p-6 sm:p-8 lg:flex-col lg:text-center">
      {index > 0 && <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-on-navy/15 lg:block" aria-hidden />}
      <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-navy-deep shadow-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
        <Icon className="size-7" aria-hidden />
      </span>
      <div>
        <p className="font-display text-4xl font-extrabold text-gradient-gold sm:text-5xl" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
          {value.toLocaleString()}
          {stat.suffix}
        </p>
        <p className="mt-1 font-medium text-on-navy-muted">{stat.label}</p>
      </div>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section aria-label="TITAN at a glance" className="relative -mt-2 pb-6">
      <div className="container-site">
        <div ref={ref} className="relative overflow-hidden rounded-[2rem] bg-blueprint shadow-lift">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/20 blur-3xl" aria-hidden />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Stat key={s.key} stat={s} start={inView} index={i} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <PlaceholderBadge>Sample figures — to be replaced with verified numbers</PlaceholderBadge>
        </div>
      </div>
    </section>
  );
}
