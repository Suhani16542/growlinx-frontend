"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { useAdminAuth } from "@/context/AdminAuthContext";
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Mail,
  Settings,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
  unreadCount?: number;
}

export function AdminSidebar({ mobileOpen = false, onCloseMobile, unreadCount = 0 }: AdminSidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: "Blog Posts",
      href: "/admin/blog",
      icon: FileText,
      exact: false,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: FolderTree,
      exact: false,
    },
    {
      name: "Enquiries",
      href: "/admin/enquiries",
      icon: Mail,
      exact: false,
      badge: unreadCount > 0 ? unreadCount : undefined,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      exact: false,
    },
  ];

  const content = (
    <div className="flex h-full flex-col justify-between bg-[#0A0F1D] text-slate-200 border-r border-white/10 w-64 select-none">
      {/* Top Section */}
      <div className="flex flex-col">
        {/* Brand Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Logo variant="dark" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/30">
              Admin
            </span>
          </div>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* User Card */}
        <div className="p-4 mx-3 my-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF5E3A] to-[#FF8C66] text-white flex items-center justify-center font-black text-sm shadow-md shadow-[#FF5E3A]/20">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : "AD"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#FAF6F0] truncate">{user?.name || "Growlinqs Admin"}</p>
            <p className="text-[10px] text-[#FF5E3A] font-semibold truncate uppercase tracking-wider">
              {user?.role || "Administrator"}
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 px-3 pt-2">
          {navigation.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200",
                  isActive
                    ? "bg-[#FF5E3A] text-white shadow-md shadow-[#FF5E3A]/25"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                  <span>{item.name}</span>
                </div>

                {item.badge !== undefined && (
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-black leading-none",
                      isActive ? "bg-white text-[#FF5E3A]" : "bg-[#FF5E3A] text-white"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-3 space-y-2 border-t border-white/10">
        {/* Public Website Shortcut */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <ExternalLink className="h-4 w-4 text-[#FF5E3A]" />
            <span>View Public Site</span>
          </div>
          <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
        </Link>

        {/* Logout Button */}
        <button
          onClick={() => logout()}
          type="button"
          className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>

        <div className="pt-2 px-2 text-[10px] text-slate-500 flex items-center justify-between font-mono">
          <span>Growlinqs v2.4</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex lg:flex-shrink-0 lg:fixed lg:inset-y-0 z-40">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#0A0F1D] z-10 animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
