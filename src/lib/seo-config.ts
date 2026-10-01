export interface PageSEOConfig {
  path: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  semanticKeywords: string[];
  searchIntent: "Commercial" | "Informational" | "Transactional" | "Navigational";
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
}

export const siteSEOConfig: Record<string, PageSEOConfig> = {
  home: {
    path: "/",
    primaryKeyword: "digital marketing agency",
    secondaryKeywords: [
      "performance marketing agency",
      "growth marketing consultancy",
      "full-funnel digital marketing",
      "ROI-driven digital marketing",
    ],
    semanticKeywords: [
      "revenue attribution",
      "paid media management",
      "search engine optimization",
      "conversion rate optimization",
      "customer acquisition cost",
    ],
    searchIntent: "Commercial",
    title: "Growlinx | Performance Digital Marketing & Growth Agency",
    description:
      "Growlinx is an elite performance digital marketing agency accelerating brands with full-funnel SEO, high-ROAS paid media, and multi-touch revenue attribution.",
    h1: "Turn Digital Attention Into Real Revenue Growth.",
    canonicalUrl: "https://growlinx.com",
  },
  about: {
    path: "/about-us",
    primaryKeyword: "growth marketing consultants",
    secondaryKeywords: [
      "about growlinx agency",
      "performance marketing team",
      "digital growth architects",
      "data-driven marketing agency",
    ],
    semanticKeywords: [
      "growth methodologies",
      "marketing leadership",
      "server-side attribution",
      "client retention",
      "unit economics audit",
    ],
    searchIntent: "Informational",
    title: "About Us | Full-Stack Performance Digital Marketing Agency",
    description:
      "Discover the story and leadership behind Growlinx—an elite performance marketing agency engineering full-funnel customer acquisition and verified revenue.",
    h1: "We Engineer Growth Engines for Market Leaders.",
    canonicalUrl: "https://growlinx.com/about-us",
  },
  services: {
    path: "/services",
    primaryKeyword: "digital marketing services",
    secondaryKeywords: [
      "growth marketing solutions",
      "performance advertising services",
      "enterprise SEO solutions",
      "multi-channel marketing agency",
    ],
    semanticKeywords: [
      "paid acquisition",
      "organic rank optimization",
      "app install growth",
      "influencer management",
      "YouTube channel monetization",
    ],
    searchIntent: "Commercial",
    title: "Digital Marketing Services & Growth Solutions | Growlinx",
    description:
      "Explore Growlinx's full-spectrum growth services: Enterprise SEO, High-ROAS Paid Ads, App User Acquisition, Social Media, and Influencer Marketing.",
    h1: "High-Impact Growth Marketing Solutions.",
    canonicalUrl: "https://growlinx.com/services",
  },
  serviceSEO: {
    path: "/services/seo",
    primaryKeyword: "enterprise SEO services",
    secondaryKeywords: [
      "search engine optimization agency",
      "technical SEO audit",
      "organic traffic growth",
      "commercial keyword ranking",
    ],
    semanticKeywords: [
      "Core Web Vitals",
      "semantic entity graph",
      "schema markup",
      "digital PR backlinks",
      "AI answer engine optimization",
    ],
    searchIntent: "Commercial",
    title: "Enterprise SEO Services & Organic Revenue Growth | Growlinx",
    description:
      "Dominate search rankings with Growlinx's enterprise SEO services. Technical audits, semantic content architecture, and authority link acquisition.",
    h1: "Enterprise Search Engine Optimization",
    canonicalUrl: "https://growlinx.com/services/seo",
  },
  servicePaidAds: {
    path: "/services/paid-advertising",
    primaryKeyword: "paid advertising agency",
    secondaryKeywords: [
      "Google ads management agency",
      "Meta ads performance marketing",
      "PPC management services",
      "high-ROAS paid media",
    ],
    semanticKeywords: [
      "creative iteration",
      "dynamic audience modeling",
      "server-side CAPI",
      "blended CAC",
      "conversion funnel optimization",
    ],
    searchIntent: "Transactional",
    title: "Paid Advertising Agency | Meta, Google & TikTok Ads | Growlinx",
    description:
      "Scale profitable customer acquisition with high-ROAS paid advertising across Meta, Google Ads, and TikTok with strict unit economics discipline.",
    h1: "Performance Paid Advertising & Media Buying",
    canonicalUrl: "https://growlinx.com/services/paid-advertising",
  },
  serviceSocialMedia: {
    path: "/services/social-media-management",
    primaryKeyword: "social media growth agency",
    secondaryKeywords: [
      "organic social media marketing",
      "brand engagement management",
      "viral social content strategy",
      "community building agency",
    ],
    semanticKeywords: [
      "short-form video production",
      "social listening",
      "community engagement",
      "brand authority",
      "organic viral reach",
    ],
    searchIntent: "Commercial",
    title: "Social Media Management & Growth Agency | Growlinx",
    description:
      "Transform social channels into high-converting revenue assets with bespoke creative storytelling, active community management, and algorithmic distribution.",
    h1: "Strategic Social Media Management & Distribution",
    canonicalUrl: "https://growlinx.com/services/social-media-management",
  },
  serviceAppMarketing: {
    path: "/services/app-marketing",
    primaryKeyword: "mobile app marketing agency",
    secondaryKeywords: [
      "App Store Optimization (ASO)",
      "app user acquisition",
      "mobile install campaigns",
      "mobile app retention marketing",
    ],
    semanticKeywords: [
      "SKAdNetwork telemetry",
      "ASO keyword rank",
      "in-app event tracking",
      "app churn reduction",
      "ROAS per install",
    ],
    searchIntent: "Commercial",
    title: "Mobile App Marketing & ASO Growth Agency | Growlinx",
    description:
      "Drive qualified app installs and long-term user retention with data-backed App Store Optimization (ASO) and precision paid acquisition funnels.",
    h1: "Mobile App Marketing & User Acquisition",
    canonicalUrl: "https://growlinx.com/services/app-marketing",
  },
  serviceInfluencer: {
    path: "/services/influencer-management",
    primaryKeyword: "influencer marketing agency",
    secondaryKeywords: [
      "creator management agency",
      "performance influencer marketing",
      "creator whitelisting campaigns",
      "UGC video production",
    ],
    semanticKeywords: [
      "creator contract negotiation",
      "attributable creator ROI",
      "whitelisted paid ad campaigns",
      "brand resonance",
      "tiered influencer matchmaking",
    ],
    searchIntent: "Commercial",
    title: "Performance Influencer Marketing Agency | Growlinx",
    description:
      "Launch high-ROI influencer campaigns with verified creator partnerships, paid whitelisting, and multi-touch conversion attribution.",
    h1: "Performance Influencer & Creator Marketing",
    canonicalUrl: "https://growlinx.com/services/influencer-management",
  },
  serviceYouTube: {
    path: "/services/youtube-monetization",
    primaryKeyword: "YouTube channel growth agency",
    secondaryKeywords: [
      "YouTube monetization services",
      "YouTube video SEO",
      "commercial YouTube marketing",
      "video retention optimization",
    ],
    semanticKeywords: [
      "CTR thumbnail optimization",
      "audience retention curve",
      "high-CPM niche targeting",
      "sponsored integrations",
      "YouTube algorithm mastery",
    ],
    searchIntent: "Commercial",
    title: "YouTube Growth & Video Monetization Agency | Growlinx",
    description:
      "Scale channel subscribers, maximize watch time, and optimize multi-stream video monetization with algorithmic YouTube growth strategies.",
    h1: "YouTube Growth & Channel Monetization",
    canonicalUrl: "https://growlinx.com/services/youtube-monetization",
  },
  portfolio: {
    path: "/portfolio",
    primaryKeyword: "digital marketing case studies",
    secondaryKeywords: [
      "performance marketing results",
      "client growth proof",
      "SEO case studies",
      "ROAS benchmark results",
    ],
    semanticKeywords: [
      "pipeline velocity",
      "verified acquisition metrics",
      "SaaS growth case study",
      "eCommerce scaling",
      "app install metrics",
    ],
    searchIntent: "Commercial",
    title: "Case Studies & Proven Client Results | Growlinx",
    description:
      "Explore verified case studies and performance benchmarks demonstrating how Growlinx accelerates pipeline velocity and revenue for ambitious brands.",
    h1: "Proven Growth Outcomes & Client Case Studies",
    canonicalUrl: "https://growlinx.com/portfolio",
  },
  blog: {
    path: "/blog",
    primaryKeyword: "growth marketing insights",
    secondaryKeywords: [
      "digital marketing blog",
      "performance advertising tactics",
      "SEO strategies 2026",
      "CRO growth guides",
    ],
    semanticKeywords: [
      "marketing attribution",
      "ad fatigue solutions",
      "answer engine optimization",
      "creative testing frameworks",
      "ASO tactics",
    ],
    searchIntent: "Informational",
    title: "Growth Marketing Insights, Strategies & Playbooks | Growlinx",
    description:
      "Tactical playbooks, data studies, and actionable frameworks from senior growth practitioners on SEO, paid ads, creator marketing, and conversion scaling.",
    h1: "Growth Marketing Insights & Frameworks",
    canonicalUrl: "https://growlinx.com/blog",
  },
  contact: {
    path: "/contact",
    primaryKeyword: "contact digital marketing agency",
    secondaryKeywords: [
      "hire growth marketing agency",
      "request marketing consultation",
      "digital agency inquiry",
      "marketing strategy audit",
    ],
    semanticKeywords: [
      "channel audit",
      "discovery session",
      "senior growth strategist",
      "NDA protected",
      "marketing retainers",
    ],
    searchIntent: "Transactional",
    title: "Contact Our Growth Marketing Team | Growlinx",
    description:
      "Connect with Growlinx's senior growth architects to request a custom channel audit, growth forecast, and full-funnel acquisition blueprint.",
    h1: "Initiate Your Growth Transformation",
    canonicalUrl: "https://growlinx.com/contact",
  },
  strategyCall: {
    path: "/free-strategy-call",
    primaryKeyword: "book free marketing strategy call",
    secondaryKeywords: [
      "complimentary growth audit",
      "free marketing consultation",
      "growth architecture discovery",
      "performance marketing session",
    ],
    semanticKeywords: [
      "unit economics breakdown",
      "competitor teardown",
      "attribution review",
      "custom roadmap",
      "revenue opportunity analysis",
    ],
    searchIntent: "Transactional",
    title: "Book a Free 30-Minute Growth Strategy Session | Growlinx",
    description:
      "Schedule a complimentary 30-minute growth strategy session with a senior partner. Receive a custom channel audit and actionable acquisition roadmap.",
    h1: "Reserve Your 30-Minute Growth Strategy Session",
    canonicalUrl: "https://growlinx.com/free-strategy-call",
  },
};
