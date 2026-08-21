"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Eye,
  TrendingUp,
  Sparkles,
  Target,
  ArrowRight,
  DollarSign,
  CheckCircle2,
  BarChart2,
  Zap,
} from "lucide-react";

export function WhatGrowlinxDoes() {
  const growthPillars = [
    {
      title: "Visibility",
      description: "Capture dominant market attention across search engines, social feeds, and video platforms.",
      icon: Eye,
      color: "text-blue-400",
      borderGlow: "group-hover:border-blue-500/50",
    },
    {
      title: "Traffic",
      description: "Attract high-intent prospective buyers through sustainable SEO and precision advertising.",
      icon: TrendingUp,
      color: "text-cyan-400",
      borderGlow: "group-hover:border-cyan-500/50",
    },
    {
      title: "Engagement",
      description: "Create compelling creative formats, reels, and stories that nurture consumer connection.",
      icon: Sparkles,
      color: "text-purple-400",
      borderGlow: "group-hover:border-purple-500/50",
    },
    {
      title: "Leads",
      description: "Filter and capture qualified inbound sales inquiries and verified customer leads.",
      icon: Target,
      color: "text-rose-400",
      borderGlow: "group-hover:border-rose-500/50",
    },
    {
      title: "Conversions",
      description: "Optimize funnels and landing experiences to turn passive visitors into paying clients.",
      icon: Zap,
      color: "text-amber-400",
      borderGlow: "group-hover:border-amber-500/50",
    },
    {
      title: "Revenue",
      description: "Scale business profit predictably with compounding organic rank and high-ROAS paid media.",
      icon: DollarSign,
      color: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading & 6 Growth Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="fade-up" duration={600}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                About GrowlinX
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Digital Marketing Built for <br />
                <span className="glow-accent-gradient">Real Business Growth</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                GrowlinX is a full-service digital marketing partner engineered to help ambitious brands transform attention into sustainable revenue. We align creative storytelling with rigorous data analytics to scale your commercial pipeline.
              </p>
            </ScrollReveal>

            {/* 6 Growth Pillars Grid */}
            <ScrollReveal animation="fade-up" duration={600} delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {growthPillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5 transition-all duration-300 hover:bg-slate-900/90 ${pillar.borderGlow}`}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 ${pillar.color} shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-normal mt-0.5">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={600} delay={250}>
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Learn More About Our Methodology</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Architecture Card */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left" duration={700}>
              <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      The GrowlinX Growth Engine
                    </h3>
                    <p className="text-xs text-slate-400">Full-funnel commercial acceleration</p>
                  </div>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold text-blue-400 border border-blue-500/20">
                    Systemized ROI
                  </span>
                </div>

                {/* Growth Stage Visual Pipeline */}
                <div className="space-y-3">
                  <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                      <span className="text-xs font-bold text-slate-200">1. Top-Funnel Attraction</span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-400">SEO + Paid Ads</span>
                  </div>

                  <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-purple-400" />
                      <span className="text-xs font-bold text-slate-200">2. Mid-Funnel Nurturing</span>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-400">Social + Video Content</span>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-slate-200">3. Bottom-Funnel Conversion</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400">CRO + High-Intent Leads</span>
                  </div>
                </div>

                {/* Highlights Strip */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-lg bg-slate-900/80 p-2.5 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Blended CAC</span>
                    <span className="text-base font-extrabold text-cyan-400">-35% to -42%</span>
                  </div>
                  <div className="rounded-lg bg-slate-900/80 p-2.5 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-medium">Pipeline Growth</span>
                    <span className="text-base font-extrabold text-emerald-400">3.2X - 5X</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
