import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "dark" | "light"; // "light" = on light/white navbar; "dark" = on dark background (footer)
}

export function Logo({ className, showText = true, variant = "dark" }: LogoProps) {
  const isLightBg = variant === "light";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 font-bold tracking-tight", className)}
      aria-label="Growlinx Home"
    >
      <div className="relative flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#050811]">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-base font-black text-transparent">
            G
          </span>
        </div>
      </div>
      {showText && (
        <span
          className={cn(
            "text-xl font-bold tracking-tight transition-colors",
            isLightBg
              ? "text-slate-900 group-hover:text-blue-600"
              : "text-white group-hover:text-cyan-300"
          )}
        >
          Grow<span className="text-blue-500 font-extrabold">linx</span>
        </span>
      )}
    </Link>
  );
}
