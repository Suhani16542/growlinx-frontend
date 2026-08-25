"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/lib/metadata";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { title: "SEO Services", href: "/services/seo" },
    { title: "App Marketing & Acquisition", href: "/services/app-marketing" },
    { title: "Influencer Management", href: "/services/influencer-management" },
    { title: "Social Media Management", href: "/services/social-media-management" },
    { title: "YouTube Monetization", href: "/services/youtube-monetization" },
    { title: "Paid Advertising & Media", href: "/services/paid-advertising" },
  ];

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Blog & Insights", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/growlinx", icon: InstagramIcon },
    { name: "Facebook", href: "https://facebook.com/growlinx", icon: FacebookIcon },
    { name: "YouTube", href: "https://youtube.com/@growlinx", icon: YoutubeIcon },
    { name: "LinkedIn", href: "https://linkedin.com/company/growlinx", icon: LinkedinIcon },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#050811] text-slate-300 relative overflow-hidden">
      <Container className="py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <Logo variant="dark" />
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-sm">
              Growlinx engineers high-performance digital marketing campaigns that elevate brand authority, multiply inbound traffic, and generate predictable business revenue.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Growlinx on ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-2">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-2">
              Growth Services
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              {servicesLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-2">
              Direct Contact
            </h3>
            <div className="space-y-2.5 pt-1 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cyan-300 transition-colors font-medium">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-cyan-300 transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.contact.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/free-strategy-call"
                variant="primary"
                size="sm"
                className="w-full text-xs justify-center gap-1.5 font-bold"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book Free Strategy Call</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-12 border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Growlinx. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
