import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadContactPreview } from "@/components/sections/LeadContactPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section (Digital Marketing -> Growth -> Real Results) */}
      <HeroSection />

      {/* 2. Key Results & Attribution Statistics Bar */}
      <TrustBar />

      {/* 3. Complete Digital Marketing Solutions */}
      <ServicesSection />

      {/* 4. The Growlinx Advantage (Why Businesses Choose Growlinx) */}
      <WhyChooseUs />

      {/* 5. How We Grow Your Business (4-Step Growth Journey) */}
      <ProcessSection />

      {/* 6. Industries We Scale (Interactive Vertical Playbooks) */}
      <IndustriesSection />

      {/* 7. Proven Case Studies (Editorial Impact Showcases) */}
      <PortfolioSection />

      {/* 8. Testimonials (Founder Endorsement Statement) */}
      <TestimonialsSection />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Final Conversion & Growth Consultation Form */}
      <LeadContactPreview />
    </div>
  );
}
