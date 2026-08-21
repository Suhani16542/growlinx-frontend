import { Container } from "@/components/common/Container";
import { Counter } from "@/components/common/Counter";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Layers, Rocket, TrendingUp, Globe } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Digital Marketing Capabilities",
      description: "Comprehensive multi-channel growth capabilities",
      icon: Layers,
    },
    {
      value: 50,
      suffix: "+",
      label: "Campaigns & Projects",
      description: "Across technology, SaaS, ecommerce, and apps",
      icon: Rocket,
    },
    {
      value: 3,
      suffix: "X",
      label: "Growth-Focused Approach",
      description: "Targeted scaling frameworks designed for high ROI",
      icon: TrendingUp,
    },
    {
      value: 360,
      suffix: "°",
      label: "Digital Strategy",
      description: "Full-funnel integration from awareness to revenue",
      icon: Globe,
    },
  ];

  return (
    <section className="py-16 lg:py-24 border-y border-slate-800/80 bg-[#050811] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-900/30 to-purple-950/20 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={600}>
          <SectionHeading
            badge="Performance Metrics"
            title="Built for"
            highlightText="Measurable Growth"
            description="Our frameworks are built to deliver accountability, transparency, and scalable digital expansion."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={index}
                animation="zoom-in"
                duration={600}
                delay={index * 100}
              >
                <div className="glow-card rounded-2xl p-6 text-center lg:text-left relative group border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-200">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
