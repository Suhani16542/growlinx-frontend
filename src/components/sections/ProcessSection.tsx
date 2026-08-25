"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { useInView } from "@/hooks/useInView";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.25 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      num: "01",
      title: "Discover",
      phase: "Audit & Intelligence",
      description:
        "Deep-dive audit of market positioning, search demand, conversion bottlenecks, and competitor vulnerabilities.",
      deliverables: ["Full Tech & SEO Audit", "TAM Demand Analysis", "Competitor Matrix"],
    },
    {
      num: "02",
      title: "Strategize",
      phase: "Growth Architecture",
      description:
        "Bespoke full-funnel blueprint defining high-intent channel priorities, unit economics, and pipeline KPI targets.",
      deliverables: ["Channel CAC Modeling", "High-Converting Angle Maps", "Revenue KPI Roadmap"],
    },
    {
      num: "03",
      title: "Execute",
      phase: "Velocity Deployment",
      description:
        "High-velocity deployment of direct-response creative, technical SEO infrastructure, and multi-touch telemetry.",
      deliverables: ["Direct-Response Ads", "Landing Page CRO", "Real-Time Telemetry"],
    },
    {
      num: "04",
      title: "Scale",
      phase: "Compounding Revenue",
      description:
        "Aggressive budget compounding on validated winning funnels to multiply customer lifetime value and commercial profit.",
      deliverables: ["Budget Compounding", "LTV Multipliers", "Dominant Market Share"],
    },
  ];

  // Automatic Step Tracker Cycle when in viewport
  useEffect(() => {
    if (!inView || isManual) return;

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [inView, isManual, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsManual(true);
    // Reset manual override after 8 seconds of inactivity
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsManual(false);
    }, 8000);
  };

  // Compute progress line width (0% -> 33.3% -> 66.6% -> 100%)
  const progressWidth = `${(activeStep / (steps.length - 1)) * 100}%`;

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-[#060a15] border-t border-white/[0.06]"
    >
      {/* Background ambient glow focused behind active step */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <ScrollReveal animation="fade-up" duration={500}>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-3">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="tracking-wider uppercase font-bold text-cyan-300">
                Live Sequential Growth Tracker
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              How We Grow <span className="glow-accent-gradient">Your Business</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl">
              A repeatable, battle-tested 4-phase methodology that transforms acquisition into a predictable revenue asset.
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Process Tracker Timeline */}
        <div className="mt-12 lg:mt-16 relative max-w-6xl mx-auto">
          {/* Base Background Track Line (Desktop) */}
          <div className="absolute top-5.5 left-12 right-12 h-[2px] bg-white/[0.08] hidden lg:block rounded-full" />

          {/* Animated Glowing Active Progress Fill Line (Desktop) */}
          <div
            className="absolute top-5.5 left-12 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hidden lg:block rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(56,189,248,0.6)]"
            style={{ width: `calc(${progressWidth} * 0.88)` }}
          />

          {/* 4 Compact Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;

              return (
                <div
                  key={step.num}
                  onClick={() => handleStepClick(index)}
                  className={`flex flex-col rounded-2xl p-4 sm:p-5 transition-all duration-400 cursor-pointer relative group border ${
                    isActive
                      ? "bg-white/[0.05] border-cyan-400/50 shadow-[0_10px_30px_rgba(56,189,248,0.12)] ring-1 ring-cyan-400/30 scale-[1.01]"
                      : isCompleted
                      ? "bg-white/[0.02] border-white/10 hover:border-white/20"
                      : "bg-transparent border-white/[0.06] hover:bg-white/[0.02] hover:border-white/15 opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Step Node Icon & Mono Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border transition-all duration-400 z-10 ${
                        isActive
                          ? "bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-105"
                          : isCompleted
                          ? "bg-blue-950/60 border-cyan-500/40 text-cyan-400"
                          : "bg-[#090f20] border-white/10 text-slate-500 group-hover:border-white/20 group-hover:text-slate-300"
                      }`}
                    >
                      <span className="text-base sm:text-lg font-mono font-bold">{step.num}</span>
                    </div>

                    {/* Step Status Badge */}
                    <div className="flex items-center text-[10px] font-mono">
                      {isActive ? (
                        <span className="flex items-center gap-1 text-cyan-300 bg-cyan-500/15 px-2 py-0.5 rounded-full border border-cyan-500/30 font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                          Active
                        </span>
                      ) : isCompleted ? (
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          <CheckCircle2 className="h-3 w-3" />
                          Done
                        </span>
                      ) : (
                        <span className="text-slate-500">Phase {step.num}</span>
                      )}
                    </div>
                  </div>

                  {/* Subtitle / Phase */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 transition-colors ${
                      isActive ? "text-cyan-400" : isCompleted ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {step.phase}
                  </span>

                  {/* Step Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? "text-white glow-accent-gradient" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {step.description}
                  </p>

                  {/* Compact Micro Deliverables Checklist */}
                  <div className="mt-3.5 pt-3 border-t border-white/[0.08] space-y-1">
                    {step.deliverables.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className={`flex items-center gap-1.5 text-[11px] transition-colors ${
                          isActive ? "text-slate-200 font-medium" : "text-slate-400"
                        }`}
                      >
                        <span
                          className={`h-1 w-1 rounded-full shrink-0 ${
                            isActive ? "bg-cyan-400 animate-pulse" : isCompleted ? "bg-emerald-400" : "bg-slate-600"
                          }`}
                        />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Active Bottom Accent Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Controls & Progress Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleStepClick(i)}
                aria-label={`Jump to Step 0${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === i
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
