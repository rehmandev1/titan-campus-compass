import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

/** Photo if provided, otherwise a neutral brand-coloured placeholder silhouette. */
export function PersonAvatar({ photo, name, className }: { photo?: string; name: string; className?: string }) {
  if (photo) {
    return <img src={photo} alt={name} loading="lazy" className={cn("rounded-full object-cover", className)} />;
  }
  return (
    <span
      role="img"
      aria-label={`${name} — photo placeholder`}
      className={cn("grid place-items-center rounded-full bg-gradient-navy text-gold-light ring-4 ring-gold-tint", className)}
    >
      <UserRound className="size-1/2" aria-hidden />
    </span>
  );
}
