import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 font-bold tracking-tight", className)}
      aria-label="Growlinx Home"
    >
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070b14]">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-lg font-black text-transparent">
            G
          </span>
        </div>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-100">
          Grow<span className="text-blue-500">linx</span>
        </span>
      )}
    </Link>
  );
}
