"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glow-card rounded-2xl p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h4 className="text-xl font-bold text-white">Strategy Call Requested!</h4>
        <p className="text-sm text-slate-300">
          Thank you for reaching out. Our growth specialist will contact you within 24 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setSubmitted(false)}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="glow-card rounded-2xl p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white mb-6">Send an Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Work Email
            </label>
            <input
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Website URL / Company
          </label>
          <input
            type="text"
            placeholder="https://yourcompany.com"
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            What growth goals are you looking to achieve?
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your current marketing challenges and targets..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <Button type="submit" variant="gradient" size="lg" className="w-full">
          <Calendar className="h-4 w-4" />
          Request Growth Strategy Session
        </Button>
      </form>
    </div>
  );
}
