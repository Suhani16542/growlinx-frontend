"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  TrendingUp,
  Layers,
  Zap,
  Award,
  Sparkles,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Lock,
  Target,
} from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Revenue Attribution Engine",
      tag: "MULTI-TOUCH CAPI",
      description:
        "We tie every marketing dollar directly to qualified pipeline, customer acquisition, and bottom-line commercial revenue with server-side tracking.",
      icon: TrendingUp,
      highlight: "Direct ROI tracking",
    },
    {
      title: "Multichannel Synergy",
      tag: "OMNICHANNEL",
      description:
        "Seamless synchronization across SEO, Google Ads, Meta, and social media to capture and convert high-intent buyers across the entire customer journey.",
      icon: Layers,
      highlight: "Unified audience targeting",
    },
    {
      title: "Agile Testing Velocity",
      tag: "RAPID ITERATION",
      description:
        "Rapid multivariate creative iterations, hook variations, and landing page split tests that continuously lower blended CAC and raise conversion rates.",
      icon: Zap,
      highlight: "Weekly sprint cycles",
    },
    {
      title: "Senior Growth Architects",
      tag: "DEDICATED TEAM",
      description:
        "Direct partnership with seasoned digital marketing strategists and channel specialists rather than junior account manager handoffs.",
      icon: Award,
      highlight: "Zero account delegation",
    },
    {
      title: "First-Party Data Infrastructure",
      tag: "FUTURE-PROOF",
      description:
        "Custom server-side conversion APIs and data pipelines that keep your tracking 100% accurate despite iOS privacy changes and third-party cookie loss.",
      icon: ShieldCheck,
      highlight: "Cookieless attribution",
    },
    {
      title: "Transparent Live Telemetry",
      tag: "24/7 DASHBOARDS",
      description:
        "Real-time client telemetry dashboards with live blended ROAS, CAC payback velocity, and actionable commercial growth insights updated continuously.",
      icon: BarChart3,
      highlight: "Live GA4 & CAPI sync",
    },
  ];

  const metrics = [
    { value: "4.8X", label: "Average Blended ROAS", subtext: "Across active client accounts" },
    { value: "+340%", label: "Pipeline Velocity", subtext: "Average inbound growth rate" },
    { value: "92%", label: "Client Retention Rate", subtext: "Multi-year growth partnerships" },
    { value: "100%", label: "Attribution Transparency", subtext: "Server-side verified data" },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A45]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* Centered Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE GROWLINX ADVANTAGE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] leading-[1.08]">
              Why Leading Brands <br />
              <span className="text-[#FF5E3A]">Scale Faster With Us</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We replace marketing guesswork with battle-tested performance frameworks that combine deep data telemetry, high-converting creative, and compounding organic velocity.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Core Growth Pillars Grid (Dark Navy Containers with Side Slide In) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
            const delay = (idx % 3) * 120;
            return (
              <ScrollReveal
                key={pillar.title}
                animation={anim}
                duration={750}
                delay={delay}
                className="h-full"
              >
                <div className="rounded-3xl p-7 sm:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col justify-between hover:border-[#FF5E3A]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg h-full">
                  <div className="space-y-4">
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-slate-400 group-hover:text-[#FF5E3A] transition-colors">
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold text-[#FAF6F0] group-hover:text-[#FF5E3A] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Feature Row */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Verified Metric Strip */}
        <ScrollReveal animation="fade-up" duration={800} delay={150}>
          <div className="rounded-[2.5rem] p-8 sm:p-10 border border-white/15 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {metrics.map((m, idx) => (
                <div key={idx} className={`pt-6 lg:pt-0 ${idx !== 0 ? "lg:pl-8" : ""}`}>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF5E3A] tracking-tight font-mono">
                    {m.value}
                  </p>
                  <h4 className="text-sm sm:text-base font-bold text-[#FAF6F0] mt-2">
                    {m.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 font-normal">
                    {m.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
