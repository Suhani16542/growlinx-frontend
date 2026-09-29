import Image from "next/image";
import Link from "next/link";
import { BlogPostItem } from "@/types";
import { Clock, ArrowUpRight, User, BookOpen } from "lucide-react";

interface BlogCardProps {
  post: BlogPostItem;
  theme?: "dark" | "light";
}

const blogImageMap: Record<string, string> = {
  "seo-playbook-for-high-growth-brands": "/images/service-seo-dashboard.jpg",
  "scaling-paid-ads-without-fatigue": "/images/service-paid-ads.jpg",
  "executing-roi-first-influencer-campaigns": "/images/hero-agency-studio.jpg",
  "mastering-app-store-optimization-2026": "/images/service-app-marketing.jpg",
  "youtube-monetization-and-watch-time-acceleration": "/images/strategist-laptop.jpg",
  "turning-traffic-into-revenue-cro-guide": "/images/marketing-strategy-growth.jpg",
};

export function BlogCard({ post, theme = "light" }: BlogCardProps) {
  const isLight = theme === "light";
  const imageSrc =
    blogImageMap[post.slug] || "/images/marketing-strategy-growth.jpg";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-6 h-full transition-all duration-300 ${
        isLight
          ? "cream-card cream-card-interactive"
          : "navy-card navy-card-interactive"
      }`}
    >
      <div className="space-y-4">
        {/* Large Rounded Image Container with Smooth Hover Zoom */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#EADECE] bg-[#FAF6F0]">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Floating Category Pill */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#FF5E3A] border border-[#EADECE] shadow-sm">
              {post.category}
            </span>
          </div>

          {/* Read Time Chip */}
          <div className="absolute bottom-3.5 right-3.5 z-10 bg-[#0A0F1D]/85 backdrop-blur-md rounded-xl px-2.5 py-1 border border-white/10 text-slate-200 text-[10px] font-bold flex items-center gap-1 shadow-sm">
            <Clock className="h-3 w-3 text-[#FF5E3A]" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title and Excerpt */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0A0F1D] group-hover:text-[#FF5E3A] transition-colors duration-200 leading-snug">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-[#5A6578] font-normal line-clamp-2 pt-0.5">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Author and Read Link */}
      <div className="mt-5 border-t border-[#EADECE] pt-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-[#FAF6F0] border border-[#EADECE] flex items-center justify-center text-[#0A0F1D] text-xs font-bold">
            <User className="h-3.5 w-3.5 text-[#FF5E3A]" />
          </div>
          <span className="text-xs font-bold text-[#0A0F1D] line-clamp-1">
            {post.author.name}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-[#FF5E3A]">
          <span>Read Article</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
