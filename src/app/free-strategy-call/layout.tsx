import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.strategyCall.title,
  description: siteSEOConfig.strategyCall.description,
  canonicalUrl: siteSEOConfig.strategyCall.canonicalUrl,
});

export default function FreeStrategyCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Book Strategy Call", url: "/free-strategy-call" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {children}
    </>
  );
}
