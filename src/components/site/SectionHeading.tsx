import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, tone = "navy" }: { children: ReactNode; className?: string; tone?: "navy" | "gold" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] shadow-soft",
        tone === "navy" ? "bg-gradient-navy text-gold-light" : "bg-gradient-gold text-navy-deep",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", tone === "navy" ? "bg-gold" : "bg-navy")} aria-hidden />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className, light }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-on-navy" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-on-navy-muted" : "text-muted-foreground")}>
          {description}
        </p>
      )}
      <div className={cn("divider-gradient mt-6 w-24 rounded-full", align === "center" && "mx-auto")} aria-hidden />
    </div>
  );
}
