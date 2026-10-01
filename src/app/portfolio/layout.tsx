import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.portfolio.title,
  description: siteSEOConfig.portfolio.description,
  canonicalUrl: siteSEOConfig.portfolio.canonicalUrl,
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies & Portfolio", url: "/portfolio" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {children}
    </>
  );
}
