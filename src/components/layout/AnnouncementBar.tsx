import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/20 py-2 px-4 text-center text-xs font-medium text-slate-300">
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 hover:text-white transition-colors"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-slate-300 font-normal">Ready to Grow Your Business?</span>
        <span className="font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
          Get a Free Strategy Call
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </Link>
    </aside>
  );
}
