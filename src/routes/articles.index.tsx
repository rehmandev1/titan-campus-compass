import { createFileRoute } from "@tanstack/react-router";
import { ARTICLES } from "@/data/articles";
import { PageHero } from "@/components/site/PageHero";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles & News — TITAN" },
      { name: "description", content: "Insights, announcements and stories from TITAN's classrooms and labs." },
      { property: "og:title", content: "TITAN Articles & News" },
      { property: "og:description", content: "Insights and stories from TITAN — Taj Institute of Technology & Applied Networks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Articles" }]}
        title={
          <>
            Articles &amp; <span className="text-gradient-gold">News</span>
          </>
        }
        description="Sample articles are shown until official TITAN posts are published."
      />
      <section className="section-pad bg-gradient-section">
        <div className="container-site grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 90} className="h-full">
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
