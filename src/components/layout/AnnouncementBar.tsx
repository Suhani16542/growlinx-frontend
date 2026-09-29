import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#0F172A] border-b border-white/[0.08] py-2 px-4 text-xs font-medium text-slate-300 animate-in fade-in slide-in-from-top-1 duration-500 overflow-hidden"
    >
      <Container>
        <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs">
          {/* Left / Center Message */}
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            <span className="text-slate-200 font-medium">
              Turn Digital Attention Into Real Commercial Growth <span className="text-slate-500 hidden sm:inline">•</span> <span className="text-slate-400 hidden sm:inline">SEO</span> <span className="text-slate-500 hidden sm:inline">•</span> <span className="text-slate-400 hidden sm:inline">Paid Ads</span> <span className="text-slate-500 hidden md:inline">•</span> <span className="text-[#06B6D4] font-semibold hidden md:inline">Full-Funnel CRO</span>
            </span>
          </div>

          {/* Right Action Link */}
          <Link
            href="/free-strategy-call"
            className="group inline-flex items-center gap-1.5 text-[#38BDF8] hover:text-white font-semibold transition-colors shrink-0 ml-auto"
          >
            <span>Book Free Audit</span>
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </aside>
  );
}
