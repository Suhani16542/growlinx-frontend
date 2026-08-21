"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Compass,
  LineChart,
  Target,
  Rocket,
  Sliders,
  TrendingUp,
} from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Auditing & Foundations",
      description: "Deep audit of your current digital footprint, market positioning, historical performance data, and competitor gaps.",
      icon: Compass,
      color: "text-blue-400",
      accentBg: "bg-blue-500/10",
    },
    {
      number: "02",
      title: "Analyze",
      subtitle: "Data & Intelligence",
      description: "Analyzing high-converting buyer personas, intent keywords, creative fatigue patterns, and unit economics.",
      icon: LineChart,
      color: "text-cyan-400",
      accentBg: "bg-cyan-500/10",
    },
    {
      number: "03",
      title: "Strategize",
      subtitle: "Custom Growth Blueprint",
      description: "Building an integrated multi-channel roadmap with precise budget allocation, channel priorities, and conversion goals.",
      icon: Target,
      color: "text-purple-400",
      accentBg: "bg-purple-500/10",
    },
    {
      number: "04",
      title: "Execute",
      subtitle: "High-Velocity Launch",
      description: "Deploying high-converting ad creative, technical SEO enhancements, content schedules, and tracking infrastructure.",
      icon: Rocket,
      color: "text-rose-400",
      accentBg: "bg-rose-500/10",
    },
    {
      number: "05",
      title: "Optimize",
      subtitle: "Iterative Refinement",
      description: "Relentless A/B testing across landing pages, ad angles, keyword bids, and retention flows to lower blended CAC.",
      icon: Sliders,
      color: "text-amber-400",
      accentBg: "bg-amber-500/10",
    },
    {
      number: "06",
      title: "Scale",
      subtitle: "Compounding Domination",
      description: "Multiplying spend on winning funnels, expanding into new verticals, and cementing dominant market leadership.",
      icon: TrendingUp,
      color: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#060913]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="The 6-Phase Engine"
            title="How We Grow Your Business"
            description="Our proven six-step framework turns marketing from an unpredictable expense into a systematic, compounding growth asset."
            align="center"
          />
        </ScrollReveal>

        {/* 6 Steps Grid with Connected Step Indicators */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                duration={500}
                delay={index * 80}
              >
                <div className="glow-card glow-card-interactive group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 h-full border border-slate-800 transition-all duration-300 hover:border-blue-500/40">
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold text-slate-700 group-hover:text-blue-500/40 transition-colors font-mono">
                        {step.number}
                      </span>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.accentBg} border border-slate-800 ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      {step.subtitle}
                    </span>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span>Phase {step.number} of 06</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
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
