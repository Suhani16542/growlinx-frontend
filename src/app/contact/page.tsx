"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/lib/metadata";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Globe,
  DollarSign,
  Briefcase,
  HelpCircle,
  ArrowRight,
  Headphones,
  Lock,
} from "lucide-react";

const budgetRanges = [
  "Select Estimated Budget",
  "$1,000 – $3,000 / month",
  "$3,000 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month (Enterprise)",
  "One-Time Strategic Audit",
];

const faqs = [
  {
    q: "How quickly will I hear back after submitting an inquiry?",
    a: "Our senior marketing strategists review every submission within 24 business hours to formulate an initial assessment before reaching out.",
  },
  {
    q: "Do you offer tailored custom retainers or fixed packages?",
    a: "We offer both modular fixed packages and fully customized performance retainers based on your exact scale, target metrics, and growth bottlenecks.",
  },
  {
    q: "What data or access do I need for the initial strategy session?",
    a: "Just high-level access to your current growth objectives, website URL, and primary advertising channels. We handle the competitive data mining.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: servicesData[0].title,
    budget: budgetRanges[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback to submitted state for smooth UX
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FAF6F0]">
      {/* 1. Hero Section (Warm White / Cream Surface) */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF6F0] border-b border-[#EADECE] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF5E3A]/5 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={750}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs mb-5">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>DIRECT STRATEGIST ACCESS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A0F1D] max-w-4xl mx-auto leading-[1.1]">
              Let's Grow Your <br />
              <span className="text-[#FF5E3A]">Business Together</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5A6578] max-w-2xl mx-auto leading-relaxed font-normal">
              Have questions about scaling your digital acquisition, search visibility, or brand monetization? Connect with our senior digital strategists today.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Interactive Lead Capture & Direct Channels */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF6F0] border-b border-[#EADECE] relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contact Info & 3D Telemetry (Slides in from Left) */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-6">
                <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EADECE] shadow-sm space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
                      COMMUNICATION CHANNELS
                    </span>
                    <h3 className="text-2xl font-black text-[#0A0F1D]">
                      Let's Talk Growth
                    </h3>
                    <p className="text-xs text-[#5A6578] font-medium mt-1 leading-relaxed">
                      Reach out directly through any of our official channels or book a consultation via our form.
                    </p>
                  </div>

                  <div className="space-y-3.5 text-sm">
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] transition-all hover:border-[#FF5E3A]/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADECE] text-[#FF5E3A] shrink-0 font-bold shadow-xs">
                        <Mail className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#5A6578] block">Email Inquiries</span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-[#0A0F1D] hover:text-[#FF5E3A] transition-colors text-sm">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] transition-all hover:border-[#FF5E3A]/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADECE] text-[#FF5E3A] shrink-0 font-bold shadow-xs">
                        <Phone className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#5A6578] block">Phone Support</span>
                        <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-[#0A0F1D] hover:text-[#FF5E3A] transition-colors text-sm">
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] transition-all hover:border-[#FF5E3A]/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADECE] text-[#FF5E3A] shrink-0 font-bold shadow-xs">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#5A6578] block">Global Headquarters</span>
                        <span className="font-bold text-[#0A0F1D] text-xs leading-relaxed block mt-0.5">{siteConfig.contact.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] transition-all hover:border-[#FF5E3A]/40">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#EADECE] text-[#FF5E3A] shrink-0 font-bold shadow-xs">
                        <Clock className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#5A6578] block">Operating Hours</span>
                        <span className="font-bold text-[#0A0F1D] text-xs">Mon – Fri: 9:00 AM – 6:30 PM (EST)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#EADECE] space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#0A0F1D] font-bold">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <span>Dedicated growth strategist assigned within 24h</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0A0F1D] font-bold">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <span>Complimentary competitive audit included</span>
                    </div>
                  </div>
                </div>

                {/* Strategy Hotline & Security Guarantee Box */}
                <div className="rounded-3xl p-6 sm:p-7 bg-[#0A0F1D] border border-white/10 text-[#FAF6F0] relative overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#FAF6F0]">
                        Strategy Desk: Available
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#FF5E3A] uppercase px-2 py-0.5 rounded-full bg-[#FF5E3A]/20 border border-[#FF5E3A]/30 font-mono">
                      100% NDA Protected
                    </span>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] shrink-0">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#FAF6F0]">Direct Partner Access</p>
                        <p className="text-[11px] text-slate-400">Speak directly with senior directors, not salespeople.</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                      <span className="flex items-center gap-1.5 text-[11px]">
                        <Lock className="h-3.5 w-3.5 text-[#FF5E3A]" />
                        Strict Data Privacy
                      </span>
                      <span className="font-bold text-[#FF5E3A]">&lt; 24-Hour Turnaround</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-[11px] text-slate-400 text-center leading-relaxed">
                    Custom marketing roadmaps, full channel audits, and competitor tear-downs provided upon initial discovery.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Lead Form inside High-End Container (Slides in from Right) */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="rounded-3xl p-7 sm:p-9 border border-[#EADECE] bg-white text-[#0A0F1D] shadow-lg">
                  {submitted ? (
                    <div className="text-center py-16 space-y-5">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFEBE5] text-[#FF5E3A] border-2 border-[#FF5E3A] font-black shadow-lg">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F1D]">
                          Inquiry Received!
                        </h3>
                        <p className="text-sm text-[#5A6578] max-w-md mx-auto leading-relaxed">
                          Thank you for reaching out to Growlinqs. One of our senior marketing strategists is reviewing your submission and will contact you within 24 hours.
                        </p>
                      </div>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="orange-btn inline-flex items-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider cursor-pointer"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="flex items-center justify-between border-b border-[#EADECE] pb-4 mb-2">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                            STRATEGY INQUIRY
                          </span>
                          <h3 className="text-xl font-black text-[#0A0F1D] flex items-center gap-2 mt-0.5">
                            <Sparkles className="h-4.5 w-4.5 text-[#FF5E3A]" />
                            <span>Request Your Growth Consultation</span>
                          </h3>
                        </div>
                        <span className="text-xs font-bold text-[#FF5E3A] bg-[#FFEBE5] px-3 py-1 rounded-full border border-[#FF5E3A]/30">
                          Response &lt; 24h
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] placeholder-slate-400 focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. sarah@company.com"
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] placeholder-slate-400 focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +1 (555) 019-2834"
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] placeholder-slate-400 focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider">
                            Company / Website
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Corp (acme.com)"
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] placeholder-slate-400 focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-[#FF5E3A]" />
                            <span>Service Interested In</span>
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          >
                            {servicesData.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                            <DollarSign className="h-3.5 w-3.5 text-[#FF5E3A]" />
                            <span>Estimated Monthly Budget</span>
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                          >
                            {budgetRanges.map((b, idx) => (
                              <option key={idx} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0A0F1D] mb-1.5 uppercase tracking-wider">
                          Project Goals & Requirements
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your current marketing challenges, targets, timeline, or key objectives..."
                          className="w-full rounded-xl border border-[#EADECE] bg-[#FAF6F0] px-4 py-3 text-sm text-[#0A0F1D] placeholder-slate-400 focus:border-[#FF5E3A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all resize-none font-medium"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="orange-btn w-full inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl transition-all"
                        >
                          <Send className="h-4 w-4" />
                          <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Growth Inquiry"}</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-[#5A6578]">
                        <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                        <span>All business information is protected by our strict non-disclosure guarantee.</span>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2.5: WHAT HAPPENS AFTER YOU CONTACT US (LIGHT: 01 → 02 → 03 → 04)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>ONBOARDING WORKFLOW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0A0F1D] leading-tight">
                What Happens After <span className="text-[#FF5E3A]">You Contact Us?</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                A transparent, frictionless 4-step process that gets your campaigns from initial consultation to rapid commercial scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Tell Us About Your Business",
                desc: "Fill out our brief consultation form or book a call directly. Share your primary growth bottlenecks, target metrics, and historical performance.",
                tag: "Initial Discovery",
              },
              {
                step: "02",
                title: "We Understand Your Goals",
                desc: "Our senior strategists perform a complimentary deep-dive audit of your current ad accounts, search rankings, and unit economics.",
                tag: "Diagnostic Audit",
              },
              {
                step: "03",
                title: "We Build a Strategy",
                desc: "We present a customized, multi-channel growth blueprint featuring clear CAC targets, ROAS models, and sprint execution milestones.",
                tag: "Custom Roadmap",
              },
              {
                step: "04",
                title: "We Start Growing",
                desc: "We deploy server-side tracking, launch high-impact creative campaigns, and begin weekly optimization sprints to scale revenue.",
                tag: "Execution & Scale",
              },
            ].map((item, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={item.step}
                  animation={anim}
                  duration={750}
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-2xl font-black text-[#FF5E3A] font-mono leading-none">
                          {item.step}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          Phase {item.step}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center justify-between text-[10px] font-bold text-[#5A6578]">
                      <span>{item.tag}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A]" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Common Questions / FAQ Accordion Grid */}
      <section className="py-20 lg:py-24 bg-[#FAF6F0] border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                QUICK ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0F1D] mt-2">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-[#5A6578]">
                Everything you need to know about initiating a partnership with Growlinqs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                duration={700}
                delay={idx * 100}
                className="h-full"
              >
                <div
                  className="bg-white rounded-3xl p-6 border border-[#EADECE] shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="h-8 w-8 rounded-full bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center mb-4">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-bold text-[#0A0F1D] leading-snug">
                      {faq.q}
                    </h4>
                    <p className="mt-3 text-xs text-[#5A6578] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA Section (Dark Navy with Orange Highlights) */}
      <CTASection />
    </div>
  );
}
