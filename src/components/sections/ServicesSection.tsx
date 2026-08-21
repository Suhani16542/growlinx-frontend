"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-[#060a14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Full-Stack Capabilities"
            title="Complete Digital Marketing Solutions"
            description="From high-intent search optimization and viral social engagement to data-backed paid media and YouTube monetization, our specialized growth units drive measurable business outcomes."
            align="center"
          />
        </ScrollReveal>

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              duration={500}
              delay={index * 100}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Bar for Services */}
        <ScrollReveal animation="fade-up" duration={600} delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-4 backdrop-blur-xl shadow-xl">
              <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                Need a custom multi-channel growth bundle?
              </span>
              <Button href="/free-strategy-call" variant="gradient" size="sm" className="gap-1.5">
                <span>Request Custom Strategy</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
