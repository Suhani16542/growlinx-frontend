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
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navigationData.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : item.href.startsWith("/#")
            ? false
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
                  "group relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer",
                  isActive || servicesOpen
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                )}
                aria-expanded={servicesOpen}
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 text-slate-400 group-hover:text-cyan-400",
                    servicesOpen && "rotate-180 text-cyan-400"
                  )}
                />
                {/* Subtle expanding underline on hover */}
                <span className={cn(
                  "absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-transform duration-200 origin-left",
                  isActive || servicesOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </button>

              {/* Dark Translucent Glass Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 xl:w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-2xl border border-white/10 bg-[#090f20]/98 backdrop-blur-2xl p-3.5 shadow-2xl ring-1 ring-white/10">
                    <div className="mb-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      Growth Solutions
                    </div>
                    <div className="space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex flex-col rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/[0.06]"
                        >
                          <span className="text-sm font-semibold text-white transition-colors group-hover/item:text-cyan-300">
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
                    <div className="mt-2 border-t border-white/[0.08] pt-2 px-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between py-1 transition-colors"
                      >
                        <span>View All Growth Solutions</span>
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
              "group relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200",
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-white"
            )}
          >
            <span>{item.title}</span>
            {/* Subtle expanding underline on hover */}
            <span className={cn(
              "absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-transform duration-200 origin-left",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )} />
          </Link>
        );
      })}
    </nav>
  );
}
