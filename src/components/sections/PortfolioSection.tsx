"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { portfolioData } from "@/data/portfolio";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function PortfolioSection() {
  const caseStudies = [
    {
      ...portfolioData[0],
      image: "/images/case-study-saas.jpg",
      highlightMetric: "3.2X",
      highlightLabel: "ROAS Increase",
    },
    {
      ...portfolioData[1],
      image: "/images/case-study-seo.jpg",
      highlightMetric: "+180%",
      highlightLabel: "Organic Traffic",
    },
    {
      ...portfolioData[2],
      image: "/images/case-study-ecommerce.jpg",
      highlightMetric: "500K+",
      highlightLabel: "App Installs",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <ScrollReveal animation="fade-left" duration={750} className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>PROVEN RESULTS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] leading-tight">
              Real Digital Growth. <br />
              <span className="text-[#FF5E3A]">Measurable Revenue Impact.</span>
            </h2>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Explore how our full-funnel digital marketing strategies propelled ambitious brands to market leadership.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" duration={750} delay={150}>
            <Link
              href="/portfolio"
              className="orange-btn inline-flex items-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/25"
            >
              <span>EXPLORE ALL CASE STUDIES</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Overlapping Case Study Cards with Side Scroll Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => {
            const anim = idx === 0 ? "fade-left" : idx === 2 ? "fade-right" : "fade-up";
            const delay = idx * 140;
            return (
              <ScrollReveal
                key={item.id}
                animation={anim}
                duration={750}
                delay={delay}
                className="h-full"
              >
                <div className="navy-card navy-card-interactive rounded-[2rem] overflow-hidden flex flex-col group h-full">
                  {/* Image Frame with Rounded Top */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    {/* Floating Metric Badge in Orange */}
                    <div className="absolute top-4 right-4 bg-[#0A0F1D]/90 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-[#FF5E3A]/40">
                      <p className="text-xl font-black text-[#FF5E3A] leading-none">
                        {item.highlightMetric}
                      </p>
                      <p className="text-[10px] font-bold text-slate-300 uppercase mt-0.5">
                        {item.highlightLabel}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex flex-col justify-between flex-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                        <span>{item.client}</span>
                        <span className="text-[#FF5E3A]">• {item.category}</span>
                      </div>

                      <h3 className="text-xl font-black text-[#FAF6F0] leading-snug group-hover:text-[#FF5E3A] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.summary}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                        View Audited Case Study
                      </span>
                      <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
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
