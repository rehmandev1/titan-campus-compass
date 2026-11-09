import { useEffect, useId, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { SINDH_PATH, INDUS_PATH, SINDH_VIEWBOX, SINDH_POINTS } from "@/data/sindh-map";
import { CAMPUSES, type Campus } from "@/data/campuses";
import { cn } from "@/lib/utils";

const { width: W, height: H } = SINDH_VIEWBOX;

interface SindhMapProps {
  active: Campus["slug"] | null;
  onActiveChange: (slug: Campus["slug"] | null) => void;
  className?: string;
}

function Pin({ gradientId }: { gradientId: string }) {
  return (
    <svg viewBox="0 0 36 46" className="h-full w-full overflow-visible" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold-light)" />
          <stop offset="45%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--gold-deep)" />
        </linearGradient>
      </defs>
      <path
        d="M18 1.5C9 1.5 2 8.4 2 17.2 2 28.6 18 44.5 18 44.5S34 28.6 34 17.2C34 8.4 27 1.5 18 1.5Z"
        fill={`url(#${gradientId})`}
        stroke="var(--card)"
        strokeWidth="2.5"
      />
      <circle cx="18" cy="17" r="7" fill="var(--navy)" />
      <circle cx="18" cy="17" r="2.6" fill="var(--gold-light)" />
    </svg>
  );
}

/**
 * Custom Sindh province map (real boundary data, see data/sindh-map.ts).
 * Markers are HTML overlays positioned in % of the viewBox, so they stay
 * locked to the right spot at any size.
 */
