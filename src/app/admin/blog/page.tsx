"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle,
  X,
  Save,
  Globe,
  Loader2,
  FileText,
  Layers,
} from "lucide-react";
import { api, BackendBlog, BackendCategory } from "@/lib/api";
import { BlogCategoryItem } from "@/types";

export default function AdminBlogManagementPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<BlogCategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<"All" | "published" | "draft">("All");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [blogsRes, catsRes] = await Promise.all([
        api.blogs.getAdminBlogs({ limit: 100 }),
        api.categories.getCategories(),
      ]);

      const rawCats: BackendCategory[] =
        catsRes.success && Array.isArray(catsRes.data) ? catsRes.data : [];

      const mappedCats: BlogCategoryItem[] = rawCats.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        description: c.description || "",
        postCount: c._count?.blogs ?? c.postCount ?? 0,
        createdAt: c.createdAt,
      }));
      setCategories(mappedCats);

      const rawBlogs: BackendBlog[] =
        blogsRes.success && blogsRes.data?.blogs ? blogsRes.data.blogs : [];

      const mappedBlogs = rawBlogs.map((b) => {
        const catName =
          typeof b.category === "object" && b.category !== null
            ? (b.category as any).name
            : "General Growth";
        const authorName =
          typeof b.author === "object" && b.author !== null
            ? (b.author as any).name
            : "Growlinqs Team";

        return {
          id: b.id,
          title: b.title,
          slug: b.slug,
          category: catName,
          categoryId:
            typeof b.category === "object" && b.category !== null
              ? (b.category as any).id
              : b.category,
          excerpt: b.excerpt || "",
          content: [b.content],
          status: b.status.toLowerCase(),
          publishedAt: b.publishedAt || b.createdAt,
          author: { name: authorName, role: "Growth Strategist" },
          imageSrc: b.featuredImage || "/images/service-seo-dashboard.jpg",
          readTime: "5 min read",
        };
      });

      setBlogs(mappedBlogs);
    } catch (error) {
      console.error("Failed to load blog data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Toggle Publish / Draft
  const handleTogglePublish = async (id: string) => {
    try {
      const current = blogs.find((b) => b.id === id);
      const nextStatus = current?.status === "published" ? "DRAFT" : "PUBLISHED";
      const res = await api.blogs.updateBlog(id, { status: nextStatus });
      if (res.success) {
        fetchData();
      }
    } catch (error) {
      console.error("Toggle publish error:", error);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id: string) => {
    try {
      const res = await api.blogs.deleteBlog(id);
      if (res.success) {
        setDeleteConfirmId(null);
        fetchData();
      }
    } catch (error) {
      console.error("Delete blog error:", error);
    }
  };

  // Filtered list
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author?.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || b.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesStatus =
      selectedStatus === "All" || b.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header & New Article CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
            EDITORIAL ENGINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
            Blog Posts & Tactical Playbooks
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Create, edit, publish, and structure SEO-rich marketing articles for your audience.
          </p>
        </div>

        {/* Link to Dedicated Create Blog Route */}
        <Link
          href="/admin/blog/create"
          className="orange-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          <span>Write New Playbook</span>
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-[#0F172A] border border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, keyword..."
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-2 pl-9 pr-4 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
        </div>

        {/* Category & Status Selectors */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-[#0A0F1D] border border-white/15 text-slate-200 focus:border-[#FF5E3A] focus:outline-none cursor-pointer"
          >
            <option value="All">All Categories ({categories.length})</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-[#0A0F1D] border border-white/15 text-slate-200 focus:border-[#FF5E3A] focus:outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="published">Published (Live)</option>
            <option value="draft">Drafts Only</option>
          </select>
        </div>
      </div>

      {/* Articles Table */}
      <div className="rounded-2xl bg-[#0F172A] border border-white/10 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-[#FF5E3A]" />
            <span>Loading Playbook Library...</span>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-xs">
            No blog playbooks found matching your search and filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="border-b border-white/10 bg-white/[0.02] text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-3.5 px-4">Article</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Author</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors">
                    {/* Article Column with Thumbnail */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3 min-w-[280px]">
                        <div className="relative h-11 w-16 rounded-lg overflow-hidden bg-[#0A0F1D] border border-white/10 shrink-0">
                          <Image
                            src={blog.imageSrc || "/images/service-seo-dashboard.jpg"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[#FAF6F0] line-clamp-1">{blog.title}</p>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{blog.excerpt}</p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4 font-semibold text-slate-300 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px]">
                        {blog.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap font-medium">
                      {blog.author?.name || "Growlinqs Team"}
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap font-mono text-[11px]">
                      {blog.publishedAt}
                    </td>

                    {/* Status Toggle Badge */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(blog.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border transition-colors cursor-pointer ${
                          blog.status === "published"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20"
                        }`}
                        title="Click to toggle publish status"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${blog.status === "published" ? "bg-emerald-400" : "bg-amber-400"}`} />
                        <span>{blog.status === "published" ? "Live" : "Draft"}</span>
                      </button>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                          title="View Live Article"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>

                        <Link
                          href={`/admin/blog/edit/${blog.id}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#FF5E3A] hover:bg-white/10 transition-colors cursor-pointer"
                          title="Edit Article (Full Page Editor)"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(blog.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-[#0F172A] border border-white/15 p-6 space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
              <Trash2 className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#FAF6F0]">Confirm Delete</h3>
              <p className="text-xs text-slate-400">
                Are you sure you want to permanently delete this blog playbook? This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/15 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteBlog(deleteConfirmId)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 cursor-pointer"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
