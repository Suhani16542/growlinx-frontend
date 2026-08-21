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

      {/* 2. Sticky Glass Navbar */}
      <header
        className={cn(
          "w-full transition-all duration-300 ease-out",
          isScrolled
            ? "bg-[#070b14]/95 backdrop-blur-2xl border-b border-slate-800/90 shadow-xl shadow-black/50 py-3"
            : "bg-[#070b14]/80 backdrop-blur-md border-b border-slate-800/50 py-4"
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Growlinx Logo */}
            <Logo />

            {/* Navigation & Services Dropdown */}
            <Navbar />

            {/* Right Action CTA & Mobile Drawer */}
            <div className="flex items-center gap-3">
              <Button
                href="/free-strategy-call"
                variant="gradient"
                size="md"
                className="hidden sm:inline-flex items-center gap-1.5 shadow-md shadow-blue-600/30"
              >
                <Sparkles className="h-4 w-4 text-cyan-200" />
                <span>Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <MobileNav />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
