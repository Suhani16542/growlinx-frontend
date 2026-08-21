import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "seo",
    slug: "seo",
    title: "SEO Services",
    tagline: "Dominate Search Rankings & Drive Sustainable Organic Growth",
    shortDescription: "Build long-term organic visibility through technical, on-page, off-page, and local SEO strategies.",
    fullDescription: "Our comprehensive SEO service is engineered to elevate your organic presence, secure top Google positions for high-intent keywords, and convert search traffic into loyal paying customers.",
    iconName: "Search",
    tag: "Organic Growth",
    ctaText: "Explore SEO Services",
    features: [
      "Technical SEO Audits & Core Web Vitals Optimization",
      "On-Page SEO & Content Strategy",
      "Off-Page SEO & High-Authority Link Building",
      "Local SEO & Google Business Profile Optimization",
      "High-Intent Keyword Research & Mapping",
      "Competitor Analysis & Market Share Capture",
    ],
    deliverables: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Keyword Research",
      "Competitor Analysis",
      "Link Building",
      "Google Business Profile Optimization",
    ],
    benefits: [
      {
        title: "Sustainable Traffic Flow",
        description: "Generate consistent, high-intent website visitors without recurring cost-per-click charges.",
      },
      {
        title: "Top-Tier Brand Authority",
        description: "Establish industry credibility by ranking #1 for the solutions your prospective clients search for.",
      },
      {
        title: "High Conversion Intent",
        description: "Target organic search queries with commercial intent to maximize lead-to-deal conversion rates.",
      },
      {
        title: "Long-Term ROI",
        description: "SEO compounds over time, continuously decreasing your blended customer acquisition cost.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Audit",
        description: "Deep crawl of technical health, backlink profile, keyword gaps, and crawl budget efficiency.",
      },
      {
        step: "02",
        title: "Strategic Keyword Mapping",
        description: "Uncovering bottom-of-funnel search terms with high commercial value and competitive opportunity.",
      },
      {
        step: "03",
        title: "Technical & On-Page Execution",
        description: "Optimizing metadata, schema markup, site speed, internal linking, and content relevance.",
      },
      {
        step: "04",
        title: "Authority Link Acquisition",
        description: "Securing white-hat editorial mentions and tier-1 backlinks across authoritative industry publications.",
      },
    ],
    metrics: [
      { label: "Organic Traffic Growth", value: "+180%" },
      { label: "Top 3 Google Rankings", value: "850+" },
      { label: "Organic Lead Volume", value: "3.4x" },
    ],
    faqs: [
      {
        question: "How long does SEO take to produce measurable results?",
        answer: "SEO is a compounding growth channel. Typically, initial keyword movements and indexing improvements appear within 60–90 days, with substantial organic traffic and revenue acceleration occurring within 4–6 months.",
      },
      {
        question: "What is included in the Technical SEO audit?",
        answer: "Our technical audit covers Core Web Vitals, mobile responsiveness, XML sitemaps, robots.txt directives, indexing errors, schema structured data, canonical tags, and JavaScript rendering checks.",
      },
      {
        question: "How do you choose the keywords to target?",
        answer: "We analyze search intent, search volume, click-through probability, competitor ranking deficits, and customer conversion intent to target keywords that drive real revenue rather than vanity metrics.",
      },
    ],
  },
  {
    id: "app-marketing",
    slug: "app-marketing",
    title: "App Marketing & User Acquisition",
    tagline: "Scale Mobile Downloads Into High-LTV Active Users",
    shortDescription: "Acquire high-quality mobile app users through App Store Optimization, paid acquisition, and retention funnels.",
    fullDescription: "From App Store Optimization (ASO) to paid install campaigns across Google, Apple Search Ads, and Meta, we build acquisition engines that drive high-intent downloads and sustainable user retention.",
    iconName: "Smartphone",
    tag: "Mobile Growth",
    ctaText: "Explore App Marketing",
    features: [
      "App Store Optimization (ASO) for iOS App Store & Google Play",
      "Google App Campaigns (UAC) & Apple Search Ads (ASA)",
      "Meta & TikTok Paid App Install Campaigns",
      "Full-Funnel User Acquisition & Cohort Analytics",
      "Dynamic In-App Retargeting & Re-engagement",
      "Creative A/B Testing (Icons, Screenshots, Video Previews)",
    ],
    deliverables: [
      "App Install Campaigns",
      "Google App Campaigns",
      "Meta App Advertising",
      "User Acquisition",
      "Retargeting",
      "Performance Marketing",
      "App Store / Play Store Optimization",
      "Conversion Analytics",
    ],
    benefits: [
      {
        title: "Lower Cost Per Install (CPI)",
        description: "Optimized creative formats and algorithmic bidding reduce your blended acquisition spend.",
      },
      {
        title: "Higher Day-30 Retention",
        description: "Target cohorts with high in-app affinity to drive long-term active engagement and repeat usage.",
      },
      {
        title: "Store Ranking Dominance",
        description: "Continuous ASO updates push your app to top category charts and keyword search positions.",
      },
      {
        title: "Verified Attribution",
        description: "Full MMP integration (AppsFlyer, Adjust, Branch) ensures every ad dollar is accurately tracked.",
      },
    ],
    process: [
      {
        step: "01",
        title: "ASO & Store Asset Audit",
        description: "Optimizing metadata, keyword density, subtitle copy, and high-converting visual screenshot sets.",
      },
      {
        step: "02",
        title: "Paid Acquisition Setup",
        description: "Configuring Apple Search Ads, Google UAC, and Meta App Install campaigns with deep-linking.",
      },
      {
        step: "03",
        title: "Creative Iteration & A/B Tests",
        description: "Deploying motion graphics, gameplay hooks, and user-generated video ads to scale install velocity.",
      },
      {
        step: "04",
        title: "Retention & LTV Optimization",
        description: "Analyzing in-app events and building automated retargeting sequences to convert installs into revenue.",
      },
    ],
    metrics: [
      { label: "Total App Installs Driven", value: "500K+" },
      { label: "Average CPI Reduction", value: "-35%" },
      { label: "Day-30 Retention Uplift", value: "+42%" },
    ],
    faqs: [
      {
        question: "How is ASO different from Paid App Marketing?",
        answer: "ASO improves your organic visibility and keyword rank within the App Store and Google Play, while Paid App Marketing uses targeted paid ads (Apple Search Ads, Google UAC) to immediately scale downloads.",
      },
      {
        question: "Which Mobile Measurement Partners (MMPs) do you support?",
        answer: "We seamlessly integrate and configure AppsFlyer, Adjust, Singular, Branch, and Google Analytics for Firebase for real-time postback and cohort attribution.",
      },
    ],
  },
  {
    id: "influencer-management",
    slug: "influencer-management",
    title: "Influencer & Celebrity Digital Management",
    tagline: "Amplify Your Voice Through High-Impact Creator Collaborations",
    shortDescription: "Manage digital presence, creator collaborations, content strategy, and viral audience growth.",
    fullDescription: "We manage end-to-end digital branding, influencer partnerships, and celebrity digital channels to create authentic cultural resonance, viral engagement, and lucrative brand endorsements.",
    iconName: "Users",
    tag: "Influence & Brand",
    ctaText: "Explore Influencer Management",
    features: [
      "Creator Vetting & Fake Follower Auditing",
      "Multi-Platform Management (Instagram, YouTube, LinkedIn, TikTok)",
      "Strategic Content Planning & Viral Reels/Shorts Production",
      "Brand Collaboration & Commercial Sponsorship Negotiation",
      "Paid Dark Post Whitelisting & Creator Spark Ads",
      "Audience Engagement & Community Management",
    ],
    deliverables: [
      "Instagram Management",
      "Facebook Management",
      "YouTube Management",
      "LinkedIn Management",
      "Content Planning",
      "Reels & Short Videos",
      "Creative Design",
      "Audience Engagement",
      "Brand Collaboration",
      "Influencer Campaign Management",
    ],
    benefits: [
      {
        title: "Authentic Brand Affinity",
        description: "Leverage trusted creators to build credibility and warm consumer trust faster than standard ads.",
      },
      {
        title: "Guaranteed Brand Safety",
        description: "Rigorous vetting ensures only verified, brand-aligned creators represent your digital identity.",
      },
      {
        title: "Whitelisted Paid Scaling",
        description: "Run performance ads directly from creator handles to unlock significantly higher CTRs.",
      },
      {
        title: "Turnkey Campaign Management",
        description: "From contract drafting to creative briefs and deliverables tracking, we handle everything.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Creator Discovery & Vetting",
        description: "Auditing audience authenticity, engagement ratios, demographic alignment, and previous brand affinity.",
      },
      {
        step: "02",
        title: "Creative Briefing & Contracts",
        description: "Structuring performance-driven creative frameworks and legally binding usage rights agreements.",
      },
      {
        step: "03",
        title: "Content Production & Review",
        description: "Supervising video production, captions, hooks, and UTM tracking links for seamless execution.",
      },
      {
        step: "04",
        title: "Amplification & ROI Reporting",
        description: "Boosting top-performing creator posts with paid media and tracking sales attribution.",
      },
    ],
    metrics: [
      { label: "Creator Reach Generated", value: "15M+" },
      { label: "Average Engagement Boost", value: "+240%" },
      { label: "Campaign ROAS", value: "3.8x" },
    ],
    faqs: [
      {
        question: "How do you verify influencer authenticity?",
        answer: "We utilize AI analytics to detect bot followers, engagement pods, sudden audience spikes, and geographical audience mismatches before signing any partnership.",
      },
      {
        question: "Do you handle creator whitelisting and dark posting?",
        answer: "Yes, we connect creator Meta and TikTok ad accounts to run targeted paid campaigns directly through their social handles for maximum authenticity.",
      },
    ],
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Build an Active, Engaged & High-Converting Community",
    shortDescription: "Build a consistent, engaging, and modern presence across all major social media platforms.",
    fullDescription: "From captivating visual storytelling to data-backed posting schedules and daily community interactions, we transform your social channels into dynamic customer acquisition and retention hubs.",
    iconName: "Share2",
    tag: "Social Presence",
    ctaText: "Explore Social Media",
    features: [
      "Omnichannel Strategy (Instagram, LinkedIn, Facebook, X, TikTok)",
      "High-Converting Content Calendar & Visual Design",
      "Short-Form Video Production (Reels, TikToks, YouTube Shorts)",
      "Active Daily Community Management & DM Customer Support",
      "Trend Jacking & Viral Social Formats",
      "Comprehensive Monthly Analytics & Sentiment Tracking",
    ],
    deliverables: [
      "Instagram Management",
      "Facebook Management",
      "YouTube Management",
      "LinkedIn Management",
      "Content Calendar",
      "Reels & Videos",
      "Posting & Scheduling",
      "Engagement & Growth",
      "Monthly Analytics",
    ],
    benefits: [
      {
        title: "Consistent Brand Identity",
        description: "Maintain a polished, cohesive visual and tonal presence across every major social platform.",
      },
      {
        title: "Active Community Growth",
        description: "Engage real industry followers and nurture prospects through conversational DMs and comment replies.",
      },
      {
        title: "Viral Short-Form Reach",
        description: "Capitalize on algorithmic video formats to gain massive unpaid impressions and brand awareness.",
      },
      {
        title: "Zero Operational Overhead",
        description: "Free up your internal team while our dedicated strategists and designers handle daily output.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brand Voice & Visual Playbook",
        description: "Defining color codes, typography, messaging pillars, content themes, and target buyer personas.",
      },
      {
        step: "02",
        title: "Monthly Content Planning",
        description: "Producing monthly editorial calendars, graphics, carousel decks, copy, and video scripts in advance.",
      },
      {
        step: "03",
        title: "Publishing & Live Engagement",
        description: "Scheduling at peak audience hours and actively responding to comments and community inquiries.",
      },
      {
        step: "04",
        title: "Performance & Audience Insights",
        description: "Reviewing top-performing formats, reach velocity, click-throughs, and audience sentiment shifts.",
      },
    ],
    metrics: [
      { label: "Engagement Uplift", value: "+240%" },
      { label: "Monthly Impressions", value: "2.8M+" },
      { label: "Follower Growth Rate", value: "5.2x" },
    ],
    faqs: [
      {
        question: "How many posts and reels do you publish each month?",
        answer: "We tailor packages to your growth velocity, typically delivering between 15 to 30 custom graphics, carousels, and high-retention short videos per month alongside daily stories.",
      },
      {
        question: "Do I get to approve content before it goes live?",
        answer: "Yes, you receive full access to our collaborative content approval dashboard where you can review, suggest edits, and approve assets with a single click.",
      },
    ],
  },
  {
    id: "youtube-monetization",
    slug: "youtube-monetization",
    title: "YouTube Monetization Services",
    tagline: "Turn Your Video Content Into a Scalable Revenue Engine",
    shortDescription: "Grow channels through video SEO, thumbnail optimization, watch time acceleration, and monetization strategy.",
    fullDescription: "We provide end-to-end YouTube growth solutions—from channel branding and algorithmic video SEO to high-CTR thumbnail design, watch time optimization, and monetization strategy.",
    iconName: "Video",
    tag: "Video Growth",
    ctaText: "Explore YouTube Monetization",
    features: [
      "Channel Setup, Branding & Video Optimization",
      "High-CTR Custom Thumbnail Design & Title A/B Testing",
      "YouTube Video SEO & High-Search Keyword Tagging",
      "Watch Time & Audience Retention Optimization",
      "YouTube Shorts Growth & Viral Repurposing Strategy",
      "Monetization Eligibility Guidance & AdSense / Sponsor Setup",
    ],
    deliverables: [
      "YouTube Channel Setup",
      "Channel Optimization",
      "Content Strategy",
      "SEO & Keyword Optimization",
      "Thumbnail & Title Optimization",
      "Watch Time Growth",
      "Subscriber Growth",
      "YouTube Shorts Strategy",
      "Monetization Eligibility Guidance",
      "AdSense Setup Assistance",
    ],
    benefits: [
      {
        title: "Algorithmic Recommendation",
        description: "Optimized click-through and retention metrics trigger YouTube's suggestion and browse features.",
      },
      {
        title: "Monetization Acceleration",
        description: "Fast-track your path to 1,000 subscribers and 4,000 valid public watch hours safely.",
      },
      {
        title: "Diversified Revenue Streams",
        description: "Unlock AdSense, brand sponsorships, affiliate links, and digital product sales funnels.",
      },
      {
        title: "High Search Ranking",
        description: "Rank in top positions on both YouTube search and Google universal video search results.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Channel & Metadata Audit",
        description: "Analyzing click-through rates, audience retention drops, playlist structures, and keyword gaps.",
      },
      {
        step: "02",
        title: "Packaging & Thumbnail System",
        description: "Engineering visual curiosity hooks, vibrant color contrasting, and psychology-driven title formulas.",
      },
      {
        step: "03",
        title: "SEO & Shorts Strategy",
        description: "Optimizing descriptions, timestamps, tags, and publishing high-velocity YouTube Shorts.",
      },
      {
        step: "04",
        title: "Monetization & Sponsorship",
        description: "Assisting with AdSense verification, media kits, and affiliate product integration.",
      },
    ],
    metrics: [
      { label: "Watch Time Increase", value: "+350%" },
      { label: "Subscriber Velocity", value: "4.5x" },
      { label: "Average Video CTR", value: "11.8%" },
    ],
    faqs: [
      {
        question: "Can you help new channels get monetized?",
        answer: "Yes, our targeted video SEO, high-retention script structures, and thumbnail packaging help new channels reach the 1,000 subscriber and 4,000 watch hour threshold quickly and legitimately.",
      },
      {
        question: "Do you design custom thumbnails and titles?",
        answer: "Yes, our dedicated visual designers create high-CTR, contrast-rich thumbnails tailored to grab attention in crowded recommendation feeds.",
      },
    ],
  },
  {
    id: "paid-advertising",
    slug: "paid-advertising",
    title: "Paid Advertising & Performance Marketing",
    tagline: "Turn Ad Spend Into Scalable, Predictable Revenue",
    shortDescription: "Performance-focused Google, Meta, and YouTube advertising engineered around measurable ROI.",
    fullDescription: "We engineer laser-targeted paid advertising campaigns across Google Ads, Meta (Instagram & Facebook), and YouTube. With predictive bidding, high-converting ad creative, and continuous A/B testing, we turn ad budget into verified profit.",
    iconName: "Target",
    tag: "Performance Media",
    ctaText: "Explore Paid Advertising",
    features: [
      "Google Search, Performance Max & Shopping Campaigns",
      "Meta Ads (Instagram & Facebook) High-Volume Scaling",
      "YouTube & Video Action Lead Generation Ads",
      "Full-Funnel Retargeting & Dynamic Product Catalogs",
      "Conversion Rate Optimization (CRO) & Dedicated Landing Pages",
      "Server-Side Tracking (CAPI) & Multi-Touch Attribution",
    ],
    deliverables: [
      "Google Ads",
      "Meta Ads",
      "YouTube Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "E-commerce Advertising",
      "App Promotion",
      "Retargeting",
      "Conversion Campaigns",
      "ROI & Performance Tracking",
    ],
    benefits: [
      {
        title: "Predictable ROAS",
        description: "Maximize return on ad spend through automated bidding strategies and relentless creative testing.",
      },
      {
        title: "Lower Customer Acquisition Cost",
        description: "Hyper-segmented audiences and high-converting landing pages minimize wasted ad spend.",
      },
      {
        title: "Full Attribution Clarity",
        description: "Server-side tracking and custom dashboards show exactly which campaigns generate your revenue.",
      },
      {
        title: "Rapid Scaling Framework",
        description: "Systematically scale winning ad variations without risking budget efficiency or audience fatigue.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Tracking & Pixel Architecture",
        description: "Installing Google Tag Manager, GA4, Meta Conversions API (CAPI), and custom conversion events.",
      },
      {
        step: "02",
        title: "High-Converting Ad Creatives",
        description: "Designing static banners, motion graphics, UGC video angles, and high-impact direct-response copy.",
      },
      {
        step: "03",
        title: "Targeting & Campaign Launch",
        description: "Deploying cold prospecting, custom lookalikes, competitor keyword bidding, and retargeting tiers.",
      },
      {
        step: "04",
        title: "Scaling & Algorithmic Optimization",
        description: "Reallocating budget to top-performing ad sets, pruning underperforming targets, and scaling spend.",
      },
    ],
    metrics: [
      { label: "Average Client ROAS", value: "3.2X - 4.8X" },
      { label: "Customer Acquisition Cost", value: "-42%" },
      { label: "Monthly Ad Spend Managed", value: "$2M+" },
    ],
    faqs: [
      {
        question: "What platforms do you manage paid ads on?",
        answer: "We specialize in Google Ads (Search, Display, Performance Max, YouTube), Meta Ads (Facebook & Instagram), TikTok Ads, and Apple Search Ads.",
      },
      {
        question: "What is the recommended minimum monthly ad spend?",
        answer: "While we work with diverse budgets, we generally recommend a minimum monthly ad spend of $1,500 - $3,000 to allow the algorithms to complete learning phases and generate statistical significance.",
      },
      {
        question: "How do you report campaign performance?",
        answer: "You receive access to a 24/7 live visual dashboard tracking ROAS, CPA, conversion rates, and revenue, accompanied by bi-weekly strategic review calls with your dedicated media buyer.",
      },
    ],
  },
];
