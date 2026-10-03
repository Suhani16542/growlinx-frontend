import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { constructMetadata, siteConfig } from "@/lib/metadata";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import {
  Scale,
  ShieldCheck,
  ArrowRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Mail,
  Phone,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
  Lock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | Growlinqs",
  description:
    "Review the commercial Terms & Conditions governing digital marketing, advertising management, SEO, and consulting services provided by Growlinqs.",
  canonicalUrl: `${siteConfig.url}/terms-and-conditions`,
});

const termsSections = [
  { id: "introduction", title: "1. Introduction", short: "Introduction" },
  { id: "definitions", title: "2. Definitions", short: "Definitions" },
  { id: "acceptance", title: "3. Acceptance of Terms", short: "Acceptance" },
  { id: "services", title: "4. Our Services", short: "Our Services" },
  { id: "client-responsibilities", title: "5. Client Responsibilities", short: "Client Roles" },
  { id: "scope-deliverables", title: "6. Project Scope & Deliverables", short: "Scope & Deliverables" },
  { id: "communication-approvals", title: "7. Communication & Approvals", short: "Approvals" },
  { id: "fees-payments", title: "8. Fees & Payments", short: "Fees & Invoicing" },
  { id: "ad-costs", title: "9. Advertising & Third-Party Costs", short: "Media & Ad Costs" },
  { id: "campaign-performance", title: "10. Campaign Performance", short: "Performance Disclaimer" },
  { id: "intellectual-property", title: "11. Intellectual Property", short: "Intellectual Property" },
  { id: "client-materials", title: "12. Client-Provided Materials", short: "Client Materials" },
  { id: "confidentiality", title: "13. Confidentiality", short: "Confidentiality & NDA" },
  { id: "data-privacy", title: "14. Data & Privacy", short: "Data & Privacy" },
  { id: "third-party-platforms", title: "15. Third-Party Platforms", short: "Platform Policies" },
  { id: "service-availability", title: "16. Service Availability", short: "Availability & Uptime" },
  { id: "limitation-liability", title: "17. Limitation of Liability", short: "Liability Limits" },
  { id: "indemnification", title: "18. Indemnification", short: "Indemnification" },
  { id: "cancellation-termination", title: "19. Cancellation & Termination", short: "Termination" },
  { id: "refunds", title: "20. Refunds", short: "Refund Policy Link" },
  { id: "dispute-resolution", title: "21. Dispute Resolution", short: "Dispute Resolution" },
  { id: "changes-to-terms", title: "22. Changes to These Terms", short: "Amendments" },
  { id: "governing-law", title: "23. Governing Law", short: "Governing Law" },
  { id: "contact-information", title: "24. Contact Information", short: "Contact & Legal" },
];

