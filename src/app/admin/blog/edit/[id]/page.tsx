"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { api, BackendBlog } from "@/lib/api";
import { BlogEditorForm } from "@/components/admin/blog/BlogEditorForm";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function AdminBlogEditPage({ params }: EditBlogPageProps) {
  const { id } = use(params);
  const router = useRouter();

  const [blog, setBlog] = useState<BackendBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlog() {
      setLoading(true);
      try {
        const res = await api.blogs.getAdminBlogById(id);
        if (res.success && res.data) {
          setBlog(res.data);
        } else {
          // Fallback: search in admin blogs list if individual endpoint is not available
          const listRes = await api.blogs.getAdminBlogs({ limit: 100 });
          const found = listRes.data?.blogs?.find((b: any) => b.id === id || b.slug === id);
          if (found) {
            setBlog(found);
          } else {
            setError(res.message || "Blog article not found.");
          }
        }
      } catch (err: any) {
        setError(err?.message || "Failed to load blog data.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="p-16 flex flex-col items-center justify-center gap-3 text-slate-400">
        <Loader2 className="h-8 w-8 animate-spin text-[#FF5E3A]" />
        <span className="text-xs font-bold uppercase tracking-wider">Loading Article for Editing...</span>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="p-8 rounded-2xl bg-[#0F172A] border border-white/10 text-center space-y-4 max-w-lg mx-auto my-12">
        <div className="mx-auto h-12 w-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <AlertCircle className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-base font-bold text-[#FAF6F0]">Article Not Found</h3>
          <p className="text-xs text-slate-400 mt-1">{error || "Unable to locate this article in the library."}</p>
        </div>
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog Posts</span>
        </Link>
      </div>
    );
  }

  return <BlogEditorForm initialBlog={blog} isEditMode={true} />;
}
