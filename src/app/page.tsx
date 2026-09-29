import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LeadContactPreview } from "@/components/sections/LeadContactPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO (LIGHT): Digital Marketing Agency Landing Page with Large Image & Subtle Particles */}
      <HeroSection />

      {/* 2. SECTION 2 (DARK + THREE.JS): 3D Digital Analytics & Attribution Bar */}
      <TrustBar />

      {/* 3. SECTION 3 (LIGHT + THREE.JS): Full-Funnel Digital Marketing Solutions Hub */}
      <ServicesSection />

      {/* 4. SECTION 4 (DARK + THREE.JS): The Growlinx Strategic Advantage & 3D Growth Curve */}
      <WhyChooseUs />

      {/* 5. SECTION 5 (LIGHT + THREE.JS): How We Scale Your Revenue (4-Step Process & 3D Flow) */}
      <ProcessSection />

      {/* 6. SECTION 6 (DARK + THREE.JS): Proven Case Studies with Verified Metrics */}
      <PortfolioSection />

      {/* 7. SECTION 7 (LIGHT): Client Endorsements & CMO Testimonials */}
      <TestimonialsSection />

      {/* 8. SECTION 8 (DARK): Final Growth Consultation Form & Conversion Section */}
      <LeadContactPreview />
    </div>
  );
}
