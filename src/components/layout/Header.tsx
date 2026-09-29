"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();

  // Hide public header on all admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      <header
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-xl border-[#EADECE] py-3 shadow-md"
            : "bg-[#FAF6F0]/80 backdrop-blur-md border-[#EADECE]/60 py-4 sm:py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Growlinx Logo */}
            <Logo variant="header" priority />

            {/* Desktop Nav with Services Dropdown */}
            <Navbar />

            {/* Right Action Orange Button + Subtle Admin Link + Mobile Drawer Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin/login"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#5A6578] hover:text-[#0A0F1D] border border-transparent hover:border-[#EADECE] hover:bg-white transition-all uppercase tracking-wider"
                title="Agency Admin Login"
              >
                <Lock className="h-3 w-3 text-[#FF5E3A]" />
                <span>Admin</span>
              </Link>

              <Link
                href="/free-strategy-call"
                className="orange-btn hidden sm:inline-flex items-center justify-center font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Link>

              <MobileNav />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

