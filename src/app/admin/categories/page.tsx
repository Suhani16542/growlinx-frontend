"use client";

import { useState, useEffect, useCallback } from "react";
import {
  FolderTree,
  Plus,
  Edit2,
  Trash2,
  FileText,
  AlertCircle,
  X,
  Save,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { BlogCategoryItem } from "@/types";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<(BlogCategoryItem & { postCount: number })[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<BlogCategoryItem | null>(null);
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/categories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Fetch categories error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleOpenCreate = () => {
    setEditingCategory(null);
    setFormName("");
    setFormDescription("");
    setErrorMessage(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (cat: BlogCategoryItem) => {
    setEditingCategory(cat);
    setFormName(cat.name);
    setFormDescription(cat.description || "");
    setErrorMessage(null);
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    setIsSaving(true);
    setErrorMessage(null);

    try {
      const url = editingCategory ? `/api/admin/categories/${editingCategory.id}` : "/api/admin/categories";
      const method = editingCategory ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          description: formDescription,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Failed to save category.");
      } else {
        setModalOpen(false);
        fetchCategories();
      }
    } catch (error) {
      setErrorMessage("Network error occurred.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    setErrorMessage(null);
    if (!confirm(`Are you sure you want to delete category "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Cannot delete category.");
      } else {
        fetchCategories();
      }
    } catch (error) {
      alert("Error deleting category.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Create CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block mb-1">
            CONTENT TAXONOMY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#FAF6F0] tracking-tight">
            Blog Categories
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Organize articles into specialized digital marketing topics and growth disciplines.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenCreate}
          className="orange-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Category</span>
        </button>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading ? (
          <div className="col-span-full p-12 text-center text-slate-400 flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-[#FF5E3A]" />
            <span>Loading Taxonomy...</span>
          </div>
        ) : categories.length === 0 ? (
          <div className="col-span-full p-12 text-center text-slate-400 text-xs">
            No categories defined yet.
          </div>
        ) : (
          categories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-[#0F172A] border border-white/10 p-5 flex flex-col justify-between space-y-4 shadow-sm hover:border-white/20 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-[#FF5E3A]/15 text-[#FF5E3A] flex items-center justify-center font-bold">
                      <FolderTree className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#FAF6F0]">{cat.name}</h3>
                      <p className="text-[10px] text-slate-400 font-mono">/{cat.slug}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/[0.06] text-[#FF5E3A] border border-white/10">
                    <FileText className="h-3 w-3" />
                    <span>{cat.postCount} {cat.postCount === 1 ? "Post" : "Posts"}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {cat.description || "Articles and strategic playbooks in this category."}
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(cat)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 bg-white/[0.04] border border-white/10 hover:text-[#FF5E3A] hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                  <span>Edit</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(cat.id, cat.name)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/10 hover:bg-red-500/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Category Create/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0F172A] border border-white/15 text-[#FAF6F0] shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  CATEGORY TAXONOMY
                </span>
                <h3 className="text-xl font-black text-[#FAF6F0] mt-0.5">
                  {editingCategory ? "Edit Category" : "Create New Category"}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. AI Search Optimization"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Brief summary of what playbooks are covered in this topic..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-3 text-sm text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="orange-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider cursor-pointer"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  <span>{editingCategory ? "Save Changes" : "Create Category"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
