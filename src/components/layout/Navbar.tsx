"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import {
  ChevronDown,
  Sparkles,
  Search,
  Target,
  Share2,
  Smartphone,
  Users,
  Video,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "/services/seo": Search,
  "/services/paid-advertising": Target,
  "/services/social-media-management": Share2,
  "/services/app-marketing": Smartphone,
  "/services/influencer-management": Users,
  "/services/youtube-monetization": Video,
};

export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav className="hidden md:flex items-center gap-5 lg:gap-7">
      {navigationData.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        if (item.children) {
          return (
            <div
              key={item.title}
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "group relative flex items-center gap-1.5 py-1 text-xs lg:text-sm font-bold tracking-wider transition-colors duration-200 cursor-pointer uppercase",
                  isActive || servicesOpen
                    ? "text-[#FF5E3A]"
                    : "text-[#0A0F1D]/80 hover:text-[#0A0F1D]"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200 text-[#0A0F1D]/60 group-hover:text-[#0A0F1D]",
                    servicesOpen && "rotate-180 text-[#FF5E3A]"
                  )}
                />
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5E3A] rounded-full" />
                )}
              </button>

              {/* Premium Services Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px] lg:w-[520px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-3xl border border-[#EADECE] bg-[#FAF6F0] p-4 shadow-2xl ring-1 ring-black/[0.04]">
                    {/* Header bar in dropdown */}
                    <div className="mb-3 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#FF5E3A] flex items-center justify-between border-b border-[#EADECE]/80">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#FF5E3A]" />
                        <span>GROWTH DISCIPLINES</span>
                      </div>
                      <span className="text-[10px] text-[#5A6578] font-bold">6 Dedicated Solutions</span>
                    </div>

                    {/* 2-Column Grid of Service Items */}
                    <div className="grid grid-cols-2 gap-2">
                      {item.children.map((child) => {
                        const Icon = serviceIconMap[child.href] || Sparkles;
                        const isChildActive = pathname === child.href;

                        return (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setServicesOpen(false)}
                            className={cn(
                              "group/item flex items-start gap-3 rounded-2xl p-3 transition-all duration-200 bg-white border border-[#EADECE]/60 hover:border-[#FF5E3A] hover:bg-white hover:shadow-sm",
                              isChildActive && "border-[#FF5E3A] bg-[#FFF0EB]"
                            )}
                          >
                            <div className="h-8 w-8 rounded-xl bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#FF5E3A] shrink-0 group-hover/item:bg-[#FF5E3A] group-hover/item:text-white transition-colors duration-200">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold text-[#0A0F1D] group-hover/item:text-[#FF5E3A] transition-colors line-clamp-1 block">
                                {child.title}
                              </span>
                              {child.description && (
                                <span className="text-[10px] text-[#5A6578] line-clamp-1 mt-0.5 block font-medium">
                                  {child.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Footer bar in dropdown */}
                    <div className="mt-3 border-t border-[#EADECE]/80 pt-2.5 px-3 flex items-center justify-between">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-extrabold text-[#0A0F1D] hover:text-[#FF5E3A] flex items-center gap-1.5 transition-colors"
                      >
                        <span>View All Solutions Hub</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#FF5E3A]" />
                      </Link>

                      <Link
                        href="/free-strategy-call"
                        onClick={() => setServicesOpen(false)}
                        className="text-[11px] font-bold text-[#FF5E3A] hover:underline"
                      >
                        Free Consultation →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "text-xs lg:text-sm font-bold tracking-wider transition-colors duration-200 relative py-1 uppercase",
              isActive
                ? "text-[#FF5E3A]"
                : "text-[#0A0F1D]/80 hover:text-[#0A0F1D]"
            )}
          >
            <span>{item.title}</span>
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5E3A] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
