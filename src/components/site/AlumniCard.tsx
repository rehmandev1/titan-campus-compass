import { Award, BookOpen, GraduationCap, Quote } from "lucide-react";
import type { Alumnus } from "@/data/people";
import { PersonAvatar } from "./Avatar";
import { PlaceholderBadge } from "./Notices";

export function AlumniCard({ person }: { person: Alumnus }) {
  return (
    <article className="gradient-ring group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative flex flex-col items-center bg-gradient-navy px-6 pb-14 pt-8">
        <PlaceholderBadge className="absolute right-4 top-4 border-gold/30 bg-on-navy/10 text-gold-light" />
        <PersonAvatar photo={person.photo} name={person.name} className="size-24 ring-gold/40 transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="-mt-8 mx-4 rounded-2xl bg-card p-5 text-center shadow-soft">
        <h3 className="font-display text-lg font-bold text-navy">{person.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{person.qualification}</p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 text-sm">
        <p className="flex items-start gap-2 text-navy/80">
          <BookOpen className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
          <span>
            <span className="font-semibold text-navy">Course:</span> {person.course}
          </span>
        </p>
        <p className="flex items-start gap-2 text-navy/80">
          <Award className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
          <span>{person.achievement}</span>
        </p>
        <blockquote className="mt-2 flex gap-2 rounded-xl bg-gold-tint p-4 italic text-navy/75">
          <Quote className="size-4 shrink-0 text-gold-deep" aria-hidden />
          {person.quote}
        </blockquote>
      </div>
    </article>
  );
}
