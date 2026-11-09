import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, BarChart3, MapPin, MonitorSmartphone, CheckCircle2, ArrowRight, ListChecks } from "lucide-react";
import { getCourse, COURSES } from "@/data/courses";
import { CAMPUSES } from "@/data/campuses";
import { PageHero } from "@/components/site/PageHero";
import { CourseCard } from "@/components/site/CourseCard";
import { PlaceholderBadge } from "@/components/site/Notices";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    const title = c ? `${c.title} — TITAN Course` : "Course not found — TITAN";
    const description = c?.summary ?? "This course could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(c ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site section-pad text-center">
      <h1 className="text-3xl font-bold text-navy">Course not found</h1>
      <p className="mt-2 text-muted-foreground">This course may have been renamed or removed.</p>
      <Button asChild variant="navy" size="lg" className="mt-6">
        <Link to="/courses">Browse all courses</Link>
      </Button>
    </div>
  ),
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const related = COURSES.filter((c) => c.slug !== course.slug && c.category === course.category)
    .concat(COURSES.filter((c) => c.slug !== course.slug && c.category !== course.category))
    .slice(0, 3);

  const facts = [
    { Icon: Clock, label: "Duration", value: course.duration },
    { Icon: BarChart3, label: "Level", value: course.level },
    { Icon: MonitorSmartphone, label: "Mode", value: course.mode },
    { Icon: MapPin, label: "Campuses", value: CAMPUSES.map((c) => c.city).join(" & ") },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Courses", to: "/courses" }, { label: course.title }]}
        title={course.title}
        description={course.summary}
      >
        <span className="inline-flex rounded-full border border-gold/40 bg-on-navy/5 px-4 py-1.5 text-sm font-semibold text-gold-light">
          {course.category}
        </span>
      </PageHero>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-12">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img src={course.image} alt={`${course.title} course`} width={1024} height={640} className="aspect-[16/9] w-full object-cover" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">Course overview</h2>
                <PlaceholderBadge>Sample details</PlaceholderBadge>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{course.overview}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">What you'll learn</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
                    <span className="text-navy/85">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">Course outline</h2>
              <Accordion type="single" collapsible defaultValue="m0" className="mt-6 space-y-3">
                {course.modules.map((m, i) => (
                  <AccordionItem key={m.title} value={`m${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="text-left font-display text-base font-bold text-navy hover:no-underline">
                      <span className="flex items-center gap-3">
                        <span className="grid size-8 place-items-center rounded-lg bg-gradient-gold text-sm text-navy-deep">{i + 1}</span>
                        {m.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pb-2 pl-11">
                        {m.topics.map((t) => (
                          <li key={t} className="flex items-center gap-2 text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-gold" aria-hidden /> {t}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-navy sm:text-3xl">
                <ListChecks className="size-7 text-gold-deep" aria-hidden /> Prerequisites
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {course.prerequisites.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] bg-card shadow-lift">
              <div className="h-1.5 bg-gradient-gold" aria-hidden />
              <div className="p-7">
                <h2 className="font-display text-xl font-bold text-navy">Course at a glance</h2>
                <dl className="mt-5 space-y-4">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-navy-tint text-gold-deep">
                        <f.Icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                        <dd className="font-semibold text-navy">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <Button asChild variant="gold" size="lg" className="mt-7 w-full">
                  <Link to="/enroll" search={{ course: course.slug }}>
                    Enroll Now <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline-brand" size="lg" className="mt-3 w-full">
                  <Link to="/contact">Ask a question</Link>
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">Fees and batch dates will be announced by admissions.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold text-navy">
            You may also <span className="text-gradient-gold">like</span>
          </h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
