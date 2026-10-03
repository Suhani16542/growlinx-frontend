"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { portfolioData, portfolioCategories } from "@/data/portfolio";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Trophy,
  X,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Layers,
  ArrowUpRight,
  Zap,
  Target,
  Search,
  Smartphone,
  Video,
  Share2,
} from "lucide-react";
import { PortfolioItem } from "@/types";

const disciplineTabs = [
  { id: "paid-advertising", label: "Paid Acquisition (ROAS)", icon: Target },
  { id: "seo", label: "Organic Search Engine", icon: Search },
  { id: "app-marketing", label: "App Store Growth", icon: Smartphone },
  { id: "social-media-management", label: "Social ROI Funnels", icon: Share2 },
  { id: "youtube-monetization", label: "Creator Monetization", icon: Video },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [activeDiscipline, setActiveDiscipline] = useState("paid-advertising");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) =>
            item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            item.tags.some((t) =>
              t.toLowerCase().includes(selectedCategory.toLowerCase())
            )
        );

  const featuredCaseStudy = portfolioData[1]; // SaaS SEO Dominance (+180% growth)

  const aggregateMetrics = [
    { label: "Average ROAS Multiplier", value: "3.2X - 4.8X", subtext: "Audited performance across ad networks" },
    { label: "Organic Search Lift", value: "+180%", subtext: "Average top-3 ranking traffic velocity" },
    { label: "Total App Downloads", value: "500K+", subtext: "Across iOS App Store & Google Play" },
    { label: "Client Inbound Pipeline", value: "$32M+", subtext: "Attributable commercial pipeline value" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      {/* =========================================================================
          SECTION 1: HERO SECTION WITH INTERACTIVE THREE.JS GROWTH ENGINE
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Ambient Radiance */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Trophy className="h-3.5 w-3.5" />
                  <span>VERIFIED CASE STUDIES & AUDITED DATA</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0A0F1D]">
                  Work That Drives{" "}
                  <span className="text-[#FF5E3A]">Predictable Growth.</span>
                </h1>

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  Explore how we engineer multi-channel digital acquisition systems—scaling organic search authority, driving high-ROAS paid acquisition, and accelerating mobile installs for market leaders.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/20"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Audit Your Acquisition Free</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs"
                  >
                    <span>Explore Capabilities</span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-[#EADECE] flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#5A6578] font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    100% Attributable ROI
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    Server-Side Tracking
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                    Real Commercial Revenue
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: High-Impact Performance Image Card */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-[#EADECE] bg-white shadow-2xl aspect-[4/3] sm:aspect-[16/12] p-2">
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                      <Image
                        src="/images/case-study-saas.jpg"
                        alt="Growlinqs Verified Client Growth"
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
                        <p className="text-[10px] font-bold text-[#5A6578] uppercase mt-0.5">Pipeline Scale</p>
                      </div>
                    </div>

                    {/* Floating Telemetry Chip 2 */}
                    <div className="absolute bottom-5 right-5 bg-[#0A0F1D]/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/10 flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#FAF6F0] leading-none">4.8X Blended ROAS</p>
                        <p className="text-[10px] font-bold text-[#FF5E3A] uppercase mt-0.5">Verified Return</p>
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
          SECTION 2: FEATURED SPOTLIGHT CASE STUDY (LIGHT: Asymmetric Editorial Card)
          ========================================================================= */}
      <section className="py-12 sm:py-16 cream-surface border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={750}>
            <div className="cream-card rounded-3xl p-6 sm:p-9 border border-[#EADECE] bg-white shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-[#FAF6F0] px-3 py-1 font-extrabold text-[#FF5E3A] uppercase tracking-wider border border-[#EADECE] text-[10px]">
                      Featured Case Study
                    </span>
                    <span className="text-[#5A6578] font-bold">
                      {featuredCaseStudy.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1D] leading-tight">
                    {featuredCaseStudy.title}
                  </h2>

                  <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                    {featuredCaseStudy.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {featuredCaseStudy.results.map((r, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-[#FAF6F0] border border-[#EADECE] p-3 text-center"
                      >
                        <span className="text-base sm:text-lg font-black text-[#0A0F1D] block">
                          {r.value}
                        </span>
                        <span className="text-[10px] font-semibold text-[#5A6578] mt-0.5 block line-clamp-1">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(featuredCaseStudy)}
                      className="orange-btn inline-flex items-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider cursor-pointer"
                    >
                      <span>Read Full Breakdown</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-[#EADECE] aspect-[16/11] bg-[#FAF6F0] shadow-md group">
                    <Image
                      src="/images/case-study-seo.jpg"
                      alt={featuredCaseStudy.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-[#FF5E3A]" /> Click to inspect audited metrics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: FILTER TABS & PORTFOLIO GRID (LIGHT: Responsive Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE] relative overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-10">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>FILTER BY GROWTH DISCIPLINE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Explore Our <span className="text-[#FF5E3A]">Client Success</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal animation="fade-up" duration={600} delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
              {portfolioCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 sm:px-5 py-2 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "orange-btn shadow-md shadow-[#FF5E3A]/25"
                        : "bg-white border border-[#EADECE] text-[#5A6578] hover:border-[#FF5E3A] hover:text-[#0A0F1D] shadow-xs"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Alternating & Responsive Grid with Side Scroll Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => {
              const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
              const delay = (idx % 3) * 120;
              return (
                <ScrollReveal
                  key={item.id}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="cursor-pointer h-full"
                  >
                    <PortfolioCard item={item} theme="light" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-[#5A6578]">
              <p className="text-base font-bold">No case studies found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: OUR APPROACH TO EVERY PROJECT (LIGHT: 01 → 02 → 03 → 04)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Target className="h-3.5 w-3.5" />
                <span>EXECUTION METHODOLOGY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Our Approach to <span className="text-[#FF5E3A]">Every Project</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                How our senior growth architects move your brand from initial diagnostic discovery to compounding commercial scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Diagnostic Audit & Unit Economics",
                desc: "Uncovering attribution blind spots, conversion funnel leaks, and high-intent competitor keyword opportunities.",
                tag: "Discovery",
              },
              {
                step: "02",
                title: "Bespoke Multi-Channel Blueprint",
                desc: "Architecting synchronized organic search, creator outreach, and paid ad acquisition funnels tailored to target LTV.",
                tag: "Strategy",
              },
              {
                step: "03",
                title: "Agile Sprints & Creative Deployment",
                desc: "Weekly iterative sprints testing new visual hooks, copy angles, landing page variations, and bidding models.",
                tag: "Execution",
              },
              {
                step: "04",
                title: "Revenue Compression & Scaling",
                desc: "Aggressively scaling budget into validated winners while maintaining strict unit economics and expanding margins.",
                tag: "Scale",
              },
            ].map((p, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={p.step}
                  animation={anim}
                  duration={750}
                  delay={idx * 110}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-[#FF5E3A] font-mono leading-none">
                          {p.step}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          {p.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                        {p.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center justify-between text-[10px] font-bold text-[#5A6578]">
                      <span>Phase Protocol</span>
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
          SECTION 4.5: RESULTS & IMPACT (LIGHT: Verified Git Data Benchmarks)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>AUDITED PERFORMANCE DATA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Results & <span className="text-[#FF5E3A]">Impact</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                Real, audited performance metrics achieved across our client portfolio using verified first-party and server telemetry data.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aggregateMetrics.map((m, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={idx}
                  animation={anim}
                  duration={750}
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-3 h-full">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#FF5E3A] block mb-1 leading-none font-mono">
                        {m.value}
                      </span>
                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1">
                        {m.label}
                      </h3>
                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {m.subtext}
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
          SECTION 5: INTERACTIVE 3D PERFORMANCE ATTRIBUTION ENGINE (DARK NAVY)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Interactive Attributor Discipline Showcase */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="rounded-[2rem] bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0A0F1D] border border-white/15 p-4 sm:p-5 shadow-2xl relative overflow-hidden">
                  <div className="w-full flex items-center justify-between pb-3 px-2 text-xs text-slate-300 font-bold border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#FF5E3A]" />
                      <span className="text-[#FAF6F0]">Multi-Touch Attribution Engine</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/30">
                      Live Telemetry
                    </span>
                  </div>

                  {/* Discipline Image Banner */}
                  <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden mt-3 border border-white/10">
                    <Image
                      src={
                        activeDiscipline === "seo"
                          ? "/images/service-seo-dashboard.jpg"
                          : activeDiscipline === "app-marketing"
                          ? "/images/service-app-marketing.jpg"
                          : activeDiscipline === "social-media-management"
                          ? "/images/service-social-media.jpg"
                          : activeDiscipline === "youtube-monetization"
                          ? "/images/hero-agency-studio.jpg"
                          : "/images/service-paid-ads.jpg"
                      }
                      alt="Campaign Telemetry Discipline Showcase"
                      fill
                      className="object-cover object-center transition-all duration-500"
                    />
                  </div>

                  {/* Discipline Interactive Switcher */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5 justify-center">
                    {disciplineTabs.map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeDiscipline === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveDiscipline(tab.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-[#FF5E3A] text-white shadow-md shadow-[#FF5E3A]/30 scale-105"
                              : "bg-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.1] border border-white/10"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Telemetry Breakdown Copy */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
                  <BarChart3 className="h-3.5 w-3.5" />
                  <span>CROSS-PLATFORM ATTRIBUTION ENGINE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-tight">
                  How We Measure & Scale <br />
                  <span className="text-[#FF5E3A]">Every Single Dollar</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  We eliminate guesswork through rigorous server-side telemetry, custom conversion APIs, and statistical cohort analysis. Every marketing action is tied to net-new customer acquisition and blended ROAS.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#FAF6F0]">Server-Side Tracking Infrastructure</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Bypass cookie degradation with 100% privacy-compliant server-to-server event dispatching.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#FAF6F0]">Algorithmic Budget Re-Allocation</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Dynamic capital shifting to highest-converting ad sets and high-intent keyword clusters.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0 font-bold text-xs">
                      03
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#FAF6F0]">Multi-Touch Incrementality Testing</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Validate true organic vs paid lift with lift studies and geo-holdout experiments.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          CASE STUDY BREAKDOWN MODAL
          ========================================================================= */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#EADECE] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#0A0F1D] hover:bg-[#FF5E3A] hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#EADECE]">
                    {activeModalItem.category}
                  </span>
                  <span className="text-xs font-bold text-[#5A6578]">
                    Client: {activeModalItem.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] pr-8">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Case Study Image Banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-[#FAF6F0] border border-[#EADECE]">
                <Image
                  src={
                    activeModalItem.slug === "saas-seo-dominance"
                      ? "/images/case-study-seo.jpg"
                      : activeModalItem.slug === "ecommerce-paid-ads-scale"
                      ? "/images/service-paid-ads.jpg"
                      : activeModalItem.slug === "viral-social-campaign"
                      ? "/images/service-social-media.jpg"
                      : activeModalItem.slug === "fintech-app-acquisition"
                      ? "/images/case-study-saas.jpg"
                      : activeModalItem.slug === "influencer-product-launch"
                      ? "/images/case-study-ecommerce.jpg"
                      : "/images/marketing-strategy-growth.jpg"
                  }
                  alt={activeModalItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Performance Results */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5E3A] mb-3">
                  Audited Campaign Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalItem.results.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-[#FAF6F0] border border-[#EADECE] p-4 text-center"
                    >
                      <span className="text-xl sm:text-2xl font-black text-[#0A0F1D] block">
                        {r.value}
                      </span>
                      <span className="text-xs font-semibold text-[#5A6578] mt-1 block">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy & Execution Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0A0F1D]">
                  Strategic Execution
                </h4>
                <p className="text-sm text-[#5A6578] leading-relaxed">
                  {activeModalItem.summary}
                </p>
                {activeModalItem.challenge && (
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A0F1D] block">
                      Core Challenge:
                    </span>
                    <p className="text-xs text-[#5A6578] leading-relaxed">
                      {activeModalItem.challenge}
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Inside Modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EADECE]">
                <span className="text-xs text-[#5A6578] font-bold">
                  Want similar compounding growth for your brand?
                </span>
                <Link
                  href="/free-strategy-call"
                  className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 6: BOTTOM CTA SECTION
          ========================================================================= */}
      <CTASection />
    </div>
  );
}
