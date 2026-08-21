import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { blogData } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export function LatestInsights() {
  // Only display 3 blog cards on homepage
  const featuredPosts = blogData.slice(0, 3);

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
