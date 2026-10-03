import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Container } from "@/components/common/Container";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schema";
import {
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  PhoneCall,
  Award,
  Layers,
  Search,
  Smartphone,
  Users,
  Play,
  Eye,
  DollarSign,
  Activity,
  MessageSquare,
  Share2,
  Compass,
} from "lucide-react";
import { IconWrapper } from "@/components/common/IconWrapper";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Service-specific image mapping for rich visual landing pages
const serviceImageMap: Record<
  string,
  {
    hero: string;
    intro: string;
    benefits: string;
  }
> = {
  seo: {
    hero: "/images/service-seo-dashboard.jpg",
    intro: "/images/strategist-laptop.jpg",
    benefits: "/images/case-study-seo.jpg",
  },
  "paid-advertising": {
    hero: "/images/service-paid-ads.jpg",
    intro: "/images/marketing-strategy-growth.jpg",
    benefits: "/images/case-study-saas.jpg",
  },
  "social-media-management": {
    hero: "/images/service-social-media.jpg",
    intro: "/images/hero-agency-studio.jpg",
    benefits: "/images/marketing-strategy-growth.jpg",
  },
  "app-marketing": {
    hero: "/images/service-app-marketing.jpg",
    intro: "/images/strategist-tablet.jpg",
    benefits: "/images/case-study-ecommerce.jpg",
  },
  "influencer-management": {
    hero: "/images/hero-agency-studio.jpg",
    intro: "/images/service-social-media.jpg",
    benefits: "/images/marketing-strategy-growth.jpg",
  },
  "influencer-marketing": {
    hero: "/images/hero-agency-studio.jpg",
    intro: "/images/service-social-media.jpg",
    benefits: "/images/marketing-strategy-growth.jpg",
  },
  "youtube-monetization": {
    hero: "/images/strategist-laptop.jpg",
    intro: "/images/service-paid-ads.jpg",
    benefits: "/images/case-study-saas.jpg",
  },
  "youtube-marketing": {
    hero: "/images/strategist-laptop.jpg",
    intro: "/images/service-paid-ads.jpg",
    benefits: "/images/case-study-saas.jpg",
  },
};

// Distinct, custom service-specific sections for all 6 disciplines
const serviceDeepDiveData: Record<
  string,
  {
    processBadge: string;
    processTitle: string;
    processSubtitle: string;
    processSteps: Array<{
      step: string;
      title: string;
      desc: string;
      tag: string;
    }>;
    funnelBadge: string;
    funnelTitle: string;
    funnelSubtitle: string;
    funnelDescription: string;
    funnelStages: Array<{
      stage: string;
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
    }>;
  }
