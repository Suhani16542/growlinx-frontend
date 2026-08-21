"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Compass,
  BarChart3,
  Sparkles,
  FileCheck2,
  Headphones,
  TrendingUp,
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Strategy-First Approach",
      description: "We don't launch random tactics. Every campaign begins with in-depth competitive intelligence, unit economics analysis, and a structured growth roadmap.",
      icon: Compass,
      tag: "Methodology",
      color: "text-blue-400",
      glow: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    },
    {
      title: "Data-Driven Marketing",
      description: "Decisions are backed by rigorous real-time analytics, conversion signals, and predictive audience modeling—eliminating costly guesswork.",
      icon: BarChart3,
      tag: "Analytics",
      color: "text-cyan-400",
      glow: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
    },
    {
      title: "Creative That Converts",
      description: "Eye-catching aesthetics engineered for high click-through rates. We pair modern visual design with direct-response psychological triggers.",
      icon: Sparkles,
      tag: "Creative",
      color: "text-purple-400",
      glow: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]",
    },
    {
      title: "Transparent Reporting",
      description: "No hidden vanity metrics. Enjoy 24/7 access to live client dashboards tracking your real customer acquisition cost (CAC), ROAS, and pipeline value.",
      icon: FileCheck2,
      tag: "Clarity",
      color: "text-emerald-400",
      glow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Dedicated Support",
      description: "Work directly with senior growth strategists and media buyers who act as an integrated extension of your executive and marketing team.",
      icon: Headphones,
      tag: "Partnership",
      color: "text-amber-400",
      glow: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
    },
    {
      title: "Focus on Measurable Growth",
      description: "We are obsessed with bottom-line business metrics: qualified leads, verified customers, high-LTV retention, and maximum return on investment.",
      icon: TrendingUp,
      tag: "Bottom Line",
      color: "text-rose-400",
      glow: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="The GrowlinX Advantage"
            title="Why Businesses Choose GrowlinX"
            description="We combine enterprise-grade strategic discipline with nimble creative execution to help modern brands outpace competitors."
            align="center"
          />
        </ScrollReveal>

        {/* 6 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                duration={500}
                delay={index * 80}
              >
                <div
                  className={`glow-card glow-card-interactive group relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 h-full border border-slate-800 transition-all duration-300 ${item.glow}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span>Advantage 0{index + 1}</span>
                    <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Verified Standard →
                    </span>
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
