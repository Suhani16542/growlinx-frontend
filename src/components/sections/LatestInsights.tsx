"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { blogData as initialBlogData } from "@/data/blog";
import { BlogPostItem } from "@/types";
import { api, BackendBlog } from "@/lib/api";
import { ArrowRight } from "lucide-react";

export function LatestInsights() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPostItem[]>(initialBlogData.slice(0, 3));

  useEffect(() => {
    async function loadLatest() {
      try {
        const res = await api.blogs.getBlogs({ limit: 3 });
        if (res.success && res.data?.blogs && res.data.blogs.length > 0) {
          const mapped: BlogPostItem[] = res.data.blogs.map((b: BackendBlog) => {
            const catName =
              typeof b.category === "object" && b.category !== null
                ? (b.category as any).name
                : "Growth Strategy";
            const authorName =
              typeof b.author === "object" && b.author !== null
                ? (b.author as any).name
                : "Growlinqs Strategist";

            return {
              id: b.id,
              slug: b.slug,
              title: b.title,
              excerpt: b.excerpt || "",
              content: [b.content],
              takeaways: [],
              category: catName,
              readTime: "5 min read",
              publishedAt: b.publishedAt
                ? new Date(b.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent",
              author: {
                name: authorName,
                role: "Performance Growth Strategist",
              },
              imageSrc: b.featuredImage || "/images/service-seo-dashboard.jpg",
            };
          });
          setFeaturedPosts(mapped);
        }
      } catch {
        // Silently use fallback initialBlogData
      }
    }
    loadLatest();
  }, []);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#050811] border-t border-slate-800/80">
      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Articles & Perspectives"
            title="Ideas That Help"
            highlightText="Businesses Grow"
            description="Explore actionable articles, digital strategy breakdowns, and performance marketing frameworks."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              animation="fade-up"
              duration={600}
              delay={index * 120}
            >
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ScrollReveal animation="fade-up" duration={600} delay={200}>
            <Button href="/blog" variant="outline" size="lg">
              <span>Explore All Insights</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
