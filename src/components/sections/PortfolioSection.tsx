"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  const featuredCases = [
    {
      id: "case-1",
      client: "NexaFlow Systems",
      category: "B2B SaaS & Enterprise",
      headline: "Scaling Inbound Sales Pipeline by +310% in 9 Months",
      summary: "Restructured omnichannel acquisition with high-intent search capture, LinkedIn thought leadership ads, and conversion landing page infrastructure.",
      metricValue: "+310%",
      metricLabel: "Qualified Demo Volume",
      secondaryMetric: "4.2X ROAS",
      tags: ["Technical SEO", "Paid Search", "Conversion CRO"],
    },
    {
      id: "case-2",
      client: "Aura Living Direct",
      category: "E-Commerce & Retail",
      headline: "Generating $1.4M Inbound Revenue with -38% Lower CAC",
      summary: "Engineered high-velocity direct-response creative testing across Meta and TikTok, coupled with automated post-click personalized landing funnels.",
      metricValue: "$1.4M+",
      metricLabel: "New Net Revenue",
      secondaryMetric: "-38% Blended CAC",
      tags: ["Performance Creative", "Paid Social", "Funnel Optimization"],
    },
    {
      id: "case-3",
      client: "Apex Capital Partners",
      category: "FinTech & Wealth",
      headline: "Capturing #1 Search Dominance for High-Value Commercial Intent",
      summary: "Comprehensive technical architecture overhaul and authority digital PR strategy, taking organic impressions from 25k to over 380k monthly.",
      metricValue: "#1 Rank",
      metricLabel: "Competitive Keywords",
      secondaryMetric: "380K+ Impressions",
      tags: ["Digital PR", "Enterprise SEO", "Authority Content"],
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#060a15] border-t border-white/[0.06]">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Proven Case Studies"
            title="Work That Generates Real Commercial Scale"
            description="Explore how our strategic execution has propelled ambitious brands to dominant market positions."
            align="center"
          />
        </ScrollReveal>

        {/* Alternating Editorial Showcase Rows */}
        <div className="mt-20 space-y-16 lg:space-y-24">
          {featuredCases.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal
                key={study.id}
                animation="fade-up"
                duration={500}
                delay={index * 100}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-7 lg:order-1" : "lg:col-span-7 lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        0{index + 1}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {study.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-600" />
                      <span className="text-xs text-slate-400 font-medium">
                        {study.client}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                      {study.headline}
                    </h3>

                    <p className="text-base text-slate-300 leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Button
                        href="/portfolio"
                        variant="secondary"
                        size="md"
                        className="border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20 gap-2 font-bold"
                      >
                        <span>View Full Breakdown</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Visual / Results Metric Box */}
                  <div
                    className={`${
                      isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5 lg:order-1"
                    }`}
                  >
                    <div
                      className={`rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300 ${
                        index === 0
                          ? "bg-white border border-white text-slate-900"
                          : "glass-panel border border-white/10"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-between border-b pb-4 mb-6 ${
                          index === 0 ? "border-slate-100" : "border-white/[0.08]"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono font-bold uppercase ${
                            index === 0 ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          Verified Growth Impact
                        </span>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                      </div>

                      {/* Giant Highlight Number */}
                      <div
                        className={`text-4xl sm:text-5xl lg:text-6xl font-black ${
                          index === 0 ? "text-slate-900" : "text-white glow-accent-gradient"
                        }`}
                      >
                        {study.metricValue}
                      </div>
                      <span
                        className={`text-sm font-bold mt-2 block ${
                          index === 0 ? "text-slate-600" : "text-slate-300"
                        }`}
                      >
                        {study.metricLabel}
                      </span>

                      {/* Secondary Metric */}
                      <div
                        className={`mt-8 pt-5 border-t flex items-center justify-between text-xs sm:text-sm ${
                          index === 0
                            ? "border-slate-100 text-slate-500"
                            : "border-white/[0.08] text-slate-400"
                        }`}
                      >
                        <span>Attributed Efficiency</span>
                        <span
                          className={`font-bold px-3 py-1 rounded-full border ${
                            index === 0
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          }`}
                        >
                          {study.secondaryMetric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <ScrollReveal animation="fade-up" duration={500} delay={200}>
            <Button
              href="/portfolio"
              variant="secondary"
              size="lg"
              className="border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20 gap-2 font-bold px-8"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
