"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function FreeStrategyCallPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: servicesData[0].title,
    businessGoals: "Scale Inbound Revenue & High-Intent Leads",
    preferredTime: "Morning (9:00 AM – 12:00 PM EST)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const callBenefits = [
    {
      title: "30-Minute Growth Audit",
      description: "We analyze your current organic traffic, ad spend efficiency, and conversion funnels.",
      icon: Zap,
    },
    {
      title: "Custom Strategic Roadmap",
      description: "Receive actionable channel recommendations and target benchmarks for your unit economics.",
      icon: TrendingUp,
    },
    {
      title: "Zero Obligation Consultation",
      description: "A high-value strategy session with senior growth operators—not a high-pressure pitch.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#070b14]">
      {/* 1. Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={500}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Complimentary 1-on-1 Growth Consultation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Claim Your Free <span className="glow-accent-gradient">30-Minute Strategy Call</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discover exactly where your digital acquisition funnel is leaking revenue and how to unlock compounding market share.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Main Form & Value Breakdown */}
      <section className="py-12 lg:py-16 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What to Expect */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-up" duration={500}>
                <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5">
                  <h3 className="text-lg font-bold text-white">
                    What to Expect On Your Call
                  </h3>

                  <div className="space-y-3.5">
                    {callBenefits.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 border border-blue-500/20 shrink-0">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white mb-0.5">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Led by Senior Media Buyers & SEO Strategists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Actionable roadmap provided within 48h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>NDA & Confidentiality guaranteed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Intake Form */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-left" duration={600}>
                <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-[#0c1427]/90">
                  {submitted ? (
                    <div className="text-center py-12 space-y-3">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Strategy Call Requested!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Thank you for booking your session. Our team will review your business details and confirm your calendar slot via email shortly.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-semibold text-cyan-400 hover:underline cursor-pointer"
                        >
                          Book another call
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-white">
                            Reserve Your Strategy Session
                          </h3>
                          <p className="text-xs text-slate-400">Fill in your business details below</p>
                        </div>
                        <span className="text-xs font-semibold text-cyan-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                          Slots Available This Week
                        </span>
                      </div>

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Alex Morgan"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@company.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>
                      </div>

                      {/* Phone & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Apex Brands"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>
                      </div>

                      {/* Website & Preferred Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Website URL
                          </label>
                          <input
                            type="url"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            placeholder="https://yourbrand.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Preferred Contact Time
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          >
                            <option value="Morning (9:00 AM – 12:00 PM EST)">
                              Morning (9:00 AM – 12:00 PM EST)
                            </option>
                            <option value="Afternoon (12:00 PM – 4:00 PM EST)">
                              Afternoon (12:00 PM – 4:00 PM EST)
                            </option>
                            <option value="Late Afternoon (4:00 PM – 6:30 PM EST)">
                              Late Afternoon (4:00 PM – 6:30 PM EST)
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Interested Service & Business Goals */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Interested Growth Service
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          >
                            {servicesData.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                            <option value="Full Multi-Channel Growth Bundle">
                              Full Multi-Channel Growth Bundle
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Primary Business Goal
                          </label>
                          <select
                            value={formData.businessGoals}
                            onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          >
                            <option value="Scale Inbound Revenue & High-Intent Leads">
                              Scale Inbound Revenue & Leads
                            </option>
                            <option value="Lower Customer Acquisition Cost (CAC)">
                              Lower CAC & Increase ROAS
                            </option>
                            <option value="Dominate Google Organic Rankings (SEO)">
                              Dominate Google SEO Rankings
                            </option>
                            <option value="Scale Mobile App Installs & Retention">
                              Scale App Installs & Retention
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Current Growth Challenges (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What is your current monthly ad spend, main bottleneck, or target deadline?"
                          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="gradient"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full justify-center text-sm font-semibold gap-2"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>{isSubmitting ? "Locking In Session..." : "Confirm Free Strategy Session"}</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-400">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                        <span>100% Free Consultation. No high-pressure sales pitch.</span>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
