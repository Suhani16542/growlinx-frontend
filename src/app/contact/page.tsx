"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BackgroundBeams } from "@/components/common/BackgroundBeams";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
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
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Contact Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
        <BackgroundBeams intensity="high" showDots={true} />
        <Container className="relative z-10 text-center">
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold glow-badge mb-4">
              <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Let's Build Your <br />
              <span className="glow-accent-gradient">Digital Growth Engine</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our marketing services or ready to discuss a tailored growth plan? Connect with our senior digital strategists today.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Contact Information & Interactive Form */}
      <section className="py-16 bg-[#070b14] border-t border-slate-800/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Info & Office Card */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal animation="fade-up" duration={600}>
                <div className="glow-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Direct Communication
                    </h3>
                    <p className="text-xs text-slate-400">
                      Reach out through any of our direct corporate channels.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Email Inquiries</span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Phone Support</span>
                        <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white hover:text-cyan-300 transition-colors">
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Agency Headquarters</span>
                        <span className="font-semibold text-white">{siteConfig.contact.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Operating Hours</span>
                        <span className="font-semibold text-white">Mon – Fri: 9:00 AM – 6:30 PM (EST)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Dedicated client manager assigned within 24 hours</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Lead / Inquiry Form */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-left" duration={700}>
                <div className="glow-card rounded-3xl p-6 sm:p-10 border border-slate-800 relative">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Inquiry Received Successfully!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Thank you for reaching out to GrowlinX. One of our growth strategists is reviewing your submission and will get back to you shortly.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs font-semibold text-cyan-400 hover:underline cursor-pointer"
                        >
                          Submit another message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-2">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-cyan-400" />
                          Send a Direct Message
                        </h3>
                        <span className="text-xs text-slate-400">Response &lt; 24h</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Enterprises"
                            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Interested Marketing Service
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

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Project Details / Goals
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Provide details about your current marketing goals, challenges, monthly ad budget, or timeline..."
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="gradient"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full justify-center text-sm font-bold gap-2 cursor-pointer shadow-lg shadow-blue-600/40"
                        >
                          <Send className="h-4 w-4" />
                          <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
                        </Button>
                      </div>

                      <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span>All inquiries are protected by our non-disclosure policy.</span>
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
