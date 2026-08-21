import Link from "next/link";
import { PortfolioItem } from "@/types";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="glow-card glow-card-interactive group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8">
      {/* Accent hover line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/80" />

      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            {item.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">{item.client}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {item.summary}
        </p>

        {/* Highlighted Results Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-slate-900/80 p-4 border border-slate-800/80 group-hover:border-blue-500/30 transition-colors">
          {item.results.slice(0, 2).map((res, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-lg font-bold text-cyan-400 flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="h-3.5 w-3.5 text-blue-400" />
                {res.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">{res.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-md bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-slate-800/80 pt-4">
        <Link
          href={`/portfolio`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-cyan-300"
        >
          <span>View Full Case Study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
