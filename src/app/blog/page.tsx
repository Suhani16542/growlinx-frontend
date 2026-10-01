"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogData, blogCategories } from "@/data/blog";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Search,
  Clock,
  ArrowRight,
  BookOpen,
  User,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredPost = blogData[0];

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      {/* =========================================================================
          SECTION 1: HERO SECTION (LIGHT: Warm White / Cream + Search Bar)
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Ambient Atmosphere */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10 text-center max-w-3xl mx-auto space-y-5">
          <ScrollReveal animation="fade-up" duration={750} className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
              <BookOpen className="h-3.5 w-3.5" />
              <span>GROWTH INSIGHTS & TACTICAL PLAYBOOKS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0A0F1D]">
              Tactical Insights for{" "}
              <span className="text-[#FF5E3A]">High-Growth Brands.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-medium max-w-2xl mx-auto">
              Explore battle-tested playbooks on AI search algorithms, server-side attribution, creative fatigue elimination, and conversion rate optimization.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-lg mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search SEO playbooks, paid media frameworks, ASO..."
                className="w-full rounded-full border border-[#EADECE] bg-white py-3.5 pl-12 pr-5 text-xs sm:text-sm text-[#0A0F1D] placeholder-[#5A6578] focus:border-[#FF5E3A] focus:outline-none focus:ring-2 focus:ring-[#FF5E3A]/20 shadow-sm transition-all font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FF5E3A]" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURED ARTICLE HERO CARD (LIGHT: Large Rounded Image)
          ========================================================================= */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="py-12 sm:py-16 cream-surface border-b border-[#EADECE]">
          <Container>
            <ScrollReveal animation="fade-up" duration={750}>
              <div className="cream-card rounded-3xl p-6 sm:p-9 border border-[#EADECE] bg-white shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-[#FAF6F0] px-3 py-1 font-extrabold text-[#FF5E3A] uppercase tracking-wider border border-[#EADECE] text-[10px]">
                        Featured Playbook
                      </span>
                      <span className="text-[#5A6578] font-bold flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#FF5E3A]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1D] hover:text-[#FF5E3A] transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#FF5E3A] font-bold text-xs">
                          {featuredPost.author.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#0A0F1D] block">
                            {featuredPost.author.name}
                          </span>
                          <span className="text-[10px] text-[#5A6578]">
                            {featuredPost.author.role}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="orange-btn inline-flex items-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
                      >
                        <span>Read Full Playbook</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <Link href={`/blog/${featuredPost.slug}`} className="block relative rounded-2xl overflow-hidden border border-[#EADECE] aspect-[16/11] bg-[#FAF6F0] group">
                      <Image
                        src="/images/service-seo-dashboard.jpg"
                        alt={featuredPost.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* =========================================================================
          SECTION 3: FILTER TABS & ARTICLES GRID (LIGHT: Responsive Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#EADECE] mb-10">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                BROWSE BY TOPIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] mt-1">
                Growth Guides & Architecture
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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
          </div>

          {/* Responsive Article Cards Grid with Side Scroll Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(0, visibleCount).map((post, idx) => {
              const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
              const delay = (idx % 3) * 120;
              return (
                <ScrollReveal
                  key={post.id}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <BlogCard post={post} theme="light" />
                </ScrollReveal>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-[#5A6578] space-y-3">
              <p className="text-lg font-bold text-[#0A0F1D]">No playbooks found matching your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs font-extrabold text-[#FF5E3A] uppercase tracking-wider hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > visibleCount && (
            <div className="text-center pt-12">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>Load More Insights ({filteredPosts.length - visibleCount} Remaining)</span>
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3.5: EXPLORE OUR EXPERTISE / WHAT WE WRITE ABOUT (LIGHT: With Images)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EXPLORE OUR EXPERTISE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                What We <span className="text-[#FF5E3A]">Write About</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                Curated tactical deep-dives across our core disciplines, authored by senior digital marketing architects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Search Engine Optimization",
                category: "SEO",
                desc: "Technical indexation, AI Overviews entity optimization, and topical authority architecture that captures commercial buyer queries.",
                image: "/images/service-seo-dashboard.jpg",
                tag: "Organic Search",
              },
              {
                title: "Paid Media & ROAS Funnels",
                category: "Paid Ads",
                desc: "Server-side CAPI tracking, high-CTR motion creative sprints, and value-based algorithmic bidding frameworks.",
                image: "/images/service-paid-ads.jpg",
                tag: "Paid Acquisition",
              },
              {
                title: "Social Media & Viral Content",
                category: "Social Media",
                desc: "Multi-format content engines, short-form retention pacing, and social commerce checkout architectures.",
                image: "/images/service-social-media.jpg",
                tag: "Brand Amplification",
              },
              {
                title: "App Marketing & ASO",
                category: "App Marketing",
                desc: "Custom product pages, Apple Search Ads keyword bidding, and Day 30 retention loop engineering.",
                image: "/images/service-app-marketing.jpg",
                tag: "Mobile Scaling",
              },
              {
                title: "Influencer & Creator Strategy",
                category: "Influencer",
                desc: "Creator audience integrity auditing, authentic UGC production, and performance whitelisting.",
                image: "/images/hero-agency-studio.jpg",
                tag: "Creator Economy",
              },
              {
                title: "Conversion Optimization & Analytics",
                category: "Growth",
                desc: "Server-to-server event dispatching, multi-touch incrementality testing, and landing page split-testing.",
                image: "/images/marketing-strategy-growth.jpg",
                tag: "Conversion Science",
              },
            ].map((topic, idx) => {
              const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={topic.title}
                  animation={anim}
                  duration={750}
                  delay={idx * 100}
                  className="h-full"
                >
                  <div
                    onClick={() => {
                      setSelectedCategory(topic.category);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="cream-card cream-card-interactive group rounded-3xl p-5 border border-[#EADECE] bg-white flex flex-col justify-between space-y-4 h-full cursor-pointer"
                  >
                    <div className="space-y-3.5">
                      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#FAF6F0] border border-[#EADECE]">
                        <Image
                          src={topic.image}
                          alt={topic.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-[#0A0F1D]/80 backdrop-blur-md rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#FAF6F0] border border-white/10">
                          {topic.tag}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                          {topic.title}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                          {topic.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center justify-between text-xs font-bold text-[#FF5E3A]">
                      <span>Filter Playbooks</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: DARK NAVY 3D TELEMETRY BREAK SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Algorithm Analysis Card */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-white/5 shadow-2xl aspect-[4/3] p-2">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src="/images/service-seo-dashboard.jpg"
                      alt="Algorithm Signal Mining"
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
                        <p className="text-xs font-black text-[#FAF6F0]">Algorithm Signal Engine</p>
                        <p className="text-[10px] text-slate-400 font-bold">Continuous Index Monitoring</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/40">
                      Real-Time Analysis
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
                  <Zap className="h-3.5 w-3.5" />
                  <span>ALGORITHMIC SIGNAL MINING</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-tight">
                  How We Decode Platform <br />
                  <span className="text-[#FF5E3A]">Algorithm Shifts</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Our strategic research team constantly benchmarks search index updates, Meta auction changes, and TikTok recommendation graph behaviors to keep our clients ahead of market volatility.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#FAF6F0]">Search Engine & AI Overviews</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Optimizing for entity authority and zero-click AI snippet capture across Google & Perplexity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#FAF6F0]">Paid Auction Intelligence</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Statistical bidding models designed to capture low-CPA conversions during high-demand auctions.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: BOTTOM CTA SECTION
          ========================================================================= */}
      <CTASection />
    </div>
  );
}
