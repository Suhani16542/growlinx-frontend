"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFAQSchema } from "@/lib/schema";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = generateFAQSchema(
    faqData.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <JsonLd schema={faqSchema} />
      <Container className="relative z-10 max-w-4xl">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Frequently Asked"
            title="Common Questions"
            description="Clear answers about our engagement models, multi-touch attribution, team integration, and growth timeline."
            align="center"
            theme="light"
          />
        </ScrollReveal>

        {/* Minimalist Light Numbered Accordion */}
        <div className="mt-14 divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
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
                <div className="py-5 sm:py-6 group transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span
                        className={`text-sm sm:text-base font-mono font-bold transition-colors ${
                          isOpen ? "text-[#2563EB]" : "text-[#64748B] group-hover:text-[#111827]"
                        }`}
                      >
                        {num}
                      </span>
                      <span
                        className={`text-base sm:text-lg lg:text-xl font-bold transition-colors ${
                          isOpen ? "text-[#2563EB]" : "text-[#111827] group-hover:text-[#2563EB]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#64748B] transition-all shrink-0 shadow-sm ${
                        isOpen ? "bg-blue-50 border-blue-200 text-[#2563EB]" : ""
                      }`}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isOpen && "rotate-180 text-[#2563EB]"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pl-8 sm:pl-12 text-sm sm:text-base leading-relaxed text-[#64748B] max-w-3xl animate-in fade-in slide-in-from-top-1 duration-200">
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
