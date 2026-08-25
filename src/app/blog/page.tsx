"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogData, blogCategories } from "@/data/blog";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { Search, Clock, ArrowRight, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    <div className="flex flex-col w-full overflow-hidden bg-[#070b14]">
      {/* 1. Blog Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
              <span>Agency Insights & Growth Guides</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Ideas That Help <br />
              <span className="glow-accent-gradient">Modern Businesses Grow</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore tactical guides, algorithm analysis, performance marketing frameworks, and SEO case breakdowns.
            </p>

            {/* Search Input Bar */}
            <div className="mt-8 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search growth tactics, SEO, paid ads..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-xl"
              />
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Featured Article Banner */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="py-6 bg-[#070b14] border-t border-slate-800/80">
          <Container className="relative z-10">
            <ScrollReveal animation="fade-up" duration={500}>
              <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-[#090f20]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 font-semibold text-cyan-400 border border-blue-500/20">
                        Featured Guide
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white hover:text-cyan-300 transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs">
                          <User className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">
                          {featuredPost.author.name} • {featuredPost.publishedAt}
                        </span>
                      </div>

                      <Button href={`/blog/${featuredPost.slug}`} variant="gradient" size="sm" className="gap-1.5">
                        <span>Read Full Guide</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 text-center space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Growth Playbook
                    </span>
                    <h3 className="text-base font-bold text-white">Proven Tactics</h3>
                    <p className="text-xs text-slate-400">
                      Learn the exact ranking and paid acquisition blueprints driving verified client results.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* 3. Category Filter Tabs & Blog Grid */}
      <section className="py-16 bg-[#060914] border-t border-slate-800/80">
        <Container className="relative z-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
            {blogCategories.map((cat) => {
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(0, visibleCount).map((post, index) => (
              <ScrollReveal
                key={post.id}
                animation="fade-up"
                duration={400}
                delay={index * 50}
              >
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p>No articles found matching your criteria.</p>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="mt-12 text-center">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. CTA Section */}
      <CTASection />
    </div>
  );
}
