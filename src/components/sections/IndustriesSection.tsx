"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { industriesData } from "@/data/industries";
import { IconWrapper } from "@/components/common/IconWrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#060a15]">
      {/* Radial lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Vertical Expertise"
            title="Industries We Serve & Scale"
            description="We develop industry-tailored customer acquisition blueprints that speak directly to your target buyers and respect vertical compliance requirements."
            align="center"
          />
        </ScrollReveal>

        {/* 10 Industries Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industriesData.map((ind, index) => (
            <ScrollReveal
              key={ind.id}
              animation="fade-up"
              duration={500}
              delay={index * 60}
            >
              <div className="glow-card glow-card-interactive group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 h-full border border-slate-800 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-blue-500/25 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                      <IconWrapper name={ind.iconName} size={22} animated={true} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    Growth Highlight:
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {ind.highlight}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Callout */}
        <ScrollReveal animation="fade-up" duration={600} delay={300}>
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-400">
              Don't see your specific niche? We build custom frameworks for specialized business models.{" "}
              <Link href="/contact" className="text-cyan-400 hover:underline font-bold inline-flex items-center gap-1">
                <span>Talk to a Growth Specialist</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
