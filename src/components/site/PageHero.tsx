import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PlaneArt, GlobeArt } from "./Decorations";

interface Crumb {
  label: string;
  to?: "/" | "/courses" | "/campuses" | "/articles" | "/alumni" | "/about" | "/contact";
}

/** Shared header band for inner pages. */
export function PageHero({ title, description, crumbs, children }: { title: ReactNode; description?: ReactNode; crumbs: Crumb[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-blueprint text-on-navy">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 70% at 90% 0%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)" }}
        aria-hidden
      />
      <PlaneArt className="pointer-events-none absolute -right-6 top-6 hidden w-56 text-on-navy/50 opacity-70 md:block" />
      <GlobeArt className="pointer-events-none absolute bottom-4 left-6 hidden w-20 text-on-navy/40 opacity-60 lg:block" />
      <div className="container-site relative py-16 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-on-navy-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-gold-light">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" aria-hidden />
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-gold-light">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-gold-light">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-on-navy-muted sm:text-lg [animation-delay:120ms]">
            {description}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:200ms]">{children}</div>}
      </div>
      <div className="divider-gradient" aria-hidden />
    </section>
  );
}
