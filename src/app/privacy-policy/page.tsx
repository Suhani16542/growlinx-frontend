import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { constructMetadata } from "@/lib/metadata";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Growlinx Digital Marketing",
  description: "Privacy Policy and data governance standards of Growlinx Digital Marketing Agency.",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-[#FAF6F0] cream-surface text-[#0A0F1D]">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A6578] hover:text-[#FF5E3A] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="cream-card rounded-3xl p-8 sm:p-12 border border-[#EADECE] bg-white space-y-6 shadow-md">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A]">
            <ShieldCheck className="h-4 w-4" />
            <span>DATA GOVERNANCE & PRIVACY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#0A0F1D]">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#5A6578] font-bold">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-[#5A6578] border-t border-[#EADECE] pt-6 font-normal">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">1. Information We Collect</h2>
              <p>
                Growlinx ("we," "our," or "us") collects information you provide directly through our strategy request forms, contact inquiries, and communication channels. This may include your full name, work email address, phone number, company name, website URL, and details concerning your marketing goals.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">2. How We Use Your Information</h2>
              <p>
                We use your information exclusively to deliver our digital marketing services, schedule strategic consultations, communicate performance reporting, process transactions, and provide tailored growth proposals. We never sell or rent client data to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">3. Analytics & Attribution Signals</h2>
              <p>
                To provide transparency and measure advertising efficacy, we deploy server-side tracking (e.g., Google Analytics 4, Meta Conversions API) and first-party cookies that monitor aggregated user engagement without storing sensitive personal data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">4. Data Security & Storage</h2>
              <p>
                We maintain enterprise-grade encryption protocols and strict access control measures to safeguard client records, proprietary campaign architectures, and advertising account credentials.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">5. Contact Our Privacy Team</h2>
              <p>
                If you have questions regarding this Privacy Policy, please reach out to our team at{" "}
                <a href="mailto:privacy@growlinx.com" className="text-[#FF5E3A] font-bold hover:underline">
                  privacy@growlinx.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