> = {
  seo: {
    processBadge: "SEARCH RANKING METHODOLOGY",
    processTitle: "SEO Growth Process",
    processSubtitle:
      "A structured technical, content, and entity optimization roadmap to dominate Google search real estate and capture high-intent buyer traffic.",
    processSteps: [
      {
        step: "01",
        title: "Technical Architecture & Core Web Vitals",
        desc: "Resolving crawl depth issues, optimizing JavaScript rendering, implementing Schema.org JSON-LD, and accelerating page speed for top indexation priority.",
        tag: "Infrastructure",
      },
      {
        step: "02",
        title: "High-Intent Keyword & Entity Mapping",
        desc: "Mapping semantic keyword clusters around high-ticket commercial queries, competitor keyword gaps, and zero-click AI Overview answer targets.",
        tag: "Keyword Architecture",
      },
      {
        step: "03",
        title: "Topical Authority Content Engine",
        desc: "Publishing comprehensive pillar hubs and supporting cluster guides with expert original insights to establish topical dominance in Google's Knowledge Graph.",
        tag: "Content Dominance",
      },
      {
        step: "04",
        title: "Digital PR & High-Trust Link Silos",
        desc: "Acquiring editorial backlinks from tier-1 industry publications and building internal link flows to channel equity into revenue-generating pages.",
        tag: "Authority Expansion",
      },
    ],
    funnelBadge: "SERP REAL ESTATE & AI OVERVIEWS",
    funnelTitle: "Search Visibility & Ranking Strategy",
    funnelSubtitle:
      "How our multi-layered organic search framework secures sustainable top-ranking positions across both traditional Google search and modern AI snippet engines.",
    funnelDescription:
      "We build search authority that withstands core algorithm updates and drives compounding inbound customer pipeline.",
    funnelStages: [
      {
        stage: "Discovery",
        title: "AI Overviews & Snippet Capture",
        description: "Optimizing structured entity data to secure prime placement in Google SGE, AI Overviews, and featured snippet answers.",
        metric: "+240%",
        metricLabel: "Search Impressions",
      },
      {
        stage: "Consideration",
        title: "Top-3 Commercial Keyword Ranks",
        description: "Securing podium rankings for competitive high-intent terms where buyers actively compare products and solutions.",
        metric: "#1 - #3",
        metricLabel: "Target SERP Position",
      },
      {
        stage: "Conversion",
        title: "On-Page Conversion Rate Optimization",
        description: "Transforming organic search visitors into qualified sales pipeline through high-converting lead magnets and UX paths.",
        metric: "3.4X",
        metricLabel: "Organic Lead CVR",
      },
      {
        stage: "Moat",
        title: "Topical Authority Defensibility",
        description: "Deep internal link networks and digital PR citations that prevent competitors from overtaking acquired search real estate.",
        metric: "100%",
        metricLabel: "White-Hat Compliance",
      },
    ],
  },
  "paid-advertising": {
    processBadge: "PAID MEDIA ARBITRAGE",
    processTitle: "Campaign Optimization Process",
    processSubtitle:
      "A scientific, data-backed approach to scaling paid ad capital across Meta, Google Ads, YouTube, and TikTok while keeping CAC strictly within target unit economics.",
    processSteps: [
      {
        step: "01",
        title: "Tracking Architecture & CAPI Integration",
        desc: "Deploying server-side Conversion APIs (CAPI) and offline conversion postbacks to ensure 100% data integrity despite browser cookie deprecation.",
        tag: "Server Telemetry",
      },
      {
        step: "02",
        title: "Creative Sprint & Hook Matrix Testing",
        desc: "Systematically testing 10+ creative angles, visual hooks, direct-response copy, and video variations weekly to discover high-converting winning assets.",
        tag: "Creative Testing",
      },
      {
        step: "03",
        title: "Algorithmic Bidding & Audience Refinement",
        desc: "Configuring value-based smart bidding, cost caps, and high-intent lookalike audiences to maximize return on ad spend (ROAS).",
        tag: "Bidding Precision",
      },
      {
        step: "04",
        title: "LTV-Driven Budget Scaling",
        desc: "Aggressively increasing budgets on verified ad sets while constantly trimming underperforming segments to protect margin profitability.",
        tag: "Budget Scale",
      },
    ],
    funnelBadge: "FULL-FUNNEL CONVERSION MATRIX",
    funnelTitle: "ROAS & Conversion Funnel Strategy",
    funnelSubtitle:
      "Our full-funnel paid media architecture ensures ad capital works synergistically across every touchpoint of the buyer journey.",
    funnelDescription:
      "From cold audience discovery to dynamic retargeting and repeat-purchase customer reactivation.",
    funnelStages: [
      {
        stage: "Top of Funnel",
        title: "Cold Audience Prospecting",
        description: "Capturing market attention with high-impact video hooks, pattern interrupts, and value-first creative angles.",
        metric: "< $0.45",
        metricLabel: "Target Video CPC",
      },
      {
        stage: "Mid Funnel",
        title: "Consideration & Objection Removal",
        description: "Retargeting engaged video viewers and landing page visitors with customer proof, comparison matrices, and case studies.",
        metric: "18.5%",
        metricLabel: "Engaged Click Rate",
      },
      {
        stage: "Bottom of Funnel",
        title: "High-Intent Conversion Closing",
        description: "Driving immediate transaction closing with dynamic catalog ads, urgency hooks, and friction-free landing page paths.",
        metric: "4.8X",
        metricLabel: "Blended Target ROAS",
      },
      {
        stage: "Retention",
        title: "Post-Purchase LTV Expansion",
        description: "Re-engaging existing buyers with complementary cross-sells, loyalty incentives, and subscription upgrades.",
        metric: "+42%",
        metricLabel: "Repeat Order Volume",
      },
    ],
  },
  "social-media-management": {
    processBadge: "ORGANIC BRAND AMPLIFICATION",
    processTitle: "Social Growth Strategy",
    processSubtitle:
      "Building an omnipresent social media ecosystem that turns passive scrollers into passionate brand advocates, community members, and paying customers.",
    processSteps: [
      {
        step: "01",
        title: "Brand Voice & Visual Identity Blueprint",
        desc: "Establishing distinct content pillars, aesthetic guidelines, and authoritative messaging tailored to resonate with target demographic segments.",
        tag: "Positioning",
      },
      {
        step: "02",
        title: "High-Output Multi-Format Content Hub",
        desc: "Producing native short-form Reels, TikToks, LinkedIn thought-leadership carousels, and high-contrast stories engineered for viral shareability.",
        tag: "Content Engine",
      },
      {
        step: "03",
        title: "Active Community Nurturing & Engagement",
        desc: "Implementing rapid DM response protocols, outbound commenting on industry leaders, and trend-jacking to build authentic social resonance.",
        tag: "Community Building",
      },
      {
        step: "04",
        title: "Social Commerce & Inbound Funnels",
        desc: "Integrating link-in-bio architectures, exclusive story drops, and conversational DM automation to drive predictable commercial conversions.",
        tag: "Monetization",
      },
    ],
    funnelBadge: "COMMUNITY TO REVENUE PIPELINE",
    funnelTitle: "Content → Engagement → Community → Growth",
    funnelSubtitle:
      "A 4-tier organic conversion funnel that translates viral algorithmic reach into sustainable commercial customer lifetime value.",
    funnelDescription:
      "We replace random posting with an intentional, data-backed publishing calendar that builds undeniable brand equity.",
    funnelStages: [
      {
        stage: "Content",
        title: "Viral Native Assets",
        description: "High-frequency short-form video and carousels crafted specifically to trigger algorithmic recommendation engines.",
        metric: "2.5M+",
        metricLabel: "Monthly Impressions",
      },
      {
        stage: "Engagement",
        title: "High-Intent Interactions",
        description: "Engaging comment sections, polls, and interactive stories that boost algorithmic retention signals.",
        metric: "8.4%",
        metricLabel: "Average Engagement",
      },
      {
        stage: "Community",
        title: "Brand Superfan Advocacy",
        description: "Nurturing dedicated brand loyalists who champion your products, generate UGC, and defend your brand online.",
        metric: "92%",
        metricLabel: "Positive Sentiment",
      },
      {
        stage: "Growth",
        title: "Direct Attributable Revenue",
        description: "Routing warm community traffic into tracked checkout pages, custom lead magnets, and product launches.",
        metric: "+310%",
        metricLabel: "Inbound Pipeline Lift",
      },
    ],
  },
  "app-marketing": {
    processBadge: "MOBILE USER ACQUISITION",
    processTitle: "User Acquisition Journey",
    processSubtitle:
      "A complete mobile growth playbook spanning App Store Optimization (ASO), paid install scaling across Apple Search Ads & Meta, and in-app retention loops.",
    processSteps: [
      {
        step: "01",
        title: "App Store Optimization (ASO) & Custom Product Pages",
        desc: "Optimizing app metadata, keyword indexing, and multivariate icon/screenshot A/B tests to maximize organic search rank and store CVR.",
        tag: "Store Optimization",
      },
      {
        step: "02",
        title: "Precision Paid User Acquisition",
        desc: "Deploying high-intent Apple Search Ads, Meta App Campaigns, and Google UAC targeting users with high lifetime value potential.",
        tag: "Paid Acquisition",
      },
      {
        step: "03",
        title: "Onboarding UX & Key Event Activation",
        desc: "Auditing first-time user experience (FTUE) to remove friction and accelerate the time it takes for a newly installed user to hit the core aha moment.",
        tag: "Activation Lift",
      },
      {
        step: "04",
        title: "Retention Loops & Subscription LTV",
        desc: "Deploying intelligent push notification journeys, in-app messaging triggers, and paywall pricing tests to compound monthly recurring ARR.",
        tag: "LTV Optimization",
      },
    ],
    funnelBadge: "MOBILE LIFECYCLE ENGINE",
    funnelTitle: "Install → Activation → Retention → Growth",
    funnelSubtitle:
      "Our full-funnel mobile marketing architecture lowers Cost Per Install (CPI) while maximizing 30-day user retention and monetization.",
    funnelDescription:
      "Turning first-time mobile downloads into highly engaged, paying subscribers through automated lifecycle telemetry.",
    funnelStages: [
      {
        stage: "Install",
        title: "Cost-Effective Acquisition",
        description: "Acquiring targeted mobile users from high-converting search queries and direct-response video ad sets.",
        metric: "-35%",
        metricLabel: "Target CPI Reduction",
      },
      {
        stage: "Activation",
        title: "Seamless First-Session Onboarding",
        description: "Optimizing initial app session to guide users directly to core utility and account completion.",
        metric: "68%",
        metricLabel: "Day 1 Activation Rate",
      },
      {
        stage: "Retention",
        title: "Smart Re-Engagement Loops",
        description: "Contextual push notifications and personalized in-app messaging to prevent user churn.",
        metric: "3.2X",
        metricLabel: "Day 30 Retention Lift",
      },
      {
        stage: "Growth",
        title: "Monetization & Viral Referrals",
        description: "Paywall split-testing and built-in invite incentives that turn power users into organic growth drivers.",
        metric: "+280%",
        metricLabel: "Subscription ARR Scale",
      },
    ],
  },
  "influencer-management": {
    processBadge: "CREATOR PARTNERSHIP PROTOCOL",
    processTitle: "Creator Collaboration Process",
    processSubtitle:
      "End-to-end influencer matchmaking, content co-creation, and paid ad amplification that delivers verified commercial conversions with complete brand safety.",
    processSteps: [
      {
        step: "01",
        title: "Creator Discovery & Audience Integrity Auditing",
        desc: "Utilizing advanced data telemetry to analyze creator demographics, suspicious follower ratios, historical engagement, and audience brand affinity.",
        tag: "Vetting & Match",
      },
      {
        step: "02",
        title: "Creative Briefing & Native Angle Direction",
        desc: "Crafting structured creative guidelines that give creators the freedom to tell authentic, relatable stories while ensuring clear brand call-to-actions.",
        tag: "Content Direction",
      },
      {
        step: "03",
        title: "Synchronized Multi-Platform Rollout",
        desc: "Coordinating multi-creator publishing waves across Instagram, TikTok, and YouTube to flood social feeds and trigger viral discovery algorithms.",
        tag: "Campaign Launch",
      },
      {
        step: "04",
        title: "Creator Whitelisting & Paid Amplification",
        desc: "Securing advertiser access to top-performing creator accounts to run high-ROAS direct-response ads directly from trusted influencer handles.",
        tag: "Paid Whitelisting",
      },
    ],
    funnelBadge: "TRUST-DRIVEN CONVERSION FUNNEL",
    funnelTitle: "Reach → Engagement → Conversion Funnel",
    funnelSubtitle:
      "Transforming creator trust and visual storytelling into scalable customer acquisition and measurable e-commerce transactions.",
    funnelDescription:
      "We bridge the gap between organic influencer hype and predictable commercial performance through trackable whitelisting.",
    funnelStages: [
      {
        stage: "Reach",
        title: "Niche Audience Access",
        description: "Bypassing cold advertising barriers by placing your product in front of curated creator fanbases.",
        metric: "5M+",
        metricLabel: "Target Creator Reach",
      },
      {
        stage: "Engagement",
        title: "Authentic Social Proof",
        description: "Genuine unboxings, tutorials, and lifestyle integrations that generate high-volume comment interactions.",
        metric: "7.8%",
        metricLabel: "Avg Creator Engagement",
      },
      {
        stage: "Conversion",
        title: "Trackable Offer Closing",
        description: "Dedicated creator coupon codes, customized landing pages, and bio links with 100% conversion attribution.",
        metric: "4.2X",
        metricLabel: "Attributable ROAS",
      },
      {
        stage: "Amplification",
        title: "Whitelisted Paid Ads",
        description: "Scaling top-converting creator videos through dark posts to capture cold audiences with authentic UGC proof.",
        metric: "-40%",
        metricLabel: "Blended CAC Reduction",
      },
    ],
  },
  "youtube-monetization": {
    processBadge: "YOUTUBE CHANNEL ACCELERATION",
    processTitle: "Channel Growth Journey",
    processSubtitle:
      "A complete video production, CTR packaging, retention engineering, and multi-stream monetization blueprint designed to scale channel authority and revenue.",
    processSteps: [
      {
        step: "01",
        title: "High-RPM Topic Mining & Competitive Gaps",
        desc: "Identifying high-CPM search queries, evergreen search volume, and trending competitor themes with untapped audience demand.",
        tag: "Niche Research",
      },
      {
        step: "02",
        title: "CTR Packaging: Titles & Custom Thumbnails",
        desc: "Designing multivariate custom thumbnails and high-curiosity title formulas that achieve consistent 10%+ click-through rates.",
        tag: "Packaging CTR",
      },
      {
        step: "03",
        title: "Retention Storyboarding & Visual Pacing",
        desc: "Structuring video intros, pattern interrupts, motion graphics, and narrative hooks to keep viewer retention above 70% across key chapters.",
        tag: "Watch Time Engine",
      },
      {
        step: "04",
        title: "Omnichannel Monetization Matrix",
        desc: "Setting up YouTube Partner Program AdSense optimization, high-ticket brand sponsorships, affiliate funnels, and backend digital products.",
        tag: "Revenue Scaling",
      },
    ],
    funnelBadge: "YOUTUBE REVENUE MULTIPLIER",
    funnelTitle: "Views → Watch Time → Subscribers → Revenue",
    funnelSubtitle:
      "Our systematic YouTube monetization engine turns passive video clicks into a highly profitable multi-stream digital asset.",
    funnelDescription:
      "Maximizing audience lifetime value by combining AdSense optimization with dedicated sponsor integrations and digital product sales.",
    funnelStages: [
      {
        stage: "Views",
        title: "High-CTR Algorithmic Packaging",
        description: "Triggering YouTube Browse and Suggested video recommendation feeds through optimized thumbnail & title pairings.",
        metric: "12.4%",
        metricLabel: "Average Video CTR",
      },
      {
        stage: "Watch Time",
        title: "High-Retention Storytelling",
        description: "Keeping audiences engaged past the 8-minute threshold to maximize mid-roll ad placement opportunities.",
        metric: "72%",
        metricLabel: "Avg Retention Rate",
      },
      {
        stage: "Subscribers",
        title: "Loyal Audience Conversion",
        description: "Strategic in-video callouts that convert one-time viewers into lifelong subscribers and community members.",
        metric: "+450%",
        metricLabel: "Subscriber Velocity",
      },
      {
        stage: "Revenue",
        title: "Multi-Stream Monetization",
        description: "Unlocking top-tier AdSense RPMs alongside lucrative 5-figure sponsorships and digital product sales.",
        metric: "$18 - $42",
        metricLabel: "Target Monetized RPM",
      },
    ],
  },
};

