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

  // Lock body scroll when mobile menu is open
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
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-slate-200 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 flex flex-col bg-[#070b14]/98 backdrop-blur-2xl px-6 py-6 border-t border-slate-800 overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navigationData.map((item) => {
              if (item.children) {
                const isExpanded = expandedSection === item.title;
                return (
                  <div
                    key={item.title}
                    className="border-b border-slate-800/80 py-2"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(item.title)}
                      className="flex w-full items-center justify-between py-2 text-base font-semibold text-slate-200 cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          isExpanded && "rotate-180 text-blue-400"
                        )}
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-2 space-y-2 pl-4 border-l border-blue-500/20">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={closeMenu}
                            className="block py-2 text-sm text-slate-300 hover:text-blue-400 transition-colors"
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
                  className="border-b border-slate-800/80 py-3 text-base font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button
              href="/free-strategy-call"
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              onClick={closeMenu}
            >
              <Sparkles className="h-4 w-4 text-cyan-200" />
              <span>Get a Free Strategy Call</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
