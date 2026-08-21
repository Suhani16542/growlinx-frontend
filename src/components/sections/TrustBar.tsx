"use client";

import { Container } from "@/components/common/Container";
import { Counter } from "@/components/common/Counter";
import { Users, Sparkles, TrendingUp, Headphones, Award } from "lucide-react";

export function TrustBar() {
  const stats = [
    {
      icon: Users,
      value: 15,
      suffix: "M+",
      label: "More Reach",
      subtext: "Audience impressions generated",
      glowColor: "text-cyan-400",
      bgGlow: "bg-cyan-500/10",
    },
    {
      icon: Sparkles,
      value: 240,
      prefix: "+",
      suffix: "%",
      label: "Higher Engagement",
      subtext: "Average interaction uplift",
      glowColor: "text-purple-400",
      bgGlow: "bg-purple-500/10",
    },
    {
      icon: TrendingUp,
      value: 380,
      prefix: "$",
      suffix: "M+",
      label: "Real Results",
      subtext: "Client revenue & pipeline generated",
      glowColor: "text-emerald-400",
      bgGlow: "bg-emerald-500/10",
    },
    {
      icon: Headphones,
      value: 100,
      suffix: "%",
      label: "Dedicated Support",
      subtext: "Proactive growth strategists",
      glowColor: "text-blue-400",
      bgGlow: "bg-blue-500/10",
    },
  ];

  return (
    <section className="relative border-y border-slate-800/80 bg-[#070d1c]/90 py-10 backdrop-blur-xl">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-slate-900/60"
              >
                {/* Icon Wrapper */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bgGlow} border border-slate-800 ${stat.glowColor} mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Animated Count / Value */}
                <div className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Main Label */}
                <span className="mt-1 text-sm sm:text-base font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {stat.label}
                </span>

                {/* Subtext */}
                <span className="mt-0.5 text-xs text-slate-400">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
