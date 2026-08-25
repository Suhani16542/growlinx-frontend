"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-[#050811] border-t border-slate-800/80">
      <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="glow-card relative rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-xl">
            {/* Top subtle blue light line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Accelerate Your Market Share</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Ready to Scale Your Inbound Growth with <span className="glow-accent-gradient">Growlinx</span>?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Schedule a complimentary 30-minute growth strategy session. We'll audit your acquisition funnels and deliver a clear scaling roadmap.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/free-strategy-call"
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto shadow-xl shadow-blue-600/30 gap-2"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  <span>Contact Our Team</span>
                </Button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                <span>✓ 30-Minute Growth Audit</span>
                <span>✓ Zero Sales Pressure</span>
                <span>✓ Direct Strategist Access</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
