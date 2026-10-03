import { siteConfig } from "@/lib/metadata";
import { BlogPostItem, ServiceItem } from "@/types";

/**
 * Generate JSON-LD for Organization / ProfessionalService
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: "Growlinqs Growth Agency",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-growlinx.png`,
    image: `${siteConfig.url}/images/hero-marketing-agency.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "750 Lexington Ave",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10022",
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
    ],
    priceRange: "$$$$",
    knowsAbout: [
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Performance Paid Advertising",
      "Social Media Marketing",
      "Mobile App Growth & ASO",
      "Creator & Influencer Management",
      "Revenue Attribution & Telemetry",
    ],
  };
}

/**
 * Generate JSON-LD for WebSite with SearchAction
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-growlinx.png`,
      },
    },
  };
}

/**
 * Generate JSON-LD for BreadcrumbList
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith("http") ? crumb.url : `${siteConfig.url}${crumb.url}`,
    })),
  };
}

/**
 * Generate JSON-LD for Blog Article
 */
export function generateArticleSchema(post: BlogPostItem, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-growlinx.png`,
      },
    },
    image: `${siteConfig.url}/images/og-default.png`,
    articleSection: post.category,
    keywords: [post.category, "Growth Marketing", "Growlinqs Playbook"],
  };
}

/**
 * Generate JSON-LD for Service
 */
export function generateServiceSchema(service: ServiceItem, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.tag || "Digital Marketing",
    description: service.shortDescription || service.fullDescription || "",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
    },
    areaServed: "Worldwide",
    url: url,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "Custom",
      priceCurrency: "USD",
    },
  };
}

/**
 * Generate JSON-LD for FAQPage
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
