import { cn } from "@/lib/utils";

/* Line-art educational illustrations in the logo's navy + gold. Purely decorative. */

export function LaptopArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" aria-hidden className={cn("text-navy", className)}>
      <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 14 L78 6 L82 52 L24 60 Z" stroke="currentColor" />
        <path d="M26 19 L74 12 L77 48 L29 54 Z" className="stroke-gold" />
        <path d="M24 60 L82 52 L104 66 L42 76 Z" stroke="currentColor" />
        <path d="M46 66 l30 -4 M50 70 l22 -3" className="stroke-gold" />
        <path d="M104 66 q10 2 8 10 q-3 7 -10 3" stroke="currentColor" />
        <circle cx="102" cy="79" r="3.5" className="stroke-gold" />
        <path d="M36 28 l22 -3 M36 34 l30 -4 M36 40 l18 -2.5" className="stroke-gold" opacity=".7" />
      </g>
    </svg>
  );
}

export function PlaneArt({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      aria-hidden
      className={cn("text-navy", className)}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M70 52 C 110 70, 150 74, 190 50 C 205 40, 212 25, 214 8"
        className="stroke-gold animate-dash"
        strokeWidth="2.4"
        strokeDasharray="8 9"
        strokeLinecap="round"
      />
      <g strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M6 30 L66 52 L30 58 Z" stroke="currentColor" />
        <path d="M30 58 L36 74 L44 56" stroke="currentColor" />
        <path d="M30 58 L66 52" className="stroke-gold" />
      </g>
    </svg>
  );
}

export function GlobeArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 140" fill="none" aria-hidden className={cn("text-navy", className)}>
      <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="55" cy="52" r="38" stroke="currentColor" />
        <path d="M30 30 c8 4 6 12 14 12 s6 10 0 14 s-10 8 -4 16" className="stroke-gold" />
        <path d="M66 22 c-4 8 4 10 10 10 s10 8 4 14 s-12 2 -10 12 s8 8 4 14" className="stroke-gold" />
        <path d="M20 60 c10 -2 14 6 22 2" className="stroke-gold" opacity=".7" />
        <path d="M86 18 a46 46 0 0 1 -6 72" stroke="currentColor" />
        <path d="M55 98 v18 M38 122 h34 M46 116 h18" stroke="currentColor" />
      </g>
    </svg>
  );
}

export function GraduationArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden className={cn("text-navy", className)}>
      <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 8 L112 28 L60 48 L8 28 Z" stroke="currentColor" />
        <path d="M30 37 v18 c0 8 60 8 60 0 v-18" stroke="currentColor" />
        <path d="M112 28 v26" className="stroke-gold" />
        <circle cx="112" cy="58" r="4" className="stroke-gold" />
      </g>
    </svg>
  );
}
