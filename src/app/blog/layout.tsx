import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { siteSEOConfig } from "@/lib/seo-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = constructMetadata({
  title: siteSEOConfig.blog.title,
  description: siteSEOConfig.blog.description,
  canonicalUrl: siteSEOConfig.blog.canonicalUrl,
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Growth Insights & Blog", url: "/blog" },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      {children}
    </>
  );
}
