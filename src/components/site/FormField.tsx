import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const fieldCls =
  "flex h-12 w-full rounded-xl border border-input bg-card px-4 text-[15px] text-navy shadow-soft transition-all placeholder:text-muted-foreground/70 focus-visible:border-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/20 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/15";

export function FormField({
  id,
  label,
  error,
  hint,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label}
        {required && (
          <span className="ml-0.5 text-gold-deep" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
