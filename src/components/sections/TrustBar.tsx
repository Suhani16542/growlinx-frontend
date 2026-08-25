"use client";

import { Container } from "@/components/common/Container";
import { Counter } from "@/components/common/Counter";
import { Users, Sparkles, TrendingUp, Headphones } from "lucide-react";

export function TrustBar() {
  const stats = [
    {
      value: 15,
      suffix: "M+",
      label: "Audience Impressions",
      caption: "High-intent market reach",
      accent: "from-cyan-400 to-blue-500",
    },
    {
      value: 240,
      suffix: "%+",
      label: "Average Pipeline Growth",
      caption: "Inbound revenue acceleration",
      accent: "from-emerald-400 to-cyan-400",
    },
    {
      value: 380,
      prefix: "$",
      suffix: "M+",
      label: "Client Revenue Generated",
      caption: "Direct commercial attribution",
      accent: "from-blue-400 to-indigo-400",
    },
    {
      value: 100,
      suffix: "%",
      label: "Transparent Attribution",
      caption: "Real-time telemetry tracking",
      accent: "from-purple-400 to-cyan-400",
    },
  ];

  return (
    <section id="results" className="relative border-y border-white/[0.07] bg-[#060a15] py-14 lg:py-20 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/[0.06] lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 lg:px-8 group transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Giant Typography Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.accent}`}>
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
              </div>

              {/* Minimal Label */}
              <span className="mt-3 text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                {stat.label}
              </span>

              {/* Tiny Caption */}
              <span className="mt-1 text-xs text-slate-400 font-medium max-w-[200px]">
                {stat.caption}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
