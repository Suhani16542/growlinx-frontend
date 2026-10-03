import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { constructMetadata, siteConfig } from "@/lib/metadata";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  ShieldCheck,
  ArrowRight,
  ReceiptText,
  Clock,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Mail,
  Phone,
  Scale,
  RefreshCcw,
  DollarSign,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy | Growlinqs",
  description:
    "Review Growlinqs's comprehensive Refund Policy, cancellation guidelines, milestone billing terms, and third-party ad spend rules.",
  canonicalUrl: `${siteConfig.url}/refund-policy`,
});

const policySections = [
  { id: "overview", title: "1. Overview", short: "Overview" },
  { id: "services-covered", title: "2. Services Covered", short: "Services Covered" },
  { id: "eligibility", title: "3. Eligibility for Refunds", short: "Refund Eligibility" },
  { id: "non-refundable", title: "4. Non-Refundable Services", short: "Non-Refundable Items" },
  { id: "cancellation-policy", title: "5. Cancellation Policy", short: "Cancellation Terms" },
  { id: "cancellation-before-work", title: "6. Cancellation Before Work Begins", short: "Before Work Begins" },
  { id: "cancellation-after-work", title: "7. Cancellation After Work Has Started", short: "After Work Commenced" },
  { id: "subscription-retainers", title: "8. Subscription / Retainer Services", short: "Monthly Retainers" },
  { id: "ad-spend-campaigns", title: "9. Digital Marketing & Ad Spend", short: "Ad Spend & Media" },
  { id: "third-party-expenses", title: "10. Third-Party Costs & Expenses", short: "Third-Party Fees" },
  { id: "refund-request-process", title: "11. Refund Request Process", short: "Request Process" },
  { id: "how-refunds-processed", title: "12. How Refunds Are Processed", short: "Processing Method" },
  { id: "processing-time", title: "13. Refund Processing Time", short: "Timelines & Cycles" },
  { id: "refund-exceptions", title: "14. Situations Where Refunds May Not Apply", short: "Exclusions & Scope" },
  { id: "dispute-resolution", title: "15. Dispute Resolution", short: "Dispute Resolution" },
  { id: "policy-changes", title: "16. Policy Changes", short: "Policy Updates" },
  { id: "contact-information", title: "17. Contact Information", short: "Contact & Support" },
];

