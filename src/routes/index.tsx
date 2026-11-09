import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Testimonials } from "@/components/home/Testimonials";
import { CampusSection } from "@/components/home/CampusSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { AlumniSection } from "@/components/home/AlumniSection";
import { VisionMission } from "@/components/home/VisionMission";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CoursesExplorer } from "@/components/site/CoursesExplorer";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TITAN — Taj Institute of Technology & Applied Networks" },
      {
        name: "description",
        content:
          "Practical IT, networking and software courses at TITAN's Sukkur and Karachi campuses. Powered by Saylani Welfare International Trust.",
      },
      { property: "og:title", content: "TITAN — Empowering Minds with Applied Technology" },
      {
        property: "og:description",
        content: "Hands-on technology education in Sukkur and Karachi, powered by Saylani Welfare International Trust.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChoose />
      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Courses"
            title={
              <>
                Find Your Path in <span className="text-gradient-gold">Technology</span>
              </>
            }
            description="Career-focused programmes in development, networks, data, cloud, design and digital skills."
          />
          <div className="mt-10">
            <CoursesExplorer limit={6} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="navy" size="lg">
              <Link to="/courses">
                View All Courses <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Testimonials />
      <CampusSection />
      <ArticlesSection />
      <AlumniSection />
      <VisionMission />
    </>
  );
}
