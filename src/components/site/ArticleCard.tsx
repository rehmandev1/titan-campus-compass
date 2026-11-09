import { Link } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import { type Article, formatDate } from "@/data/articles";
import { PlaceholderBadge } from "./Notices";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="gradient-ring group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gradient-navy px-3 py-1 text-xs font-semibold text-gold-light">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-gold-deep" aria-hidden />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <PlaceholderBadge>Sample</PlaceholderBadge>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-snug text-navy">{article.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <Link
          to="/articles/$slug"
          params={{ slug: article.slug }}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-navy transition-colors hover:text-gold-deep"
          aria-label={`Read more: ${article.title}`}
        >
          Read More
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
