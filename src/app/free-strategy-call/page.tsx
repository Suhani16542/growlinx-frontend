"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Calendar,
  PhoneCall,
  Clock,
  ArrowRight,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || formData.website,
          service: `${formData.service} (Strategy Call Booking)`,
          budget: formData.businessGoals,
          message: `[Preferred Time: ${formData.preferredTime}]\n${formData.message || "Free Strategy Call Requested."}`,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const callBenefits = [
    {
      title: "30-Minute Growth Audit",
      description: "We analyze your current organic traffic, ad spend efficiency, and conversion funnels to uncover revenue leaks.",
      icon: Zap,
    },
    {
      title: "Custom Strategic Roadmap",
      description: "Receive actionable channel recommendations and target benchmarks tailored to your unit economics.",
      icon: TrendingUp,
    },
    {
      title: "Zero Obligation Consultation",
      description: "A high-value strategy session with senior growth operators—not a high-pressure sales pitch.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0A0F1D]">
      {/* 1. Hero Section (Dark Navy) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={750}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>COMPLIMENTARY 1-ON-1 GROWTH AUDIT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] max-w-4xl mx-auto leading-[1.08]">
              Claim Your Free <br />
              <span className="text-[#FF5E3A]">30-Minute Strategy Call</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Discover exactly where your digital acquisition funnel is leaking revenue and how to unlock compounding market share with multi-touch attribution.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Main Form & Value Breakdown (Warm White / Cream Surface) */}
      <section className="py-20 lg:py-28 cream-surface border-b border-[#EADECE] relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FFEBE5]/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What to Expect */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-6">
                <div className="cream-card rounded-3xl p-7 sm:p-8 border border-[#EADECE] space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F1D]">
                      What to Expect On Your Call
                    </h3>
                    <p className="text-xs text-[#5A6578] font-medium mt-1">
                      Structured, high-impact growth insights from domain specialists.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {callBenefits.map((b) => {
                      const Icon = b.icon;
                      return (
                        <div
                          key={b.title}
                          className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE]"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADECE] text-[#FF5E3A] shrink-0 font-bold">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#0A0F1D]">{b.title}</h4>
                            <p className="text-xs text-[#5A6578] leading-relaxed mt-1 font-normal">
                              {b.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-[#EADECE] space-y-2 text-xs text-[#0A0F1D] font-bold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <span>Dedicated domain specialist assigned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <span>Zero sales pitch guarantee</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Interactive Booking Form (Dark Navy Container) */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="rounded-3xl p-7 sm:p-9 border border-white/15 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0A0F1D] text-[#FAF6F0] shadow-2xl">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/40 font-black">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-black text-[#FAF6F0]">
                        Strategy Call Requested!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for booking with Growlinqs. A senior growth strategist will review your domain and confirm your session time via email within 24 hours.
                      </p>
                      <div className="pt-3">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-extrabold uppercase tracking-wider text-[#FF5E3A] hover:underline cursor-pointer"
                        >
                          Book another call
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                        <h3 className="text-lg font-bold text-[#FAF6F0] flex items-center gap-2">
                          <PhoneCall className="h-4 w-4 text-[#FF5E3A]" />
                          <span>Reserve Your Session</span>
                        </h3>
                        <span className="text-xs font-bold text-[#FF5E3A] bg-white/[0.06] px-2.5 py-1 rounded-full border border-white/10">
                          100% Free
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Sarah Jenkins"
                            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah@company.com"
                            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Company Website *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            placeholder="yourcompany.com"
                            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Primary Growth Discipline
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-[#111827] px-4 py-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          >
                            {servicesData.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                            Preferred Call Time
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full rounded-xl border border-white/15 bg-[#111827] px-4 py-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A]"
                          >
                            <option value="Morning (9:00 AM – 12:00 PM EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                            <option value="Afternoon (12:00 PM – 3:00 PM EST)">Afternoon (12:00 PM – 3:00 PM EST)</option>
                            <option value="Late Afternoon (3:00 PM – 6:00 PM EST)">Late Afternoon (3:00 PM – 6:00 PM EST)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                          Primary Business Goal / Challenge
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your target CAC, current monthly spend, organic traffic goals..."
                          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="orange-btn w-full inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl transition-all"
                        >
                          <Calendar className="h-4 w-4" />
                          <span>{isSubmitting ? "Reserving Session..." : "Claim Free Strategy Call"}</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-slate-400">
                        <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                        <span>All discussions are covered by our strict non-disclosure agreement.</span>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CTA Section */}
      <CTASection />
    </div>
  );
}
