import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import {
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck,
  Zap,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "Growth Services | Full-Stack Digital Marketing Solutions",
  description:
    "Explore GrowlinX's full suite of performance digital marketing services: SEO, App Marketing, Influencer Management, Social Media, YouTube Monetization, and Paid Advertising.",
  canonicalUrl: "https://growlinx.com/services",
});

export default function ServicesPage() {
  const serviceBenefits = [
    {
      title: "Omnichannel Synergy",
      description: "We don't operate in silos. Your SEO, paid media, and social strategies work together to reinforce brand touchpoints and lower blended CAC.",
      icon: Sparkles,
    },
    {
      title: "Attribution Precision",
      description: "Full visibility into every touchpoint through server-side tracking, CRM integration, and clear multi-touch attribution modeling.",
      icon: Target,
    },
    {
      title: "Agile Creative Scaling",
      description: "Continuous testing of high-impact ad angles, motion graphics, short-form reels, and direct-response copy to eliminate ad fatigue.",
      icon: Zap,
    },
    {
      title: "Predictable Unit Economics",
      description: "Every campaign is optimized against real revenue, customer lifetime value (LTV), and bottom-line return on marketing spend.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Services Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Comprehensive Digital Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Strategic Digital Marketing Designed to <br />
              <span className="glow-accent-gradient">Scale Your Enterprise</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We engineer specialized, data-backed marketing engines tailored to high-growth businesses. From search engine domination to viral social channels and high-ROAS paid media, our services compound into lasting market leadership.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/free-strategy-call" variant="gradient" size="lg" className="gap-2">
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                <span>View Case Studies</span>
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. All 6 Major Service Categories Grid */}
      <section className="py-20 relative bg-[#070b14]">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={600}>
            <SectionHeading
              badge="Core Capabilities"
              title="Full-Funnel Growth Services"
              description="Explore our six core marketing disciplines engineered to drive brand visibility, pipeline acceleration, and measurable return on investment."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <ScrollReveal
                key={service.id}
                animation="fade-up"
                duration={500}
                delay={index * 80}
              >
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Strategic Benefits Section */}
      <section className="py-20 lg:py-24 relative bg-[#060914] border-t border-slate-800/80">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={600}>
            <SectionHeading
              badge="Why Our Approach Works"
              title="The GrowlinX Service Advantage"
              description="How our integrated marketing operations deliver compound returns compared to fragmented agency models."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal
                  key={i}
                  animation="fade-up"
                  duration={500}
                  delay={i * 80}
                >
                  <div className="glow-card rounded-2xl p-6 border border-slate-800 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Cross-Channel Process */}
      <section className="py-20 relative bg-[#070b14]">
        <Container className="relative z-10">
          <div className="glow-card rounded-3xl p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Integrated Execution
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  How We Deploy Your Custom Marketing Blueprint
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We don't force you into pre-packaged bundles. After an in-depth audit of your customer journey and acquisition bottlenecks, we craft an omnichannel strategy synchronized across your highest-opportunity digital channels.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Cross-platform tracking & pixel setup in Week 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Creative production & SEO architecture in Week 2</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>Full campaign launch & bi-weekly optimization reviews</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl bg-[#060a15] p-6 border border-slate-800 space-y-4 text-center">
                <BarChart3 className="h-12 w-12 text-blue-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">
                  Ready to Accelerate Your Customer Growth?
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Schedule a complimentary 30-minute growth consultation with our media buyers and SEO strategists.
                </p>
                <div className="pt-2">
                  <Button href="/free-strategy-call" variant="gradient" size="md" className="gap-2 mx-auto">
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Strategy Call</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Strong CTA */}
      <CTASection />
    </div>
  );
}
