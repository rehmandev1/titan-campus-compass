import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VisionMission } from "@/components/home/VisionMission";
import { WhyChoose } from "@/components/home/WhyChoose";
import { LogoImage } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import workshop from "@/assets/article-workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TITAN — Taj Institute of Technology & Applied Networks" },
      {
        name: "description",
        content: "Learn about TITAN, a practical technology institute in Sindh powered by Saylani Welfare International Trust.",
      },
      { property: "og:title", content: "About TITAN" },
      { property: "og:description", content: "Who we are, what we believe and how we teach technology at TITAN." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { Icon: Lightbulb, title: "Curiosity", text: "We encourage questions, exploration and creative problem solving." },
  { Icon: ShieldCheck, title: "Integrity", text: "Honest guidance and high standards in everything we teach." },
  { Icon: Users, title: "Inclusion", text: "Technology education should be open to every motivated learner." },
  { Icon: HeartHandshake, title: "Service", text: "Rooted in Saylani's tradition of serving the community." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        title={
          <>
            About <span className="text-gradient-gold">TITAN</span>
          </>
        }
        description={SITE.intro}
      />

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={workshop} alt="A TITAN-style technology workshop" width={1024} height={640} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />
              <div className="absolute -bottom-8 right-6 rounded-2xl bg-card px-5 py-4 shadow-lift sm:right-10">
                <LogoImage className="h-12 sm:h-14" />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  Practical Technology Education, <span className="text-gradient-gold">Rooted in Service</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Taj Institute of Technology &amp; Applied Networks (TITAN) focuses on the skills that matter in today's
                technology landscape — from networking and security to software, data, cloud and design.
              </p>
              <p>
                Powered by <strong className="text-navy">{SITE.poweredBy}</strong>, TITAN brings hands-on learning to
                campuses in Sukkur and Karachi, with an emphasis on labs, projects and mentorship.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/courses">
                  Explore Courses <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-brand" size="lg">
                <Link to="/campuses">Our Campuses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <SectionHeading eyebrow="Our Values" title="What Guides Us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="gradient-ring group h-full rounded-3xl bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-navy text-gold-light transition-transform duration-500 group-hover:rotate-6">
                    <v.Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisionMission />
      <WhyChoose />
    </>
  );
}
