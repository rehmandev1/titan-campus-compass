import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { COURSES, COURSE_CATEGORIES, type CourseCategory } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Filter = "All" | CourseCategory;

/** Category filter + course grid, shared by the homepage and the Courses page. */
export function CoursesExplorer({ limit, showSearch = false }: { limit?: number; showSearch?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter(
      (c) =>
        (filter === "All" || c.category === filter) &&
        (!q || c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const shown = limit ? results.slice(0, limit) : results;
  const filters: Filter[] = ["All", ...COURSE_CATEGORIES];

  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        {showSearch && (
          <label className="relative w-full max-w-md">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses…"
              className="h-12 rounded-full bg-card pl-11 shadow-soft"
            />
          </label>
        )}
        <div role="group" aria-label="Filter courses by category" className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                  on
                    ? "border-transparent bg-gradient-navy text-gold-light shadow-card"
                    : "border-border bg-card text-navy/75 hover:-translate-y-0.5 hover:border-gold hover:text-navy",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <li key={c.slug} className="animate-fade-up">
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 flex flex-col items-center rounded-3xl border border-dashed border-border bg-card p-12 text-center">
          <SearchX className="size-10 text-gold-deep" aria-hidden />
          <p className="mt-4 font-display text-lg font-bold text-navy">No courses match your search</p>
          <p className="mt-1 text-sm text-muted-foreground">Try another keyword or category.</p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="mt-5 text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Course details shown are samples and will be updated with TITAN's official programme information.
      </p>
    </div>
  );
}
