import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "dark" | "light";
}

export function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = "center",
  className,
  theme = "dark",
}: SectionHeadingProps) {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        align === "right" && "ml-auto text-right",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/10 border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]",
          isLight ? "text-[#0A0F1D]" : "text-[#FAF6F0]"
        )}
      >
        {title}{" "}
        {highlightText && (
          <span className="text-[#FF5E3A]">{highlightText}</span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg leading-relaxed font-normal",
            isLight ? "text-[#5A6578]" : "text-slate-300"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
