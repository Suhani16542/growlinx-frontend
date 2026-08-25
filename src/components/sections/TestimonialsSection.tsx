"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const item = testimonialsData[currentIndex];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#050811] border-t border-white/[0.06]">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Client Endorsements"
            title="Trusted by High-Growth Founders"
            description="Read what venture-backed founders and enterprise marketing leaders say about partnering with Growlinx."
            align="center"
          />
        </ScrollReveal>

        {/* Large Editorial Quotation Showcase */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" duration={500} delay={100}>
            <div className="glass-panel rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
              <Quote className="h-16 w-16 text-cyan-400/15 absolute top-8 right-8 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote Statement */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-100 leading-relaxed">
                "{item.quote}"
              </p>

              {/* Author & Verified Metric */}
              <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold text-base shadow-lg shadow-blue-500/20">
                    {item.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <span className="block text-base font-bold text-white">
                      {item.name}
                    </span>
                    <span className="block text-xs sm:text-sm text-slate-400">
                      {item.role}, <span className="text-slate-300 font-semibold">{item.company}</span>
                    </span>
                  </div>
                </div>

                {item.metric && (
                  <div className="rounded-full bg-emerald-500/10 px-4 py-1.5 border border-emerald-500/20 text-xs font-bold text-emerald-400 self-start sm:self-auto">
                    {item.metric.value} {item.metric.label}
                  </div>
                )}
              </div>
            </div>

            {/* Minimalist Carousel Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-slate-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
