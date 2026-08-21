"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#070b14] via-[#0b1329] to-[#070b14]">
      <BackgroundBeams intensity="high" showDots={true} />

      {/* Radiant glow centers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-400/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="glow-card rounded-3xl p-8 sm:p-14 lg:p-16 border border-slate-700/80 text-center relative overflow-hidden backdrop-blur-2xl">
            {/* Top Light Accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-6">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="tracking-wider uppercase text-blue-300 font-bold">
                Let's Scale Together
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Grow <span className="glow-accent-gradient">Your Business?</span>
            </h2>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's build a digital strategy designed around your goals, audience and growth targets.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/free-strategy-call"
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto shadow-xl shadow-blue-600/40 gap-2"
              >
                <Sparkles className="h-4 w-4 text-cyan-200" />
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Contact GrowlinX</span>
              </Button>
            </div>

            {/* Guarantee / Value Badges */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>100% No-Obligation Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>30-Minute Growth Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>Custom Strategic Roadmap</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
