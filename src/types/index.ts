export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  fullDescription?: string;
  iconName: string;
  tag?: string;
  ctaText?: string;
  features?: string[];
  deliverables?: string[];
  benefits?: { title: string; description: string }[];
  process?: { step: string; title: string; description: string }[];
  metrics?: { label: string; value: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge?: string;
  solution?: string;
  results: { label: string; value: string }[];
  imageSrc?: string;
  tags: string[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string[];
  takeaways?: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  imageSrc?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  growthFocus: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  metric?: { value: string; label: string };
  avatar?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}
