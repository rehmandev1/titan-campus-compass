import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CoursesExplorer } from "@/components/site/CoursesExplorer";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — TITAN Technology Programmes" },
      {
        name: "description",
        content: "Browse TITAN courses in web development, networking, cyber security, AI, cloud, design and digital marketing.",
      },
      { property: "og:title", content: "TITAN Courses" },
      { property: "og:description", content: "Practical technology programmes at TITAN's Sukkur and Karachi campuses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Courses" }]}
        title={
          <>
            Programmes Built for <span className="text-gradient-gold">Real Careers</span>
          </>
        }
        description="Filter by category or search to find the course that fits your goals."
      />
      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <CoursesExplorer showSearch />
        </div>
      </section>
    </>
  );
}
