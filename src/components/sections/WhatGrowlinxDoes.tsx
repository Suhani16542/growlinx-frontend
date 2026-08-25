"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function WhatGrowlinxDoes() {
  const [activeService, setActiveService] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      title: "Search Engine Dominance (SEO)",
      category: "Organic Visibility",
      desc: "Technical SEO, high-intent keyword mapping, and authority link-building engineered for sustainable organic pipeline.",
      link: "/services/seo",
    },
    {
      num: "02",
      title: "Performance Paid Media",
      category: "Customer Acquisition",
      desc: "Precision Google, Meta & LinkedIn campaigns scaling spend with aggressive ROAS attribution and low blended CAC.",
      link: "/services/paid-advertising",
    },
    {
      num: "03",
      title: "Conversion Architecture (CRO)",
      category: "Funnel Acceleration",
      desc: "Frictionless landing experiences and behavioral A/B testing designed to maximize inbound conversion rates.",
      link: "/services/web-development",
    },
    {
      num: "04",
      title: "Social & Creative Media",
      category: "Brand Authority",
      desc: "Direct-response video assets, influencer management, and social narratives that turn attention into buyers.",
      link: "/services/social-media",
    },
    {
      num: "05",
      title: "Revenue & Multi-Touch Attribution",
      category: "Telemetry Analytics",
      desc: "24/7 client telemetry dashboards delivering transparent attribution across every single dollar spent.",
      link: "/services/app-marketing",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#050811]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Bold Editorial Statement */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <ScrollReveal animation="fade-up" duration={500}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>About Growlinx Methodology</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
                Digital Marketing Built for <br />
                <span className="glow-accent-gradient">Real Commercial Scale</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Most agencies obsess over vanity impressions. At Growlinx, we engineer full-funnel acquisition infrastructure designed specifically for qualified revenue and predictable unit economics.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                From organic search dominance to multi-channel paid scale, our growth strategists operate as an elite extension of your commercial team.
              </p>

              <div className="pt-4">
                <Button
                  href="/about-us"
                  variant="secondary"
                  size="lg"
                  className="border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20 gap-2"
                >
                  <span>Discover Our Agency Model</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Numbered Editorial Rows */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" duration={600}>
              <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
                {pillars.map((pillar, index) => {
                  const isHovered = activeService === index;
                  return (
                    <div
                      key={pillar.num}
                      onMouseEnter={() => setActiveService(index)}
                      className={`py-8 px-4 sm:px-6 transition-all duration-300 group cursor-pointer ${
                        isHovered ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-5 sm:gap-7">
                          {/* Large Mono Step Number */}
                          <span
                            className={`text-2xl sm:text-3xl font-mono font-black transition-colors ${
                              isHovered ? "text-cyan-400" : "text-slate-600"
                            }`}
                          >
                            {pillar.num}
                          </span>

                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400/90 block mb-1">
                              {pillar.category}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {pillar.title}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
                              {pillar.desc}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={pillar.link}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all shrink-0 mt-1"
                        >
                          <ArrowUpRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
