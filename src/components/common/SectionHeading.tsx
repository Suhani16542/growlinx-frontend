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
        "space-y-4",
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
          className={cn("inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge", {
            "mx-auto": align === "center",
          })}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightText && (
          <span className="glow-accent-gradient">{highlightText}</span>
        )}
      </h2>
      {description && (
        <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
