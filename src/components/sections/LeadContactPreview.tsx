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
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#060a15] border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-up" duration={600}>
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Let's Talk Growth
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Kickstart Your <span className="glow-accent-gradient">Digital Growth</span> Today
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our senior growth strategists to evaluate your acquisition channels, audit conversion bottlenecks, and receive a customized marketing plan.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" duration={600} delay={150}>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Email Us</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-white hover:text-cyan-300">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Call Directly</span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white hover:text-cyan-300">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Headquarters</span>
                    <span className="font-semibold text-white">{siteConfig.contact.address}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-left" duration={700}>
              <div className="glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Message Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for contacting GrowlinX. One of our growth strategists will review your request and reach out within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-semibold text-cyan-400 hover:underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-2">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        Get Your Custom Growth Blueprint
                      </h3>
                      <span className="text-xs text-slate-400">Response within 24h</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp"
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Interested Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Interested Growth Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Message / Business Goals
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current marketing goals, challenges, or timeline..."
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full justify-center text-sm font-bold gap-2 cursor-pointer shadow-lg shadow-blue-600/40"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? "Submitting..." : "Start Your Growth Journey"}</span>
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>We respect your privacy. Zero spam, guaranteed.</span>
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
