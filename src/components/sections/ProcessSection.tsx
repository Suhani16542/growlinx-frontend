"use client";

import { Container } from "@/components/common/Container";
import { Process3DScene } from "@/components/3d/Process3DScene";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Search, Compass, Rocket, TrendingUp, ArrowRight, Sparkles, Activity } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "AUDIT & DISCOVERY",
      subtitle: "Uncover Conversion Leaks",
      description: "Deep crawl of technical website health, keyword gaps, ad economics, and competitor acquisition moats.",
      icon: Search,
    },
    {
      number: "02",
      title: "STRATEGY BLUEPRINT",
      subtitle: "Full-Funnel Roadmap",
      description: "Architecting high-ROAS campaign structures, intent keyword clusters, and targeted customer journey funnels.",
      icon: Compass,
    },
    {
      number: "03",
      title: "MULTICHANNEL EXECUTION",
      subtitle: "Launch & Drive Attention",
      description: "Deploying high-converting creative assets, technical SEO infrastructure, and precision audience targeting.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "SCALE & OPTIMIZE",
      subtitle: "Compounding Growth",
      description: "Continuous multivariate testing, bid optimization, cohort telemetry, and aggressive budget scaling on winners.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 cream-surface overflow-hidden border-b border-[#EADECE]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>OUR GROWTH METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1D] leading-tight">
              How We Scale <span className="text-[#FF5E3A]">Your Revenue</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#5A6578] font-medium leading-relaxed">
              A battle-tested 4-step performance marketing framework that transforms strategic intent into measurable, scalable market dominance.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive 3D Flow Pathway (Framed in Rounded Dark Container with Telemetry Badges) */}
        <ScrollReveal animation="zoom-in" duration={800} delay={100} className="relative mb-12">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#111827] via-[#0D1322] to-[#0A0F1D] border border-white/15 p-4 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* Top Telemetry Header Overlay */}
            <div className="w-full flex items-center justify-between pb-3 px-2 text-xs text-slate-300 font-bold border-b border-white/10">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#FF5E3A]" />
                <span className="text-[#FAF6F0]">4-Stage Revenue Funnel Execution Pipeline</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#FF5E3A] font-extrabold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-[#FF5E3A] animate-ping" />
                <span>Audit → Blueprint → Execution → Scale</span>
              </div>
            </div>

            {/* 3D Visual */}
            <div className="w-full">
              <Process3DScene />
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Process Step Cards with Side Scroll Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
            const delay = idx * 120;
            return (
              <ScrollReveal
                key={step.number}
                animation={anim}
                duration={750}
                delay={delay}
                className="h-full"
              >
                <div className="cream-card cream-card-interactive group rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Circular Icon + Step Number & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <span className="text-[11px] font-extrabold text-[#FF5E3A] tracking-wider block">
                          STEP {step.number}
                        </span>
                        <h4 className="text-xs font-black tracking-wider text-[#0A0F1D] uppercase">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-2">
                      {step.subtitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#EADECE] flex items-center justify-between text-[11px] font-bold text-[#5A6578]">
                    <span>Stage {step.number} Protocol</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A]" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
