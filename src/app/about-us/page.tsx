import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/schema";
import {
  TrendingUp,
  Award,
  Users,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Layers,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.about.title,
  description: siteSEOConfig.about.description,
  canonicalUrl: siteSEOConfig.about.canonicalUrl,
});

export default function AboutUsPage() {
  const leadershipTeam = [
    {
      name: "Alex Vance",
      role: "Founder & Head of Growth",
      bio: "Former VP of Growth with 12+ years scaling multi-channel digital acquisition for high-velocity SaaS and DTC brands.",
      image: "/images/strategist-laptop.jpg",
    },
    {
      name: "Marcus Reed",
      role: "Director of Paid Media",
      bio: "Performance media architect managing over $45M in lifetime ad capital across Meta, Google, and TikTok with strict ROAS discipline.",
      image: "/images/service-paid-ads.jpg",
    },
    {
      name: "Elena Rostova",
      role: "Head of Creator Strategy",
      bio: "Pioneered performance influencer whitelisting models generating over 250M+ organic impressions and attributable revenue.",
      image: "/images/hero-agency-studio.jpg",
    },
  ];

  const driveGrowthSteps = [
    {
      step: "01",
      title: "Diagnostic Unit Economics Audit",
      desc: "We perform a thorough deep-dive into historical attribution, conversion funnel drop-offs, and competitor keyword gaps to find hidden revenue opportunities.",
      tag: "Audit Phase",
    },
    {
      step: "02",
      title: "Omnichannel Acquisition Blueprint",
      desc: "We engineer synchronized cross-channel funnels where organic search presence, high-ROAS paid media, and creator reach compound each other.",
      tag: "Strategy Phase",
    },
    {
      step: "03",
      title: "Agile Sprints & Creative Iteration",
      desc: "Weekly sprint cycles continuously test dynamic video hooks, direct-response copy, and landing page split tests to eliminate ad fatigue.",
      tag: "Execution Phase",
    },
    {
      step: "04",
      title: "Compounding Scale & LTV Expansion",
      desc: "We aggressively scale ad capital and SEO authority into verified high-converting channels while maintaining strict target unit economics.",
      tag: "Scaling Phase",
    },
  ];

  const whyChooseStats = [
    {
      value: "+340%",
      label: "Average Pipeline Velocity",
      desc: "Accelerating client sales pipeline velocity through synchronized multi-channel acquisition.",
    },
    {
      value: "4.8X",
      label: "Target Blended ROAS",
      desc: "Maintaining audited return on ad spend across Meta, Google Ads, and TikTok campaigns.",
    },
    {
      value: "92%",
      label: "Client Retention Rate",
      desc: "Long-term growth partnerships built on transparent weekly reporting and verified revenue.",
    },
    {
      value: "100%",
      label: "Server-Side Attribution",
      desc: "Cookieless CAPI tracking infrastructure ensuring zero conversion signal degradation.",
    },
  ];

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ]);
  const orgSchema = generateOrganizationSchema();

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      <JsonLd schema={[breadcrumbsSchema, orgSchema]} />
      {/* =========================================================================
          SECTION 1: HERO (LIGHT: Warm White / Cream + Hero Agency Visual)
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Ambient Radiance */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Mission */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>THE GROWLINQS STORY</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0A0F1D]">
                  We Engineer Growth Engines for{" "}
                  <span className="text-[#FF5E3A]">Market Leaders.</span>
                </h1>

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Growlinqs was founded to bridge the divide between creative branding and rigorous mathematical performance marketing. We replace agency vanity metrics with verified commercial revenue.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/20"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs"
                  >
                    <span>View Case Studies</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Agency Studio Visual Card */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] p-2">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <Image
                        src="/images/hero-agency-studio.jpg"
                        alt="Growlinqs Agency Strategy Team"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Floating Telemetry Chip */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#EADECE] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-[#0A0F1D] text-[#FAF6F0] flex items-center justify-center font-black">
                          <TrendingUp className="h-4 w-4 text-[#FF5E3A]" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#0A0F1D]">Senior Operators Only</p>
                          <p className="text-[10px] text-[#5A6578] font-bold">Zero Junior Account Delegation</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5E3A]/15 text-[#FF5E3A]">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: HOW WE DRIVE GROWTH (LIGHT: 4 Sequential Steps)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Zap className="h-3.5 w-3.5" />
                <span>OUR GROWTH ENGINE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                How We Drive <span className="text-[#FF5E3A]">Growth</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                A structured, disciplined 4-phase performance methodology designed to turn traffic into compounding commercial revenue.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {driveGrowthSteps.map((step, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={step.step}
                  animation={anim}
                  duration={750}
                  delay={idx * 110}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-2xl font-black text-[#FF5E3A] font-mono leading-none">
                          {step.step}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center justify-between text-[10px] font-bold text-[#5A6578]">
                      <span>Stage Protocol</span>
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
          SECTION 3: WHY BUSINESSES CHOOSE GROWLINQS (LIGHT: Verified Metric Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Award className="h-3.5 w-3.5" />
                <span>VERIFIED ADVANTAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Why Businesses Choose <span className="text-[#FF5E3A]">Growlinqs</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                We operate as your embedded performance growth department, maintaining complete transparency over CAC and ROAS.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseStats.map((stat, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={stat.label}
                  animation={anim}
                  duration={750}
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-3 h-full">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#FF5E3A] block mb-1 leading-none font-mono">
                        {stat.value}
                      </span>
                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1">
                        {stat.label}
                      </h3>
                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {stat.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center gap-1.5 text-[10px] font-bold text-[#FF5E3A]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified Benchmark</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: 3D DIGITAL GROWTH TELEMETRY (DARK NAVY)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Strategic Telemetry Container */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 shadow-2xl aspect-[4/3] p-2">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src="/images/marketing-strategy-growth.jpg"
                      alt="Growth Architecture Telemetry"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating Telemetry Chip */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#0A0F1D]/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#FAF6F0]">Calculated Risk Architecture</p>
                        <p className="text-[10px] text-slate-400 font-bold">100% Attributable Commercial Scale</p>
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
                  <Target className="h-3.5 w-3.5" />
                  <span>PERFORMANCE CULTURE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-tight">
                  Calculated Risk, <br />
                  <span className="text-[#FF5E3A]">Aggressive Execution</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  We don't believe in vanity awards or generic agency pitch decks. We measure our success on one metric alone: net contribution margin and predictable commercial scaling for our partners.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#FAF6F0]">Direct Partner Collaboration</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Work directly with domain experts who make daily decisions on your ad spend and rankings.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#FAF6F0]">Weekly Sprint Reporting</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Transparent live dashboards with zero delayed data or obfuscated management fees.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: SENIOR LEADERSHIP TEAM (LIGHT: 3 Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Users className="h-3.5 w-3.5" />
                <span>LEADERSHIP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Senior Growth <span className="text-[#FF5E3A]">Architects</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                Meet the senior domain specialists who lead your performance marketing campaigns.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipTeam.map((member, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 2 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={member.name}
                  animation={anim}
                  duration={750}
                  delay={idx * 120}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-4">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FAF6F0] border border-[#EADECE]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5E3A] block mb-1">
                          {member.role}
                        </span>
                        <h3 className="text-lg font-black text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal mt-1">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center justify-between text-xs font-bold text-[#FF5E3A]">
                      <span>Senior Domain Strategist</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
