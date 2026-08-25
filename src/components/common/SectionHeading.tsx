import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3.5",
        {
          "text-left": align === "left",
          "text-center mx-auto": align === "center",
          "text-right ml-auto": align === "right",
        },
        "max-w-3xl",
        className
      )}
      {...props}
    >
      {badge && (
        <div
          className={cn("inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge", {
            "mx-auto": align === "center",
          })}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
        {title}{" "}
        {highlightText && (
          <span className="glow-accent-gradient">{highlightText}</span>
        )}
      </h2>
      {description && (
        <p className="text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
