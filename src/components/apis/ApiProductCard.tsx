"use client";

import React from "react";
import { ApiProductItem } from "@/data/apisProducts";
import {
  Smartphone,
  CreditCard,
  Landmark,
  ReceiptText,
  FolderLock,
  Zap,
  Award,
  Truck,
  Briefcase,
  MapPin,
  Vote,
  FileCheck2,
  Building2,
  ShieldAlert,
  Sparkles,
  FileSpreadsheet,
  Users,
  AlertCircle,
  MailCheck,
  UtensilsCrossed,
  ArrowLeftRight,
  Fingerprint,
  ChevronRight,
  ShieldCheck,
  Code2,
  Lock,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  CreditCard,
  Landmark,
  ReceiptText,
  FolderLock,
  Zap,
  Award,
  Truck,
  Briefcase,
  MapPin,
  Vote,
  FileCheck2,
  Building2,
  ShieldAlert,
  Sparkles,
  FileSpreadsheet,
  Users,
  AlertCircle,
  MailCheck,
  UtensilsCrossed,
  ArrowLeftRight,
  Fingerprint,
  ShieldCheck,
  Code2,
  Lock,
};

interface ApiProductCardProps {
  item: ApiProductItem;
  theme?: "light" | "dark";
}

export function ApiProductCard({ item, theme = "light" }: ApiProductCardProps) {
  const IconComponent = iconMap[item.iconName] || Sparkles;

  if (theme === "dark") {
    return (
      <div className="group relative rounded-2xl bg-[#111827]/90 border border-white/10 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#FF5E3A]/60 hover:bg-[#162035] hover:shadow-xl hover:shadow-[#FF5E3A]/10 hover:-translate-y-1">
        <div>
          {/* Header row with icon & tag */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="h-11 w-11 rounded-xl bg-white/[0.06] border border-white/10 text-[#FF5E3A] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
              <IconComponent className="h-5 w-5" />
            </div>
            {item.tag && (
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#94A3B8] border border-white/10 group-hover:border-[#FF5E3A]/30 transition-colors">
                {item.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-[#FAF6F0] mb-2 leading-snug group-hover:text-[#FF5E3A] transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
            {item.description}
          </p>
        </div>

        {/* Footer info / link indication */}
        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#94A3B8] font-semibold">
          <span className="text-[11px] uppercase tracking-wider text-[#FF5E3A] font-bold">
            {item.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-[#94A3B8] group-hover:text-[#FF5E3A] group-hover:translate-x-0.5 transition-all">
            REST API <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    );
  }

  // Light / Cream theme (Growlinx standard)
  return (
    <div className="group relative rounded-2xl bg-white border border-[#EADECE] p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-[#FF5E3A] hover:shadow-xl hover:shadow-[#FF5E3A]/10 hover:-translate-y-1">
      <div>
        {/* Header row with icon & tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="h-11 w-11 rounded-xl bg-[#FFF0EB] border border-[#FF5E3A]/20 text-[#FF5E3A] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="h-5 w-5" />
          </div>
          {item.tag && (
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#5A6578] border border-[#EADECE] group-hover:border-[#FF5E3A]/40 group-hover:text-[#0A0F1D] transition-colors">
              {item.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#0A0F1D] mb-2 leading-snug group-hover:text-[#FF5E3A] transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Footer metadata */}
      <div className="pt-4 mt-4 border-t border-[#EADECE]/60 flex items-center justify-between text-xs text-[#5A6578] font-semibold">
        <span className="text-[11px] uppercase tracking-wider text-[#FF5E3A] font-bold">
          {item.category}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-[#5A6578] group-hover:text-[#FF5E3A] group-hover:translate-x-0.5 transition-all">
          REST API <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
