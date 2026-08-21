"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { testimonialsData } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, Building2, User } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#060914]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Client Endorsements"
            title="Trusted by Fast-Growing Companies"
            description="Discover how our performance marketing and brand acceleration frameworks empower founders, CMOs, and growth leaders to scale with confidence."
            align="center"
          />
        </ScrollReveal>

        {/* Featured Testimonial Carousel Frame */}
        <div className="mt-14 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" duration={600} delay={150}>
            <div className="glow-card rounded-3xl p-8 sm:p-12 border border-slate-800 relative">
              {/* Quote Watermark Icon */}
              <div className="absolute top-6 right-8 text-slate-800/40 pointer-events-none">
                <Quote className="h-16 w-16" />
              </div>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-lg sm:text-2xl font-medium text-white leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Author & Metric Details */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px]">
                    <div className="h-full w-full rounded-full bg-[#0c1427] flex items-center justify-center text-cyan-300 font-bold text-sm">
                      {current.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {current.role} • <span className="text-slate-300">{current.company}</span>
                    </p>
                  </div>
                </div>

                {current.metric && (
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-2 flex items-center gap-2">
                    <span className="text-base font-extrabold text-cyan-400">
                      {current.metric.value}
                    </span>
                    <span className="text-xs text-slate-400">
                      {current.metric.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800/60">
                <div className="flex items-center gap-1.5">
                  {testimonialsData.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentIndex
                          ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
