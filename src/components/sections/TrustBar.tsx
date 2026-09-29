"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { MarketingDashboard3D } from "@/components/3d/MarketingDashboard3D";
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";

export function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "92%",
      label: "Client Revenue Scale",
      sublabel: "Long-term client retention rate",
      icon: TrendingUp,
      badge: "Retention",
      progress: "92%",
      slideFrom: "-translate-x-8",
    },
    {
      value: "3.4x",
      label: "Inbound Lead Velocity",
      sublabel: "Average qualified pipeline acceleration",
      icon: BarChart3,
      badge: "Pipeline",
      progress: "85%",
      slideFrom: "translate-y-8",
    },
    {
      value: "$45M+",
      label: "Managed Ad Capital",
      sublabel: "High-ROAS multichannel spend",
      icon: DollarSign,
      badge: "ROAS Engine",
      progress: "95%",
      slideFrom: "translate-y-8",
    },
    {
      value: "850+",
      label: "Page 1 Search Ranks",
      sublabel: "High-intent commercial keywords",
      icon: Award,
      badge: "Organic SEO",
      progress: "88%",
      slideFrom: "translate-x-8",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="telemetry-section"
      className="relative py-20 sm:py-28 lg:py-32 cream-surface overflow-hidden border-b border-[#EADECE]"
    >
      {/* Subtle Warm Ambient Background Radiance */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#FFEBE5]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* Top Editorial 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          
          {/* LEFT: Slides in smoothly from Left */}
          <div
            className={`lg:col-span-6 space-y-6 text-center lg:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Small Orange Label */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>REAL-TIME ATTRIBUTION & REVENUE TELEMETRY</span>
            </div>

            {/* Large Heading Related to Existing Content */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black tracking-tight text-[#0A0F1D] leading-[1.12]">
              Real-Time Revenue{" "}
              <span className="text-[#FF5E3A] block sm:inline">
                Attribution Engines.
              </span>
            </h2>

            {/* Short Digital Marketing Description */}
            <p className="text-base sm:text-lg text-[#5A6578] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We eliminate attribution blind spots with multi-touch server-side tracking, verified conversion telemetry, and compounding ROI across every acquisition channel.
            </p>

            {/* Feature Proof Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-bold text-[#0A0F1D]">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#EADECE] shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                <span>Multi-Touch Attribution</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#EADECE] shadow-xs">
                <Zap className="h-4 w-4 text-[#FF5E3A]" />
                <span>Server-Side CAPI</span>
              </div>
            </div>

            {/* CTA & Live Status Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/services"
                className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/25"
              >
                <span>Explore Attribution Engine</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-[#EADECE] text-xs font-bold text-[#5A6578]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E3A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5E3A]" />
                </span>
                <span>Live Attribution Synchronized</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Slides in smoothly from Right */}
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Premium Dark Navy Rounded Container framing the 3D visual */}
              <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0F172A] via-[#0A0F1D] to-[#060913] border border-[#1E293B] shadow-2xl overflow-hidden p-3 sm:p-4">
                
                {/* Top Subtle Status Bar Overlay */}
                <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-bold text-slate-300">
                    <Activity className="h-3 w-3 text-[#FF5E3A]" />
                    <span>Conversion Telemetry Engine</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FF5E3A]/20 border border-[#FF5E3A]/40 text-[#FF5E3A]">
                    Live 3D Flow
                  </span>
                </div>

                {/* 3D Marketing Attribution Scene */}
                <div className="relative w-full pt-4">
                  <MarketingDashboard3D />
                </div>

                {/* Bottom Floating Telemetry Chips */}
                <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] font-semibold text-slate-300">
                    <span className="text-slate-400">Blended ROAS:</span>{" "}
                    <strong className="text-[#FAF6F0] font-black">4.8X</strong>
                  </div>
                  <div className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[11px] font-semibold text-slate-300">
                    <span className="text-slate-400">Pipeline Velocity:</span>{" "}
                    <strong className="text-[#FF5E3A] font-black">+340%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BELOW: Row/Grid of 4 Service & Feature Cards with Clean Spacing & Hover Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                style={{ transitionDelay: `${index * 90 + 250}ms` }}
                className={`cream-card cream-card-interactive group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  inView
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${item.slideFrom}`
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578] group-hover:border-[#FF5E3A]/40 group-hover:text-[#0A0F1D] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Stat Value & Title */}
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-[#0A0F1D] tracking-tight leading-none group-hover:text-[#FF5E3A] transition-colors">
                      {item.value}
                    </p>
                    <h3 className="text-sm font-extrabold text-[#0A0F1D] mt-2.5">
                      {item.label}
                    </h3>
                    <p className="text-xs text-[#5A6578] leading-relaxed mt-1 font-medium">
                      {item.sublabel}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Micro-Telemetry Progress Indicator */}
                <div className="pt-5 mt-5 border-t border-[#EADECE]/80">
                  <div className="flex items-center justify-between text-[10px] font-bold text-[#5A6578] mb-1.5">
                    <span>Performance Target</span>
                    <span className="text-[#FF5E3A] font-extrabold">{item.progress}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF6F0] rounded-full overflow-hidden border border-[#EADECE]">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF7A45] to-[#FF5E3A] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: inView ? item.progress : "0%" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
