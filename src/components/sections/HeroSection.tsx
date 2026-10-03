"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { HeroSubtleParticles } from "@/components/3d/HeroSubtleParticles";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[86vh] lg:min-h-[90vh] flex items-center justify-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 overflow-hidden cream-surface border-b border-[#EADECE]">
      {/* Subtle 3D Geometric Marketing Particles (Non-intrusive background) */}
      <HeroSubtleParticles />

      {/* Atmospheric Soft Warm Ambience */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Digital Marketing Copy & Action CTAs (Slides in from Left) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <ScrollReveal animation="fade-left" duration={800} className="space-y-6">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Performance Marketing & Growth Consultancy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black tracking-tight leading-[1.06] text-[#0A0F1D]">
                Turn Digital Attention Into{" "}
                <span className="text-[#FF5E3A] block sm:inline">
                  Real Revenue Growth.
                </span>
              </h1>

              {/* Supporting Copy from Git */}
              <p className="text-base sm:text-lg text-[#5A6578] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We design and execute full-funnel digital marketing engines that convert market attention into predictable, compounding commercial revenue through SEO, performance paid ads, and conversion optimization.
              </p>

              {/* Orange CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/free-strategy-call"
                  className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/25"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-4 rounded-full text-sm text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs"
                >
                  <span>Explore Solutions</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#EADECE] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#5A6578] font-bold">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Google Premier Partner
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Meta Certified Growth Agency
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Multi-Touch Revenue Attribution
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Large High-Quality Digital Marketing Image in Rounded Container (Slides in from Right) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right" duration={800} delay={150}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Premium Rounded Image Container with Clean Shadow */}
                <div className="relative rounded-[2.5rem] overflow-hidden border border-[#EADECE] bg-white shadow-2xl aspect-[4/3] sm:aspect-[16/12] p-2">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/hero-marketing-agency.jpg"
                      alt="Growlinqs Digital Marketing & Growth Strategy Team"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating Telemetry Chip 1: Pipeline Scale */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#EADECE] flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-black">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#0A0F1D] leading-none">+340%</p>
                      <p className="text-[10px] font-bold text-[#5A6578] uppercase mt-0.5">Pipeline Scale</p>
                    </div>
                  </div>

                  {/* Floating Telemetry Chip 2: Verified ROAS */}
                  <div className="absolute bottom-6 right-6 bg-[#0A0F1D]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/10 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#FAF6F0] leading-none">4.8X ROAS</p>
                      <p className="text-[10px] font-bold text-[#FF5E3A] uppercase mt-0.5">Attributable Media</p>
                    </div>
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
