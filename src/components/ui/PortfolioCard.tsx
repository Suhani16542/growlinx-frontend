import Image from "next/image";
import { PortfolioItem } from "@/types";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
  theme?: "dark" | "light";
  featured?: boolean;
}

const portfolioImageMap: Record<string, string> = {
  "fintech-scale": "/images/service-paid-ads.jpg",
  "saas-seo-dominance": "/images/case-study-seo.jpg",
  "mobile-app-growth": "/images/case-study-ecommerce.jpg",
  "luxe-ecommerce-social": "/images/service-social-media.jpg",
  "youtube-channel-scale": "/images/case-study-saas.jpg",
  "luxury-realty-branding": "/images/marketing-strategy-growth.jpg",
};

export function PortfolioCard({
  item,
  theme = "light",
  featured = false,
}: PortfolioCardProps) {
  const isLight = theme === "light";
  const imageSrc =
    portfolioImageMap[item.id] || "/images/marketing-strategy-growth.jpg";

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-6 h-full transition-all duration-300 ${
        isLight
          ? "cream-card cream-card-interactive"
          : "navy-card navy-card-interactive"
      }`}
    >
      <div className="space-y-4">
        {/* Large Rounded Image Container with Smooth Hover Zoom */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#EADECE] bg-[#FAF6F0]">
          <Image
            src={imageSrc}
            alt={item.title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Floating Category Pill */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF5E3A] border border-[#EADECE] shadow-sm">
              {item.category}
            </span>
          </div>

          {/* Top Result Chip on Image */}
          {item.results?.[0] && (
            <div className="absolute bottom-3.5 right-3.5 z-10 bg-[#0A0F1D]/90 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/10 text-right shadow-md">
              <span className="text-xs font-black text-[#FF5E3A] block leading-none">
                {item.results[0].value}
              </span>
              <span className="text-[9px] font-bold text-slate-300 uppercase mt-0.5 block">
                {item.results[0].label}
              </span>
            </div>
          )}
        </div>

        {/* Client & Header */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold text-[#5A6578] uppercase tracking-wider block">
            {item.client}
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors duration-200 leading-snug">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-[#5A6578] font-normal line-clamp-2 pt-0.5">
            {item.summary}
          </p>
        </div>

        {/* Results Strip */}
        {item.results && item.results.length > 1 && (
          <div className="grid grid-cols-2 gap-2.5 rounded-2xl bg-[#FAF6F0] p-3.5 border border-[#EADECE]">
            {item.results.slice(0, 2).map((res, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm sm:text-base font-black text-[#0A0F1D] flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5 text-[#FF5E3A]" />
                  {res.value}
                </span>
                <span className="text-[10px] font-medium text-[#5A6578] mt-0.5 line-clamp-1">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA button */}
      <div className="mt-5 border-t border-[#EADECE] pt-3.5 flex items-center justify-between text-xs font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors">
        <span>View Full Case Study</span>
        <div className="h-7 w-7 rounded-full bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-200">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
