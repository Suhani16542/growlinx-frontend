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
    <section id="industries" className="py-24 lg:py-32 relative overflow-hidden bg-[#050811]">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Vertical Playbooks"
            title="Industries We Scale"
            description="Deep domain growth frameworks tailored to specific buyer journeys, customer LTV, and unit economics."
            align="center"
          />
        </ScrollReveal>

        {/* Large Interactive Industry Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Typography Industry List */}
          <div className="lg:col-span-6 space-y-1">
            {industriesData.map((industry, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={industry.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white/[0.05] border border-white/10"
                      : "hover:bg-white/[0.02] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold transition-colors ${
                        isActive ? "text-cyan-400" : "text-slate-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl font-bold transition-colors ${
                        isActive ? "text-white glow-accent-gradient" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {industry.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Industry Focus Card */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-left" duration={500}>
              <div className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
                {/* Top Bar with Icon & Benchmark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 shadow-lg">
                    <IconWrapper name={activeIndustry.iconName} size={28} animated={false} />
                  </div>
                  {activeIndustry.highlight && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {activeIndustry.highlight}
                    </span>
                  )}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400/90 block mb-1">
                  Dedicated Growth Framework
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeIndustry.title}
                </h3>

                <p className="mt-4 text-base text-slate-300 leading-relaxed">
                  {activeIndustry.description}
                </p>

                {/* Vertical Highlights */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-medium">
                    Engineered for high-LTV customer acquisition
                  </span>
                  <Link
                    href="/free-strategy-call"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
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
