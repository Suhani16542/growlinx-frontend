"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Search,
  Target,
  Share2,
  Smartphone,
  Flame,
  Video,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "seo",
      title: "SEO Services",
      description: "Build long-term organic visibility through technical, on-page, off-page, and local SEO strategies that secure top search rankings.",
      icon: Search,
      href: "/services/seo",
      tag: "ORGANIC GROWTH",
    },
    {
      id: "paid-advertising",
      title: "Paid Advertising & Media",
      description: "High-ROAS multichannel acquisition campaigns across Google Ads, Meta, LinkedIn, and programmatic networks with real-time budget optimization.",
      icon: Target,
      href: "/services/paid-advertising",
      tag: "HIGH ROAS",
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Transforming social profiles into high-converting revenue channels with engaging short-form creative, community management, and brand storytelling.",
      icon: Share2,
      href: "/services/social-media-management",
      tag: "BRAND INFLUENCE",
    },
    {
      id: "app-marketing",
      title: "App Marketing & Acquisition",
      description: "Accelerating mobile app downloads, App Store Optimization (ASO), and low-CPA install campaigns that maximize long-term retention.",
      icon: Smartphone,
      href: "/services/app-marketing",
      tag: "USER ACQUISITION",
    },
    {
      id: "influencer-management",
      title: "Influencer Management",
      description: "Vetted creator partnerships and authentic viral brand collaborations that generate direct conversions, social proof, and high-trust reach.",
      icon: Flame,
      href: "/services/influencer-management",
      tag: "CREATOR SCALE",
    },
    {
      id: "youtube-monetization",
      title: "YouTube Monetization",
      description: "Strategic video optimization, thumbnail psychology, channel growth frameworks, and monetization architectures to build recurring digital revenue.",
      icon: Video,
      href: "/services/youtube-monetization",
      tag: "VIDEO SCALE",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 cream-surface overflow-hidden border-b border-[#EADECE]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFEBE5]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>FULL-FUNNEL CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1D] leading-tight">
              Complete Digital Marketing <br className="hidden sm:inline" />
              <span className="text-[#FF5E3A]">Solutions</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#5A6578] font-medium leading-relaxed">
              High-impact growth marketing capabilities engineered to dominate search rankings, maximize return on ad spend, and scale compounding business revenue.
            </p>
          </div>
        </ScrollReveal>

        {/* Six Service Cards in Cream Rounded Containers with Side Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
            const delay = (idx % 3) * 120;
            return (
              <ScrollReveal
                key={service.id}
                animation={anim}
                duration={750}
                delay={delay}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="cream-card cream-card-interactive group rounded-3xl p-7 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578] group-hover:text-[#0A0F1D] transition-colors">
                        {service.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors flex items-center gap-1.5">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed mt-2 font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#EADECE] flex items-center justify-between text-xs font-bold text-[#5A6578] group-hover:text-[#0A0F1D] transition-colors mt-6">
                    <span>Explore Solution</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#FF5E3A]" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
