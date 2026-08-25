"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData } from "@/data/navigation";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

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
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/10 cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Dark Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 flex flex-col bg-[#050811]/98 backdrop-blur-2xl px-6 py-6 border-t border-white/10 shadow-2xl overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navigationData.map((item) => {
              if (item.children) {
                const isExpanded = expandedSection === item.title;
                return (
                  <div
                    key={item.title}
                    className="border-b border-white/[0.08] py-2"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(item.title)}
                      className="flex w-full items-center justify-between py-2 text-base font-semibold text-white hover:text-cyan-400 cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200 text-slate-400",
                          isExpanded && "rotate-180 text-cyan-400"
                        )}
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-2 space-y-2 pl-4 border-l-2 border-cyan-500">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-white/[0.08] py-3 text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              href="/free-strategy-call"
              variant="primary"
              size="lg"
              className="w-full justify-center font-bold text-base shadow-lg shadow-blue-600/30"
              onClick={closeMenu}
            >
              <span>Get Started</span>
              <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