export default function RefundPolicyPage() {
  const effectiveDate = "January 15, 2026";

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0] text-[#0A0F1D] min-h-screen">
      {/* =========================================================================
          1. HERO SECTION (Dark Navy with Orange Accents)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-[#FAF6F0] border-b border-white/10 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={750}>
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A] shadow-xs mb-6">
                <ReceiptText className="h-4 w-4" />
                <span>COMMERCIAL GOVERNANCE & POLICY</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] leading-[1.1]">
                Refund <span className="text-[#FF5E3A]">Policy</span>
              </h1>

              {/* Supporting Text */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                This document outlines Growlinqs&apos;s refund guidelines, project cancellation terms, milestone billing structures, and client accountability framework across all digital marketing and growth consulting engagements.
              </p>

              {/* Meta information chips */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Last Updated: <strong className="text-white">{effectiveDate}</strong></span>
                </div>
                <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Standard Agency Service Agreement Supplement</span>
                </div>
                <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Transparent Milestone Accounting</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================================
          2. KEY HIGHLIGHTS / SUMMARY CARDS
          ========================================================================= */}
      <section className="py-10 bg-[#FAF6F0] border-b border-[#EADECE]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Milestone-Based Billing
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Fees correspond directly to agreed sprint deliverables, technical audits, and execution phases.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <DollarSign className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Pass-Through Ad Spend
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Third-party ad spends paid directly to Google, Meta, or TikTok are non-refundable by Growlinqs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Structured Resolution
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Dedicated account managers and billing strategists address inquiries within 2 business days.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. MAIN POLICY CONTENT (2-Column Layout with Sticky Desktop Navigation)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Sticky Sidebar / Table of Contents */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#EADECE] shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#EADECE] mb-4">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0A0F1D] flex items-center gap-2">
                    <FileSpreadsheet className="h-4 w-4 text-[#FF5E3A]" />
                    <span>Table of Contents</span>
                  </h3>
                  <span className="text-[10px] font-bold text-[#5A6578] bg-[#FAF6F0] px-2 py-0.5 rounded-md border border-[#EADECE]">
                    17 Sections
                  </span>
                </div>

                <nav aria-label="Policy Navigation" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                  {policySections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-2 px-3 rounded-xl font-medium text-[#5A6578] hover:text-[#FF5E3A] hover:bg-[#FAF6F0] transition-colors"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Need Clarification Card */}
              <div className="rounded-3xl p-6 bg-[#0A0F1D] text-[#FAF6F0] border border-white/10 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-[#FF5E3A]">
                  <HelpCircle className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#FAF6F0]">
                    Billing Assistance
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Questions regarding a recent statement of work, milestone invoice, or retainer renewal? Our financial operations team is here to assist.
                </p>
                <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="h-3.5 w-3.5 text-[#FF5E3A]" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#FF5E3A] transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="h-3.5 w-3.5 text-[#FF5E3A]" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#FF5E3A] transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="orange-btn w-full inline-flex items-center justify-center gap-1.5 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider mt-2 shadow-md"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* Right Column: Detailed Structured Legal Text */}
            <main className="lg:col-span-8 space-y-12">
              {/* Section 1 */}
              <section id="overview" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Overview
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) delivers professional digital marketing, search engine optimization (SEO), paid media management, mobile application user acquisition, creator and influencer campaign management, and digital growth consulting services.
                </p>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Because digital marketing engagements involve dedicated strategist hours, proprietary research, customized creative deliverables, software tooling allocations, and third-party media buys, this Refund Policy defines the clear, transparent conditions under which refunds, prorations, or credits may be considered.
                </p>
              </section>

              {/* Section 2 */}
              <section id="services-covered" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Services Covered
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  This policy applies to all services and deliverables provided by Growlinqs pursuant to executed client agreements, Statements of Work (SOW), master service agreements (MSA), or digital onboarding orders, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-[#0A0F1D]">
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Search Engine Optimization (SEO)</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Paid Advertising (PPC & Social Ads)</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Social Media Management & Strategy</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Mobile App Marketing & Acquisition</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Influencer & Creator Management</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>YouTube Growth & Monetization</span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="eligibility" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Eligibility for Refunds
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Refund eligibility is strictly evaluated against executed project milestones and the actual progress of billable hours or deliverable production. A client may be eligible for a refund or account credit under the following specific circumstances:
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-xs text-[#5A6578] space-y-1">
                    <strong className="text-[#0A0F1D] block">1. Duplicate or Erroneous Transactions:</strong>
                    <span>In the event of an inadvertent double-charge or mathematical billing discrepancy attributable to our payment processor.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-xs text-[#5A6578] space-y-1">
                    <strong className="text-[#0A0F1D] block">2. Mutually Agreed Mutual Termination:</strong>
                    <span>Where both parties execute a formal written cancellation prior to the activation of the relevant project milestone.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-xs text-[#5A6578] space-y-1">
                    <strong className="text-[#0A0F1D] block">3. Inability to Fulfill Core Deliverables:</strong>
                    <span>Where Growlinqs is demonstrably unable to initiate the scope outlined in an executed Statement of Work due to internal constraints.</span>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="non-refundable" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Non-Refundable Services
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Due to the irreversible expenditure of time, specialized talent, and third-party commitments, the following fees and service items are strictly non-refundable:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 text-[#0A0F1D]">
                    <strong className="block text-red-700 mb-1">Completed Milestone Deliverables</strong>
                    <span>Audits, strategy blueprints, design assets, and custom copy that have been delivered or approved.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 text-[#0A0F1D]">
                    <strong className="block text-red-700 mb-1">Setup & Onboarding Fees</strong>
                    <span>Initial discovery, technical tracking setup, tracking pixels, and server-side attribution configuration.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 text-[#0A0F1D]">
                    <strong className="block text-red-700 mb-1">Pass-Through Media & Ad Spend</strong>
                    <span>All ad budgets disbursed directly to Meta, Google, TikTok, LinkedIn, or programmatic platforms.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 text-[#0A0F1D]">
                    <strong className="block text-red-700 mb-1">Third-Party Software & Creator Deposits</strong>
                    <span>Contracted influencer deposits, third-party software licensing, domain purchases, or API integrations.</span>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-[#FFEBE5] border border-[#FF5E3A]/30 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-[#FF5E3A] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#0A0F1D] leading-relaxed">
                    <strong>Important Note on Subjective Preferences:</strong> Creative design and copywriting iterations are subject to the agreed revision rounds defined in your Statement of Work. Subjective changes in marketing preference after deliverable presentation do not constitute grounds for a full or retroactive refund.
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="cancellation-policy" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Cancellation Policy
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  All service cancellation requests must be submitted in writing to your assigned account director and sent via email to{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#FF5E3A] font-bold hover:underline">
                    {siteConfig.contact.email}
                  </a>. Verbal cancellations or direct messages on chat channels are not recognized as formal notices of termination.
                </p>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  The effective cancellation date shall be the date on which written receipt is acknowledged by Growlinqs management during standard business operating hours.
                </p>
              </section>

              {/* Section 6 */}
              <section id="cancellation-before-work" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Project Cancellation Before Work Begins
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  If a client requests written cancellation of a project engagement before any strategic discovery, audit research, account provisioning, or creative production has commenced:
                </p>
                <ul className="space-y-2 text-xs text-[#5A6578] font-normal pl-4 list-disc">
                  <li>The client may receive a refund of advance payments made, less an administrative and onboarding reservation fee (to cover merchant payment processing costs, account provisioning, and resource scheduling).</li>
                  <li>Any non-recoverable third-party software subscriptions or account access fees activated specifically for the client engagement will be deducted from the refundable amount.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="cancellation-after-work" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Cancellation After Work Has Started
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  When cancellation occurs after work has begun:
                </p>
                <div className="space-y-3 pt-2 text-xs text-[#5A6578]">
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE]">
                    <strong className="text-[#0A0F1D] block mb-1">Prorated Work Reconciliation:</strong>
                    <span>Growlinqs will calculate the exact percentage of completed milestones and accrued billable hours through the verified effective date of cancellation.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE]">
                    <strong className="text-[#0A0F1D] block mb-1">Final Settlement & Deliverables Transfer:</strong>
                    <span>If advance retainer funds exceed the value of work completed, the remaining unallocated balance will be refunded. If accrued work exceeds initial deposits, the client remains responsible for settling outstanding deliverable balances. All completed raw creative files and strategy assets for paid milestones will be handed over to the client.</span>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="subscription-retainers" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Subscription / Retainer Services
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  For ongoing monthly retainers (such as recurring SEO management, continuous paid campaign optimization, and monthly influencer coordination):
                </p>
                <ul className="space-y-2 text-xs text-[#5A6578] font-normal pl-4 list-disc">
                  <li>Retainers are billed in advance for each 30-day billing cycle.</li>
                  <li>Unless otherwise stated in your client service agreement, written cancellation notice must be provided at least thirty (30) days prior to the start of the next billing cycle.</li>
                  <li>Once a recurring billing cycle commences, fees for that active monthly cycle are non-refundable, and service deliverables will continue through the conclusion of that paid period.</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="ad-spend-campaigns" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Digital Marketing Campaigns and Advertising Spend
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs charges professional management fees for campaign architecture, creative production, bid optimization, and analytics attribution.
                </p>
                <div className="p-4 rounded-2xl bg-[#FFEBE5] border border-[#FF5E3A]/30 text-xs text-[#0A0F1D] leading-relaxed">
                  <strong className="block font-black text-[#FF5E3A] mb-1 uppercase tracking-wider">
                    Crucial Advertising Network Disclaimer
                  </strong>
                  Ad platform spend (including Google Ads, Meta Ads, TikTok Ads, Apple Search Ads, LinkedIn Marketing Solutions) is disbursed directly from your linked credit card or billing profile to the ad networks. Growlinqs does not hold or control these platform funds. Platform spend consumed by active ad auctions is entirely non-refundable by Growlinqs under all circumstances.
                </div>
              </section>

              {/* Section 10 */}
              <section id="third-party-expenses" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Third-Party Costs and Expenses
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Out-of-pocket expenses incurred by Growlinqs on behalf of the client—including third-party stock media licenses, commercial audio synchronization, specialized font licenses, external development APIs, specialized research data sets, and contracted creator fees—are strictly non-refundable once committed or incurred.
                </p>
              </section>

              {/* Section 11 */}
              <section id="refund-request-process" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Refund Request Process
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  To submit a formal refund or adjustment inquiry, please follow these four steps:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF5E3A]">Step 01</span>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Submit Written Notice</h4>
                    <p className="text-xs text-[#5A6578]">Email billing details, company name, and invoice ID to billing@growlinqs.com.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF5E3A]">Step 02</span>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Provide Documentation</h4>
                    <p className="text-xs text-[#5A6578]">Include specific deliverable milestones, communication records, or discrepancy notes.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF5E3A]">Step 03</span>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Audit & Review</h4>
                    <p className="text-xs text-[#5A6578]">Our operations and account leadership review the deliverable timeline within 2-3 business days.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF5E3A]">Step 04</span>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Written Decision</h4>
                    <p className="text-xs text-[#5A6578]">You will receive an itemized determination with approved adjustments or detailed reconciliation.</p>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="how-refunds-processed" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    How Refunds Are Processed
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Approved refunds will be credited back to the original method of payment (such as credit card, ACH bank transfer, or corporate wire transfer) used during the initial transaction. For security and financial governance, refunds cannot be remitted to unverified third-party accounts or alternative entities.
                </p>
              </section>

              {/* Section 13 */}
              <section id="processing-time" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Refund Processing Time
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Once an adjustment or refund is formally authorized in writing:
                </p>
                <ul className="space-y-2 text-xs text-[#5A6578] font-normal pl-4 list-disc">
                  <li>Growlinqs initiates the electronic refund authorization within five to seven (5–7) business days.</li>
                  <li>Depending on your financial institution, merchant bank, or credit card issuer, funds typically reflect in your bank statement within an additional 5 to 10 business days.</li>
                  <li>Growlinqs will provide an official refund transaction receipt and reference identifier for tracking with your banking provider.</li>
                </ul>
              </section>

              {/* Section 14 */}
              <section id="refund-exceptions" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Situations Where Refunds May Not Apply
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Refunds, fee abatements, or financial credits will not be granted under the following circumstances:
                </p>
                <div className="space-y-2.5 pt-1 text-xs text-[#5A6578]">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A] mt-1.5 shrink-0" />
                    <span><strong>Client Delays or Inaction:</strong> Delays resulting from the client&apos;s failure to provide essential brand assets, approvals, website credentials, or timely campaign feedback.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A] mt-1.5 shrink-0" />
                    <span><strong>Third-Party Algorithm Changes:</strong> Search engine core updates (e.g. Google algorithm releases) or social media platform feed modifications outside agency control.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A] mt-1.5 shrink-0" />
                    <span><strong>Ad Account Suspension Caused by Client:</strong> Ad network account bans or restrictions resulting from client product compliance issues or historical policy violations prior to agency onboarding.</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A] mt-1.5 shrink-0" />
                    <span><strong>Unrealistic Commercial Guarantees:</strong> Claims premised on guaranteed viral reach, specific keyword rank guarantees, or fixed ROAS multipliers where organic competition dynamically varies.</span>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section id="dispute-resolution" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Dispute Resolution
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Both Growlinqs and the client agree to prioritize open, good-faith dialogue to resolve any billing misunderstandings or deliverable concerns. Before initiating any payment dispute, chargeback, or legal action, the client agrees to notify Growlinqs in writing and allow a minimum thirty (30) day informal dispute resolution period to achieve an amicable business solution.
                </p>
              </section>

              {/* Section 16 */}
              <section id="policy-changes" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    16
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Policy Changes
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs reserves the right to modify, amend, or update this Refund Policy periodically to reflect evolving service offerings, technical processes, or legal requirements. Updated versions will be published on this page with an updated &quot;Last Updated&quot; revision timestamp. Existing client agreements active prior to policy updates will remain governed by their specific executed Statement of Work.
                </p>
              </section>

              {/* Section 17 */}
              <section id="contact-information" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-6 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    17
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Contact Information
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  If you have questions, inquiries, or require formal clarification regarding this Refund Policy or your existing account billing, please contact our administrative offices:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[#5A6578] block">Corporate Entity</span>
                    <strong className="text-sm text-[#0A0F1D] block">{siteConfig.name} Digital Marketing Agency</strong>
                    <span className="text-[#5A6578] block">{siteConfig.contact.address}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[#5A6578] block">Billing & Legal Inquiries</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-[#FF5E3A] hover:underline block text-sm">
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[#5A6578] block">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#0A0F1D] text-[#FAF6F0] border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10 text-center">
          <ScrollReveal animation="zoom-in" duration={700}>
            <div className="max-w-2xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>DIRECT SUPPORT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FAF6F0]">
                Have questions about our <br />
                <span className="text-[#FF5E3A]">refund policy?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
                Our account directors and billing specialists are available to review terms, customize statements of work, or address specific project questions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FF5E3A]/25"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#FAF6F0] bg-white/[0.06] border border-white/15 hover:bg-white/10 hover:border-[#FF5E3A] transition-all duration-200"
                >
                  <span>View Terms & Conditions</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
