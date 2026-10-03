import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "dark" | "light";
  priority?: boolean;
}

export function Logo({ className, variant = "header", priority = false }: LogoProps) {
  const isFooter = variant === "footer" || variant === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 shrink-0 transition-transform duration-200 hover:scale-[1.02] focus:outline-none",
        className
      )}
      aria-label="Growlinqs Official Brand"
    >
      {/* Official Exact Uploaded Logo Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-300 shadow-md",
          isFooter
            ? "h-12 w-12 sm:h-14 sm:w-14 border border-white/20 bg-black"
            : "h-10 w-10 sm:h-12 sm:w-12 border border-[#0A0F1D]/15 bg-black"
        )}
      >
        <Image
          src="/logo/growlinx-logo.jpg"
          alt="Growlinqs Official Brand Logo"
          width={128}
          height={128}
          sizes="(max-width: 640px) 48px, 56px"
          priority={priority || !isFooter}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Brand Title (Optional pairing for accessibility & branding clarity) */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "text-lg sm:text-xl font-black tracking-tight leading-none transition-colors",
            isFooter
              ? "text-[#FAF6F0] group-hover:text-[#FF5E3A]"
              : "text-[#0A0F1D] group-hover:text-[#FF5E3A]"
          )}
        >
          Growlinqs
        </span>
        <span
          className={cn(
            "text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest leading-none mt-1",
            isFooter ? "text-slate-400" : "text-[#5A6578]"
          )}
        >
          Growth Agency
        </span>
      </div>
    </Link>
  );
}
