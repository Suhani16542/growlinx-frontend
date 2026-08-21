import { Metadata } from "next";

export const siteConfig = {
  name: "Growlinx",
  title: "Growlinx — Digital Marketing & Growth Agency",
  description:
    "Growlinx is a high-impact digital marketing & growth agency accelerating businesses with SEO, Paid Advertising, Social Media, App Growth, and Influencer Marketing.",
  url: "https://growlinx.com",
  ogImage: "/images/og-default.png",
  links: {
    twitter: "https://twitter.com/growlinx",
    linkedin: "https://linkedin.com/company/growlinx",
    instagram: "https://instagram.com/growlinx",
  },
  contact: {
    email: "contact@growlinx.com",
    phone: "+1 (800) 555-GROW",
    address: "750 Lexington Ave, New York, NY 10022",
  },
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@growlinx",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    metadataBase: new URL(siteConfig.url),
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  };
}
