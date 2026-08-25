"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/metadata";

export function LeadContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: servicesData[0].title,
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

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#050811] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-400/15 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-7">
            <ScrollReveal animation="fade-up" duration={500}>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span>Let's Talk Growth</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Ready to Scale Your <span className="glow-accent-gradient">Inbound Growth?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Partner with an elite digital growth unit. Claim a complimentary strategic audit to identify conversion leaks and unlock scalable inbound revenue.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={500} delay={100}>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Inquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-white hover:text-cyan-300 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Call Our Strategists</span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-white hover:text-cyan-300 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 border border-blue-500/20 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters</span>
                    <span className="font-bold text-white">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Dark Translucent Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" duration={600}>
              <div className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      Request Received!
                    </h3>
                    <p className="text-base text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out. A senior growth strategist will review your requirements and follow up within 24 hours.
                    </p>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-2">
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        Claim Custom Strategy Plan
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                        Response &lt; 24h
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Sarah Jenkins"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Primary Growth Objective
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-[#090f20] px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#090f20] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Message / Goals
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current marketing challenges, target ARR, or timeline..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-3">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full justify-center text-sm font-bold gap-2 py-4 shadow-xl shadow-blue-600/40"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? "Generating Strategy..." : "Start Inbound Growth"}</span>
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-slate-400">
                      <ShieldCheck className="h-4 w-4 text-cyan-400" />
                      <span>Enterprise NDA protected. Zero spam guaranteed.</span>
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
