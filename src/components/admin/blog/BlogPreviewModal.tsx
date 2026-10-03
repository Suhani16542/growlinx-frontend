"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  ArrowRight,
  User,
} from "lucide-react";

interface BlogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    takeaways: string[];
    authorName: string;
    authorRole: string;
    readTime: string;
    featuredImage?: string;
    featuredImageAlt?: string;
    status: string;
  };
}

export function BlogPreviewModal({ isOpen, onClose, blog }: BlogPreviewModalProps) {
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  if (!isOpen) return null;

  const widthClass =
    deviceView === "mobile"
      ? "max-w-sm"
      : deviceView === "tablet"
      ? "max-w-2xl"
      : "max-w-4xl";

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-3xl bg-[#0A0F1D] border border-white/15 text-[#FAF6F0] shadow-2xl overflow-hidden">
        {/* TOP BAR / CONTROLS */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0F172A] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FF5E3A]/20 text-[#FF5E3A] border border-[#FF5E3A]/30">
              Live Preview Simulator
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              /blog/{blog.slug || "sample-slug"}
            </span>
          </div>

          {/* Device Switcher */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setDeviceView("desktop")}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceView === "desktop"
                  ? "bg-[#FF5E3A] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Desktop View"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setDeviceView("tablet")}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceView === "tablet"
                  ? "bg-[#FF5E3A] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Tablet View"
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setDeviceView("mobile")}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceView === "mobile"
                  ? "bg-[#FF5E3A] text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Mobile View"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Close Preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* SCROLLABLE PREVIEW FRAME */}
        <div className="flex-1 overflow-y-auto bg-[#070A14] flex justify-center p-4 sm:p-8">
          <div className={`w-full ${widthClass} transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col bg-[#0A0F1D]`}>
            {/* 1. Article Header Section */}
            <section className="relative py-10 sm:py-14 px-6 sm:px-10 bg-[#0A0F1D] text-[#FAF6F0] overflow-hidden border-b border-white/10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#FF5E3A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                  <span className="rounded-full bg-white/[0.06] px-3.5 py-1 font-extrabold uppercase tracking-widest text-[#FF5E3A] border border-[#FF5E3A]/30 text-[10px]">
                    {blog.category || "General Growth"}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    {blog.readTime || "5 min read"}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    {currentDate}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#FAF6F0] leading-tight">
                  {blog.title || "Untitled Growth Article"}
                </h1>

                {blog.excerpt && (
                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {blog.excerpt}
                  </p>
                )}

                {/* Author Profile Banner */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/[0.08] border border-[#FF5E3A]/40 flex items-center justify-center text-[#FF5E3A] font-bold text-sm">
                      {(blog.authorName || "Alex Vance")
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#FAF6F0] block">
                        {blog.authorName || "Alex Vance"}
                      </span>
                      <span className="text-xs text-slate-400">
                        {blog.authorRole || "Head of SEO & Growth"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Image Banner */}
            {blog.featuredImage && (
              <div className="relative w-full aspect-[16/9] bg-[#0A0F1D] border-b border-white/10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={blog.featuredImage}
                  alt={blog.featuredImageAlt || blog.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* 2. Article Body & Takeaways */}
            <section className="py-10 sm:py-14 px-6 sm:px-10 bg-[#FAF6F0] text-[#0A0F1D] relative">
              {/* Key Strategic Takeaways Box */}
              {blog.takeaways && blog.takeaways.length > 0 && (
                <div className="rounded-2xl p-6 sm:p-7 border border-[#EADECE] bg-white mb-10 shadow-sm">
                  <h3 className="text-xs font-extrabold text-[#FF5E3A] uppercase tracking-widest mb-3.5 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Key Strategic Takeaways</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {blog.takeaways.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A0F1D] font-semibold"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#FF5E3A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rendered HTML Content */}
              <div
                className="prose prose-lg max-w-none text-[#2D3748] leading-relaxed
                  [&>h1]:text-3xl [&>h1]:font-black [&>h1]:text-[#0A0F1D] [&>h1]:mt-6 [&>h1]:mb-3
                  [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-[#0A0F1D] [&>h2]:mt-6 [&>h2]:mb-3
                  [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0A0F1D] [&>h3]:mt-5 [&>h3]:mb-2
                  [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-[#0A0F1D] [&>h4]:mt-4 [&>h4]:mb-2
                  [&>h5]:text-base [&>h5]:font-bold [&>h5]:text-[#0A0F1D] [&>h5]:mt-3 [&>h5]:mb-1
                  [&>h6]:text-sm [&>h6]:font-bold [&>h6]:text-[#0A0F1D] [&>h6]:mt-3 [&>h6]:mb-1
                  [&>p]:text-[#2D3748] [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-base sm:[&>p]:text-lg
                  [&>blockquote]:border-l-4 [&>blockquote]:border-[#FF5E3A] [&>blockquote]:pl-4 [&>blockquote]:py-1.5 [&>blockquote]:italic [&>blockquote]:text-[#4A5568] [&>blockquote]:my-5 [&>blockquote]:bg-[#F3ECE2] [&>blockquote]:rounded-r-xl
                  [&>ul]:list-disc [&>ul]:list-outside [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:my-4 [&>ul]:text-[#2D3748]
                  [&>ol]:list-decimal [&>ol]:list-outside [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:my-4 [&>ol]:text-[#2D3748]
                  [&>a]:text-[#FF5E3A] [&>a]:underline [&>a]:font-medium
                  [&>figure]:my-6 [&>figure]:rounded-2xl [&>figure]:border [&>figure]:border-[#EADECE] [&>figure]:bg-white [&>figure]:p-3 [&>figure]:shadow-sm
                  [&_img]:rounded-xl [&_img]:max-w-full [&_img]:mx-auto"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content ||
                    "<p class='text-slate-400 italic'>No article body content composed yet...</p>",
                }}
              />

              {/* Author Bio Box */}
              <div className="mt-12 pt-6 border-t border-[#EADECE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0A0F1D]">
                    Written by {blog.authorName || "Alex Vance"}
                  </h4>
                  <p className="text-xs text-[#5A6578] font-medium mt-0.5">
                    {blog.authorRole || "Head of SEO & Growth"} at Growlinqs Growth Consultancy.
                  </p>
                </div>
                <div className="orange-btn inline-flex items-center gap-2 font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider">
                  <span>Discuss With Author</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
