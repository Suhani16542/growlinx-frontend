"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2200,
  className,
}: CounterProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.2, triggerOnce: true });
  const count = useCountUp({
    end: value,
    duration,
    decimals,
    enabled: inView,
  });

  return (
    <span ref={ref} className={cn("tabular-nums inline-block", className)}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}
