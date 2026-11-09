import { Link } from "@tanstack/react-router";
import logo from "@/assets/titan-logo.webp.asset.json";
import { cn } from "@/lib/utils";

const ALT = "TITAN — Taj Institute of Technology & Applied Networks, by Saylani";

/** The official TITAN logo, shown unmodified (1920×640 source, 3:1). */
export function LogoImage({ className, eager }: { className?: string; eager?: boolean }) {
  return (
    <img
      src={logo.url}
      alt={ALT}
      width={1920}
      height={640}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}

/** Logo that links home, with the subtle scale + gold glow hover. */
export function LogoLink({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  return (
    <Link to="/" aria-label="TITAN home" className={cn("logo-hover inline-flex shrink-0 rounded-md", className)}>
      <LogoImage eager className={imgClassName} />
    </Link>
  );
}
