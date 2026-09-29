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
import { ExtendedBlogPost } from "@/lib/server/storage";
import { BlogCategoryItem } from "@/types";

const defaultImageOptions = [
  { label: "SEO Dashboard", url: "/images/service-seo-dashboard.jpg" },
  { label: "Paid Media & Ads", url: "/images/service-paid-ads.jpg" },
  { label: "Social Media Campaign", url: "/images/service-social-media.jpg" },
  { label: "App Marketing & ASO", url: "/images/service-app-marketing.jpg" },
  { label: "Agency Studio & Team", url: "/images/hero-agency-studio.jpg" },
  { label: "Growth Strategy Data", url: "/images/marketing-strategy-growth.jpg" },
  { label: "Case Study SEO", url: "/images/case-study-seo.jpg" },
  { label: "Case Study SaaS", url: "/images/case-study-saas.jpg" },
  { label: "Case Study E-Commerce", url: "/images/case-study-ecommerce.jpg" },
];

export default function AdminBlogManagementPage() {
  const [blogs, setBlogs] = useState<ExtendedBlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState<"All" | "published" | "draft">("All");

  // Modal State
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<ExtendedBlogPost> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("SEO Strategy");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formContentText, setFormContentText] = useState("");
  const [formTakeawaysText, setFormTakeawaysText] = useState("");
  const [formAuthorName, setFormAuthorName] = useState("Alex Vance");
  const [formAuthorRole, setFormAuthorRole] = useState("Head of SEO & Growth");
  const [formReadTime, setFormReadTime] = useState("6 min read");
  const [formImageSrc, setFormImageSrc] = useState("/images/service-seo-dashboard.jpg");
  const [formStatus, setFormStatus] = useState<"published" | "draft">("published");
  const [formSeoTitle, setFormSeoTitle] = useState("");
  const [formSeoDesc, setFormSeoDesc] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [blogsRes, catsRes] = await Promise.all([
        fetch("/api/admin/blogs"),
        fetch("/api/admin/categories"),
      ]);

      if (blogsRes.ok) {
        const blogsData = await blogsRes.json();
        setBlogs(blogsData);
      }

      if (catsRes.ok) {
        const catsData = await catsRes.json();
        setCategories(catsData);
      }
    } catch (error) {
      console.error("Failed to load blog data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingBlog(null);
    setFormTitle("");
    setFormSlug("");
    setFormCategory(categories[0]?.name || "SEO Strategy");
    setFormExcerpt("");
    setFormContentText("");
    setFormTakeawaysText("");
    setFormAuthorName("Alex Vance");
    setFormAuthorRole("Head of SEO & Growth");
    setFormReadTime("6 min read");
    setFormImageSrc("/images/service-seo-dashboard.jpg");
    setFormStatus("published");
    setFormSeoTitle("");
    setFormSeoDesc("");
    setEditorOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (blog: ExtendedBlogPost) => {
    setEditingBlog(blog);
    setFormTitle(blog.title);
    setFormSlug(blog.slug);
    setFormCategory(blog.category);
    setFormExcerpt(blog.excerpt);
    setFormContentText(blog.content ? blog.content.join("\n\n") : "");
    setFormTakeawaysText(blog.takeaways ? blog.takeaways.join("\n") : "");
    setFormAuthorName(blog.author?.name || "Growlinx Team");
    setFormAuthorRole(blog.author?.role || "Growth Strategist");
    setFormReadTime(blog.readTime || "5 min read");
    setFormImageSrc(blog.imageSrc || "/images/service-seo-dashboard.jpg");
    setFormStatus(blog.status || "published");
    setFormSeoTitle(blog.seoTitle || blog.title);
    setFormSeoDesc(blog.seoDescription || blog.excerpt);
    setEditorOpen(true);
  };

  // Save Blog (Create or Update)
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    setIsSaving(true);
    try {
      const contentArray = formContentText
        .split("\n\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);

      const takeawaysArray = formTakeawaysText
        .split("\n")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      const payload = {
        id: editingBlog?.id,
        title: formTitle,
        slug: formSlug || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        category: formCategory,
        excerpt: formExcerpt,
        content: contentArray,
        takeaways: takeawaysArray,
        author: {
          name: formAuthorName,
          role: formAuthorRole,
        },
        readTime: formReadTime,
        imageSrc: formImageSrc,
        status: formStatus,
        seoTitle: formSeoTitle || formTitle,
        seoDescription: formSeoDesc || formExcerpt,
      };

      const url = editingBlog?.id ? `/api/admin/blogs/${editingBlog.id}` : "/api/admin/blogs";
      const method = editingBlog?.id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setEditorOpen(false);
        fetchData();
      }
    } catch (error) {
      console.error("Save blog error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Toggle Publish / Draft
  const handleTogglePublish = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "PATCH" });
      if (res.ok) {
        fetchData();
      }
    } catch (error) {
      console.error("Toggle publish error:", error);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
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

        <button
          type="button"
          onClick={handleOpenCreate}
          className="orange-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          <span>Write New Playbook</span>
        </button>
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
                      {blog.author?.name || "Growlinx Team"}
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

                        <button
                          type="button"
                          onClick={() => handleOpenEdit(blog)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#FF5E3A] hover:bg-white/10 transition-colors cursor-pointer"
                          title="Edit Article"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>

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

      {/* Create / Edit Blog Modal */}
      {editorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F172A] border border-white/15 text-[#FAF6F0] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  {editingBlog?.id ? "UPDATE PLAYBOOK" : "CREATE NEW PLAYBOOK"}
                </span>
                <h3 className="text-xl font-black text-[#FAF6F0] mt-0.5">
                  {editingBlog?.id ? "Edit Growth Article" : "Compose Growth Article"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setEditorOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveBlog} className="space-y-5">
              {/* Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => {
                      setFormTitle(e.target.value);
                      if (!editingBlog?.id) {
                        setFormSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
                      }
                    }}
                    placeholder="e.g. Scaling Paid Ads to $100k/mo"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    placeholder="scaling-paid-ads-without-fatigue"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none font-mono text-xs"
                  />
                </div>
              </div>

              {/* Category, Read Time, Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Category Topic
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#0A0F1D] p-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    placeholder="e.g. 6 min read"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Publish Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as "published" | "draft")}
                    className="w-full rounded-xl border border-white/15 bg-[#0A0F1D] p-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  >
                    <option value="published">Published (Live)</option>
                    <option value="draft">Save as Draft</option>
                  </select>
                </div>
              </div>

              {/* Author Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={formAuthorName}
                    onChange={(e) => setFormAuthorName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Author Role / Title
                  </label>
                  <input
                    type="text"
                    value={formAuthorRole}
                    onChange={(e) => setFormAuthorRole(e.target.value)}
                    placeholder="e.g. Head of SEO & Growth"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Article Summary / Excerpt *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  placeholder="A compelling 1-2 sentence hook for the card preview..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none resize-none font-medium"
                />
              </div>

              {/* Featured Image Picker */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Select Featured Visual Image
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {defaultImageOptions.map((opt) => {
                    const isSelected = formImageSrc === opt.url;
                    return (
                      <div
                        key={opt.url}
                        onClick={() => setFormImageSrc(opt.url)}
                        className={`relative rounded-xl overflow-hidden aspect-[16/10] cursor-pointer border transition-all ${
                          isSelected ? "border-[#FF5E3A] ring-2 ring-[#FF5E3A]" : "border-white/10 hover:border-white/40 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={opt.url} alt={opt.label} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5">
                          <span className="text-[9px] font-bold text-white line-clamp-1">{opt.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Content Body Editor */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Main Playbook Content (Separate paragraphs with double enter)
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">Rich Formatting Supported</span>
                </div>
                <textarea
                  rows={6}
                  value={formContentText}
                  onChange={(e) => setFormContentText(e.target.value)}
                  placeholder="Write the complete in-depth article body here. Each double-break paragraph will format cleanly on the public website..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none resize-y font-normal leading-relaxed"
                />
              </div>

              {/* Key Takeaways */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Key Strategic Takeaways (One per line)
                </label>
                <textarea
                  rows={3}
                  value={formTakeawaysText}
                  onChange={(e) => setFormTakeawaysText(e.target.value)}
                  placeholder="Prioritize semantic depth over raw keyword density.&#10;Implement server-side CAPI tracking."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none resize-none font-mono"
                />
              </div>

              {/* SEO Meta Fields */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  SEARCH ENGINE OPTIMIZATION (SEO)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">SEO Title Tag</label>
                    <input
                      type="text"
                      value={formSeoTitle}
                      onChange={(e) => setFormSeoTitle(e.target.value)}
                      placeholder="Title displayed in Google SERP"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">Meta Description</label>
                    <input
                      type="text"
                      value={formSeoDesc}
                      onChange={(e) => setFormSeoDesc(e.target.value)}
                      placeholder="Description displayed in Google SERP snippet"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditorOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="orange-btn inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer disabled:opacity-70"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  <span>{editingBlog?.id ? "Save Changes" : "Publish Article"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/15"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDeleteBlog(deleteConfirmId)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500"
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
