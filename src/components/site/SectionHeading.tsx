import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-gradient-navy px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light shadow-soft",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
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
