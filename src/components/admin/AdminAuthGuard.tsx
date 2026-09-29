"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { Loader2 } from "lucide-react";

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAdminAuth();
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0F1D] text-slate-300">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-[#FF5E3A]/20 border border-[#FF5E3A]/30 flex items-center justify-center text-[#FF5E3A]">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-[#FAF6F0]">Authenticating Admin Session...</p>
            <p className="text-xs text-slate-400 mt-1">Securing Growlinx Management Portal</p>
          </div>
        </div>
      </div>
    );
  }

  // If on login page, let it render
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If not authenticated, render loading while useEffect in AdminAuthContext redirects
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0F1D] text-slate-300">
        <Loader2 className="h-6 w-6 animate-spin text-[#FF5E3A]" />
      </div>
    );
  }

  return <>{children}</>;
}