export function SindhMap({ active, onActiveChange, className }: SindhMapProps) {
  const uid = useId().replace(/:/g, "");
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) onActiveChange(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onActiveChange(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [active, onActiveChange]);

  const activeCampus = CAMPUSES.find((c) => c.slug === active) ?? null;

  return (
    <div ref={wrap} className={cn("w-full", className)}>
      <div className="relative mx-auto w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 size-full overflow-visible"
          role="img"
          aria-label="Map of Sindh province showing TITAN campuses in Sukkur and Karachi"
        >
          <defs>
            <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold)" />
              <stop offset="55%" stopColor="var(--gold-deep)" />
              <stop offset="100%" stopColor="var(--navy-soft)" />
            </linearGradient>
            <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="var(--navy)" floodOpacity="0.16" />
            </filter>
          </defs>
          {/* soft halo */}
          <path d={SINDH_PATH} fill="none" stroke="var(--gold-light)" strokeWidth="16" strokeLinejoin="round" opacity="0.45" />
          {/* province */}
          <path
            d={SINDH_PATH}
            fill="var(--card)"
            stroke={`url(#${uid}-stroke)`}
            strokeWidth="5"
            strokeLinejoin="round"
            filter={`url(#${uid}-shadow)`}
          />
          {/* Indus river */}
          <path d={INDUS_PATH} fill="none" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
          <text
            x={SINDH_POINTS.label.x + 60}
            y={SINDH_POINTS.label.y}
            textAnchor="middle"
            fill="var(--muted-foreground)"
            style={{ font: "700 56px var(--font-display)", letterSpacing: "0.28em" }}
          >
            SINDH
          </text>
        </svg>

        {CAMPUSES.map((c) => {
          const isActive = active === c.slug;
          return (
            <div
              key={c.slug}
              data-active={isActive}
              className="group absolute z-10 h-0 w-0 data-[active=true]:z-20 focus-within:z-20 hover:z-20"
              style={{ left: `${(c.point.x / W) * 100}%`, top: `${(c.point.y / H) * 100}%` }}
            >
              {/* pulse rings */}
              <span
                className="pointer-events-none absolute -left-4 -top-4 size-8 rounded-full bg-gold/40 opacity-0 group-hover:animate-pulse-ring group-hover:opacity-100 group-focus-within:animate-pulse-ring group-focus-within:opacity-100 group-data-[active=true]:animate-pulse-ring group-data-[active=true]:opacity-100"
                aria-hidden
              />
              <span className="pointer-events-none absolute -left-1.5 -top-1.5 size-3 rounded-full bg-navy ring-2 ring-card" aria-hidden />
              <button
                type="button"
                aria-pressed={isActive}
                aria-label={`${c.name} — ${isActive ? "hide" : "show"} details`}
                onClick={() => onActiveChange(isActive ? null : c.slug)}
                className="absolute -left-[15px] -top-[40px] h-[40px] w-[30px] origin-bottom cursor-pointer rounded-full transition-all duration-300 ease-out [filter:drop-shadow(0_6px_8px_color-mix(in_oklab,var(--navy)_30%,transparent))] group-hover:scale-[1.18] group-hover:[filter:drop-shadow(0_0_14px_color-mix(in_oklab,var(--gold)_75%,transparent))] group-focus-within:scale-[1.18] group-data-[active=true]:scale-[1.18] group-data-[active=true]:[filter:drop-shadow(0_0_14px_color-mix(in_oklab,var(--gold)_75%,transparent))] focus-visible:outline-none sm:-left-[18px] sm:-top-[46px] sm:h-[46px] sm:w-[36px]"
              >
                <Pin gradientId={`${uid}-${c.slug}`} />
              </button>

              {/* Floating label — always visible, expands on hover / focus / click */}
              <div className="absolute left-5 -top-11 sm:left-7 sm:-top-14">
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => onActiveChange(isActive ? null : c.slug)}
                  className={cn(
                    "block w-max cursor-pointer rounded-xl border border-border bg-card px-3 py-2 text-left font-display text-[11px] font-bold leading-tight text-navy shadow-card transition-all duration-300 ease-out sm:px-4 sm:py-2.5 sm:text-sm",
                    "group-hover:-translate-y-0.5 group-hover:border-gold group-hover:shadow-gold group-focus-within:border-gold group-focus-within:shadow-gold group-data-[active=true]:border-gold group-data-[active=true]:shadow-gold",
                  )}
                >
                  {c.city}
                  <br />
                  Titan Campus
                </button>
                {/* Expanded info card (md+) */}
                <div className="invisible absolute left-0 top-full z-10 hidden w-56 translate-y-1 pt-2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-data-[active=true]:visible group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100 md:block">
                  <div className="overflow-hidden rounded-xl border border-gold bg-card shadow-gold">
                    <div className="h-1 bg-gradient-gold" aria-hidden />
                    <div className="p-3.5 text-xs text-muted-foreground">
                      <p className="font-display text-sm font-bold text-navy">{c.name}</p>
                      <p className="mt-1.5 flex items-start gap-1.5">
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold-deep" aria-hidden />
                        <span>
                          {c.city}, Sindh
                          <br />
                          <span className="italic">{c.address}</span>
                        </span>
                      </p>
                      <Link
                        to="/campuses/$slug"
                        params={{ slug: c.slug }}
                        className="mt-3 inline-flex items-center gap-1 rounded-full bg-gradient-navy px-3 py-1.5 text-[11px] font-semibold text-on-navy transition-transform hover:-translate-y-0.5"
                      >
                        View Details <ArrowRight className="size-3" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small screens: info panel under the map for the selected campus */}
      <div className="mt-4 md:hidden" aria-live="polite">
        {activeCampus ? (
          <div className="rounded-2xl border border-gold bg-card p-4 shadow-gold">
            <p className="font-display font-bold text-navy">{activeCampus.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {activeCampus.city}, Sindh · <span className="italic">{activeCampus.address}</span>
            </p>
            <Link
              to="/campuses/$slug"
              params={{ slug: activeCampus.slug }}
              className="mt-3 inline-flex items-center gap-1 rounded-full bg-gradient-navy px-4 py-2 text-xs font-semibold text-on-navy"
            >
              View Details <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground">Tap a pin to see campus details.</p>
        )}
      </div>
    </div>
  );
}
