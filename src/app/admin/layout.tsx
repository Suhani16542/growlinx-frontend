"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AdminAuthProvider } from "@/context/AdminAuthContext";
import { AdminAuthGuard } from "@/components/admin/AdminAuthGuard";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [unreadEnquiries, setUnreadEnquiries] = useState(0);

  const isLoginPage = pathname === "/admin/login";

  // Fetch unread count for sidebar/header badge
  useEffect(() => {
    if (isLoginPage) return;

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (res.ok) {
          const data = await res.json();
          setUnreadEnquiries(data.unreadEnquiries || 0);
        }
      } catch (e) {
        // Silently catch
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, [isLoginPage]);

  if (isLoginPage) {
    return <main className="min-h-screen bg-[#0A0F1D] text-slate-100">{children}</main>;
  }

  return (
    <div className="min-h-screen flex bg-[#0A0F1D] text-slate-100 selection:bg-[#FF5E3A]/30">
      {/* Sidebar Navigation */}
      <AdminSidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
        unreadCount={unreadEnquiries}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        <AdminHeader
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          unreadCount={unreadEnquiries}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#070A14] overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminAuthGuard>
        <AdminLayoutInner>{children}</AdminLayoutInner>
      </AdminAuthGuard>
    </AdminAuthProvider>
  );
}
