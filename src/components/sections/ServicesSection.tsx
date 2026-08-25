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
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#060a15]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <SectionHeading
            badge="Full-Stack Capabilities"
            title="Complete Digital Marketing Solutions"
            description="Specialized growth units engineered to drive brand visibility, qualified pipeline acceleration, and compounding commercial ROI."
            align="center"
          />
        </ScrollReveal>

        {/* Asymmetrical Custom Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              duration={400}
              delay={index * 60}
              className={index === 0 || index === 3 ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Bar for Services */}
        <ScrollReveal animation="fade-up" duration={500} delay={200}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/10 bg-[#090f20]/90 px-8 py-5 shadow-2xl backdrop-blur-xl">
              <span className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                Looking for a bespoke multi-channel growth architecture?
              </span>
              <Button href="/free-strategy-call" variant="gradient" size="sm" className="gap-1.5 font-bold">
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