export default function TermsAndConditionsPage() {
  const effectiveDate = "January 15, 2026";

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0] text-[#0A0F1D] min-h-screen">
      {/* =========================================================================
          1. HERO SECTION (Dark Navy + Orange Accents)
          ========================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0A0F1D] text-[#FAF6F0] border-b border-white/10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <ScrollReveal animation="fade-up" duration={750}>
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/40 text-[#FF5E3A] shadow-xs mb-6">
                <Scale className="h-4 w-4" />
                <span>COMMERCIAL TERMS OF SERVICE</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FAF6F0] leading-[1.1]">
                Terms & <span className="text-[#FF5E3A]">Conditions</span>
              </h1>

              {/* Supporting text */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Please review these terms carefully before using Growlinqs services. These terms set forth the rights, responsibilities, and standards governing our digital marketing, advertising, and growth advisory partnerships.
              </p>

              {/* Meta Chips */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Last Updated: <strong className="text-white">{effectiveDate}</strong></span>
                </div>
                <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Master Service Agreement Standards</span>
                </div>
                <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Confidential Client Protections</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =========================================================================
          2. SUMMARY CARDS
          ========================================================================= */}
      <section className="py-10 bg-[#FAF6F0] border-b border-[#EADECE]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Deliverable Ownership
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Upon full milestone payment, completed custom assets and copy belong exclusively to the client.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Execution Transparency
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Clear sprint milestones, weekly attribution metrics, and transparent communication protocols.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EADECE] shadow-xs flex items-start gap-3.5">
              <div className="h-10 w-10 rounded-xl bg-[#FFEBE5] text-[#FF5E3A] flex items-center justify-center shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#0A0F1D]">
                  Strict Confidentiality
                </h4>
                <p className="text-xs text-[#5A6578] mt-1 leading-relaxed">
                  Rigorous NDA safeguards protect your revenue data, customer records, and strategic roadmaps.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. MAIN TERMS CONTENT (2-Column Layout with Sticky Desktop Navigation)
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
                    24 Sections
                  </span>
                </div>

                <nav aria-label="Terms Navigation" className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 text-xs">
                  {termsSections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1.5 px-3 rounded-xl font-medium text-[#5A6578] hover:text-[#FF5E3A] hover:bg-[#FAF6F0] transition-colors"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Support Box */}
              <div className="rounded-3xl p-6 bg-[#0A0F1D] text-[#FAF6F0] border border-white/10 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-[#FF5E3A]">
                  <HelpCircle className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#FAF6F0]">
                    Legal & MSA Questions
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Need a customized Master Service Agreement, bespoke SLA, or specific vendor compliance rider for your organization?
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
                  <span>Contact Growlinqs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* Right Column: Detailed Structured Legal Text */}
            <main className="lg:col-span-8 space-y-12">
              {/* Section 1 */}
              <section id="introduction" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Introduction
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Welcome to Growlinqs. These Terms and Conditions (&quot;Terms,&quot; &quot;Agreement&quot;) constitute a legally binding agreement between you or the entity you represent (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Growlinqs (&quot;Growlinqs,&quot; &quot;Agency,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  These Terms govern your access to and use of our digital marketing, advertising management, search engine optimization, content strategy, brand acquisition, and growth consulting services, whether accessed via our website ({siteConfig.url}) or executed through a separate Statement of Work (SOW) or proposal.
                </p>
              </section>

              {/* Section 2 */}
              <section id="definitions" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Definitions
                  </h2>
                </div>
                <div className="space-y-3 pt-2 text-xs text-[#5A6578]">
                  <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <strong className="text-[#0A0F1D] block mb-0.5">&quot;Statement of Work&quot; (SOW):</strong>
                    <span>Any formal agreement, order form, digital invoice, or written proposal specifying agreed service scopes, timelines, milestone compensation, and deliverable targets.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <strong className="text-[#0A0F1D] block mb-0.5">&quot;Deliverables&quot;:</strong>
                    <span>Custom work product created specifically for the Client pursuant to an executed SOW, including ad creatives, strategy briefs, SEO audit documents, and copy.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <strong className="text-[#0A0F1D] block mb-0.5">&quot;Media Spend&quot; / &quot;Ad Spend&quot;:</strong>
                    <span>Direct financial budgets payable to third-party advertising networks (e.g., Google Ads, Meta Ads, TikTok Ads) for purchasing ad auction placements.</span>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="acceptance" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Acceptance of Terms
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  By visiting our website, signing a Statement of Work, remitting payment for any invoice, or issuing written approval to begin marketing work, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any portion of these Terms, you must not access our website or engage our agency services.
                </p>
              </section>

              {/* Section 4 */}
              <section id="services" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Our Services
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs provides digital growth services designed to expand online visibility, improve acquisition efficiency, and scale commercial performance. Services are provided on a professional consulting and execution basis and include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-[#0A0F1D]">
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Technical & Editorial Search Engine Optimization</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Paid Search, Paid Social & Programmatic Media</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Social Media Content Strategy & Brand Management</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>App Store Optimization (ASO) & Acquisition</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>Creator, Influencer & Talent Partnership Management</span>
                  </li>
                  <li className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF6F0] border border-[#EADECE]">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    <span>YouTube Strategy, Video SEO & Monetization</span>
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="client-responsibilities" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Client Responsibilities
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  The successful execution of digital marketing campaigns requires close collaboration. The Client agrees to:
                </p>
                <ul className="space-y-2.5 text-xs text-[#5A6578] font-normal pl-4 list-disc">
                  <li>Provide timely access to necessary advertising platforms, analytics consoles, content management systems (CMS), and domain configurations.</li>
                  <li>Designate a primary point of contact with decision-making authority for milestone reviews and campaign approvals.</li>
                  <li>Ensure all assets, logos, trademarks, claims, and product information provided to Growlinqs comply with all applicable advertising and consumer protection laws.</li>
                  <li>Maintain active and funded payment methods on all linked third-party ad accounts to prevent campaign disruption.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="scope-deliverables" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Project Scope and Deliverables
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  The specific deliverables, milestones, and timelines for any engagement shall be governed by the respective Statement of Work. Any request for services outside the agreed scope (&quot;Scope Expansion&quot;) will be evaluated separately and may require an addendum or supplementary estimate before work commences.
                </p>
              </section>

              {/* Section 7 */}
              <section id="communication-approvals" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Communication and Approvals
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Formal notices, deliverable submissions, and approvals must be conducted via official project communication channels or email. To maintain campaign momentum, unless an alternative review window is specified in an SOW, the Client agrees to review and provide feedback or approval on submitted deliverables within five (5) business days of receipt.
                </p>
              </section>

              {/* Section 8 */}
              <section id="fees-payments" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Fees and Payments
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Client agrees to pay all fees outlined in executed SOWs or digital invoices. Unless explicitly stipulated otherwise:
                </p>
                <ul className="space-y-2 text-xs text-[#5A6578] font-normal pl-4 list-disc">
                  <li>Fixed-fee project milestones and monthly retainer fees are invoiced and payable in advance of service commencement.</li>
                  <li>Invoices are due upon receipt or according to net payment terms specified in your SOW.</li>
                  <li>Overdue balances may incur a monthly late fee equal to 1.5% per month or the maximum rate permissible by applicable law.</li>
                  <li>Growlinqs reserves the right to suspend active campaign management and deliverable production if accounts remain delinquent.</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="ad-costs" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Advertising and Third-Party Costs
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Agency management fees paid to Growlinqs are strictly separate from direct advertising spend paid to platform networks (such as Google, Meta, Apple, TikTok, or LinkedIn). All media budgets are billed directly by the ad networks to the Client&apos;s designated billing account unless a consolidated enterprise billing arrangement is established in writing.
                </p>
              </section>

              {/* Section 10 */}
              <section id="campaign-performance" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Campaign Performance
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs employs high-standard marketing methodologies, predictive modeling, rigorous testing, and continuous algorithmic optimization.
                </p>
                <div className="p-4 rounded-2xl bg-[#FFEBE5] border border-[#FF5E3A]/30 text-xs text-[#0A0F1D] leading-relaxed">
                  <strong className="block font-black text-[#FF5E3A] mb-1 uppercase tracking-wider">
                    Clear Distinction: Strategic Effort vs. Guaranteed Outcomes
                  </strong>
                  Because search engine ranking algorithms, ad auction volatility, competitor bid maneuvers, and consumer market behaviors are external variables beyond direct human control, Growlinqs does NOT guarantee specific keyword rankings, guaranteed Return on Ad Spend (ROAS), guaranteed sales conversion counts, guaranteed followers, or viral outcomes. All case studies, historical results, and strategic forecasts presented by Growlinqs represent past performance or strategic modeling and do not constitute an express or implied guarantee of identical results for any specific campaign.
                </div>
              </section>

              {/* Section 11 */}
              <section id="intellectual-property" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Intellectual Property
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  <strong>Client Deliverables:</strong> Upon receipt of full payment for all corresponding fees, all final custom creative assets, marketing copy, and strategy documents created specifically for the Client shall become the intellectual property of the Client.
                </p>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  <strong>Agency Pre-Existing Materials:</strong> Growlinqs retains all right, title, and interest in and to its pre-existing proprietary methodologies, software tooling, internal attribution frameworks, automated workflows, templates, and general marketing architectures.
                </p>
              </section>

              {/* Section 12 */}
              <section id="client-materials" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Client-Provided Materials
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  The Client grants Growlinqs a non-exclusive, worldwide license to use, display, and distribute Client logos, product assets, and brand content solely for the purpose of executing the agreed marketing deliverables. The Client represents and warrants that all materials provided do not infringe upon any third-party intellectual property or privacy rights.
                </p>
              </section>

              {/* Section 13 */}
              <section id="confidentiality" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Confidentiality
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Both parties agree to hold in strict confidence all proprietary, commercial, financial, and operational information disclosed during the engagement. Confidential information will not be disclosed to any third party without prior written consent, except to employees, contractors, and legal advisors bound by similar confidentiality obligations.
                </p>
              </section>

              {/* Section 14 */}
              <section id="data-privacy" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Data and Privacy
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs processes information in compliance with recognized privacy standards and data governance best practices. For detailed information regarding our data collection, tracking protocols, and security practices, please review our{" "}
                  <Link href="/privacy" className="text-[#FF5E3A] font-bold hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              {/* Section 15 */}
              <section id="third-party-platforms" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Third-Party Platforms
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Campaigns rely on third-party networks (including Google, Meta, TikTok, Apple, and LinkedIn) governed by their independent policies and terms. Growlinqs is not responsible for policy shifts, account rejections, review delays, or platform outages instituted by these third-party platforms.
                </p>
              </section>

              {/* Section 16 */}
              <section id="service-availability" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    16
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Service Availability
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  While Growlinqs strives for continuous execution during standard business hours, services may be subject to scheduled maintenance or unforeseen technical interruptions. We make commercially reasonable efforts to notify clients of any planned downtime affecting campaign monitoring tools.
                </p>
              </section>

              {/* Section 17 */}
              <section id="limitation-liability" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    17
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  To the maximum extent permitted by applicable law, in no event shall Growlinqs, its officers, directors, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, goodwill, or business interruption) arising out of or related to our services.
                </p>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs&apos;s aggregate liability for all claims arising under any engagement shall not exceed the total agency fees actually received by Growlinqs from the Client during the three (3) month period immediately preceding the event giving rise to liability.
                </p>
              </section>

              {/* Section 18 */}
              <section id="indemnification" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    18
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Indemnification
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  The Client agrees to defend, indemnify, and hold harmless Growlinqs from and against any third-party claims, damages, losses, liabilities, and expenses (including reasonable attorney fees) arising from: (a) Client-provided products, services, or marketing claims; (b) Client breach of these Terms; or (c) infringement of any third-party intellectual property in Client-supplied materials.
                </p>
              </section>

              {/* Section 19 */}
              <section id="cancellation-termination" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    19
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Cancellation and Termination
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Either party may terminate an engagement for material breach upon fourteen (14) days written notice if the breach remains uncured. For monthly retainer engagements, either party may terminate without cause by providing thirty (30) days prior written notice prior to the start of the next billing cycle.
                </p>
              </section>

              {/* Section 20 */}
              <section id="refunds" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    20
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Refunds
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  All refund requests, eligibility criteria, deliverable reconciliations, and cancellation fee calculations are strictly governed by our dedicated{" "}
                  <Link href="/refund-policy" className="text-[#FF5E3A] font-bold hover:underline">
                    Refund Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </section>

              {/* Section 21 */}
              <section id="dispute-resolution" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    21
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Dispute Resolution
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  In the event of any controversy, claim, or dispute arising out of or relating to these Terms or the services provided, the parties agree to engage in good-faith executive negotiations for at least thirty (30) days before initiating formal arbitration or judicial proceedings.
                </p>
              </section>

              {/* Section 22 */}
              <section id="changes-to-terms" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    22
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Changes to These Terms
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  Growlinqs reserves the right to modify these Terms at any time. When modifications occur, we will update the &quot;Last Updated&quot; timestamp at the top of this document. Continued use of our website or services following posted updates signifies your acceptance of the revised Terms.
                </p>
              </section>

              {/* Section 23 */}
              <section id="governing-law" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-4 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    23
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Governing Law
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  These Terms and any dispute arising from them shall be governed by and construed in accordance with the applicable laws governing commercial contracts, without giving effect to any conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in courts of competent jurisdiction.
                </p>
              </section>

              {/* Section 24 */}
              <section id="contact-information" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADECE] shadow-xs space-y-6 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EADECE] text-xs font-black text-[#FF5E3A] font-mono">
                    24
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A0F1D]">
                    Contact Information
                  </h2>
                </div>
                <p className="text-sm text-[#5A6578] leading-relaxed font-normal">
                  If you have questions, inquiries, or require formal clarification regarding these Terms & Conditions or custom agreement options, please contact our administrative team:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[#5A6578] block">Corporate Office</span>
                    <strong className="text-sm text-[#0A0F1D] block">{siteConfig.name} Digital Marketing Agency</strong>
                    <span className="text-[#5A6578] block">{siteConfig.contact.address}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-[#5A6578] block">Legal & Contract Support</span>
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
                <Sparkles className="h-3.5 w-3.5" />
                <span>COMMERCIAL QUESTIONS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FAF6F0]">
                Have questions about <br />
                <span className="text-[#FF5E3A]">these terms?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
                Our client relations directors are available to review Statements of Work, clarify deliverable milestones, and structure custom terms for enterprise partnerships.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FF5E3A]/25"
                >
                  <span>Contact Growlinqs</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/refund-policy"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#FAF6F0] bg-white/[0.06] border border-white/15 hover:bg-white/10 hover:border-[#FF5E3A] transition-all duration-200"
                >
                  <span>View Refund Policy</span>
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
