"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { useAdminAuth } from "@/context/AdminAuthContext";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("admin@growlinx.com");
  const [password, setPassword] = useState("admin@growlinx2026");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await login(email, password);

    if (!result.success) {
      setError(result.error || "Authentication failed. Please check your credentials.");
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setEmail("admin@growlinx.com");
    setPassword("admin@growlinx2026");
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-[#0A0F1D] text-slate-100 relative overflow-hidden">
      {/* Warm Ambient Atmosphere */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex justify-center mb-2">
            <Logo variant="dark" priority />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-white/[0.06] text-[#FF5E3A] border border-[#FF5E3A]/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>GROWLINX CONTROL PORTAL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
            Administrator Sign In
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Manage blog playbooks, categories, and incoming growth inquiries.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl bg-[#0F172A]/90 border border-white/10 p-7 sm:p-8 shadow-2xl backdrop-blur-xl space-y-5">
          {error && (
            <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300 animate-in fade-in">
              <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Admin Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@growlinx.com"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Security Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-10 pr-10 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-[#FF5E3A] transition-all font-medium"
                />
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="orange-btn w-full inline-flex items-center justify-center gap-2 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Authenticate & Access Portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Credentials Helper */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5E3A]" />
                Default Credentials
              </span>
              <button
                type="button"
                onClick={handleFillDemo}
                className="text-[10px] font-extrabold text-[#FF5E3A] uppercase tracking-wider hover:underline cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>
            <div className="text-[11px] text-slate-400 font-mono space-y-0.5">
              <div>Email: <span className="text-[#FAF6F0]">admin@growlinx.com</span></div>
              <div>Password: <span className="text-[#FAF6F0]">admin@growlinx2026</span></div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-[#FF5E3A] font-semibold transition-colors"
          >
            ← Return to Growlinx Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
