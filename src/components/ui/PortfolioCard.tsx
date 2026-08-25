import Link from "next/link";
import { PortfolioItem } from "@/types";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="glow-card glow-card-interactive group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 h-full">
      {/* Accent hover line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500/80" />

      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {item.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">{item.client}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
          {item.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {item.summary}
        </p>

        {/* Highlighted Results Grid */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200 group-hover:border-blue-200 transition-colors">
          {item.results.slice(0, 2).map((res, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-base font-bold text-blue-600 flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                {res.value}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">{res.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <Link
          href={`/portfolio`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
