"use client";

import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      num: "01",
      title: "Data-Driven Strategy",
      tag: "Precision Modeling",
      description: "Campaign architectures engineered on search intent mapping, competitor vulnerability analysis, and unit economics—eliminating wasted ad spend.",
    },
    {
      num: "02",
      title: "Performance Marketing",
      tag: "High-Margin ROI",
      description: "Relentless focus on bottom-line business outcomes: qualified inbound pipeline, low blended CAC, and predictable compounding ROAS.",
    },
    {
      num: "03",
      title: "Transparent Real-Time Reporting",
      tag: "Live Telemetry",
      description: "Live 24/7 client telemetry dashboards delivering transparent attribution across every single dollar, click, and conversion touchpoint.",
    },
    {
      num: "04",
      title: "Dedicated Senior Growth Team",
      tag: "Elite Partnership",
      description: "Work directly with senior strategists, copywriters, and performance media buyers embedded as an agile extension of your commercial unit.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#050811]">
      <Container className="relative z-10">
        {/* Large Statement Header */}
        <ScrollReveal animation="fade-up" duration={500}>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>The Growlinx Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Strategy that connects every layer of your <span className="glow-accent-gradient">commercial growth.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              We eliminate agency fragmentation by integrating data intelligence, high-converting creative assets, and performance media execution into one unified growth engine.
            </p>
          </div>
        </ScrollReveal>

        {/* Numbered Horizontal Benefit Rows with Hairline Dividers */}
        <div className="mt-16 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={benefit.num}
              animation="fade-up"
              duration={400}
              delay={index * 80}
            >
              <div className="py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 hover:bg-white/[0.02] group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                  {/* Mono Step Number */}
                  <div className="lg:col-span-2 flex items-center gap-3">
                    <span className="text-2xl sm:text-4xl font-mono font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {benefit.num}
                    </span>
                    <span className="lg:hidden text-xs font-bold uppercase tracking-wider text-cyan-400/90">
                      {benefit.tag}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="lg:col-span-4">
                    <span className="hidden lg:block text-xs font-bold uppercase tracking-wider text-cyan-400/90 mb-1">
                      {benefit.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6">
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
