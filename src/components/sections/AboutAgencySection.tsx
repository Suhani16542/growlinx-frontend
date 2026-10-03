"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";

export function AboutAgencySection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 cream-surface overflow-hidden border-b border-[#EADECE]">
      {/* Background warm aesthetic ambient blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFEBE5] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F3ECE2] rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headline, Description, CTA, and Two Stat Chips */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                WHY LEADING BRANDS CHOOSE GROWLINQS
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1D] leading-[1.08]">
              Engineered For Measurable <br className="hidden sm:inline" />
              <span className="text-[#FF5E3A]">Revenue Scale</span>
            </h2>

            {/* Supporting Text from Git */}
            <p className="text-base sm:text-lg text-[#5A6578] max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              We eliminate fragmented marketing tactics and replace them with unified full-funnel growth architectures designed to compound organic traffic, maximize ad efficiency, and scale enterprise pipeline.
            </p>

            {/* Orange CTA Button */}
            <div className="pt-2">
              <Link
                href="/free-strategy-call"
                className="orange-btn inline-flex items-center gap-2.5 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Schedule Free Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Two Stat Chips */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {/* Stat 1: 92% Client Growth */}
              <div className="cream-card cream-card-interactive rounded-2xl p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center shrink-0">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-[#0A0F1D] leading-none">
                    92%
                  </p>
                  <p className="text-[11px] font-bold text-[#5A6578] uppercase tracking-wider mt-1">
                    CLIENT REVENUE SCALE
                  </p>
                </div>
              </div>

              {/* Stat 2: 3.4x Lead Velocity */}
              <div className="cream-card cream-card-interactive rounded-2xl p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#111827]/10 text-[#111827] flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-black text-[#0A0F1D] leading-none">
                    3.4x
                  </p>
                  <p className="text-[11px] font-bold text-[#5A6578] uppercase tracking-wider mt-1">
                    INBOUND LEAD VELOCITY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Orange Arch + Masked Portrait + 3D Orb */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none flex justify-center items-center">
              {/* Background Color Shapes (Orange Arch + Dark Navy Circle Backdrop) */}
              <div className="relative w-full max-w-[420px] aspect-[4/5]">
                {/* Dark Navy Circle */}
                <div className="absolute -right-4 top-12 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#111827] opacity-90 -z-0" />

                {/* Orange Arch */}
                <div className="absolute left-0 bottom-0 w-72 h-80 sm:w-80 sm:h-96 rounded-t-[140px] rounded-b-3xl bg-[#FF5E3A] -z-0" />

                {/* Strategist Image Frame with Arch Top Masking */}
                <div className="relative w-full h-full rounded-t-[160px] rounded-b-3xl overflow-hidden z-10 shadow-2xl">
                  <Image
                    src="/images/strategist-laptop.jpg"
                    alt="Growlinqs Senior Digital Marketing Strategist Analyzing Growth Campaigns"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
