"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";

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
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Hide public footer on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const servicesLinks = [
    { title: "SEO Services", href: "/services/seo" },
    { title: "Paid Advertising & Media", href: "/services/paid-advertising" },
    { title: "Social Media Management", href: "/services/social-media-management" },
    { title: "App Marketing & Acquisition", href: "/services/app-marketing" },
    { title: "Influencer Management", href: "/services/influencer-management" },
    { title: "YouTube Monetization", href: "/services/youtube-monetization" },
  ];

  const quickLinks = [
    { title: "About Us", href: "/about-us" },
    { title: "All Services", href: "/services" },
    { title: "Case Studies", href: "/portfolio" },
    { title: "Blog & Insights", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
    { title: "Book Strategy Call", href: "/free-strategy-call" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/growlinqs", icon: LinkedinIcon },
    { name: "Instagram", href: "https://instagram.com/growlinqs", icon: InstagramIcon },
    { name: "YouTube", href: "https://youtube.com/@growlinqs", icon: YoutubeIcon },
    { name: "Facebook", href: "https://facebook.com/growlinqs", icon: FacebookIcon },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0A0F1D] text-slate-300 relative overflow-hidden">
      {/* Subtle Orange Atmospheric Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#FF5E3A]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Top Footer Navigation Columns */}
      <Container className="py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-5">
            <Logo variant="dark" />
            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm font-normal">
              Growlinqs engineers high-performance digital marketing campaigns that elevate brand authority, multiply inbound traffic, and generate predictable business revenue.
            </p>
          </div>

          {/* Capabilities */}
          <div className="space-y-3 lg:col-span-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FAF6F0]">
              Digital Marketing Solutions
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#FF5E3A] transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:col-span-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FAF6F0]">
              Agency Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#FF5E3A] transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#070A14] py-6 relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Logo + Divider + Tagline */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
              <Logo variant="dark" />
              <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FAF6F0]/70 uppercase">
                DIGITAL MARKETING ENGINES THAT SCALE REVENUE.
              </span>
            </div>

            {/* Right: Social Links with Orange Hover Badges */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Growlinqs on ${item.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 hover:text-[#FF5E3A] hover:border-[#FF5E3A]/40 hover:bg-[#FF5E3A]/10 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <p>© {currentYear} Growlinqs. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <Link href="/refund-policy" className="hover:text-[#FF5E3A] transition-colors">Refund Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-[#FF5E3A] transition-colors">Terms & Conditions</Link>
              <span className="text-white/20">•</span>
              <Link href="/admin/login" className="hover:text-[#FF5E3A] transition-colors text-slate-400">Admin Portal</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
