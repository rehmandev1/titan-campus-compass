import { Info, PlugZap } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small tag marking content that must be replaced with verified information. */
export function PlaceholderBadge({ className, children = "Placeholder" }: { className?: string; children?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold-tint px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold-deep",
        className,
      )}
    >
      <Info className="size-3" aria-hidden />
      {children}
    </span>
  );
}

/** Honest notice shown where a feature needs a backend that isn't connected yet. */
export function BackendNotice({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div role="status" className={cn("flex gap-4 rounded-2xl border border-gold/40 bg-gold-tint p-5 text-navy", className)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold">
        <PlugZap className="size-5" aria-hidden />
      </span>
      <div className="text-sm leading-relaxed">
        <p className="font-display text-base font-bold">{title}</p>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
