"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Menu, Bell, ExternalLink, LogOut, Sparkles } from "lucide-react";

interface AdminHeaderProps {
  onOpenMobileSidebar: () => void;
  unreadCount?: number;
}

export function AdminHeader({ onOpenMobileSidebar, unreadCount = 0 }: AdminHeaderProps) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();

  // Dynamic Page Title
  const getPageTitle = () => {
    if (pathname === "/admin") return "Overview Dashboard";
    if (pathname.startsWith("/admin/blog")) return "Blog Posts Management";
    if (pathname.startsWith("/admin/categories")) return "Category Taxonomy";
    if (pathname.startsWith("/admin/enquiries")) return "Client Growth Enquiries";
    if (pathname.startsWith("/admin/settings")) return "Agency Settings & Security";
    return "Admin Portal";
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#0A0F1D]/90 px-4 sm:px-6 backdrop-blur-md">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h1 className="text-base sm:text-lg font-black text-[#FAF6F0] tracking-tight flex items-center gap-2">
            <span>{getPageTitle()}</span>
          </h1>
          <p className="hidden sm:block text-[11px] text-slate-400 font-medium">
            Growlinqs High-Growth Agency Management Panel
          </p>
        </div>
      </div>

      {/* Right: Quick actions, notifications, user avatar & logout */}
      <div className="flex items-center gap-3">
        {/* View Public Website */}
        <Link
          href="/"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-300 bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:text-white transition-all"
        >
          <ExternalLink className="h-3.5 w-3.5 text-[#FF5E3A]" />
          <span>Live Website</span>
        </Link>

        {/* Enquiries Notification Icon */}
        <Link
          href="/admin/enquiries"
          className="relative p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          title="View Inquiries"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF5E3A] text-[9px] font-black text-white">
              {unreadCount}
            </span>
          )}
        </Link>

        {/* User Badge / Logout */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
          <div className="h-8 w-8 rounded-lg bg-[#FF5E3A] text-white flex items-center justify-center text-xs font-black">
            {user?.name ? user.name[0].toUpperCase() : "A"}
          </div>
          <button
            onClick={() => logout()}
            type="button"
            className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
            title="Sign Out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
