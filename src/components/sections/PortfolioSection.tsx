"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers } from "lucide-react";

export function PortfolioSection() {
  // Show all 6 case studies on the home page for a rich experience
  const featuredCases = portfolioData.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative overflow-hidden bg-[#070b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Proven Case Studies"
            title="Work That Drives Growth"
            description="Explore how our data-first digital marketing frameworks have delivered verified return on ad spend, search dominance, and rapid customer acquisition."
            align="center"
          />
        </ScrollReveal>

        {/* 6 Case Studies Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              duration={500}
              delay={index * 80}
            >
              <PortfolioCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* "View All Portfolio" CTA */}
        <ScrollReveal animation="fade-up" duration={600} delay={300}>
          <div className="mt-14 flex items-center justify-center">
            <Button
              href="/portfolio"
              variant="secondary"
              size="lg"
              className="gap-2 border border-slate-700 hover:border-cyan-500/50 shadow-lg"
            >
              <Layers className="h-4 w-4 text-cyan-400" />
              <span>View All Portfolio & Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
