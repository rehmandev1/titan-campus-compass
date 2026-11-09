import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export function ArticlesSection() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Articles & News"
          title={
            <>
              Latest from <span className="text-gradient-gold">TITAN</span>
            </>
          }
          description="Insights, announcements and stories from our classrooms and labs."
        />
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 90} className="h-full">
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline-brand" size="lg">
            <Link to="/articles">
              View All Articles <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
