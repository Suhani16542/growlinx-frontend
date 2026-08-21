"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers about our digital marketing services, onboarding process, expected timelines, and commercial strategy."
            align="center"
          />
        </ScrollReveal>

        {/* 8 FAQs Accordion List */}
        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={faq.id}
                animation="fade-up"
                duration={500}
                delay={index * 50}
              >
                <div
                  className={`glow-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-500/60 shadow-[0_0_25px_rgba(0,102,255,0.15)] bg-slate-900/90"
                      : "border-slate-800/80 bg-slate-900/50 hover:border-slate-700"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-white">
                      <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-cyan-400" : "text-slate-500"}`} />
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-800/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-blue-500/20 text-cyan-300 border-blue-500/30" : "text-slate-400"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-300 border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Support Callout */}
        <ScrollReveal animation="fade-up" duration={600} delay={400}>
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-400">
              Have a specific question not listed here?{" "}
              <Link href="/contact" className="text-cyan-400 hover:underline font-bold inline-flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Contact our growth team directly</span>
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
