"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Zap,
  DollarSign,
  Activity,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function MarketingAnalyticsSection() {
  const [activeTab, setActiveTab] = useState<"quarterly" | "monthly">("quarterly");

  const analyticsMetrics = [
    {
      id: "traffic",
      label: "Traffic Growth",
      value: "+180%",
      subtext: "Organic & Paid Inbound Visits",
      icon: Users,
      color: "text-cyan-400",
      progress: "85%",
      trend: "+28% vs previous period",
    },
    {
      id: "engagement",
      label: "Social Engagement",
      value: "+240%",
      subtext: "Reels, Video & Community Interactions",
      icon: Activity,
      color: "text-purple-400",
      progress: "92%",
      trend: "+45% follower velocity",
    },
    {
      id: "leads",
      label: "Qualified Leads",
      value: "3.4X",
      subtext: "High-Intent Inbound Inquiries",
      icon: Target,
      color: "text-blue-400",
      progress: "78%",
      trend: "48hr lead response rate",
    },
    {
      id: "conversion",
      label: "Conversion Rate",
      value: "4.8%",
      subtext: "Landing Page to Verified Customer",
      icon: Zap,
      color: "text-amber-400",
      progress: "88%",
      trend: "+1.9% absolute lift",
    },
    {
      id: "roi",
      label: "Blended ROI / ROAS",
      value: "3.8X",
      subtext: "Verified Return on Marketing Spend",
      icon: DollarSign,
      color: "text-emerald-400",
      progress: "95%",
      trend: "-42% Customer Acq. Cost",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Performance Intelligence"
            title="Marketing Performance Built on Verified Data"
            description="We track real bottom-line commercial metrics—transforming advertising investments into predictable, compounding revenue."
            align="center"
          />
        </ScrollReveal>

        {/* Dashboard Visual Container */}
        <div className="mt-14 glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative">
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  Client Growth Aggregate Dashboard
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                </h3>
                <p className="text-xs text-slate-400">Live multi-channel attribution telemetry</p>
              </div>
            </div>

            <div className="flex items-center rounded-xl bg-slate-900/90 p-1 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("quarterly")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeTab === "quarterly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Quarterly View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("monthly")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeTab === "monthly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly Scale
              </button>
            </div>
          </div>

          {/* 5 Core Metric Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {analyticsMetrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/90 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                      {m.label}
                    </span>
                    <Icon className={`h-4 w-4 ${m.color} group-hover:scale-110 transition-transform`} />
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {m.value}
                    </span>
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {m.subtext}
                  </p>

                  {/* Progress Bar Line */}
                  <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: m.progress }}
                    />
                  </div>

                  <div className="mt-2.5 text-[10px] font-medium text-cyan-400 flex items-center gap-1">
                    <span>{m.trend}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Graphical Growth Simulation Bar */}
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-[#060b18]/80 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Performance Progression
                </span>
                <h4 className="text-base font-bold text-white">
                  Average Client Acquisition Scale Over 12 Months
                </h4>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> SEO & Inbound
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /> Paid Advertising
                </span>
              </div>
            </div>

            {/* Simulated Dynamic Wave Chart Bars */}
            <div className="h-36 flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-800">
              {[
                { month: "Jan", h1: "30%", h2: "20%" },
                { month: "Feb", h1: "38%", h2: "28%" },
                { month: "Mar", h1: "45%", h2: "35%" },
                { month: "Apr", h1: "52%", h2: "42%" },
                { month: "May", h1: "60%", h2: "50%" },
                { month: "Jun", h1: "68%", h2: "58%" },
                { month: "Jul", h1: "74%", h2: "65%" },
                { month: "Aug", h1: "80%", h2: "72%" },
                { month: "Sep", h1: "86%", h2: "79%" },
                { month: "Oct", h1: "91%", h2: "85%" },
                { month: "Nov", h1: "95%", h2: "90%" },
                { month: "Dec", h1: "100%", h2: "96%" },
              ].map((bar, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-1.5">
                  <div className="w-full flex items-end justify-center gap-1 h-28">
                    <div
                      className="w-1/2 rounded-t bg-blue-600/70 hover:bg-blue-500 transition-all duration-300"
                      style={{ height: bar.h1 }}
                    />
                    <div
                      className="w-1/2 rounded-t bg-cyan-400/80 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                      style={{ height: bar.h2 }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">{bar.month}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Aggregated cross-platform attribution verified via Google Analytics 4 & Meta CAPI
              </span>
              <span className="text-cyan-300 font-semibold">Updated Real-Time</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
