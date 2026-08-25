import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#040711] border-b border-blue-500/15 py-1.5 px-4 text-xs font-medium text-slate-300 animate-in fade-in slide-in-from-top-1 duration-500 overflow-hidden"
    >
      {/* Subtle top subtle lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-400/10 to-indigo-600/5 pointer-events-none" />

      <Container>
        <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs">
          {/* Left / Center Message */}
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-medium">
              Growth-Focused Digital Marketing <span className="text-slate-500 hidden sm:inline">•</span> <span className="text-slate-400 hidden sm:inline">Strategy</span> <span className="text-slate-500 hidden sm:inline">•</span> <span className="text-slate-400 hidden sm:inline">Performance</span> <span className="text-slate-500 hidden md:inline">•</span> <span className="text-cyan-400 font-semibold hidden md:inline">Predictable Results</span>
            </span>
          </div>

          {/* Right Action Link */}
          <Link
            href="/free-strategy-call"
            className="group inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors shrink-0 ml-auto"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </aside>
  );
}
