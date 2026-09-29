"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#EADECE] bg-white text-[#0A0F1D] transition-colors hover:bg-[#FAF6F0] cursor-pointer shadow-xs"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5 text-[#0A0F1D]" /> : <Menu className="h-5 w-5 text-[#0A0F1D]" />}
      </button>

      {/* Warm Cream Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 flex flex-col bg-[#FAF6F0]/98 backdrop-blur-2xl px-6 py-6 border-t border-[#EADECE] shadow-2xl overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navigationData.map((item) => {
              if (item.children) {
                const isExpanded = expandedSection === item.title;
                const isSectionActive = pathname.startsWith(item.href);

                return (
                  <div
                    key={item.title}
                    className="border-b border-[#EADECE]/80 py-2"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(item.title)}
                      className={cn(
                        "flex w-full items-center justify-between py-2.5 text-sm font-extrabold tracking-wider uppercase transition-colors cursor-pointer",
                        isSectionActive || isExpanded ? "text-[#FF5E3A]" : "text-[#0A0F1D]"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 text-[#5A6578]",
                          isExpanded && "rotate-180 text-[#FF5E3A]"
                        )}
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-2 space-y-2 pl-3 border-l-2 border-[#FF5E3A] animate-in fade-in duration-150">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={closeMenu}
                              className={cn(
                                "block py-2 text-xs font-bold transition-colors",
                                isChildActive ? "text-[#FF5E3A]" : "text-[#5A6578] hover:text-[#0A0F1D]"
                              )}
                            >
                              {child.title}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={closeMenu}
                          className="inline-flex items-center gap-1.5 py-2 text-xs font-extrabold text-[#FF5E3A] hover:underline"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "border-b border-[#EADECE]/80 py-3 text-sm font-extrabold tracking-wider uppercase transition-colors",
                    isActive ? "text-[#FF5E3A]" : "text-[#0A0F1D] hover:text-[#FF5E3A]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/free-strategy-call"
              onClick={closeMenu}
              className="orange-btn w-full inline-flex items-center justify-center font-extrabold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider gap-2"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/admin/login"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center font-bold px-4 py-2.5 rounded-full text-xs text-[#5A6578] hover:text-[#0A0F1D] border border-[#EADECE] bg-white transition-colors"
            >
              <span>Agency Admin Portal</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
