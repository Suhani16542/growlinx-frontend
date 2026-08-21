import Link from "next/link";
import { BlogPostItem } from "@/types";
import { Clock, ArrowRight, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPostItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glow-card glow-card-interactive group flex flex-col justify-between rounded-2xl p-6 sm:p-7 h-full">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 font-semibold text-cyan-400 border border-blue-500/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-5 text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2 cursor-pointer">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <User className="h-3.5 w-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-200">{post.author.name}</span>
            <span className="text-[10px] text-slate-400">{post.publishedAt}</span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>Read</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
