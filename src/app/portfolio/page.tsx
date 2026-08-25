"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { portfolioData, portfolioCategories } from "@/data/portfolio";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { Trophy, X } from "lucide-react";
import { PortfolioItem } from "@/types";
import { Button } from "@/components/ui/Button";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) =>
          item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()))
        );

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#070b14]">
      {/* 1. Portfolio Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <Trophy className="h-3.5 w-3.5 text-amber-400" />
              <span>Proven Growth Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Work That Generates <br />
              <span className="glow-accent-gradient">Measurable Commercial Impact</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore how we've helped high-growth brands scale organic search presence, drive attributable revenue, and lower customer acquisition costs.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Filter Tabs & Portfolio Grid */}
      <section className="py-16 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
            {portfolioCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                duration={400}
                delay={index * 50}
              >
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="cursor-pointer h-full"
                >
                  <PortfolioCard item={item} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p>No case studies found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Case Study Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="glow-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-800 bg-[#090f20] relative animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {activeModalItem.category} • {activeModalItem.client}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalItem.summary}
              </p>

              {activeModalItem.challenge && (
                <div className="rounded-xl bg-slate-900/80 p-4 border border-slate-800">
                  <span className="text-xs font-bold text-white block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activeModalItem.challenge}
                  </p>
                </div>
              )}

              {activeModalItem.solution && (
                <div className="rounded-xl bg-blue-950/20 p-4 border border-blue-500/20">
                  <span className="text-xs font-bold text-cyan-300 block mb-1">
                    The Growlinx Solution:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeModalItem.solution}
                  </p>
                </div>
              )}

              {/* Key Results */}
              <div className="pt-2">
                <span className="text-xs font-bold text-white block mb-2 uppercase tracking-wider">
                  Verified Results:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeModalItem.results.map((r, i) => (
                    <div key={i} className="rounded-xl bg-slate-900/80 border border-slate-800 p-3 text-center">
                      <span className="text-lg font-bold text-cyan-400 block">
                        {r.value}
                      </span>
                      <span className="text-[11px] text-slate-400">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <Button href="/free-strategy-call" variant="gradient" size="sm">
                  <span>Replicate These Results</span>
                </Button>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. CTA Section */}
      <CTASection />
    </div>
  );
}
