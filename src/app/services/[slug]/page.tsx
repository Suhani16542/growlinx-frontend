import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import {
  CheckCircle2,
  PhoneCall,
  ArrowLeft,
  Zap,
  TrendingUp,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { IconWrapper } from "@/components/common/IconWrapper";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map alias slugs to service IDs if necessary
const findServiceBySlug = (slug: string) => {
  if (slug === "influencer-marketing") {
    return servicesData.find((s) => s.id === "influencer-management");
  }
  if (slug === "youtube-marketing") {
    return servicesData.find((s) => s.id === "youtube-monetization");
  }
  return servicesData.find((s) => s.slug === slug || s.id === slug);
};

export async function generateStaticParams() {
  const baseParams = servicesData.map((service) => ({
    slug: service.slug,
  }));
  // Include aliases
  return [
    ...baseParams,
    { slug: "influencer-marketing" },
    { slug: "youtube-marketing" },
  ];
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
    });
  }

  return constructMetadata({
    title: `${service.title} | GrowlinX Digital Marketing`,
    description: service.fullDescription || service.shortDescription,
    canonicalUrl: `https://growlinx.com/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Service Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10">
          <div className="mb-8">
            <Button
              href="/services"
              variant="ghost"
              size="sm"
              className="gap-2 text-slate-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <ScrollReveal animation="fade-up" duration={600}>
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{service.tag || "Growth Discipline"}</span>
                </div>

                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {service.title}
                </h1>

                {service.tagline && (
                  <p className="text-lg sm:text-xl font-semibold text-cyan-300">
                    {service.tagline}
                  </p>
                )}

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {service.fullDescription || service.shortDescription}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Button href="/free-strategy-call" variant="gradient" size="lg" className="gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-200" />
                    <span>Get a Free Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg">
                    <span>Contact GrowlinX</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Metrics Callout Card */}
            <div className="lg:col-span-4">
              <ScrollReveal animation="fade-left" duration={700}>
                <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                      <IconWrapper name={service.iconName} size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Impact Benchmark
                    </span>
                  </div>

                  <div className="space-y-4">
                    {service.metrics?.map((m, i) => (
                      <div key={i} className="rounded-xl bg-slate-900/80 p-4 border border-slate-800">
                        <span className="text-2xl font-extrabold text-cyan-400 block">
                          {m.value}
                        </span>
                        <span className="text-xs text-slate-400 mt-0.5 block font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Verified Service Standard
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. What We Provide & Deliverables */}
      <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={600}>
            <SectionHeading
              badge="Full Scope of Work"
              title={`What We Provide in ${service.title}`}
              description="A systematic breakdown of deliverables, technical implementations, and strategic workflows included in our service."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(service.deliverables || service.features)?.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                duration={500}
                delay={idx * 60}
              >
                <div className="glow-card rounded-2xl p-6 border border-slate-800 flex items-start gap-3.5 h-full">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{item}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Executed by dedicated domain specialists with continuous data reporting and optimization.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Strategic Benefits */}
      {service.benefits && (
        <section className="py-20 bg-[#060914] border-t border-slate-800/80">
          <Container className="relative z-10">
            <ScrollReveal animation="fade-up" duration={600}>
              <SectionHeading
                badge="Key Advantages"
                title="Measurable Business Benefits"
                description={`Why investing in ${service.title} compounds into substantial market leadership and profitability.`}
                align="center"
              />
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, i) => (
                <ScrollReveal
                  key={i}
                  animation="fade-up"
                  duration={500}
                  delay={i * 80}
                >
                  <div className="glow-card rounded-2xl p-6 border border-slate-800 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-bold text-slate-700 font-mono block mb-3">
                        0{i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Strategic Process Roadmap */}
      {service.process && (
        <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
          <Container className="relative z-10">
            <ScrollReveal animation="fade-up" duration={600}>
              <SectionHeading
                badge="Execution Roadmap"
                title="Our 4-Phase Growth Framework"
                description="How we take your campaign from discovery and setup to scale and sustainable revenue."
                align="center"
              />
            </ScrollReveal>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  duration={500}
                  delay={idx * 80}
                >
                  <div className="glow-card rounded-2xl p-6 border border-slate-800 h-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 mb-4 inline-block">
                      Phase {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Service-Specific FAQs */}
      {service.faqs && (
        <section className="py-20 bg-[#060914] border-t border-slate-800/80">
          <Container className="relative z-10 max-w-4xl">
            <ScrollReveal animation="fade-up" duration={600}>
              <SectionHeading
                badge="Common Questions"
                title={`${service.title} FAQs`}
                description="Everything you need to know about timelines, scope, and implementation."
                align="center"
              />
            </ScrollReveal>

            <div className="mt-12 space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="glow-card rounded-2xl p-6 border border-slate-800 space-y-2"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 6. High-Impact CTA */}
      <CTASection />
    </div>
  );
}
