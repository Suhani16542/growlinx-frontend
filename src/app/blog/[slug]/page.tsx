import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { blogData } from "@/data/blog";
import { Container } from "@/components/common/Container";
import { BlogCard } from "@/components/ui/BlogCard";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { constructMetadata } from "@/lib/metadata";
import {
  Clock,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  User,
} from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
    });
  }

  return constructMetadata({
    title: `${post.title} | Growlinx Insights`,
    description: post.excerpt,
    canonicalUrl: `https://growlinx.com/blog/${post.slug}`,
  });
}

export default async function BlogPostDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0F1D]">
      {/* 1. Article Header Section (Dark Navy) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10 max-w-4xl">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#FF5E3A] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Insights</span>
            </Link>
          </div>

          <ScrollReveal animation="fade-up" duration={750}>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <span className="rounded-full bg-white/[0.06] px-3.5 py-1 font-extrabold uppercase tracking-widest text-[#FF5E3A] border border-[#FF5E3A]/30 text-[10px]">
                {post.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FAF6F0] leading-tight">
              {post.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Profile Banner */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/[0.08] border border-[#FF5E3A]/40 flex items-center justify-center text-[#FF5E3A] font-bold text-sm">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <span className="text-sm font-bold text-[#FAF6F0] block">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-slate-400">{post.author.role}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Article Body & Takeaways (Warm White / Cream Surface) */}
      <section className="py-16 lg:py-20 bg-[#FAF6F0] cream-surface border-b border-[#EADECE] relative overflow-hidden">
        <Container className="relative z-10 max-w-3xl">
          {/* Key Strategic Takeaways Box */}
          {post.takeaways && (
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="cream-card rounded-3xl p-7 sm:p-8 border border-[#EADECE] bg-white mb-12 shadow-md">
                <h3 className="text-xs font-extrabold text-[#FF5E3A] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Key Strategic Takeaways</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {post.takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A0F1D] font-semibold">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#FF5E3A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Body Content Paragraphs */}
          <ScrollReveal animation="fade-up" duration={750} delay={100}>
            <div className="space-y-6 text-base sm:text-lg text-[#2D3748] leading-relaxed font-normal">
              {post.content ? (
                post.content.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{post.excerpt}</p>
              )}
            </div>

            {/* Author Bio Box */}
            <div className="mt-14 pt-8 border-t border-[#EADECE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h4 className="text-base font-bold text-[#0A0F1D]">
                  Written by {post.author.name}
                </h4>
                <p className="text-xs text-[#5A6578] font-medium mt-0.5">
                  {post.author.role} at Growlinx Growth Consultancy.
                </p>
              </div>
              <Link
                href="/free-strategy-call"
                className="orange-btn inline-flex items-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
              >
                <span>Discuss With Author</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 3. Related Articles Section (Warm White / Cream Surface) */}
      <section className="py-20 lg:py-24 bg-[#FAF6F0] cream-surface border-b border-[#EADECE] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                CONTINUE LEARNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] mt-1">
                Related Growth Playbooks
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-extrabold uppercase tracking-wider text-[#0A0F1D] hover:text-[#FF5E3A] transition-colors"
            >
              View All Insights →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 2 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={relPost.id}
                  animation={anim}
                  duration={750}
                  delay={idx * 120}
                  className="h-full"
                >
                  <BlogCard post={relPost} theme="light" />
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. CTA Section */}
      <CTASection />
    </div>
  );
}
