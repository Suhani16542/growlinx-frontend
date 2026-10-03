import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  TrendingUp,
  Sparkles,
  Target,
  Zap,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Award,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.services.title,
  description: siteSEOConfig.services.description,
  canonicalUrl: siteSEOConfig.services.canonicalUrl,
});

export default function ServicesPage() {
  const serviceBenefits = [
    {
      title: "Omnichannel Synergy",
      description: "Your SEO, paid media, and creator strategies work together to reinforce buyer touchpoints and lower blended CAC.",
      icon: Sparkles,
      highlight: "Unified audience targeting",
    },
    {
      title: "Attribution Precision",
      description: "Full visibility into every touchpoint through server-side tracking, CRM integration, and multi-touch attribution.",
      icon: Target,
      highlight: "Server-side CAPI tracking",
    },
    {
      title: "Agile Creative Scaling",
      description: "Continuous testing of high-impact ad angles, motion graphics, and direct-response copy to eliminate ad fatigue.",
      icon: Zap,
      highlight: "Weekly sprint iterations",
    },
    {
      title: "Predictable Unit Economics",
      description: "Every campaign is optimized against customer lifetime value (LTV) and bottom-line return on marketing spend.",
      icon: TrendingUp,
      highlight: "ROAS-driven budget scaling",
    },
  ];

  const growthProcessSteps = [
    {
      step: "01",
      name: "Discover",
      title: "Auditing & Growth Opportunity Discovery",
      description:
        "Deep-dive technical, attribution, and competitive audit to uncover high-intent conversion bottlenecks and low-hanging commercial opportunities.",
      tag: "Phase 01: Analysis",
    },
    {
      step: "02",
      name: "Strategize",
      title: "Bespoke Multi-Channel Blueprint",
      description:
        "Architecting unified audience segments, high-converting funnel paths, and algorithmic campaign hierarchies across organic and paid channels.",
      tag: "Phase 02: Blueprint",
    },
    {
      step: "03",
      name: "Execute",
      title: "Rapid Deployment & Creative Launch",
      description:
        "Deploying high-impact creative hooks, server-side CAPI tracking, keyword clusters, and targeted ad sets with zero downtime.",
      tag: "Phase 03: Deployment",
    },
    {
      step: "04",
      name: "Optimize",
      title: "Multivariate Testing & Conversion Tuning",
      description:
        "Continuous weekly sprints testing ad angles, landing page variations, bidding strategies, and search entity signals.",
      tag: "Phase 04: Refinement",
    },
    {
      step: "05",
      name: "Scale",
      title: "Compounding Commercial Dominance",
      description:
        "Aggressively scaling budget into validated winners while maintaining strict target unit economics and expanding bottom-line profit margins.",
      tag: "Phase 05: Expansion",
    },
  ];

  const approachPillars = [
    {
      title: "Unified Data & Server-Side Telemetry",
      description:
        "We bypass ad-blockers and privacy degradation with first-party CAPI integrations that feed clean conversion signals directly back into ad algorithms.",
      icon: ShieldCheck,
      stat: "100%",
      statLabel: "Attributable Data",
    },
    {
      title: "Full-Funnel Omnichannel Synergy",
      description:
        "Organic search authority lowers paid media customer acquisition cost, while viral social and creator reach feeds high-intent search queries.",
      icon: Layers,
      stat: "4.8X",
      statLabel: "Target Blended ROAS",
    },
    {
      title: "Weekly Creative & Audience Sprints",
      description:
        "Eliminating ad fatigue before it happens through proactive motion graphic testing, hook variations, and intent-focused messaging.",
      icon: Zap,
      stat: "+340%",
      statLabel: "Pipeline Velocity",
    },
    {
      title: "Strict Unit Economics Accountability",
      description:
        "Every decision is anchored to customer lifetime value (LTV), payback velocity, and net contribution margin rather than vanity impressions.",
      icon: BarChart3,
      stat: "92%",
      statLabel: "Client Retention",
    },
  ];

  const whyChoosePillars = [
    {
      title: "Senior Growth Architects Only",
      description: "Direct partnership with seasoned digital marketing strategists—zero junior account manager handoffs.",
      icon: Award,
    },
    {
      title: "Cookieless Tracking Infrastructure",
      description: "Custom server-side conversion APIs and data pipelines resilient to third-party cookie restrictions.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Live Telemetry Dashboards",
      description: "Transparent client portal with real-time blended ROAS, CAC payback velocity, and actionable insights.",
      icon: BarChart3,
    },
    {
      title: "Predictable Revenue Focus",
      description: "We align our incentives directly with your commercial success, scaling with audited revenue growth.",
      icon: Layers,
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      <JsonLd schema={breadcrumbSchema} />
      {/* =========================================================================
          SECTION 1: SERVICES HUB HERO (LIGHT: Warm White / Cream + Large Image Card)
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Warm Atmospheric Ambience */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Copy & CTAs */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>FULL-FUNNEL DIGITAL MARKETING DISCIPLINES</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0A0F1D]">
                  Digital Marketing Solutions Engineered for{" "}
                  <span className="text-[#FF5E3A] block sm:inline">
                    Predictable Revenue.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  We design and execute full-funnel digital marketing engines tailored to high-growth brands—dominating organic search, amplifying creator reach, and scaling high-ROAS paid acquisition.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/20"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Free Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs"
                  >
                    <span>Explore Case Studies</span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-[#EADECE] flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#5A6578] font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Google Premier Partner
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Meta Certified Agency
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Server-Side Attribution
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Large Professional Image Card with Floating Telemetry Badges */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] sm:aspect-[16/12] p-2">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <Image
                        src="/images/service-paid-ads.jpg"
                        alt="Growlinqs Digital Marketing Solutions Hub"
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Floating Telemetry Chip 1 */}
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-[#EADECE] flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-black">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#0A0F1D] leading-none">+340%</p>
                        <p className="text-[10px] font-bold text-[#5A6578] uppercase mt-0.5">Pipeline Velocity</p>
                      </div>
                    </div>

                    {/* Floating Telemetry Chip 2 */}
                    <div className="absolute bottom-5 right-5 bg-[#0A0F1D]/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/10 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#FAF6F0] leading-none">4.8X</p>
                        <p className="text-[10px] font-bold text-[#FF5E3A] uppercase mt-0.5">Blended ROAS Target</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: STRATEGIC OVERVIEW (LIGHT: Text on one side + Image on other)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Strategic Image Card */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] p-2">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src="/images/marketing-strategy-growth.jpg"
                      alt="Growth Strategy Framework"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#EADECE] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#0A0F1D] text-[#FAF6F0] flex items-center justify-center font-black">
                        <BarChart3 className="h-4 w-4 text-[#FF5E3A]" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#0A0F1D]">Full-Funnel Telemetry</p>
                        <p className="text-[10px] text-[#5A6578] font-bold">Synchronized Multi-Touch Reporting</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5E3A]/15 text-[#FF5E3A]">
                      Live GA4 Sync
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Comprehensive Explanation */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left order-1 lg:order-2">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Target className="h-3.5 w-3.5" />
                  <span>INTEGRATED METHODOLOGY</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0F1D] leading-tight">
                  Cross-Channel Synergy for <br />
                  <span className="text-[#FF5E3A]">Compounding Scale</span>
                </h2>

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-normal">
                  Siloed marketing channels waste ad capital and create attribution blind spots. We engineer synchronized acquisition architectures where organic search presence, high-ROAS paid media, and viral social reach compound each other.
                </p>

                <div className="space-y-3 pt-1 text-left">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADECE] shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-[#0A0F1D] block">Server-Side Conversion Telemetry</strong>
                      <p className="text-xs text-[#5A6578] leading-relaxed mt-0.5">Capturing 100% of conversion signals through CAPI and first-party data pipelines resilient to privacy changes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADECE] shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-[#0A0F1D] block">Predictable CAC Payback Velocity</strong>
                      <p className="text-xs text-[#5A6578] leading-relaxed mt-0.5">Every marketing dollar is calculated against target customer lifetime value and bottom-line margin expansion.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: ALL 6 MAJOR GROWTH DISCIPLINES (LIGHT: 6 Detailed Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CORE DISCIPLINES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Explore Our Growth <span className="text-[#FF5E3A]">Solutions</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                Select a specialized digital marketing capability to discover its dedicated deliverables, execution frameworks, and verified case studies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, idx) => {
              const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
              const delay = (idx % 3) * 120;
              return (
                <ScrollReveal
                  key={service.id}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <ServiceCard service={service} theme="light" />
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: OUR GROWTH PROCESS (LIGHT: Discover → Strategize → Execute → Optimize → Scale)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Zap className="h-3.5 w-3.5" />
                <span>OUR GROWTH PROCESS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Discover → Strategize → Execute → <br className="hidden sm:inline" />
                <span className="text-[#FF5E3A]">Optimize → Scale</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                A battle-tested 5-stage performance framework that turns complex marketing channels into a predictable revenue engine.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {growthProcessSteps.map((step, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 4 ? "fade-right" : "fade-up";
              const delay = idx * 100;
              return (
                <ScrollReveal
                  key={step.step}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-[#FF5E3A] font-mono leading-none">
                          {step.step}
                        </span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          {step.name}
                        </span>
                      </div>

                      <h3 className="text-sm font-extrabold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-[#EADECE] flex items-center justify-between text-[10px] font-bold text-[#5A6578]">
                      <span>{step.tag}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A]" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: WHY OUR APPROACH WORKS (LIGHT: Premium Cards & Verified Metrics)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Target className="h-3.5 w-3.5" />
                <span>MEASURABLE ADVANTAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Why Our Approach <span className="text-[#FF5E3A]">Works</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                By uniting server-side telemetry, agile creative sprints, and continuous unit-economics optimization, we eliminate ad waste and compound returns.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approachPillars.map((item, idx) => {
              const Icon = item.icon;
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={item.title}
                  animation={anim}
                  duration={750}
                  delay={idx * 110}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300 shadow-xs">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-black text-[#FF5E3A] block leading-none font-mono">
                            {item.stat}
                          </span>
                          <span className="text-[9px] font-bold uppercase text-[#5A6578]">
                            {item.statLabel}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-extrabold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center gap-1.5 text-[10px] font-bold text-[#FF5E3A]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified Growth Protocol</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: ATTRIBUTION ENGINE VISUAL (DARK NAVY)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Attribution Visualization Card */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 shadow-2xl aspect-[4/3] p-2">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src="/images/service-paid-ads.jpg"
                      alt="Cross-Channel Attribution Architecture"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating Telemetry Chip */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#0A0F1D]/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                        <BarChart3 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#FAF6F0]">Cookieless Conversion API</p>
                        <p className="text-[10px] text-slate-400 font-bold">100% Attribution Precision</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/40">
                      Live Telemetry
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
                  <BarChart3 className="h-3.5 w-3.5" />
                  <span>ATTRIBUTION ARCHITECTURE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-tight">
                  Cross-Platform Measurement That <br />
                  <span className="text-[#FF5E3A]">Eliminates Guesswork</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Our measurement stack combines server-to-server event tracking, custom GA4 architectures, and multi-touch attribution models so you know the exact commercial ROI of every single campaign.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#FAF6F0]">Server-Side Event Dispatching</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Direct API connections to Google Ads, Meta CAPI, and TikTok to bypass browser cookie degradation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#FAF6F0]">Multi-Touch Incrementality</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Accurately determine which channels drove initial brand discovery versus final conversion closing.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: WHY GROWLINQS FOR SERVICES (LIGHT: 4 Value Pillars)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Award className="h-3.5 w-3.5" />
                <span>THE GROWLINQS STANDARD</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Built for High-Growth <span className="text-[#FF5E3A]">Scale</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                Why ambitious enterprise brands trust our performance marketing infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoosePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              const delay = idx * 100;
              return (
                <ScrollReveal
                  key={pillar.title}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-sm font-extrabold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-2">
                        {pillar.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] text-[10px] font-bold uppercase tracking-wider text-[#FF5E3A]">
                      Verified Standard
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: CTA SECTION
          ========================================================================= */}
      <CTASection />
    </div>
  );
}
