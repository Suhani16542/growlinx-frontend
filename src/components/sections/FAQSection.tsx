"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#060a15] border-t border-white/[0.06]">
      <Container className="relative z-10 max-w-4xl">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Frequently Asked"
            title="Common Questions"
            description="Clear answers about our engagement models, multi-touch attribution, and strategic methodology."
            align="center"
          />
        </ScrollReveal>

        {/* Minimalist Dark Numbered Accordion */}
        <div className="mt-16 divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
            return (
              <ScrollReveal
                key={faq.id}
                animation="fade-up"
                duration={400}
                delay={index * 40}
              >
                <div className="py-6 sm:py-7 group transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5 sm:gap-7 pr-4">
                      <span
                        className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                          isOpen ? "text-cyan-400" : "text-slate-600 group-hover:text-slate-400"
                        }`}
                      >
                        {num}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isOpen ? "text-white glow-accent-gradient" : "text-slate-200 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all shrink-0 ${
                        isOpen ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : ""
                      }`}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isOpen && "rotate-180 text-cyan-400"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pl-9 sm:pl-12 text-sm sm:text-base leading-relaxed text-slate-400 max-w-3xl animate-in fade-in slide-in-from-top-1 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
