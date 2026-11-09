import type { ElementType, ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
}

/** Fades + lifts content into view once it scrolls on screen. */
export function Reveal({ children, className, delay = 0, as: Tag = "div", style }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-revealed={inView}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
