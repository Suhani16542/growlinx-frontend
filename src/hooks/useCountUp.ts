"use client";

import { useState, useEffect } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  enabled?: boolean;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic formula for smooth slowdown at the end
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (end - start) * easeOutCubic;

      setCount(Number(currentVal.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, start, duration, decimals, enabled]);

  return count;
}
