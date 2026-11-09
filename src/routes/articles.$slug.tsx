import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { getArticle, formatDate, ARTICLES } from "@/data/articles";
import { PageHero } from "@/components/site/PageHero";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PlaceholderBadge } from "@/components/site/Notices";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — TITAN` : "Article not found — TITAN";
    const description = a?.excerpt ?? "This article could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(a ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-site section-pad text-center">
      <h1 className="text-3xl font-bold text-navy">Article not found</h1>
      <Button asChild variant="navy" size="lg" className="mt-6">
        <Link to="/articles">Back to articles</Link>
      </Button>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const more = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <>
      <PageHero crumbs={[{ label: "Articles", to: "/articles" }, { label: article.category }]} title={article.title}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-on-navy-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-gold" aria-hidden />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <PlaceholderBadge>Sample article</PlaceholderBadge>
        </div>
      </PageHero>
      <article className="section-pad">
        <div className="container-site max-w-3xl">
          <img src={article.image} alt="" width={1024} height={640} className="aspect-[16/9] w-full rounded-[2rem] object-cover shadow-lift" />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-navy/85">
            <p className="text-xl font-medium text-navy">{article.excerpt}</p>
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Button asChild variant="outline-brand" size="lg" className="mt-10">
            <Link to="/articles">
              <ArrowLeft /> All articles
            </Link>
          </Button>
        </div>
      </article>
      <section className="section-pad bg-gradient-section">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold text-navy">
            More <span className="text-gradient-gold">reading</span>
          </h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
