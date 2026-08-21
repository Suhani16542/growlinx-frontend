import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { constructMetadata } from "@/lib/metadata";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | GrowlinX Digital Marketing",
  description: "Terms and conditions governing the services provided by GrowlinX Digital Marketing Agency.",
});

export default function TermsPage() {
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
            <span>Commercial Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Terms & Conditions
          </h1>

          <p className="text-xs text-slate-400">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed border-t border-slate-800 pt-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Scope of Engagement</h2>
              <p>
                GrowlinX provides digital marketing, search engine optimization, mobile app acquisition, creator management, and performance advertising services as defined in mutually executed Statements of Work (SOW) or service agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Intellectual Property & Deliverables</h2>
              <p>
                Upon receipt of full payment for billable deliverables, custom advertising creative assets, copy, strategy documents, and customized analytics dashboards created specifically for the client remain the client's property.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Third-Party Ad Platform Spend</h2>
              <p>
                Direct advertising costs incurred across ad platforms (such as Google Ads, Meta Ads, Apple Search Ads) are paid directly to the respective ad networks and remain separate from GrowlinX agency management fees unless specified under an all-inclusive enterprise retainer.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Confidentiality & Non-Disclosure</h2>
              <p>
                GrowlinX treats all client business data, revenue numbers, customer lists, and proprietary marketing architectures with strict confidentiality under enforceable non-disclosure provisions.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
