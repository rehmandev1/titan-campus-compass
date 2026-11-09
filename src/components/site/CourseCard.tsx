import { Link } from "@tanstack/react-router";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="gradient-ring group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={course.image}
          alt={`${course.title} course`}
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" aria-hidden />
        <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy">
          <Link
            to="/courses/$slug"
            params={{ slug: course.slug }}
            className="transition-colors hover:text-gold-deep focus-visible:text-gold-deep"
          >
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy/80">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-gold-deep" aria-hidden />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BarChart3 className="size-4 text-gold-deep" aria-hidden />
            {course.level}
          </span>
        </div>
        <div className="mt-auto flex gap-3 pt-6">
          <Button asChild variant="outline-brand" size="sm" className="flex-1 rounded-full">
            <Link to="/courses/$slug" params={{ slug: course.slug }}>
              Course Details
            </Link>
          </Button>
          <Button asChild variant="gold" size="sm" className="flex-1 rounded-full">
            <Link to="/enroll" search={{ course: course.slug }}>
              Enroll Now <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
