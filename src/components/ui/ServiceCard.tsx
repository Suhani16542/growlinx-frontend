import Link from "next/link";
import { ServiceItem } from "@/types";
import { IconWrapper } from "@/components/common/IconWrapper";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="glow-card glow-card-interactive group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 h-full">
      {/* Top subtle hover light line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-cyan-400/90" />

      <div>
        {/* Top bar with Icon & Tag */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 transition-all duration-300 group-hover:bg-blue-600/25 group-hover:text-cyan-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]">
            <IconWrapper name={service.iconName} size={24} animated={true} />
          </div>
          {service.tag && (
            <span className="rounded-full bg-slate-800/90 px-3 py-1 text-[11px] font-semibold text-blue-300 border border-slate-700/60">
              {service.tag}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {service.title}
        </h3>

        {service.tagline && (
          <span className="block text-xs font-semibold uppercase tracking-wider text-blue-400 mt-1">
            {service.tagline}
          </span>
        )}

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {service.shortDescription}
        </p>

        {/* Key Deliverables & Features List */}
        {(service.deliverables || service.features) && (
          <div className="mt-5 space-y-2 border-t border-slate-800/60 pt-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Key Focus Areas:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {(service.deliverables || service.features)?.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Explore Service CTA Link */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-400 transition-all duration-200 group-hover:gap-2.5 group-hover:text-cyan-300"
        >
          <span>{service.ctaText || "Explore Service"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {service.metrics?.[0] && (
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            {service.metrics[0].value}
          </span>
        )}
      </div>
    </div>
  );
}