const findServiceBySlug = (slug: string) => {
  if (slug === "influencer-marketing") {
    return servicesData.find((s) => s.id === "influencer-management");
  }
  if (slug === "youtube-marketing") {
    return servicesData.find((s) => s.id === "youtube-monetization");
  }
  return servicesData.find((s) => s.slug === slug || s.id === slug);
};

export async function generateStaticParams() {
  const baseParams = servicesData.map((service) => ({
    slug: service.slug,
  }));
  return [
    ...baseParams,
    { slug: "influencer-marketing" },
    { slug: "youtube-marketing" },
  ];
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
    });
  }

  return constructMetadata({
    title: `${service.title} | Growlinqs Growth Agency`,
    description: service.shortDescription,
    canonicalUrl: `https://growlinqs.com/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const lookupKey = service.slug === "influencer-marketing" ? "influencer-management" : service.slug === "youtube-marketing" ? "youtube-monetization" : service.slug;
  const deepDive = serviceDeepDiveData[lookupKey] || serviceDeepDiveData[service.id] || serviceDeepDiveData["seo"];

  const images = serviceImageMap[service.slug] || serviceImageMap[service.id] || {
    hero: "/images/hero-marketing-agency.jpg",
    intro: "/images/marketing-strategy-growth.jpg",
    benefits: "/images/case-study-seo.jpg",
  };

  const whyChoosePillars = [
    {
      title: "Senior Growth Architects Only",
      description: "Direct collaboration with battle-tested domain strategists—zero junior account manager delegation.",
      icon: Award,
    },
    {
      title: "First-Party Data & Server CAPI",
      description: "Custom conversion tracking infrastructure resilient to browser cookie restrictions and iOS privacy changes.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Live Telemetry Dashboards",
      description: "Real-time client portal tracking blended ROAS, CAC payback velocity, and attributable commercial revenue.",
      icon: BarChart3,
    },
    {
      title: "Multi-Channel Growth Synergy",
      description: "Synchronizing organic search authority with laser-targeted paid acquisition to compound total ROI.",
      icon: Layers,
    },
  ];

  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const serviceSchema = generateServiceSchema(service, `https://growlinqs.com/services/${service.slug}`);

  return (
    <div className="flex flex-col w-full overflow-hidden cream-surface">
      <JsonLd schema={[breadcrumbsSchema, serviceSchema]} />
      {/* =========================================================================
          SECTION 1: SERVICE HERO (LIGHT: Warm White / Cream with Large Image Card)
          ========================================================================= */}
      <section className="relative py-14 sm:py-18 lg:py-20 cream-surface overflow-hidden border-b border-[#EADECE]">
        {/* Soft Warm Atmospheric Ambience */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFEBE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#F3ECE2]/70 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container className="relative z-10">
          {/* Breadcrumb Link */}
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5A6578] hover:text-[#FF5E3A] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Solutions</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Headline, Copy & CTAs */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-left" duration={800} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{service.tag || "PERFORMANCE DISCIPLINE"}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0A0F1D]">
                  {service.title.split(" ")[0]}{" "}
                  <span className="text-[#FF5E3A]">
                    {service.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                {service.tagline && (
                  <p className="text-base sm:text-lg font-bold text-[#0A0F1D]">
                    {service.tagline}
                  </p>
                )}

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  {service.fullDescription || service.shortDescription}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#FF5E3A]/20"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Free Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider text-[#0A0F1D] bg-white border border-[#EADECE] hover:bg-[#FAF6F0] hover:border-[#FF5E3A] transition-all duration-200 shadow-xs"
                  >
                    <span>View Case Studies</span>
                  </Link>
                </div>

                {/* Verified Trust Badges */}
                <div className="pt-4 border-t border-[#EADECE] flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#5A6578] font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Multi-Touch Attribution
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Dedicated Senior Strategist
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                    Verified ROI Standard
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Large Professional Image Card with Floating Telemetry Badges */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-right" duration={800} delay={150}>
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] sm:aspect-[16/12] p-2">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <Image
                        src={images.hero}
                        alt={`${service.title} Execution Engine`}
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Floating Telemetry Chip 1 */}
                    {service.metrics?.[0] && (
                      <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-[#EADECE] flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-black">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#0A0F1D] leading-none">
                            {service.metrics[0].value}
                          </p>
                          <p className="text-[10px] font-bold text-[#5A6578] uppercase mt-0.5">
                            {service.metrics[0].label}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Floating Telemetry Chip 2 */}
                    {service.metrics?.[1] && (
                      <div className="absolute bottom-5 right-5 bg-[#0A0F1D]/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/10 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-black">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#FAF6F0] leading-none">
                            {service.metrics[1].value}
                          </p>
                          <p className="text-[10px] font-bold text-[#FF5E3A] uppercase mt-0.5">
                            {service.metrics[1].label}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: INTRODUCTION & STRATEGIC OVERVIEW (LIGHT: Text + Image Card)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Strategic Image Card */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] p-2">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src={images.intro}
                      alt={`${service.title} Strategy Team`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#EADECE] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#0A0F1D] text-[#FAF6F0] flex items-center justify-center font-black">
                        <ShieldCheck className="h-4 w-4 text-[#FF5E3A]" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#0A0F1D]">Attribution Telemetry</p>
                        <p className="text-[10px] text-[#5A6578] font-bold">100% Server-Side Verified</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#FF5E3A]/15 text-[#FF5E3A]">
                      Audited
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Comprehensive Explanation */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left order-1 lg:order-2">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <Target className="h-3.5 w-3.5" />
                  <span>STRATEGIC ADVANTAGE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0F1D] leading-tight">
                  Engineering Long-Term <br />
                  <span className="text-[#FF5E3A]">Commercial Velocity</span>
                </h2>

                <p className="text-sm sm:text-base text-[#5A6578] leading-relaxed font-normal">
                  Modern digital acquisition requires deep alignment across customer journey telemetry, high-intent targeting, and continuous conversion optimization. We replace fragmented agency guesswork with proven, data-backed frameworks.
                </p>

                <div className="space-y-3 pt-1 text-left">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADECE] shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-[#0A0F1D] block">Predictable Unit Economics</strong>
                      <p className="text-xs text-[#5A6578] leading-relaxed mt-0.5">Every campaign decision is calculated against target customer LTV, payback windows, and blended commercial ROAS.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADECE] shadow-xs">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-[#0A0F1D] block">Rapid Creative & Audience Iteration</strong>
                      <p className="text-xs text-[#5A6578] leading-relaxed mt-0.5">Weekly sprint cycles ensure fresh creative hooks, multivariate ad copy tests, and landing page split tests.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT WE PROVIDE / SCOPE OF DELIVERABLES (LIGHT: 6 Premium Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CORE CAPABILITIES & DELIVERABLES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                What We Execute in <span className="text-[#FF5E3A]">{service.title}</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                A comprehensive breakdown of strategic workflows, technical setups, and daily execution deliverables included in our partnership.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(service.deliverables || service.features)?.map((item, idx) => {
              const anim = idx % 3 === 0 ? "fade-left" : idx % 3 === 2 ? "fade-right" : "fade-up";
              const delay = (idx % 3) * 120;
              return (
                <ScrollReveal
                  key={idx}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] flex items-center justify-center font-black group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          Scope 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1">
                          {item}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                          Executed by specialized channel architects with real-time conversion tracking and weekly growth reporting.
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center gap-1.5 text-[10px] font-bold text-[#FF5E3A]">
                      <span>Domain Specialized Execution</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: SERVICE-SPECIFIC PROCESS (LIGHT: Tailored 4-Phase Roadmap)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Zap className="h-3.5 w-3.5" />
                <span>{deepDive.processBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                {deepDive.processTitle.split(" ")[0]}{" "}
                <span className="text-[#FF5E3A]">
                  {deepDive.processTitle.split(" ").slice(1).join(" ")}
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                {deepDive.processSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {deepDive.processSteps.map((step, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              const delay = idx * 120;
              return (
                <ScrollReveal
                  key={step.step}
                  animation={anim}
                  duration={750}
                  delay={delay}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between relative h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-2xl font-black text-[#FF5E3A] font-mono leading-none">
                          {step.step}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#5A6578]">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-[#EADECE] flex items-center justify-between text-[11px] font-bold text-[#5A6578]">
                      <span>Stage Protocol</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E3A]" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4.5: SERVICE-SPECIFIC VISUAL STRATEGY / FUNNEL MATRIX (LIGHT)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Target className="h-3.5 w-3.5" />
                <span>{deepDive.funnelBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                {deepDive.funnelTitle}
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                {deepDive.funnelSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deepDive.funnelStages.map((stage, idx) => {
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={stage.stage}
                  animation={anim}
                  duration={750}
                  delay={idx * 110}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A]">
                          {stage.stage}
                        </span>
                        <div className="text-right">
                          <span className="text-base font-black text-[#0A0F1D] block leading-none font-mono">
                            {stage.metric}
                          </span>
                          <span className="text-[9px] font-bold text-[#5A6578] uppercase">
                            {stage.metricLabel}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center gap-1.5 text-[10px] font-bold text-[#FF5E3A]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Stage Benchmark</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: DARK FEATURE SECTION & TELEMETRY BREAK (DARK: Navy + White Headings)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 relative bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Interactive Telemetry Image Showcase */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="fade-left" duration={800}>
                <div className="rounded-[2rem] bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#0A0F1D] border border-white/15 p-4 sm:p-5 shadow-2xl relative overflow-hidden">
                  <div className="w-full flex items-center justify-between pb-3 px-2 text-xs text-slate-300 font-bold border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#FF5E3A]" />
                      <span className="text-[#FAF6F0]">
                        {service.slug === "seo"
                          ? "Live Google Rank & Indexing Engine"
                          : service.slug === "paid-advertising"
                          ? "High-ROAS Conversion Funnel Engine"
                          : service.slug === "social-media-management"
                          ? "Viral Community & Network Graph"
                          : service.slug === "app-marketing"
                          ? "Mobile Install & ASO Telemetry"
                          : service.slug.includes("influencer")
                          ? "Creator Reach & Resonance Broadcaster"
                          : service.slug.includes("youtube")
                          ? "Watch-Time & Video Analytics Engine"
                          : "Real-Time Attribution Engine"}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/30">
                      Live Telemetry
                    </span>
                  </div>

                  <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden mt-3 border border-white/10">
                    <Image
                      src={images.benefits || images.intro || "/images/service-paid-ads.jpg"}
                      alt={`${service.title} Telemetry Engine`}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-[#0A0F1D]/90 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-xs font-bold text-[#FAF6F0]">{service.metrics?.[0]?.value ? `${service.metrics[0].value} ${service.metrics[0].label}` : "4.8X Verified ROAS"}</span>
                      </div>
                      <span className="text-[10px] text-slate-300 font-mono font-bold uppercase">{service.metrics?.[1]?.value ? `${service.metrics[1].value} ${service.metrics[1].label}` : "+340% Pipeline Velocity"}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Crisp White Headings & Strategic Pillars */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] border border-[#FF5E3A]/30 text-[#FF5E3A] shadow-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>DATA INTEGRATION & TELEMETRY</span>
                </div>

                {/* CRISP WHITE HEADING ON DARK SECTION */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FAF6F0] leading-tight">
                  Server-Side Telemetry & <br />
                  <span className="text-[#FF5E3A]">Multi-Touch Attribution</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  We eliminate attribution blind spots with multi-touch server-side conversion APIs (CAPI), custom GA4 event telemetry, and transparent reporting that ties every dollar directly to bottom-line pipeline revenue.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-left">
                  <div className="navy-card rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#FAF6F0]">Cookieless Precision</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Zero loss of conversion signals despite browser ad-blockers and privacy restrictions.
                    </p>
                  </div>

                  <div className="navy-card rounded-2xl p-4 sm:p-5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E3A]" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#FAF6F0]">ROAS Optimization</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Algorithmic bid signals fed by high-intent first-party conversion data.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/free-strategy-call"
                    className="orange-btn inline-flex items-center gap-2 font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md shadow-[#FF5E3A]/20"
                  >
                    <span>Audit Your Attribution Free</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: BENEFITS & MEASURABLE RESULTS (LIGHT: Benefits + Image Card)
          ========================================================================= */}
      {service.benefits && (
        <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
          <Container>
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>COMMERCIAL OUTCOMES</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                  Measurable Business <span className="text-[#FF5E3A]">Benefits</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                  Why deploying our {service.title} framework compounds into long-term market dominance and higher margins.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: 4 Numbered Benefit Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => {
                  const anim = i % 2 === 0 ? "fade-left" : "fade-right";
                  return (
                    <ScrollReveal
                      key={i}
                      animation={anim}
                      duration={750}
                      delay={i * 100}
                      className="h-full"
                    >
                      <div className="cream-card cream-card-interactive group rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-3 h-full">
                        <div>
                          <span className="text-2xl font-black text-[#FF5E3A] block mb-1.5 leading-none font-mono">
                            0{i + 1}
                          </span>
                          <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Right Column: Verified Results Image Card */}
              <div className="lg:col-span-5 relative">
                <ScrollReveal animation="fade-right" duration={800} delay={150}>
                  <div className="relative rounded-[2rem] overflow-hidden border border-[#EADECE] bg-white shadow-xl aspect-[4/3] p-2">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <Image
                        src={images.benefits}
                        alt="Verified Growth Case Studies"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div className="absolute top-5 left-5 bg-[#0A0F1D]/90 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/10 text-[#FAF6F0] flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-xl bg-[#FF5E3A]/20 text-[#FF5E3A] flex items-center justify-center font-black shrink-0">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-black text-[#FF5E3A] leading-none">
                          {service.metrics?.[0]?.value || "4.8X"} {service.metrics?.[0]?.label || "Attributable Growth"}
                        </p>
                        <p className="text-[10px] text-slate-300 font-bold mt-0.5">Audited Performance Data</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          SECTION 7: WHY CHOOSE GROWLINQS (LIGHT: 4 Feature Pillar Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
        <Container>
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                <Award className="h-3.5 w-3.5" />
                <span>THE GROWLINQS ADVANTAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight">
                Why High-Growth Brands <br />
                <span className="text-[#FF5E3A]">Partner With Growlinqs</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6578] font-medium leading-relaxed">
                We operate as your embedded growth engine rather than a detached vendor, holding ourselves accountable to verified commercial revenue.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoosePillars.map((item, idx) => {
              const Icon = item.icon;
              const anim = idx === 0 ? "fade-left" : idx === 3 ? "fade-right" : "fade-up";
              return (
                <ScrollReveal
                  key={item.title}
                  animation={anim}
                  duration={750}
                  delay={idx * 100}
                  className="h-full"
                >
                  <div className="cream-card cream-card-interactive group rounded-3xl p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3.5">
                      <div className="h-10 w-10 rounded-2xl bg-[#FAF6F0] border border-[#EADECE] text-[#FF5E3A] flex items-center justify-center font-black group-hover:bg-[#FF5E3A] group-hover:text-white transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5A6578] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#EADECE] flex items-center gap-1.5 text-[11px] font-bold text-[#0A0F1D]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5E3A]" />
                      <span>Included in every retainer</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: SERVICE-SPECIFIC FAQS (LIGHT: Clean Rounded Accordion Cards)
          ========================================================================= */}
      {service.faqs && (
        <section className="py-16 sm:py-20 lg:py-24 cream-surface overflow-hidden border-b border-[#EADECE]">
          <Container className="max-w-3xl">
            <ScrollReveal animation="fade-up" duration={700}>
              <div className="text-center space-y-3.5 mb-12">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest bg-white border border-[#EADECE] text-[#FF5E3A] shadow-xs">
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span>FREQUENTLY ASKED QUESTIONS</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0F1D]">
                  {service.title} <span className="text-[#FF5E3A]">FAQs</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#5A6578] font-medium">
                  Everything you need to know about timelines, deliverables, attribution, and pricing.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3.5">
              {service.faqs.map((faq, index) => (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  duration={600}
                  delay={index * 80}
                >
                  <div className="cream-card rounded-2xl p-5 sm:p-6 border border-[#EADECE] bg-white space-y-2 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-[#0A0F1D] flex items-center gap-2.5">
                      <HelpCircle className="h-4 w-4 text-[#FF5E3A] shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6578] leading-relaxed pl-6 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          SECTION 9: FINAL CALL TO ACTION (DARK: Navy + Crisp White Heading + Orange Button)
          ========================================================================= */}
      <CTASection />
    </div>
  );
}
