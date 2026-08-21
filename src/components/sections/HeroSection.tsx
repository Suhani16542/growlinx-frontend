"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Search,
  Video,
  Target,
  Sparkles,
  Smartphone,
  Share2,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center justify-center pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-grid-pattern">
      <BackgroundBeams intensity="high" showDots={true} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headline, Supporting Copy, Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Badge / Secondary Text */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge transition-all duration-300 hover:scale-105">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="tracking-wider uppercase text-blue-300 font-bold">
                Let's Grow Together • GrowlinX
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Grow Your Brand. <br />
              <span className="glow-accent-gradient">Grow Your Business.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Complete digital marketing solutions for higher reach, stronger engagement, qualified leads and measurable business growth.
            </p>

            {/* Expanded Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From full-funnel SEO and omnichannel social media to high-ROAS paid advertising, influencer management, YouTube monetization, and app user acquisition—we engineer predictable growth for ambitious brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/free-strategy-call"
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-blue-600/40 gap-2"
              >
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 gap-2"
              >
                <span>Partner with GrowlinX</span>
              </Button>
            </div>

            {/* Trust Checklist Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                Data-Driven Marketing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                Transparent ROI Tracking
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                Dedicated Growth Unit
              </span>
            </div>
          </div>

          {/* Right Column: Premium Animated Growth Visual & Dashboard */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Ambient Multi-Layer Backglow */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/25 to-cyan-400/30 blur-3xl -z-10 animate-pulse-glow" />

            {/* Main Interactive Dashboard Frame */}
            <div className="w-full max-w-lg rounded-3xl border border-slate-700/80 bg-gradient-to-b from-slate-900/95 via-[#0a1122]/98 to-[#070b14] p-5 sm:p-6 shadow-2xl shadow-blue-950/90 backdrop-blur-2xl animate-float-slow">
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  <span className="ml-2 text-xs font-semibold text-slate-300">
                    GrowlinX Marketing Engine
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Growth Mode
                </span>
              </div>

              {/* Performance Metrics Row */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center transition-all hover:border-cyan-500/40">
                  <span className="text-[10px] text-slate-400 block font-medium">Traffic Reach</span>
                  <span className="text-base sm:text-lg font-extrabold text-cyan-400">+180%</span>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center transition-all hover:border-emerald-500/40">
                  <span className="text-[10px] text-slate-400 block font-medium">Average ROAS</span>
                  <span className="text-base sm:text-lg font-extrabold text-emerald-400">3.8X</span>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center transition-all hover:border-purple-500/40">
                  <span className="text-[10px] text-slate-400 block font-medium">Engagement</span>
                  <span className="text-base sm:text-lg font-extrabold text-purple-400">+240%</span>
                </div>
              </div>

              {/* Growth Trajectory Chart */}
              <div className="mt-5 rounded-2xl border border-blue-500/20 bg-[#060b18]/90 p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    Revenue & Scale Velocity
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" /> Compounding ROI
                  </span>
                </div>

                {/* Animated Bars */}
                <div className="h-32 flex items-end justify-between gap-2.5 pt-4 px-2 border-b border-slate-800">
                  <div className="w-full flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-blue-950 to-blue-700/60 h-[35%]" />
                    <span className="text-[10px] text-slate-500">Q1</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-blue-900 to-blue-600/80 h-[52%]" />
                    <span className="text-[10px] text-slate-500">Q2</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-blue-800 to-cyan-500/80 h-[74%]" />
                    <span className="text-[10px] text-slate-500">Q3</span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-blue-600 via-cyan-400 to-emerald-400 h-[98%] shadow-[0_0_20px_rgba(0,240,255,0.7)] animate-pulse" />
                    <span className="text-[10px] text-cyan-300 font-extrabold">Q4 Scale</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Omnichannel Attribution</span>
                  <span className="text-cyan-400 font-semibold">Continuous Optimization</span>
                </div>
              </div>
            </div>

            {/* Floating Multi-Channel Orbiting Badges */}
            {/* Top Left: SEO */}
            <div className="absolute -top-5 -left-6 sm:-left-8 rounded-2xl border border-blue-500/30 bg-[#0c1427]/95 px-3.5 py-2 shadow-xl backdrop-blur-md animate-float flex items-center gap-2.5 z-20">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Search className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-medium">Google SEO</span>
                <span className="text-xs font-bold text-white">#1 Rankings</span>
              </div>
            </div>

            {/* Bottom Left: Paid Media */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl border border-purple-500/30 bg-[#0c1427]/95 px-3.5 py-2 shadow-xl backdrop-blur-md animate-float-reverse flex items-center gap-2.5 [animation-delay:1.2s] z-20">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-medium">Meta & Google Ads</span>
                <span className="text-xs font-bold text-purple-300">3.8X ROAS</span>
              </div>
            </div>

            {/* Top Right: YouTube / Video */}
            <div className="absolute top-1/4 -right-4 sm:-right-8 rounded-2xl border border-red-500/30 bg-[#0c1427]/95 px-3.5 py-2 shadow-xl backdrop-blur-md animate-float-slow flex items-center gap-2.5 [animation-delay:2s] z-20">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                <Video className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-medium">YouTube Growth</span>
                <span className="text-xs font-bold text-white">+350% Watch Time</span>
              </div>
            </div>

            {/* Bottom Right: App Growth */}
            <div className="absolute -bottom-6 right-2 sm:right-6 rounded-2xl border border-cyan-500/30 bg-[#0c1427]/95 px-3 py-1.5 shadow-xl backdrop-blur-md animate-float flex items-center gap-2 [animation-delay:2.8s] z-20">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Smartphone className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-300">500K+ Installs</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
