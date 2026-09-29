"use client";

import { useState } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import {
  Settings,
  ShieldCheck,
  Bell,
  Mail,
  Lock,
  User,
  Save,
  CheckCircle2,
  Server,
  Key,
} from "lucide-react";

export default function AdminSettingsPage() {
  const { user } = useAdminAuth();
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [agencyName, setAgencyName] = useState("Growlinx Growth Agency");
  const [contactEmail, setContactEmail] = useState(user?.email || "admin@growlinx.com");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoAssign, setAutoAssign] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
          SYSTEM CONFIGURATION
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
          Admin Settings & Security
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Manage agency contact notifications, authenticated credentials, and system environment variables.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300 animate-in fade-in">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <span>Agency preferences and security policies successfully updated.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Administrator Profile Card */}
        <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="h-10 w-10 rounded-2xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#FAF6F0]">Administrator Profile</h3>
              <p className="text-xs text-slate-400">Authenticated user identity and role assignment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Display Name
              </label>
              <input
                type="text"
                defaultValue={user?.name || "Growlinx Administrator"}
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Admin Email Address
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
              />
            </div>
          </div>
        </div>

        {/* Agency Notification Routing */}
        <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="h-10 w-10 rounded-2xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#FAF6F0]">Lead Routing & Notifications</h3>
              <p className="text-xs text-slate-400">How incoming website consultation inquiries are processed</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/10 cursor-pointer hover:bg-white/[0.04] transition-colors">
              <div>
                <p className="text-xs font-bold text-[#FAF6F0]">Instant Email Inbound Alerts</p>
                <p className="text-[11px] text-slate-400">Receive an email dispatch whenever a new contact form inquiry is received.</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="h-4 w-4 rounded accent-[#FF5E3A] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/10 cursor-pointer hover:bg-white/[0.04] transition-colors">
              <div>
                <p className="text-xs font-bold text-[#FAF6F0]">Auto-Assign Senior Growth Strategist</p>
                <p className="text-[11px] text-slate-400">Automatically flag enterprise budget inquiries for 24-hour priority response.</p>
              </div>
              <input
                type="checkbox"
                checked={autoAssign}
                onChange={(e) => setAutoAssign(e.target.checked)}
                className="h-4 w-4 rounded accent-[#FF5E3A] cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* System Telemetry & Security */}
        <div className="rounded-3xl bg-[#0F172A] border border-white/10 p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="h-10 w-10 rounded-2xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold">
              <Server className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#FAF6F0]">Production Infrastructure</h3>
              <p className="text-xs text-slate-400">Next.js App Router, Turbopack, and Server Storage Engine</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] text-slate-400 block font-sans">Storage Engine</span>
              <span className="text-emerald-400 font-bold">Local JSON Server Store</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] text-slate-400 block font-sans">Session Type</span>
              <span className="text-[#FF5E3A] font-bold">HttpOnly Signature Token</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] text-slate-400 block font-sans">Next.js Version</span>
              <span className="text-blue-400 font-bold">v16.3.1 (Turbopack)</span>
            </div>
          </div>
        </div>

        {/* Save CTA */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="orange-btn inline-flex items-center gap-2 px-8 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl"
          >
            <Save className="h-4 w-4" />
            <span>Save Preferences</span>
          </button>
        </div>
      </form>
    </div>
  );
}
