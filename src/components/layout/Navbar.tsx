"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
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
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "group relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                )}
                aria-expanded={servicesOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    servicesOpen && "rotate-180 text-blue-400"
                  )}
                />
                {/* Animated Bottom Hover Underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-blue-500 transition-all duration-300",
                    isActive || servicesOpen
                      ? "opacity-100 scale-x-100 shadow-[0_0_8px_#3b82f6]"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )}
                />
              </button>

              {/* Smooth Animated Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 xl:w-96 z-50 transition-all duration-200">
                  <div className="rounded-2xl border border-slate-700/80 bg-[#090f1e]/98 p-3 shadow-2xl backdrop-blur-2xl ring-1 ring-blue-500/20">
                    <div className="mb-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      Growth Solutions
                    </div>
                    <div className="space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex flex-col rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-slate-800/80 hover:translate-x-1"
                        >
                          <span className="text-sm font-medium text-slate-200 transition-colors group-hover/item:text-cyan-300">
                            {child.title}
                          </span>
                          {child.description && (
                            <span className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-slate-800/80 pt-2 px-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center justify-between py-1 transition-colors"
                      >
                        <span>View All 6 Growth Services</span>
                        <span>→</span>
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
              "group relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
              isActive
                ? "text-blue-400 font-semibold"
                : "text-slate-300 hover:text-white"
            )}
          >
            <span>{item.title}</span>
            {/* Animated Bottom Hover Underline */}
            <span
              className={cn(
                "absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-blue-500 transition-all duration-300",
                isActive
                  ? "opacity-100 scale-x-100 shadow-[0_0_8px_#3b82f6]"
                  : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
