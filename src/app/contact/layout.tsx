import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.contact.title,
  description: siteSEOConfig.contact.description,
  canonicalUrl: siteSEOConfig.contact.canonicalUrl,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Our Growth Team", url: "/contact" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {children}
    </>
  );
}
