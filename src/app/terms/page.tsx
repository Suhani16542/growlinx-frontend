import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { constructMetadata } from "@/lib/metadata";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | Growlinx Digital Marketing",
  description: "Terms and conditions governing the services provided by Growlinx Digital Marketing Agency.",
});

export default function TermsPage() {
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
            <span>COMMERCIAL TERMS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#0A0F1D]">
            Terms & Conditions
          </h1>

          <p className="text-xs text-[#5A6578] font-bold">
            Last updated: January 1, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-[#5A6578] border-t border-[#EADECE] pt-6 font-normal">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">1. Scope of Engagement</h2>
              <p>
                Growlinx provides digital marketing, search engine optimization, mobile app acquisition, creator management, and performance advertising services as defined in mutually executed Statements of Work (SOW) or service agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">2. Intellectual Property & Deliverables</h2>
              <p>
                Upon receipt of full payment for billable deliverables, custom advertising creative assets, copy, strategy documents, and customized analytics dashboards created specifically for the client remain the client's property.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">3. Third-Party Ad Platform Spend</h2>
              <p>
                Direct advertising costs incurred across ad platforms (such as Google Ads, Meta Ads, Apple Search Ads) are paid directly to the respective ad networks and remain separate from Growlinx agency management fees unless specified under an enterprise retainer.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#0A0F1D]">4. Confidentiality & Non-Disclosure</h2>
              <p>
                Growlinx treats all client business data, revenue numbers, customer lists, and proprietary marketing architectures with strict confidentiality under enforceable non-disclosure provisions.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
