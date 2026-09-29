"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  duration?: number; // ms
  delay?: number; // ms
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  duration = 750,
  delay = 0,
  className,
  threshold = 0.08,
}: ScrollRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, triggerOnce: true });

  const getInitialStyles = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-10";
      case "fade-down":
        return "opacity-0 -translate-y-10";
      case "fade-left":
        return "opacity-0 -translate-x-12";
      case "fade-right":
        return "opacity-0 translate-x-12";
      case "zoom-in":
        return "opacity-0 scale-95";
      case "fade":
      default:
        return "opacity-0";
    }
  };

  const getVisibleStyles = () => {
    switch (animation) {
      case "zoom-in":
        return "opacity-100 scale-100 translate-x-0 translate-y-0";
      default:
        return "opacity-100 translate-x-0 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]",
        inView ? getVisibleStyles() : getInitialStyles(),
        className
      )}
    >
      {children}
    </div>
  );
}
