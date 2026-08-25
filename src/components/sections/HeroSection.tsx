"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Search,
  CheckCircle2,
  Sparkles,
  Target,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-0 lg:min-h-[78vh] xl:min-h-[82vh] flex items-center justify-center pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 overflow-hidden bg-grid-pattern bg-[#050811]">
      <BackgroundBeams intensity="high" showDots={true} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Sequential Animated Entrance */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-center lg:text-left">
            {/* Step 1: Eyebrow Badge (delay 0ms) */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold glow-badge animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="tracking-wider uppercase font-bold text-cyan-300">
                Performance Marketing & Growth Partner
              </span>
            </div>

            {/* Step 2: Main Headline (delay 100ms) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] animate-in fade-in slide-in-from-bottom-3 duration-600 delay-100">
              Grow Your{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Brand.
                <span className="absolute -inset-2 bg-cyan-500/15 blur-2xl -z-10 rounded-full animate-pulse-slow" />
              </span>{" "}
              <br />
              Grow Your{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Business.
                <span className="absolute -inset-2 bg-blue-500/20 blur-2xl -z-10 rounded-full animate-pulse-slow" />
              </span>
            </h1>

            {/* Step 3: Paragraph (delay 200ms) */}
            <p className="text-sm sm:text-base lg:text-lg font-normal text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-200">
              We engineer full-funnel digital marketing engines that convert market attention into predictable, compounding commercial revenue.
            </p>

            {/* Step 4: Buttons (delay 300ms) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-0.5 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-300">
              <Button
                href="/free-strategy-call"
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto font-bold px-6.5 gap-2"
              >
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-medium gap-2"
              >
                <span>Explore Solutions</span>
              </Button>
            </div>

            {/* Step 5: Trust Checklist (delay 400ms) */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium animate-in fade-in duration-700 delay-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                Data-Driven Precision
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                Multi-Touch Attribution
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                Dedicated Growth Unit
              </span>
            </div>
          </div>

          {/* Right Column: Custom Visual Concept (Digital Marketing -> Growth -> Real Results) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-2 lg:mt-0 animate-in fade-in zoom-in-95 duration-700 delay-200">
            {/* Ambient Multi-Layer Backglow */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-600/25 to-cyan-400/25 blur-3xl -z-10 animate-pulse-slow pointer-events-none" />

            {/* Upward Growth Visual Canvas */}
            <div className="w-full max-w-lg space-y-3 relative">
              {/* Level 3 (Peak Result): Strategic Crisp White / Light Accent Card with subtle floating motion */}
              <div className="rounded-2xl sm:rounded-3xl border border-white/80 bg-white p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-20 animate-float transition-all duration-300 hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)]">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                      Phase 03 • Real Business Results
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Compounding Scale
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      $380M+
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block mt-0.5">
                      Attributed Client Revenue Generated
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-bold bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>+310% YoY</span>
                  </div>
                </div>
              </div>

              {/* Connecting Upward Glowing Trace Vector */}
              <div className="relative pl-6 sm:pl-8 pr-2 sm:pr-4">
                <div className="absolute left-10 sm:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 opacity-75" />

                {/* Level 2: Growth Velocity (Dark Translucent Glass) */}
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#0a0f20]/90 p-4 sm:p-4.5 shadow-xl backdrop-blur-xl relative z-10 my-2.5 group hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Phase 02 • Growth Velocity
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                      3.8X Blended ROAS
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <Target className="h-3.5 w-3.5 text-cyan-400" />
                      Inbound Pipeline Multiplier
                    </span>
                    <span className="text-xs font-black text-cyan-300 font-mono">
                      Active Funnel
                    </span>
                  </div>
                </div>

                {/* Level 1: Digital Marketing Acquisition (Dark Translucent Glass) */}
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#080d1a]/90 p-4 sm:p-4.5 shadow-xl backdrop-blur-xl relative z-10 group hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Phase 01 • Digital Marketing
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Multi-Channel
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors">
                      <span className="text-[10px] text-slate-400 block font-medium">SEO Real-Estate</span>
                      <span className="text-xs font-bold text-white">#1 Rankings</span>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors">
                      <span className="text-[10px] text-slate-400 block font-medium">Paid Media</span>
                      <span className="text-xs font-bold text-cyan-400">-38% CAC</span>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors">
                      <span className="text-[10px] text-slate-400 block font-medium">Conversion CRO</span>
                      <span className="text-xs font-bold text-indigo-300">+240% Lift</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
