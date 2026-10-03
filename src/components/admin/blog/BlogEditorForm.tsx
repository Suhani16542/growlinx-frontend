"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Eye,
  Save,
  FileText,
  Sparkles,
  Globe,
  Upload,
  Image as ImageIcon,
  Check,
  AlertCircle,
  Clock,
  User,
  Tag,
  FolderTree,
  Search,
  Plus,
  Trash2,
  Lock,
  Unlock,
  CheckCircle2,
  Loader2,
  ExternalLink,
  HelpCircle,
  Copy,
  Layers,
  X,
} from "lucide-react";
import { api, BackendCategory, BackendBlog } from "@/lib/api";
import { RichTextEditor } from "@/components/admin/blog/RichTextEditor";
import { BlogPreviewModal } from "@/components/admin/blog/BlogPreviewModal";

interface BlogEditorFormProps {
  initialBlog?: BackendBlog | null;
  isEditMode?: boolean;
}

export function BlogEditorForm({ initialBlog, isEditMode = false }: BlogEditorFormProps) {
  const router = useRouter();

  // Basic Information
  const [title, setTitle] = useState(initialBlog?.title || "");
  const [slug, setSlug] = useState(initialBlog?.slug || "");
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(Boolean(initialBlog?.slug));
  const [isSlugLocked, setIsSlugLocked] = useState(true);
  const [excerpt, setExcerpt] = useState(initialBlog?.excerpt || "");
  const [contentHtml, setContentHtml] = useState(initialBlog?.content || "");

  // Strategic Takeaways / Keywords List
  const [takeaways, setTakeaways] = useState<string[]>(() => {
    if (!initialBlog) return ["Prioritize semantic depth over raw keyword density."];
    return [];
  });
  const [takeawayInput, setTakeawayInput] = useState("");

  // Settings & Categorization
  const [categories, setCategories] = useState<BackendCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">(
    initialBlog?.status === "DRAFT" ? "DRAFT" : "PUBLISHED"
  );
  const [authorName, setAuthorName] = useState(
    typeof initialBlog?.author === "object" && initialBlog?.author !== null
      ? (initialBlog.author as any).name
      : "Alex Vance"
  );
  const [authorRole, setAuthorRole] = useState("Head of SEO & Growth");
  const [readTime, setReadTime] = useState("5 min read");

  // Cover / Featured Image
  const [featuredImage, setFeaturedImage] = useState(
    initialBlog?.featuredImage || ""
  );
  const [featuredImageAlt, setFeaturedImageAlt] = useState(
    initialBlog?.title || ""
  );
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [coverUploadError, setCoverUploadError] = useState<string | null>(null);
  const coverFileInputRef = React.useRef<HTMLInputElement>(null);

  // Tags
  const [tags, setTags] = useState<string[]>(["SEO", "Growth", "Marketing"]);
  const [tagInput, setTagInput] = useState("");

  // SEO Fields
  const [seoTitle, setSeoTitle] = useState(initialBlog?.title || "");
  const [seoDescription, setSeoDescription] = useState(initialBlog?.excerpt || "");

  // Quick Create Category Modal
  const [newCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  // Telemetry & UI State
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveAction, setSaveAction] = useState<"DRAFT" | "PUBLISHED" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch Categories on Mount
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await api.categories.getCategories();
        if (res.success && Array.isArray(res.data)) {
          setCategories(res.data);
          if (res.data.length > 0) {
            if (initialBlog?.category) {
              const matchedCatId =
                typeof initialBlog.category === "object" && initialBlog.category !== null
                  ? (initialBlog.category as any).id
                  : initialBlog.category;
              setSelectedCategoryId(matchedCatId || res.data[0].id);
            } else if (!selectedCategoryId) {
              setSelectedCategoryId(res.data[0].id);
            }
          }
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    }
    loadCategories();
  }, [initialBlog]);

  // Auto generate slug from title if not manually edited
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    if (!isSlugManuallyEdited && !isEditMode) {
      const generated = newTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generated);
      if (!seoTitle) {
        setSeoTitle(newTitle);
      }
    }
  };

  const handleSlugChange = (newSlug: string) => {
    setIsSlugManuallyEdited(true);
    const sanitized = newSlug
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-");
    setSlug(sanitized);
  };

  // Auto Calculate Reading Time based on content words
  const handleAutoCalculateReadTime = () => {
    if (typeof window === "undefined") return;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = contentHtml;
    const text = (tempDiv.textContent || tempDiv.innerText || "").trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadTime(`${minutes} min read`);
  };

  // Featured Image Upload
  const handleCoverFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setCoverUploadError("Cover image exceeds 10MB limit.");
      return;
    }

    setIsUploadingCover(true);
    setCoverUploadError(null);
    try {
      const res = await api.uploads.uploadImage(file);
      if (res.success && res.data?.url) {
        setFeaturedImage(res.data.url);
        if (!featuredImageAlt) {
          setFeaturedImageAlt(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
        }
      } else {
        setCoverUploadError(res.message || "Failed to upload cover image.");
      }
    } catch (err: any) {
      setCoverUploadError(err?.message || "Error uploading image to server.");
    } finally {
      setIsUploadingCover(false);
    }
  };

  // Quick Create Category
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    setIsCreatingCategory(true);
    try {
      const res = await api.categories.createCategory({
        name: newCategoryName.trim(),
        description: `${newCategoryName.trim()} Growth Category`,
      });

      if (res.success && res.data) {
        setCategories((prev) => [...prev, res.data as BackendCategory]);
        setSelectedCategoryId((res.data as BackendCategory).id);
        setNewCategoryName("");
        setNewCategoryModalOpen(false);
      }
    } catch (err) {
      console.error("Error creating category:", err);
    } finally {
      setIsCreatingCategory(false);
    }
  };

  // Strategic Takeaways Management
  const handleAddTakeaway = () => {
    if (!takeawayInput.trim()) return;
    setTakeaways((prev) => [...prev, takeawayInput.trim()]);
    setTakeawayInput("");
  };

  const handleRemoveTakeaway = (idx: number) => {
    setTakeaways((prev) => prev.filter((_, i) => i !== idx));
  };

  // Tags Management
  const handleAddTag = () => {
    const clean = tagInput.trim().replace(/^#/, "");
    if (clean && !tags.includes(clean)) {
      setTags((prev) => [...prev, clean]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

  // Save Blog (Draft or Publish)
  const handleSave = async (targetStatus: "DRAFT" | "PUBLISHED") => {
    if (!title.trim()) {
      setErrorMessage("Please enter an article title.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSaving(true);
    setSaveAction(targetStatus);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      let finalCategoryId = selectedCategoryId;
      if (!finalCategoryId) {
        if (categories.length > 0) {
          finalCategoryId = categories[0].id;
        } else {
          // Dynamically create default category
          const catRes = await api.categories.createCategory({
            name: "Growth Strategy",
            description: "Default Strategic Category",
          });
          if (catRes.success && catRes.data) {
            finalCategoryId = (catRes.data as BackendCategory).id;
          }
        }
      }

      if (!finalCategoryId) {
        setErrorMessage("Please select or create a category before saving.");
        setIsSaving(false);
        return;
      }

      const generatedSlug = (slug || title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      const finalContent =
        contentHtml.trim() || `<p>${title.trim()} - Comprehensive strategic breakdown.</p>`;

      const payload = {
        title: title.trim(),
        slug: generatedSlug,
        excerpt: excerpt.trim() || undefined,
        content: finalContent,
        featuredImage: featuredImage.trim() || undefined,
        categoryId: finalCategoryId,
        status: targetStatus,
      };

      let res;
      if (isEditMode && initialBlog?.id) {
        res = await api.blogs.updateBlog(initialBlog.id, payload);
      } else {
        res = await api.blogs.createBlog(payload);
      }

      if (res.success) {
        setSuccessMessage(
          targetStatus === "PUBLISHED"
            ? "Article published live successfully!"
            : "Draft saved successfully!"
        );
        setTimeout(() => {
          router.push("/admin/blog");
          router.refresh();
        }, 1200);
      } else {
        setErrorMessage(res.message || "Failed to save blog post.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Error saving blog article.");
    } finally {
      setIsSaving(false);
    }
  };

  const currentCategoryName =
    categories.find((c) => c.id === selectedCategoryId)?.name || "Growth Strategy";

  return (
    <div className="space-y-6 pb-16">
      {/* 1. TOP STICKY CONTROL HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0F172A] border border-white/10 shadow-lg sticky top-0 z-30 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="h-10 w-10 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/25 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Back to Blog Post Library"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A]">
                {isEditMode ? "ARTICLE EDITOR" : "CREATE NEW ARTICLE"}
              </span>
              <span
                className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                  status === "PUBLISHED"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                    : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                }`}
              >
                {status === "PUBLISHED" ? "Live Article" : "Draft Mode"}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#FAF6F0] tracking-tight">
              {isEditMode ? "Edit Growth Playbook" : "Compose Growth Playbook"}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Live Preview Button */}
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <Eye className="h-4 w-4 text-[#FF5E3A]" />
            <span>Preview</span>
          </button>

          {/* Save Draft Button */}
          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave("DRAFT")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-[#0A0F1D] border border-white/15 hover:border-white/30 hover:text-white transition-all cursor-pointer disabled:opacity-50"
          >
            {isSaving && saveAction === "DRAFT" ? (
              <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
            ) : (
              <FileText className="h-4 w-4 text-slate-400" />
            )}
            <span>Save Draft</span>
          </button>

          {/* Publish Button */}
          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave("PUBLISHED")}
            className="orange-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {isSaving && saveAction === "PUBLISHED" ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              <Sparkles className="h-4 w-4 text-white" />
            )}
            <span>{isEditMode ? "Update & Publish" : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* 2. MAIN 2-COLUMN RESPONSIVE LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: MAIN CONTENT & RICH TEXT EDITOR (8 COLS) */}
        {/* ========================================================= */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Article Title & Slug */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Scaling Paid Media to $100k/mo Without Ad Fatigue"
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3.5 text-base sm:text-lg font-bold text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none"
              />
            </div>

            {/* URL Slug Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  SEO Permanent URL Slug
                </label>
                <button
                  type="button"
                  onClick={() => setIsSlugLocked(!isSlugLocked)}
                  className="text-[11px] text-[#FF5E3A] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  {isSlugLocked ? (
                    <>
                      <Lock className="h-3 w-3" /> <span>Unlock Custom Slug</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="h-3 w-3" /> <span>Lock Slug</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center rounded-xl border border-white/15 bg-white/[0.03] overflow-hidden focus-within:border-[#FF5E3A]">
                <span className="px-3.5 py-2.5 text-xs text-slate-500 font-mono select-none bg-white/[0.02] border-r border-white/10 hidden sm:inline">
                  https://growlinqs.com/blog/
                </span>
                <input
                  type="text"
                  value={slug}
                  readOnly={isSlugLocked}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="scaling-paid-media-without-fatigue"
                  className={`w-full p-2.5 text-xs font-mono text-[#FAF6F0] focus:outline-none ${
                    isSlugLocked ? "text-slate-400 cursor-not-allowed" : "text-emerald-300"
                  }`}
                />
              </div>
            </div>

            {/* Short Summary / Excerpt */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  Article Summary / Excerpt *
                </label>
                <span className="text-[10px] text-slate-400 font-mono">
                  {excerpt.length} / 220 chars (Recommended: 120-160)
                </span>
              </div>
              <textarea
                rows={2}
                required
                value={excerpt}
                onChange={(e) => {
                  setExcerpt(e.target.value);
                  if (!seoDescription) setSeoDescription(e.target.value);
                }}
                placeholder="A high-impact 1-2 sentence preview hook displayed on the blog archive and social preview cards..."
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-xs sm:text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none resize-none font-medium leading-relaxed"
              />
            </div>

            {/* Keywords */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  Keywords
                </label>
                <span className="text-[10px] text-slate-400 font-mono">
                  Press Enter or + to add
                </span>
              </div>

              {/* Add Keyword Input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={takeawayInput}
                  onChange={(e) => setTakeawayInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTakeaway();
                    }
                  }}
                  placeholder="e.g. SEO Playbook, B2B Growth Strategy, CAPI Tracking..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none font-medium"
                />
                <button
                  type="button"
                  onClick={handleAddTakeaway}
                  className="orange-btn px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Keywords List */}
              {takeaways.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-200"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5E3A] shrink-0" />
                        <span>{item}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveTakeaway(idx)}
                        className="text-slate-400 hover:text-red-400 p-1 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Main Rich Text Visual Editor */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  WYSIWYG EDITORIAL SUITE
                </span>
                <h3 className="text-base font-black text-[#FAF6F0] mt-0.5">
                  Playbook Body Content
                </h3>
              </div>
              <button
                type="button"
                onClick={handleAutoCalculateReadTime}
                className="text-[11px] font-bold text-[#FF5E3A] hover:underline flex items-center gap-1 cursor-pointer"
                title="Recalculate reading time estimate from content word count"
              >
                <Clock className="h-3.5 w-3.5" />
                <span>Calculate Read Time</span>
              </button>
            </div>

            {/* Rich Text Editor Component with Semantic H1-H6, formatting, images with alt text, videos, and HTML code view */}
            <RichTextEditor
              value={contentHtml}
              onChange={(newHtml) => setContentHtml(newHtml)}
              placeholder="Start drafting your tactical marketing playbook here. Use the toolbar to insert H1, H2, H3 headings, images with Alt text, videos, lists, and blockquotes..."
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: METADATA & SETTINGS SIDEBAR (4 COLS) */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 space-y-6">
          {/* Settings Card 1: Publish Status & Reading Time */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
              PUBLISHING CONTROLS
            </span>

            {/* Publication Status Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Article Status
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStatus("PUBLISHED")}
                  className={`p-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    status === "PUBLISHED"
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-md"
                      : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Published</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("DRAFT")}
                  className={`p-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    status === "DRAFT"
                      ? "bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-md"
                      : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Draft</span>
                </button>
              </div>
            </div>

            {/* Read Time Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Estimated Read Time
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="e.g. 6 min read"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 pl-8 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
                />
                <Clock className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Settings Card 2: Category Topic */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                CATEGORY
              </span>
              <button
                type="button"
                onClick={() => setNewCategoryModalOpen(true)}
                className="text-[11px] font-bold text-[#FF5E3A] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="h-3 w-3" />
                <span>New Category</span>
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Topic Category *
              </label>
              <select
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-[#0A0F1D] p-3 text-xs font-bold text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Settings Card 3: Featured Cover Visual & Alt Text */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                FEATURED VISUAL COVER
              </span>
              <h4 className="text-sm font-bold text-[#FAF6F0] mt-0.5">
                Cover Image & SEO Alt Text
              </h4>
            </div>

            {coverUploadError && (
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                {coverUploadError}
              </div>
            )}

            {/* Current Featured Image Preview */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0F1D] border border-white/15 group">
              {featuredImage ? (
                <>
                  <Image
                    src={featuredImage}
                    alt={featuredImageAlt || "Featured Cover"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => coverFileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold"
                    >
                      Change
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeaturedImage("")}
                      className="px-3 py-1.5 rounded-lg bg-red-500/80 hover:bg-red-500 text-white text-xs font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </>
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center text-slate-500 gap-1.5 p-4 text-center">
                  <ImageIcon className="h-8 w-8 text-slate-600" />
                  <span className="text-xs font-bold">No cover image selected</span>
                </div>
              )}
            </div>

            {/* Upload Button */}
            <div
              onClick={() => coverFileInputRef.current?.click()}
              className="border border-dashed border-white/20 hover:border-[#FF5E3A] rounded-xl p-3 text-center bg-white/[0.02] cursor-pointer"
            >
              <input
                ref={coverFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleCoverFileUpload}
                className="hidden"
              />
              {isUploadingCover ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-[#FF5E3A]" />
                  <span className="text-xs text-slate-300 font-bold">Uploading Cover...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                  <Upload className="h-3.5 w-3.5 text-[#FF5E3A]" />
                  <span>Upload from Computer (PNG/JPG)</span>
                </div>
              )}
            </div>

            {/* Featured Image Alt Text Input (SEO Crucial) */}
            <div className="space-y-1.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#FF5E3A]">
                Cover Image Alt Text (SEO) *
              </label>
              <input
                type="text"
                required
                value={featuredImageAlt}
                onChange={(e) => setFeaturedImageAlt(e.target.value)}
                placeholder="Descriptive alt text for cover visual..."
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
              />
            </div>
          </div>

          {/* Settings Card 4: Author Profile */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
              AUTHORSHIP METADATA
            </span>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="e.g. Alex Vance"
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Author Title / Role
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                placeholder="e.g. Head of SEO & Growth"
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none font-medium"
              />
            </div>
          </div>

          {/* Settings Card 5: Tags */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-3.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
              TAGS
            </span>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                placeholder="Add tag..."
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-slate-200"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-semibold text-slate-300"
                >
                  <span>#{t}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(t)}
                    className="text-slate-500 hover:text-red-400"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Settings Card 6: SEO SERP Snippet Preview */}
          <div className="p-5 rounded-2xl bg-[#0F172A] border border-white/10 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
              GOOGLE SERP SIMULATION
            </span>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Meta Title Tag
                </label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Title displayed in search engines"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Meta Description
                </label>
                <textarea
                  rows={2}
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder="Snippet displayed below Google search title"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Google SERP Snippet Box */}
            <div className="p-3.5 rounded-xl bg-[#0A0F1D] border border-white/10 space-y-1">
              <span className="text-[10px] text-slate-500 block truncate font-mono">
                https://growlinqs.com &rsaquo; blog &rsaquo; {slug || "article-slug"}
              </span>
              <p className="text-xs font-bold text-[#8AB4F8] hover:underline cursor-pointer line-clamp-1">
                {seoTitle || title || "Playbook Title | Growlinqs"}
              </p>
              <p className="text-[11px] text-[#BDC1C6] line-clamp-2 leading-relaxed">
                {seoDescription || excerpt || "Strategic insights and tactical growth playbooks for modern brands."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK CREATE CATEGORY MODAL */}
      {newCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-[#0F172A] border border-white/15 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h4 className="text-sm font-bold text-[#FAF6F0] flex items-center gap-2">
                <FolderTree className="h-4 w-4 text-[#FF5E3A]" />
                <span>Create New Category</span>
              </h4>
              <button
                type="button"
                onClick={() => setNewCategoryModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCategory} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. CRO & Conversions"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setNewCategoryModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingCategory}
                  className="orange-btn px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider disabled:opacity-50"
                >
                  {isCreatingCategory ? "Creating..." : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LIVE PREVIEW SIMULATOR MODAL */}
      <BlogPreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        blog={{
          title,
          slug,
          category: currentCategoryName,
          excerpt,
          content: contentHtml,
          takeaways,
          authorName,
          authorRole,
          readTime,
          featuredImage,
          featuredImageAlt,
          status,
        }}
      />
    </div>
  );
}
