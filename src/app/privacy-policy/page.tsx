import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { constructMetadata } from "@/lib/metadata";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | GrowlinX Digital Marketing",
  description: "Privacy Policy and data governance standards of GrowlinX Digital Marketing Agency.",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 lg:py-28 bg-[#070b14] text-slate-300">
      <Container className="max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold glow-badge">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>Data Protection & Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-400">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed border-t border-slate-800 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
              <p>
                GrowlinX ("we," "our," or "us") collects information you provide directly through our strategy request forms, contact inquiries, and newsletter signups. This may include your full name, work email address, phone number, company name, website URL, and details concerning your marketing goals.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
              <p>
                We use your information exclusively to deliver our digital marketing services, schedule strategic consultations, communicate performance reporting, process transactions, and provide tailored growth proposals. We never sell, rent, or lease client data to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Analytics & Attribution Signals</h2>
              <p>
                To provide transparency and measure advertising efficacy, we deploy server-side tracking (e.g., Google Analytics 4, Meta Conversions API) and first-party cookies that monitor aggregated user engagement without storing sensitive personal data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Data Security & Storage</h2>
              <p>
                We maintain enterprise-grade encryption protocols and strict access control measures to safeguard client records, proprietary campaign architectures, and advertising account credentials.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Contact Our Privacy Team</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise data access/deletion rights, please reach out to our privacy compliance desk at{" "}
                <a href="mailto:privacy@growlinx.com" className="text-cyan-400 hover:underline">
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
