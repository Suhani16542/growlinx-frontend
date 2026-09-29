"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#0A0F1D] text-[#FAF6F0] border-t border-white/10">
      {/* Subtle Orange Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/12 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        <ScrollReveal animation="zoom-in" duration={800}>
          <div className="rounded-[2rem] bg-gradient-to-br from-[#111928] via-[#0E1726] to-[#0A0F1D] border border-white/15 p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
            
            <div className="max-w-2xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5E3A]" />
                <span>ACCELERATE YOUR REVENUE GROWTH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-snug">
                Ready to Turn Market Attention Into <br className="hidden sm:inline" />
                <span className="text-[#FF5E3A]">Predictable Revenue Growth?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
                Schedule a complimentary 30-minute growth strategy session. We&apos;ll audit your acquisition funnels and deliver a clear scaling roadmap.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/free-strategy-call"
                  className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FF5E3A]/25"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#FAF6F0] bg-white/[0.06] border border-white/15 hover:bg-white/10 hover:border-[#FF5E3A] transition-all duration-200"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>

              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                  30-Minute Growth Audit
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                  Zero Sales Pressure
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                  Direct Strategist Access
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
