import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, PhoneCall, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { EnrollForm } from "@/components/forms/EnrollForm";

type EnrollSearch = { course?: string; campus?: "sukkur" | "karachi" };

export const Route = createFileRoute("/enroll")({
  validateSearch: (s: Record<string, unknown>): EnrollSearch => {
    const out: EnrollSearch = {};
    const course = s["course"];
    const campus = s["campus"];
    if (typeof course === "string" && course) out.course = course;
    if (campus === "sukkur" || campus === "karachi") out.campus = campus;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Enroll at TITAN — Apply for a Course" },
      { name: "description", content: "Apply for a TITAN technology course at the Sukkur or Karachi campus." },
      { property: "og:title", content: "Enroll at TITAN" },
      { property: "og:description", content: "Start your application for a practical technology course at TITAN." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnrollPage,
});

const STEPS = [
  { Icon: ClipboardCheck, title: "Apply", text: "Fill in your details and choose a course and campus." },
  { Icon: PhoneCall, title: "Hear from admissions", text: "The admissions team confirms next steps with you." },
  { Icon: GraduationCap, title: "Start learning", text: "Join your batch and begin hands-on training." },
];

function EnrollPage() {
  const { course, campus } = Route.useSearch();
  return (
    <>
      <PageHero
        crumbs={[{ label: "Enroll" }]}
        title={
          <>
            Begin Your <span className="text-gradient-gold">TITAN</span> Journey
          </>
        }
        description="Tell us about yourself and the programme you're interested in."
      />
      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="rounded-[2rem] bg-card p-6 shadow-lift sm:p-10">
            <EnrollForm defaultCourse={course} defaultCampus={campus} />
          </div>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-xl font-bold text-navy">How it works</h2>
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-navy text-gold-light">
                  <s.Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display font-bold text-navy">
                    {i + 1}. {s.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}
