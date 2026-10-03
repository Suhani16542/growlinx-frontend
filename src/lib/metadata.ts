import { Metadata } from "next";

export const siteConfig = {
  name: "Growlinqs",
  title: "Growlinqs — Digital Marketing & Growth Agency",
  description:
    "Growlinqs is a high-impact digital marketing & growth agency accelerating businesses with SEO, Paid Advertising, Social Media, App Growth, and Influencer Marketing.",
  url: "https://www.growlinqs.com",
  ogImage: "/images/og-default.png",
  links: {
    twitter: "https://twitter.com/growlinqs",
    linkedin: "https://linkedin.com/company/growlinqs",
    instagram: "https://instagram.com/growlinqs",
  },
  contact: {
    email: "contact@growlinqs.com",
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
      creator: "@growlinqs",
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
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}
