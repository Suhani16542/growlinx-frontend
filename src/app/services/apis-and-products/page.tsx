import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  verificationApis,
  paymentApis,
  bcAgentApis,
  apiHighlights,
} from "@/data/apisProducts";
import { ApiProductCard } from "@/components/apis/ApiProductCard";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Zap,
  Code2,
  PhoneCall,
  Terminal,
  ArrowLeft,
  Server,
  FileCode2,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "APIs & Products | Fintech, Verification & Payment APIs",
  description:
    "Production-ready fintech APIs for payments, identity verification, DigiLocker, BBPS, and agent banking — built for India's digital economy.",
  canonicalUrl: "https://growlinqs.com/services/apis-and-products",
});

export default function ApisAndProductsPage() {
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "APIs & Products", url: "/services/apis-and-products" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fintech APIs & Digital Banking Products",
    serviceType: "Fintech Infrastructure & Verification APIs",
    description:
      "Production-ready fintech APIs for payments, verification, and agent banking — built for India's digital economy.",
    provider: {
      "@type": "ProfessionalService",
      name: "Growlinqs",
      url: "https://growlinqs.com",
    },
    areaServed: "IN",
    url: "https://growlinqs.com/services/apis-and-products",
  };

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      <JsonLd schema={[breadcrumbsSchema, serviceSchema]} />

      {/* =========================================================================
          1. HERO SECTION (Warm White / Cream Surface with Brand Accents)
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-22 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A6578] hover:text-[#FF5E3A] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Solutions</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal animation="fade-down" duration={700}>
              {/* Badge above Title */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>APIs & Products</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={800} delay={100}>
              {/* H1 Title */}
              <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A0F1D]">
                Our APIs &{" "}
                <span className="text-[#FF5E3A]">Products</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={800} delay={200}>
              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#5A6578] leading-relaxed font-normal max-w-3xl mx-auto">
                Production-ready fintech APIs for payments, verification, and agent banking — built for India&apos;s digital economy.
              </p>
            </ScrollReveal>

            {/* Trust Highlights */}
            <ScrollReveal animation="fade-up" duration={800} delay={300}>
              <div className="pt-6 border-t border-[#EADECE] flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-[#5A6578] font-bold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  99.95% Availability SLA
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Sub-Second API Latency
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Bank-Grade Encryption
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                  Instant Sandbox Access
                </span>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. VERIFICATION APIs SECTION (20 Cards Responsive Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <ScrollReveal animation="fade-left" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] mb-3 shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>IDENTITY & ONBOARDING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0F1D] leading-tight mb-3">
                Verification APIs
              </h2>
              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed font-normal">
                Real-time identity &amp; document verification for onboarding and compliance
              </p>
            </ScrollReveal>
          </div>

          {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {verificationApis.map((api, index) => (
              <ScrollReveal
                key={api.id}
                animation="fade-up"
                duration={650}
                delay={index % 3 * 75}
                className="h-full"
              >
                <ApiProductCard item={api} theme="light" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. PAYMENT APIs SECTION (Centered Card Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <ScrollReveal animation="fade-down" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] mb-3 shadow-xs">
                <Zap className="h-3.5 w-3.5" />
                <span>PAYMENT INFRASTRUCTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0F1D] leading-tight mb-3">
                Payment APIs
              </h2>
              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed font-normal">
                Process payments, payouts, and collections at scale
              </p>
            </ScrollReveal>
          </div>

          {/* Centered Single Payment Card */}
          <div className="flex justify-center max-w-md mx-auto w-full">
            {paymentApis.map((api, index) => (
              <ScrollReveal
                key={api.id}
                animation="fade-up"
                duration={650}
                delay={index * 100}
                className="w-full"
              >
                <ApiProductCard item={api} theme="light" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BC AGENT APIs SECTION (Centered 2-Card Layout)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <ScrollReveal animation="fade-down" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] mb-3 shadow-xs">
                <Layers className="h-3.5 w-3.5" />
                <span>DOORSTEP BANKING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0A0F1D] leading-tight mb-3">
                BC Agent APIs
              </h2>
              <p className="text-base sm:text-lg text-[#5A6578] leading-relaxed font-normal">
                Enable banking services at doorstep through Business Correspondent agents
              </p>
            </ScrollReveal>
          </div>

          {/* Centered 2-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto w-full items-stretch">
            {bcAgentApis.map((api, index) => (
              <ScrollReveal
                key={api.id}
                animation="fade-up"
                duration={650}
                delay={index * 100}
                className="h-full"
              >
                <ApiProductCard item={api} theme="light" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          DEVELOPER ARCHITECTURE & INTEGRATION PILLARS (Modern Tech Showcase)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-22 bg-[#0A0F1D] text-[#FAF6F0] relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <ScrollReveal animation="fade-down" duration={700}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A] shadow-xs">
                <Code2 className="h-3.5 w-3.5 text-[#FF5E3A]" />
                <span>DEVELOPER FIRST ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FAF6F0]">
                Built for High Throughput &amp; Developer Simplicity
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal">
                Everything you need to embed frictionless identity verification and financial rails into your applications.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiHighlights.map((highlight, idx) => (
              <ScrollReveal
                key={highlight.title}
                animation="fade-up"
                duration={650}
                delay={idx * 100}
              >
                <div className="rounded-2xl bg-[#111827]/80 border border-white/10 p-6 space-y-3 hover:border-[#FF5E3A]/60 hover:bg-[#162035] transition-all duration-300 h-full flex flex-col justify-start">
                  <div className="h-10 w-10 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold">
                    {idx === 0 && <ShieldCheck className="h-5 w-5" />}
                    {idx === 1 && <Code2 className="h-5 w-5" />}
                    {idx === 2 && <Lock className="h-5 w-5" />}
                    {idx === 3 && <Zap className="h-5 w-5" />}
                  </div>
                  <h3 className="text-base font-bold text-[#FAF6F0]">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. FINAL CTA SECTION (Growlinqs Style)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#0A0F1D] text-[#FAF6F0]">
        {/* Subtle Orange Glow Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/12 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <ScrollReveal animation="zoom-in" duration={800}>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#111928] via-[#0E1726] to-[#0A0F1D] border border-white/15 p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
              <div className="max-w-2xl mx-auto space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#FF5E3A]" />
                  <span>START INTEGRATING TODAY</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FAF6F0] leading-snug">
                  Build Smarter Digital Solutions with{" "}
                  <span className="text-[#FF5E3A]">Growlinqs</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
                  Integrate powerful APIs and technology solutions designed to simplify verification, payments and digital financial services.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FF5E3A]/25"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#FAF6F0] bg-white/[0.06] border border-white/15 hover:bg-white/10 hover:border-[#FF5E3A] transition-all duration-200"
                  >
                    <span>Talk to Our Team</span>
                  </Link>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    Instant Sandbox Key Generation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    Detailed Documentation &amp; Postman
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    Direct Technical Architect Support
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
