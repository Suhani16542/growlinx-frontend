import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { blogData } from "@/data/blog";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/BlogCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import {
  Clock,
  ArrowLeft,
  User,
  Sparkles,
  CheckCircle2,
  Share2,
  Calendar,
  BookOpen,
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
    title: `${post.title} | GrowlinX Insights`,
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
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Article Header Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="medium" />
        <Container className="relative z-10 max-w-4xl">
          <div className="mb-8">
            <Button
              href="/blog"
              variant="ghost"
              size="sm"
              className="gap-2 text-slate-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Insights
            </Button>
          </div>

          <ScrollReveal animation="fade-up" duration={600}>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-bold text-cyan-400 border border-cyan-500/20">
                {post.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Profile Banner */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px]">
                  <div className="h-full w-full rounded-full bg-[#0c1427] flex items-center justify-center text-cyan-300 font-bold text-sm">
                    {post.author.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-slate-400">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Verified Strategic Insight</span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Article Body & Takeaways */}
      <section className="py-16 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10 max-w-4xl">
          {/* Key Takeaways Box */}
          {post.takeaways && (
            <ScrollReveal animation="fade-up" duration={600}>
              <div className="glow-card rounded-2xl p-6 sm:p-8 border border-blue-500/30 bg-blue-950/20 mb-12">
                <h3 className="text-base font-bold text-cyan-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  Key Strategic Takeaways
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Body Content Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
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
          <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                Written by {post.author.name}
              </h4>
              <p className="text-xs text-slate-400">
                {post.author.role} at GrowlinX Digital Marketing Agency.
              </p>
            </div>
            <Button href="/free-strategy-call" variant="gradient" size="sm">
              <span>Discuss Strategy With Author</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* 3. Related Articles Section */}
      <section className="py-20 bg-[#060914] border-t border-slate-800/80">
        <Container className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Continue Reading
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Related Growth Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View All Insights →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost) => (
              <BlogCard key={relPost.id} post={relPost} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA Section */}
      <CTASection />
    </div>
  );
}
