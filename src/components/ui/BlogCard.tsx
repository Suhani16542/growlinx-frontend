import Link from "next/link";
import { BlogPostItem } from "@/types";
import { Clock, ArrowRight, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPostItem;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glass-panel glass-panel-interactive group flex flex-col justify-between rounded-3xl p-7 sm:p-8 h-full">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-bold text-cyan-300 border border-cyan-500/20">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2 cursor-pointer">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-8 border-t border-white/[0.08] pt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
            <User className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">{post.author.name}</span>
            <span className="text-[11px] text-slate-400">{post.publishedAt}</span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
        >
          <span>Read Article</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
