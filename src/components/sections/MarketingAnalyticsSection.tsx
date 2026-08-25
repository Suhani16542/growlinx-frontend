"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  BarChart3,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
} from "lucide-react";

export function MarketingAnalyticsSection() {
  const metricCards = [
    {
      title: "Average Organic Lift",
      value: "+210%",
      subtext: "Top 3 search engine placements",
      icon: TrendingUp,
      color: "text-cyan-400",
    },
    {
      title: "Blended Return on Ad Spend",
      value: "3.8X",
      subtext: "Across Meta, Google & TikTok ads",
      icon: Sparkles,
      color: "text-emerald-400",
    },
    {
      title: "Qualified Lead Volume",
      value: "+165%",
      subtext: "Verified inbound enterprise inquiries",
      icon: Target,
      color: "text-purple-400",
    },
    {
      title: "Customer Acquisition Cost",
      value: "-38%",
      subtext: "Lower cost per acquired client",
      icon: Zap,
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14] border-t border-slate-800/80">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Verified Performance"
            title="Real Numbers. Predictable Scale."
            description="Our aggregate performance benchmarks across client portfolios demonstrate real commercial ROI."
            align="center"
          />
        </ScrollReveal>

        {/* 4 Metric Callout Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((m, idx) => {
            const Icon = m.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                duration={400}
                delay={idx * 60}
              >
                <div className="glow-card rounded-2xl p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mx-auto mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600 block">
                      {m.value}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {m.subtext}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Live Client Dashboard Mockup Banner */}
        <ScrollReveal animation="fade-up" duration={500} delay={200}>
          <div className="mt-10 glow-card rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4" /> Live Client Transparency
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Real-Time Marketing Telemetry
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every Growlinx partner gets direct 24/7 access to live reporting dashboards tracking spend, lead quality, conversion value, and multi-touch channel attribution.
                </p>
              </div>

              {/* Visual Performance Bars */}
              <div className="lg:col-span-6 space-y-3.5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Search Engine Dominance (SEO)</span>
                    <span className="text-blue-600 font-bold">92% Keyword Coverage</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Paid Ad Efficiency (ROAS)</span>
                    <span className="text-emerald-600 font-bold">3.8X Average Return</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <span>Social Media Engagement</span>
                    <span className="text-purple-600 font-bold">+240% Growth</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-[78%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
