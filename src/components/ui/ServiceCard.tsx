import Link from "next/link";
import { ServiceItem } from "@/types";
import { IconWrapper } from "@/components/common/IconWrapper";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  theme?: "dark" | "light";
}

export function ServiceCard({ service, theme = "light" }: ServiceCardProps) {
  const isLight = theme === "light";

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 h-full transition-all duration-300 ${
        isLight
          ? "cream-card cream-card-interactive"
          : "navy-card navy-card-interactive"
      }`}
    >
      <div className="space-y-4">
        {/* Top bar with Icon & Tag */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] transition-all duration-300 group-hover:bg-[#FF5E3A] group-hover:text-white">
            <IconWrapper name={service.iconName} size={22} animated={false} />
          </div>
          {service.tag && (
            <span className="rounded-full bg-[#FAF6F0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#5A6578] border border-[#EADECE] group-hover:text-[#0A0F1D] transition-colors">
              {service.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-[#5A6578] font-normal line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Deliverables preview chips */}
        {service.deliverables && (
          <div className="pt-2 flex flex-wrap gap-1.5">
            {service.deliverables.slice(0, 3).map((d, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-[#FAF6F0] text-[#5A6578] border border-[#EADECE]"
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Explore Service CTA Link */}
      <div className="mt-8 pt-5 border-t border-[#EADECE] flex items-center justify-between text-xs font-bold text-[#5A6578] group-hover:text-[#0A0F1D] transition-colors">
        <span>{service.ctaText || "Explore Solution"}</span>
        <ArrowUpRight className="h-4 w-4 text-[#FF5E3A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
