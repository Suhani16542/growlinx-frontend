"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { testimonialsData } from "@/data/testimonials";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  const testimonialImages = [
    "/images/client-testimonial.jpg",
    "/images/strategist-laptop.jpg",
    "/images/strategist-tablet.jpg",
    "/images/case-study-ecommerce.jpg",
    "/images/case-study-saas.jpg",
    "/images/case-study-seo.jpg",
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 cream-surface overflow-hidden border-b border-[#EADECE]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Client Portrait Masked in Orange Arch Circle (Slides in from Left) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal animation="fade-left" duration={800} className="w-full flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square">
                {/* Background Orange Arch Circle */}
                <div className="absolute inset-0 rounded-full bg-[#FF5E3A] -z-0 opacity-95" />

                {/* Portrait Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden z-10 shadow-2xl border-4 border-[#FAF6F0]">
                  <Image
                    src={testimonialImages[currentIndex % testimonialImages.length]}
                    alt={current.name}
                    fill
                    className="object-cover object-center transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                {/* Floating Verified Metric Badge */}
                {current.metric && (
                  <div className="absolute -bottom-2 right-4 z-20 bg-white border border-[#EADECE] rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF5E3A]" />
                    <span className="text-xs font-bold text-[#0A0F1D]">
                      {current.metric.value} {current.metric.label}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Reference-Inspired Layout with Authentic Growlinx Testimonial (Slides in from Right) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-6">
              {/* Top Row: Label & Pagination Dots */}
              <div className="flex items-center justify-center lg:justify-between">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                  CLIENT ENDORSEMENTS
                </span>

                {/* Dots Indicator */}
                <div className="hidden lg:flex items-center gap-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-[#FF5E3A]" : "w-2.5 bg-[#EADECE]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0F1D]">
                What Founders & CMOs Say
              </h2>

              {/* Big Quote with Orange Quote Icon */}
              <div className="flex items-start gap-4 pt-2">
                <span className="text-5xl sm:text-6xl font-black text-[#FF5E3A] leading-none shrink-0 select-none">
                  “
                </span>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#0A0F1D] leading-relaxed">
                    {current.quote}
                  </p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#FF5E3A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FF5E3A]" />
                ))}
              </div>

              {/* Client Info & Prev/Next Navigation Controls */}
              <div className="pt-4 border-t border-[#EADECE] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-black text-[#0A0F1D]">{current.name}</h4>
                  <p className="text-xs font-semibold text-[#5A6578]">
                    {current.role} at {current.company}
                  </p>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="h-11 w-11 rounded-full border border-[#EADECE] bg-white flex items-center justify-center text-[#0A0F1D] hover:bg-[#FF5E3A] hover:border-[#FF5E3A] hover:text-white transition-all shadow-xs"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="h-11 w-11 rounded-full border border-[#EADECE] bg-[#FF5E3A] flex items-center justify-center text-white hover:bg-[#E8502B] transition-all shadow-xs"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
