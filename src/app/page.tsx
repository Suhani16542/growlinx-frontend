import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhatGrowlinxDoes } from "@/components/sections/WhatGrowlinxDoes";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MarketingAnalyticsSection } from "@/components/sections/MarketingAnalyticsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LeadContactPreview } from "@/components/sections/LeadContactPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section (Large premium hero with animated growth dashboard) */}
      <HeroSection />

      {/* 2. Trust / Results Strip (Animated counters & key growth metrics) */}
      <TrustBar />

      {/* 3. About / Introduction Section (Digital Marketing Built for Real Business Growth) */}
      <WhatGrowlinxDoes />

      {/* 4. Services Overview (Complete Digital Marketing Solutions - 6 Core Cards) */}
      <ServicesSection />

      {/* 5. Why Choose GrowlinX (Why Businesses Choose GrowlinX - 6 Key Reasons) */}
      <WhyChooseUs />

      {/* 6. Digital Growth Process (How We Grow Your Business - 6 Phases) */}
      <ProcessSection />

      {/* 7. Marketing Performance / Analytics Section (Interactive Live Metrics) */}
      <MarketingAnalyticsSection />

      {/* 8. Industries We Serve (10 Specialized Vertical Cards) */}
      <IndustriesSection />

      {/* 9. Portfolio / Case Studies Preview (Work That Drives Growth - 6 Rich Studies) */}
      <PortfolioSection />

      {/* 10. Testimonials (Interactive Client Endorsement Carousel) */}
      <TestimonialsSection />

      {/* 11. FAQ Section (8 Expandable Animated Accordion Questions) */}
      <FAQSection />

      {/* 12. Strong CTA Section (Ready to Grow Your Business?) */}
      <CTASection />

      {/* 13. Contact Preview (Pre-Footer Lead Capture Form) */}
      <LeadContactPreview />
    </div>
  );
}
