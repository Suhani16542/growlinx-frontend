"use client";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollPosition();

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sleek Floating Dark Glass Navbar */}
      <header
        className={cn(
          "w-full transition-all duration-300 ease-out border-b",
          isScrolled
            ? "bg-[#050811]/92 backdrop-blur-2xl border-white/[0.08] shadow-[0_10px_35px_rgba(0,102,255,0.12)] py-2.5"
            : "bg-[#050811]/75 backdrop-blur-xl border-white/[0.05] py-3.5 sm:py-4"
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Growlinx Logo */}
            <Logo variant="dark" />

            {/* Navigation & Services Dropdown */}
            <Navbar />

            {/* Right Action CTA & Mobile Drawer */}
            <div className="flex items-center gap-3">
              <Button
                href="/free-strategy-call"
                variant="primary"
                size="md"
                className="group hidden sm:inline-flex items-center gap-1.5 font-bold px-4.5 py-2 text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:shadow-blue-600/40"
              >
                <span>Get Started</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              <MobileNav />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
