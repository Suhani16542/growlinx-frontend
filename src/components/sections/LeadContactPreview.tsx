"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { servicesData } from "@/data/services";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { api } from "@/lib/api";

export function LeadContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: servicesData[0]?.title || "SEO Services",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await api.enquiries.submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        website: formData.company.trim() || undefined,
        service: formData.service,
        message: formData.message.trim() || `Interested in ${formData.service} growth strategy.`,
      });

      if (res.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: servicesData[0]?.title || "SEO Services",
          message: "",
        });
      } else {
        setErrorMsg(res.message || "Failed to submit request. Please try again.");
      }
    } catch {
      setErrorMsg("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0F1D] text-[#FAF6F0] border-t border-white/10">
      {/* Ambient Orange Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#FF5E3A]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#E8502B]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Contact Info (Slides in from Left) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <ScrollReveal animation="fade-left" duration={800} className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>LET&apos;S SCALE TOGETHER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] leading-tight">
                Ready to Turn Attention Into <span className="text-[#FF5E3A]">Predictable Revenue?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Partner with our growth consultancy. Claim a complimentary strategic audit to uncover conversion leaks, rank for high-intent search queries, and scale inbound revenue.
              </p>

              <div className="space-y-4 pt-4 text-left max-w-sm mx-auto lg:mx-0">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#FF5E3A] border border-[#FF5E3A]/30 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Direct Inquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-[#FAF6F0] hover:text-[#FF5E3A] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#FF5E3A] border border-[#FF5E3A]/30 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Senior Strategist Line</span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-[#FAF6F0] hover:text-[#FF5E3A] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#FAF6F0] border border-white/10 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Headquarters</span>
                    <span className="font-bold text-[#FAF6F0]">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High Conversion Lead Generation Form (Slides in from Right) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-right" duration={800} delay={150}>
              <div className="rounded-3xl p-8 sm:p-10 border border-white/15 bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0A0F1D] text-[#FAF6F0] shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/40 font-black">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-[#FAF6F0]">
                      Strategy Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Growlinqs. One of our growth strategists will review your domain and respond within 24 business hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-extrabold uppercase tracking-wider text-[#FF5E3A] hover:underline cursor-pointer"
                      >
                        Submit another request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                        {errorMsg}
                      </div>
                    )}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                      <h3 className="text-lg font-bold text-[#FAF6F0] flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[#FF5E3A]" />
                        <span>Request a Free Growth Audit</span>
                      </h3>
                      <span className="text-xs font-bold text-[#FF5E3A] bg-white/[0.06] px-2.5 py-1 rounded-full border border-white/10">
                        100% Confidential
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
                          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all"
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
                          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all"
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
                          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                          Company / Website
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="company.com"
                          className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Primary Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#111827] px-4 py-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all"
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
                        Current Goals or Challenges
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your target CAC, organic visibility goals, or monthly ad spend..."
                        className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="orange-btn w-full inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl transition-all"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? "Submitting Request..." : "Claim Complimentary Audit"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
