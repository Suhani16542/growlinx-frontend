import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/metadata";
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  BarChart2,
  Zap,
  Flame,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Who We Are & Our Growth Methodology",
  description:
    "Discover GrowlinX: our mission, vision, values, and data-backed digital marketing methodology engineered to scale ambitious businesses.",
  canonicalUrl: "https://growlinx.com/about-us",
});

export default function AboutUsPage() {
  const coreValues = [
    {
      title: "Data Over Assumptions",
      description: "We don't rely on gut feelings. Every campaign decision, creative angle, and bid adjustment is dictated by verified data and conversion signals.",
      icon: BarChart2,
    },
    {
      title: "Radical Transparency",
      description: "No inflated vanity numbers or obfuscated reports. Our clients have 24/7 access to live metrics tracking true CAC, ROAS, and pipeline revenue.",
      icon: ShieldCheck,
    },
    {
      title: "Relentless Iteration",
      description: "High-performance marketing is a continuous loop of testing, learning, and refining. We never settle for 'good enough' when scale is possible.",
      icon: Zap,
    },
    {
      title: "Client Growth as North Star",
      description: "We align our incentives with your commercial success. When your revenue and market authority scale, we win together.",
      icon: TrendingUp,
    },
  ];

  const methodologySteps = [
    {
      phase: "01",
      title: "Deep Discovery & Unit Economics",
      description: "We dissect your business model, customer lifetime value, margins, and target personas to construct a realistic revenue forecast.",
    },
    {
      phase: "02",
      title: "Multi-Channel Architecture",
      description: "We map out the optimal channel mix (SEO, Google Ads, Meta, YouTube, Influencers) to create synchronized buyer touchpoints.",
    },
    {
      phase: "03",
      title: "Creative & Technical Deployment",
      description: "Deploying high-converting landing pages, server-side conversion tracking, video reels, and keyword topic clusters.",
    },
    {
      phase: "04",
      title: "Continuous Scaling & Market Domination",
      description: "Pruning underperforming targets, multiplying budget into proven funnels, and unlocking new vertical expansion.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>About GrowlinX</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              We Engineer Digital Marketing for <br />
              <span className="glow-accent-gradient">Real Commercial Scale</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              GrowlinX was founded with a singular purpose: to replace vanity metrics and bloated agency retainers with transparent, data-driven marketing systems that produce measurable business growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/free-strategy-call" variant="gradient" size="lg">
                <span>Book a Strategy Call</span>
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                <span>Explore Services</span>
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Who We Are & What We Believe */}
      <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal animation="fade-up" duration={600}>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  A High-Performance Digital Marketing Unit
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  We are growth strategists, media buyers, technical SEO architects, and visual storytellers. Rather than operating as an isolated vendor, we integrate directly with your leadership team as an agile growth partner.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  From scaling funded FinTech startups to accelerating direct-to-consumer e-commerce brands and local industry leaders, our frameworks are battle-tested across competitive verticals.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-left" duration={700}>
                <div className="glow-card rounded-3xl p-8 border border-slate-800 space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Flame className="h-5 w-5 text-amber-400" />
                    What We Believe
                  </h3>
                  <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <p>Marketing is an investment with a required return, not an arbitrary cost center.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <p>Creative and media buying must work in lockstep—compelling hooks dictate conversion velocity.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <p>True scale comes from compounding organic authority combined with high-ROAS paid media.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-[#060914] border-t border-slate-800/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="fade-up" duration={600}>
              <div className="glow-card rounded-3xl p-8 sm:p-10 border border-slate-800 h-full space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  To empower ambitious businesses with predictable, highly profitable customer acquisition systems that eliminate revenue volatility and build lasting industry authority.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={600} delay={150}>
              <div className="glow-card rounded-3xl p-8 sm:p-10 border border-slate-800 h-full space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  To set the gold standard for full-funnel digital marketing by combining cutting-edge AI analytics, transparent attribution, and world-class creative storytelling.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={600}>
            <SectionHeading
              badge="Guiding Principles"
              title="Our Core Values"
              description="The foundational standards that guide every strategy we draft, ad we launch, and client relationship we nurture."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal
                  key={i}
                  animation="fade-up"
                  duration={500}
                  delay={i * 80}
                >
                  <div className="glow-card rounded-2xl p-6 border border-slate-800 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Growth-Focused Methodology */}
      <section className="py-20 bg-[#060914] border-t border-slate-800/80">
        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={600}>
            <SectionHeading
              badge="Systematic Scale"
              title="Our Growth-Focused Methodology"
              description="How our 4-phase strategic process eliminates wasted spend and drives predictable pipeline expansion."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((m, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                duration={500}
                delay={idx * 80}
              >
                <div className="glow-card rounded-2xl p-6 border border-slate-800 h-full">
                  <span className="text-3xl font-extrabold text-slate-700 font-mono block mb-3">
                    {m.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
}
