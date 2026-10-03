"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  FileText,
  FolderTree,
  Mail,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  ExternalLink,
  Eye,
  RefreshCw,
  Phone,
  Building,
  User,
  Sparkles,
} from "lucide-react";
import { api, BackendBlog, BackendEnquiry, BackendCategory } from "@/lib/api";
import { AdminStats, EnquiryItem, EnquiryStatus } from "@/types";

function mapBackendStatusToUi(status: string): EnquiryStatus {
  switch (status?.toUpperCase()) {
    case "NEW":
      return "New";
    case "CONTACTED":
      return "Contacted";
    case "IN_PROGRESS":
      return "In Progress";
    case "CONVERTED":
      return "Converted";
    case "CLOSED":
      return "Closed";
    default:
      return "New";
  }
}

function mapUiStatusToBackend(status: EnquiryStatus): string {
  switch (status) {
    case "New":
      return "NEW";
    case "Contacted":
      return "CONTACTED";
    case "In Progress":
      return "IN_PROGRESS";
    case "Converted":
      return "CONVERTED";
    case "Closed":
      return "CLOSED";
    default:
      return "NEW";
  }
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalCategories: 0,
    newEnquiries: 0,
    unreadEnquiries: 0,
    totalEnquiries: 0,
  });

  const [recentEnquiries, setRecentEnquiries] = useState<EnquiryItem[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);

  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const [enquiriesRes, blogsRes, categoriesRes] = await Promise.all([
        api.enquiries.getEnquiries({ limit: 100 }),
        api.blogs.getAdminBlogs({ limit: 100 }),
        api.categories.getCategories(),
      ]);

      const enquiriesList: BackendEnquiry[] =
        enquiriesRes.success && enquiriesRes.data?.enquiries
          ? enquiriesRes.data.enquiries
          : [];

      const blogsList: BackendBlog[] =
        blogsRes.success && blogsRes.data?.blogs
          ? blogsRes.data.blogs
          : [];

      const categoriesList: BackendCategory[] =
        categoriesRes.success && Array.isArray(categoriesRes.data)
          ? categoriesRes.data
          : [];

      // Compute stats
      const totalBlogs = blogsList.length;
      const publishedBlogs = blogsList.filter((b) => b.status === "PUBLISHED").length;
      const draftBlogs = blogsList.filter((b) => b.status === "DRAFT").length;
      const totalCategories = categoriesList.length;
      const totalEnquiries = enquiriesList.length;
      const newEnquiries = enquiriesList.filter((e) => e.status === "NEW").length;
      const unreadEnquiries = enquiriesList.filter((e) => !e.isRead).length;

      setStats({
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        totalCategories,
        newEnquiries,
        unreadEnquiries,
        totalEnquiries,
      });

      // Map enquiries
      const mappedEnquiries: EnquiryItem[] = enquiriesList.map((e) => ({
        id: e.id,
        name: e.name,
        email: e.email,
        phone: e.phone || "",
        company: e.company || e.website || "",
        service: e.service || "General Inquiry",
        budget: e.budget || "",
        message: e.message,
        status: mapBackendStatusToUi(e.status),
        isRead: e.isRead,
        createdAt: e.createdAt,
      }));

      setRecentEnquiries(mappedEnquiries.slice(0, 5));

      // Map blogs
      const mappedBlogs = blogsList.map((b) => {
        const catName =
          typeof b.category === "object" && b.category !== null
            ? (b.category as any).name
            : "Marketing Strategy";
        const authorName =
          typeof b.author === "object" && b.author !== null
            ? (b.author as any).name
            : "Editorial Team";

        return {
          id: b.id,
          slug: b.slug,
          title: b.title,
          excerpt: b.excerpt || "",
          category: catName,
          status: b.status.toLowerCase(),
          publishedAt: b.publishedAt || b.createdAt,
          author: { name: authorName, role: "Strategist" },
          imageSrc: b.featuredImage || "/images/service-seo-dashboard.jpg",
          readTime: "5 min read",
        };
      });

      setRecentBlogs(mappedBlogs.slice(0, 5));
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const handleStatusChange = async (enquiryId: string, newStatus: EnquiryStatus) => {
    try {
      const backendStatus = mapUiStatusToBackend(newStatus);
      const res = await api.enquiries.updateEnquiry(enquiryId, {
        status: backendStatus,
        isRead: true,
      });

      if (res.success) {
        setRecentEnquiries((prev) =>
          prev.map((e) =>
            e.id === enquiryId ? { ...e, status: newStatus, isRead: true } : e
          )
        );
        fetchDashboardData();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
            EXECUTIVE TELEMETRY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
            Agency Performance Overview
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time pipeline metrics, blog content status, and active commercial inquiries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={fetchDashboardData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-[#FF5E3A]" : ""}`} />
            <span>Refresh Telemetry</span>
          </button>

          <Link
            href="/admin/blog/create"
            className="orange-btn inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider"
          >
            <Plus className="h-4 w-4" />
            <span>Create Article</span>
          </Link>
        </div>
      </div>

      {/* 6 Metric KPI Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card 1: Total Blogs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Total Posts</span>
            <FileText className="h-4 w-4 text-[#FF5E3A]" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-[#FAF6F0] font-mono leading-none">{stats.totalBlogs}</p>
          <p className="text-[10px] text-slate-400 font-medium">All articles in library</p>
        </div>

        {/* Card 2: Published Blogs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">Published</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono leading-none">{stats.publishedBlogs}</p>
          <p className="text-[10px] text-slate-400 font-medium">Live on public site</p>
        </div>

        {/* Card 3: Draft Blogs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Drafts</span>
            <Clock className="h-4 w-4 text-amber-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono leading-none">{stats.draftBlogs}</p>
          <p className="text-[10px] text-slate-400 font-medium">Unpublished drafts</p>
        </div>

        {/* Card 4: Categories */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Categories</span>
            <FolderTree className="h-4 w-4 text-[#FF5E3A]" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-[#FAF6F0] font-mono leading-none">{stats.totalCategories}</p>
          <p className="text-[10px] text-slate-400 font-medium">Taxonomy topics</p>
        </div>

        {/* Card 5: New Enquiries */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF5E3A]">New Leads</span>
            <Sparkles className="h-4 w-4 text-[#FF5E3A]" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-[#FF5E3A] font-mono leading-none">{stats.newEnquiries}</p>
          <p className="text-[10px] text-slate-400 font-medium">Pending initial review</p>
        </div>

        {/* Card 6: Total Enquiries */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Total Leads</span>
            <Mail className="h-4 w-4 text-blue-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-[#FAF6F0] font-mono leading-none">{stats.totalEnquiries}</p>
          <p className="text-[10px] text-slate-400 font-medium">{stats.unreadEnquiries} unread</p>
        </div>
      </div>

      {/* Main Grid: Recent Enquiries + Recent Blog Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Client Enquiries (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-[#FAF6F0] flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF5E3A]" />
                <span>Recent Inbound Inquiries</span>
              </h3>
              <p className="text-xs text-slate-400">Latest business inquiries from website lead forms</p>
            </div>

            <Link
              href="/admin/enquiries"
              className="text-xs font-extrabold text-[#FF5E3A] hover:underline flex items-center gap-1"
            >
              <span>View All ({stats.totalEnquiries})</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl bg-[#0F172A] border border-white/10 overflow-hidden shadow-sm">
            {recentEnquiries.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                No inquiries received yet. Submissions from the public Contact form will appear here in real time.
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {recentEnquiries.map((enq) => {
                  const statusColors: Record<EnquiryStatus, string> = {
                    New: "bg-red-500/10 text-red-400 border-red-500/30",
                    Contacted: "bg-amber-500/10 text-amber-400 border-amber-500/30",
                    "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/30",
                    Converted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                    Closed: "bg-slate-500/10 text-slate-400 border-slate-500/30",
                  };

                  return (
                    <div
                      key={enq.id}
                      className={`p-4 sm:p-5 transition-colors hover:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        !enq.isRead ? "bg-white/[0.03]" : ""
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#FAF6F0] truncate">{enq.name}</span>
                          {!enq.isRead && (
                            <span className="h-2 w-2 rounded-full bg-[#FF5E3A] shrink-0" title="Unread" />
                          )}
                          <span
                            className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                              statusColors[enq.status]
                            }`}
                          >
                            {enq.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                          <span>{enq.company || enq.email}</span>
                          <span>•</span>
                          <span className="text-[#FF5E3A] font-semibold">{enq.service}</span>
                        </div>

                        <p className="text-xs text-slate-400 line-clamp-1 italic">
                          "{enq.message}"
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(enq)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/[0.06] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Inspect</span>
                        </button>

                        <select
                          value={enq.status}
                          onChange={(e) => handleStatusChange(enq.id, e.target.value as EnquiryStatus)}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#0A0F1D] border border-white/15 text-slate-200 focus:border-[#FF5E3A] focus:outline-none cursor-pointer"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Converted">Converted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Blog Posts (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-[#FAF6F0] flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#FF5E3A]" />
                <span>Recent Content Playbooks</span>
              </h3>
              <p className="text-xs text-slate-400">Published articles & live draft statuses</p>
            </div>

            <Link
              href="/admin/blog"
              className="text-xs font-extrabold text-[#FF5E3A] hover:underline flex items-center gap-1"
            >
              <span>Manage All</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl bg-[#0F172A] border border-white/10 divide-y divide-white/10 overflow-hidden shadow-sm">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="p-4 transition-colors hover:bg-white/[0.02] flex items-center justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <span className="text-xs font-extrabold text-[#FF5E3A] uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#FAF6F0] truncate">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{blog.publishedAt}</span>
                    <span>•</span>
                    <span
                      className={`font-extrabold uppercase text-[10px] ${
                        blog.status === "published" ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      {blog.status === "published" ? "Live" : "Draft"}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 shrink-0"
                  title="View Public Post"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F172A] p-6 sm:p-8 border border-white/15 text-[#FAF6F0] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  INQUIRY DETAILS
                </span>
                <h3 className="text-xl font-black text-[#FAF6F0] mt-0.5">
                  {selectedEnquiry.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Email Address</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.email}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Phone Number</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.phone || "Not provided"}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Company / Website</span>
                <p className="text-sm font-bold text-[#FAF6F0]">{selectedEnquiry.company || "Direct Individual"}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">Selected Service & Budget</span>
                <p className="text-sm font-bold text-[#FF5E3A]">{selectedEnquiry.service} ({selectedEnquiry.budget || "Flexible"})</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Client Objectives & Message</span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-medium">
                {selectedEnquiry.message}
              </p>
            </div>

            {/* Quick Email & Phone Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedEnquiry.email}?subject=Growlinqs Strategy Consultation`}
                  className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-white/[0.08] border border-white/15 text-white hover:bg-[#FF5E3A] hover:border-[#FF5E3A] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>

                {selectedEnquiry.phone && selectedEnquiry.phone !== "Not provided" && (
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-white/[0.08] border border-white/15 text-white hover:bg-emerald-600 hover:border-emerald-600 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Phone</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2 rounded-xl text-xs font-extrabold text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
