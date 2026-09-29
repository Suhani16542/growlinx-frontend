"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { industriesData } from "@/data/industries";
import { IconWrapper } from "@/components/common/IconWrapper";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industriesData[activeIndex] || industriesData[0];

  return (
    <section id="industries" className="py-20 lg:py-28 relative overflow-hidden bg-white border-b border-[#E2E8F0]">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Vertical Playbooks"
            title="Specialized Industry Frameworks"
            description="Deep domain growth architectures tailored to specific buyer journeys, customer lifetime value, and unit economics."
            align="center"
            theme="light"
          />
        </ScrollReveal>

        {/* Large Interactive Industry Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Typography Industry List */}
          <div className="lg:col-span-6 space-y-2">
            {industriesData.map((industry, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={industry.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 sm:py-5 px-6 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm"
                      : "hover:bg-[#F8FAFC]/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-[#2563EB]" : "text-[#64748B]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl font-bold transition-colors ${
                        isActive ? "text-[#111827]" : "text-[#64748B] group-hover:text-[#111827]"
                      }`}
                    >
                      {industry.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? "text-[#2563EB] translate-x-1" : "text-slate-400 group-hover:text-[#111827]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Industry Focus Card */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-left" duration={500}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-[#E2E8F0] shadow-xl shadow-slate-200/50">
                {/* Top Bar with Icon & Benchmark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-[#2563EB] shadow-sm">
                    <IconWrapper name={activeIndustry.iconName} size={28} animated={false} />
                  </div>
                  {activeIndustry.highlight && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {activeIndustry.highlight}
                    </span>
                  )}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
                  Dedicated Growth Framework
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-[#111827]">
                  {activeIndustry.title}
                </h3>

                <p className="mt-4 text-base text-[#64748B] leading-relaxed">
                  {activeIndustry.description}
                </p>

                {/* Vertical Highlights */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#64748B] font-medium">
                    Engineered for high-LTV customer acquisition
                  </span>
                  <Link
                    href="/free-strategy-call"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>View {activeIndustry.title} Blueprint</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
