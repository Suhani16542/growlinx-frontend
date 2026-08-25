import Link from "next/link";
import { ServiceItem } from "@/types";
import { IconWrapper } from "@/components/common/IconWrapper";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="glass-panel glass-panel-interactive group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 h-full">
      {/* Top subtle hover cyan glow line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/80" />

      <div>
        {/* Top bar with Icon & Tag */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20">
            <IconWrapper name={service.iconName} size={22} animated={false} />
          </div>
          {service.tag && (
            <span className="rounded-full bg-white/[0.05] px-3 py-1 text-[11px] font-bold text-cyan-300 border border-white/10">
              {service.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Explore Service CTA Link */}
      <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-400 transition-all duration-200 group-hover:gap-2 group-hover:text-cyan-300"
        >
          <span>{service.ctaText || "Explore Solution"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {service.metrics?.[0] && (
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            {service.metrics[0].value}
          </span>
        )}
      </div>
    </div>
  );
}
