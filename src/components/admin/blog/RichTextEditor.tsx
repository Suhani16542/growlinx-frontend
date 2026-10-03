"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Pilcrow,
  RemoveFormatting,
  Undo,
  Redo,
  Code,
  Eye,
  Upload,
  X,
  Check,
  Loader2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { api } from "@/lib/api";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your blog content here...",
  minHeight = "480px",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [sourceCode, setSourceCode] = useState(value || "");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Link Modal State
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [savedSelection, setSavedSelection] = useState<Range | null>(null);

  // Image Modal State
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);

  // Video Modal State
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [videoUploadError, setVideoUploadError] = useState<string | null>(null);
  const videoFileInputRef = useRef<HTMLInputElement>(null);

  // Selected Heading Level in Dropdown
  const [currentBlockType, setCurrentBlockType] = useState("p");

  // Sync value from props to editor DOM when initialized or changed externally
  useEffect(() => {
    if (editorRef.current && !isSourceMode) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "";
      }
    }
    setSourceCode(value || "");
    updateCounts(value || "");
  }, [value, isSourceMode]);

  const updateCounts = (html: string) => {
    if (typeof window === "undefined") return;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const cleanText = text.trim();
    setCharCount(cleanText.length);
    const words = cleanText ? cleanText.split(/\s+/).filter(Boolean).length : 0;
    setWordCount(words);
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      onChange(html);
      setSourceCode(html);
      updateCounts(html);
      detectCurrentBlock();
    }
  };

  const handleSourceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setSourceCode(val);
    onChange(val);
    updateCounts(val);
  };

  const toggleSourceMode = () => {
    if (isSourceMode) {
      // Switching from Code to Visual
      if (editorRef.current) {
        editorRef.current.innerHTML = sourceCode;
      }
      setIsSourceMode(false);
    } else {
      // Switching from Visual to Code
      if (editorRef.current) {
        setSourceCode(editorRef.current.innerHTML);
      }
      setIsSourceMode(true);
    }
  };

  const detectCurrentBlock = () => {
    if (typeof window === "undefined") return;
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode) return;

    let node: Node | null = selection.anchorNode;
    if (node.nodeType === Node.TEXT_NODE) {
      node = node.parentNode;
    }

    while (node && node !== editorRef.current) {
      const tagName = (node as HTMLElement).tagName?.toLowerCase();
      if (["h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote"].includes(tagName)) {
        setCurrentBlockType(tagName);
        return;
      }
      node = node.parentNode;
    }
    setCurrentBlockType("p");
  };

  const saveCurrentSelection = () => {
    if (typeof window === "undefined") return;
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      setSavedSelection(sel.getRangeAt(0));
    }
  };

  const restoreSelection = () => {
    if (typeof window === "undefined" || !savedSelection) return;
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(savedSelection);
    }
  };

  // Format Commands
  const execFormat = (command: string, value: string | undefined = undefined) => {
    if (isSourceMode || !editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleEditorInput();
  };

  // Semantic Heading & Block Formatting
  const handleHeadingChange = (tag: string) => {
    if (isSourceMode || !editorRef.current) return;
    editorRef.current.focus();

    if (tag === "p") {
      document.execCommand("formatBlock", false, "<p>");
    } else if (tag === "blockquote") {
      document.execCommand("formatBlock", false, "<blockquote>");
    } else {
      // Genuine Semantic H1 - H6
      document.execCommand("formatBlock", false, `<${tag}>`);
    }

    setCurrentBlockType(tag);
    handleEditorInput();
  };

  // Link Handling
  const openLinkModal = () => {
    saveCurrentSelection();
    if (typeof window !== "undefined") {
      const sel = window.getSelection();
      setLinkText(sel ? sel.toString() : "");
    }
    setLinkUrl("");
    setLinkModalOpen(true);
  };

  const applyLink = () => {
    if (!linkUrl.trim()) {
      setLinkModalOpen(false);
      return;
    }
    restoreSelection();
    let finalUrl = linkUrl.trim();
    if (!/^https?:\/\//i.test(finalUrl) && !finalUrl.startsWith("/")) {
      finalUrl = `https://${finalUrl}`;
    }

    if (linkText && savedSelection && savedSelection.collapsed) {
      const linkHtml = `<a href="${finalUrl}" target="_blank" rel="noopener noreferrer" class="text-[#FF5E3A] underline hover:text-[#FF7A45] transition-colors">${linkText}</a>`;
      document.execCommand("insertHTML", false, linkHtml);
    } else {
      document.execCommand("createLink", false, finalUrl);
      // Ensure target="_blank" on newly added link
      if (editorRef.current) {
        const links = editorRef.current.querySelectorAll("a");
        links.forEach((a) => {
          if (a.getAttribute("href") === finalUrl) {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer");
            a.classList.add("text-[#FF5E3A]", "underline", "hover:text-[#FF7A45]");
          }
        });
      }
    }

    setLinkModalOpen(false);
    setLinkUrl("");
    setLinkText("");
    handleEditorInput();
  };

  // Image Upload and Insertion with Alt Text
  const openImageModal = () => {
    saveCurrentSelection();
    setImageUrl("");
    setImageAlt("");
    setImageUploadError(null);
    setImageModalOpen(true);
  };

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (e.g., max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setImageUploadError("Image size exceeds 10MB limit.");
      return;
    }

    setIsUploadingImage(true);
    setImageUploadError(null);
    try {
      const res = await api.uploads.uploadImage(file);
      if (res.success && res.data?.url) {
        setImageUrl(res.data.url);
        if (!imageAlt) {
          setImageAlt(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
        }
      } else {
        setImageUploadError(res.message || "Failed to upload image.");
      }
    } catch (err: any) {
      setImageUploadError(err?.message || "Error uploading image to server.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  const insertImageIntoEditor = () => {
    if (!imageUrl.trim()) return;
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }

    const cleanAlt = imageAlt.trim().replace(/"/g, "&quot;") || "Blog article visual illustration";
    const cleanUrl = imageUrl.trim();

    // Semantic HTML structure with image, alt text attribute, and caption
    const imageHtml = `
      <figure class="my-6 rounded-2xl overflow-hidden border border-white/15 bg-[#0A0F1D] p-3 text-center">
        <img src="${cleanUrl}" alt="${cleanAlt}" class="rounded-xl w-full max-h-[480px] object-cover mx-auto" />
        <figcaption class="mt-2 text-xs text-slate-400 font-medium italic">${cleanAlt}</figcaption>
      </figure>
      <p><br></p>
    `;

    document.execCommand("insertHTML", false, imageHtml);
    setImageModalOpen(false);
    setImageUrl("");
    setImageAlt("");
    handleEditorInput();
  };

  // Video Insertion (YouTube/Vimeo or Direct Video)
  const openVideoModal = () => {
    saveCurrentSelection();
    setVideoUrl("");
    setVideoUploadError(null);
    setVideoModalOpen(true);
  };

  const handleVideoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setVideoUploadError("Video size exceeds 50MB limit.");
      return;
    }

    setIsUploadingVideo(true);
    setVideoUploadError(null);
    try {
      const res = await api.uploads.uploadVideo(file);
      if (res.success && res.data?.url) {
        setVideoUrl(res.data.url);
      } else {
        setVideoUploadError(res.message || "Failed to upload video.");
      }
    } catch (err: any) {
      setVideoUploadError(err?.message || "Error uploading video to server.");
    } finally {
      setIsUploadingVideo(false);
    }
  };

  const insertVideoIntoEditor = () => {
    if (!videoUrl.trim()) return;
    restoreSelection();
    if (editorRef.current) {
      editorRef.current.focus();
    }

    let videoHtml = "";
    const url = videoUrl.trim();

    // YouTube check
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      videoHtml = `
        <div class="my-6 aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black shadow-lg">
          <iframe src="https://www.youtube.com/embed/${ytMatch[1]}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p><br></p>
      `;
    } else if (url.includes("vimeo.com/")) {
      const vimeoId = url.split("vimeo.com/")[1]?.split(/[?#]/)[0];
      videoHtml = `
        <div class="my-6 aspect-video rounded-2xl overflow-hidden border border-white/15 bg-black shadow-lg">
          <iframe src="https://player.vimeo.com/video/${vimeoId}" class="w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p><br></p>
      `;
    } else {
      // Direct MP4 / WebM video file
      videoHtml = `
        <div class="my-6 rounded-2xl overflow-hidden border border-white/15 bg-black">
          <video controls src="${url}" class="w-full max-h-[480px] rounded-xl"></video>
        </div>
        <p><br></p>
      `;
    }

    document.execCommand("insertHTML", false, videoHtml);
    setVideoModalOpen(false);
    setVideoUrl("");
    handleEditorInput();
  };

  return (
    <div
      className={`flex flex-col rounded-2xl bg-[#0F172A] border border-white/15 transition-all overflow-hidden ${
        isFullscreen ? "fixed inset-4 z-50 shadow-2xl bg-[#0F172A]" : "relative"
      }`}
    >
      {/* 1. TOP FORMATTING TOOLBAR */}
      <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-[#0A0F1D]/80 border-b border-white/10 backdrop-blur-md sticky top-0 z-20">
        {/* Semantic Heading Dropdown */}
        <div className="flex items-center">
          <select
            value={currentBlockType}
            onChange={(e) => handleHeadingChange(e.target.value)}
            disabled={isSourceMode}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#111827] text-slate-200 border border-white/15 hover:border-[#FF5E3A] focus:border-[#FF5E3A] focus:outline-none cursor-pointer disabled:opacity-40"
            title="Semantic Headings (H1 to H6 & Paragraph)"
          >
            <option value="p">Paragraph (Normal)</option>
            <option value="h1">Heading 1 (H1)</option>
            <option value="h2">Heading 2 (H2)</option>
            <option value="h3">Heading 3 (H3)</option>
            <option value="h4">Heading 4 (H4)</option>
            <option value="h5">Heading 5 (H5)</option>
            <option value="h6">Heading 6 (H6)</option>
            <option value="blockquote">Blockquote (Quote)</option>
          </select>
        </div>

        <div className="h-5 w-[1px] bg-white/10 mx-1 hidden sm:block" />

        {/* Inline Formatting: Bold, Italic, Underline */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => execFormat("bold")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Bold (Ctrl+B)"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => execFormat("italic")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Italic (Ctrl+I)"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => execFormat("underline")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Underline (Ctrl+U)"
          >
            <Underline className="h-4 w-4" />
          </button>
        </div>

        <div className="h-5 w-[1px] bg-white/10 mx-1" />

        {/* Lists & Blockquote */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => execFormat("insertUnorderedList")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Bullet List (Unordered)"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => execFormat("insertOrderedList")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Numbered List (Ordered)"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => handleHeadingChange("blockquote")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Quote Block"
          >
            <Quote className="h-4 w-4" />
          </button>
        </div>

        <div className="h-5 w-[1px] bg-white/10 mx-1" />

        {/* Media: Link, Image with Alt Text, Video */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={openLinkModal}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-[#FF5E3A] hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Insert Link"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openImageModal}
            disabled={isSourceMode}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold text-slate-300 hover:text-[#FF5E3A] hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Insert Image (Upload or URL with Alt Text)"
          >
            <ImageIcon className="h-4 w-4 text-[#FF5E3A]" />
            <span className="hidden md:inline text-[11px]">Image & Alt</span>
          </button>
          <button
            type="button"
            onClick={openVideoModal}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-300 hover:text-[#FF5E3A] hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Insert Video (YouTube, Vimeo or MP4)"
          >
            <VideoIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="h-5 w-[1px] bg-white/10 mx-1" />

        {/* Utilities: Clear formatting, Undo, Redo */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => execFormat("removeFormat")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Clear Formatting"
          >
            <RemoveFormatting className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => execFormat("undo")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Undo (Ctrl+Z)"
          >
            <Undo className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => execFormat("redo")}
            disabled={isSourceMode}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-40 transition-colors"
            title="Redo (Ctrl+Y)"
          >
            <Redo className="h-4 w-4" />
          </button>
        </div>

        {/* Right side mode toggles: Source Code & Fullscreen */}
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleSourceMode}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isSourceMode
                ? "bg-[#FF5E3A] text-white"
                : "bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/10"
            }`}
            title="Toggle HTML Source Code View"
          >
            <Code className="h-3.5 w-3.5" />
            <span className="text-[11px]">{isSourceMode ? "Visual Editor" : "HTML Source"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Editor"}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* 2. EDITOR CANVAS AREA */}
      <div className="relative flex-1 bg-[#0A0F1D]/40 p-4 sm:p-6 overflow-y-auto" style={{ minHeight }}>
        {isSourceMode ? (
          <textarea
            value={sourceCode}
            onChange={handleSourceChange}
            placeholder="<div>Enter raw semantic HTML here...</div>"
            className="w-full h-full min-h-[420px] bg-[#070A14] text-emerald-300 font-mono text-xs p-4 rounded-xl border border-white/10 focus:border-[#FF5E3A] focus:outline-none resize-y leading-relaxed"
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleEditorInput}
            onKeyUp={detectCurrentBlock}
            onMouseUp={detectCurrentBlock}
            data-placeholder={placeholder}
            className="outline-none focus:outline-none text-[#FAF6F0] text-sm sm:text-base leading-relaxed prose prose-invert max-w-none min-h-[420px] 
              [&>h1]:text-3xl [&>h1]:font-black [&>h1]:text-[#FAF6F0] [&>h1]:tracking-tight [&>h1]:mt-6 [&>h1]:mb-3
              [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-[#FAF6F0] [&>h2]:tracking-tight [&>h2]:mt-5 [&>h2]:mb-2.5
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#FAF6F0] [&>h3]:mt-4 [&>h3]:mb-2
              [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-[#FAF6F0] [&>h4]:mt-3 [&>h4]:mb-1.5
              [&>h5]:text-base [&>h5]:font-bold [&>h5]:text-slate-200 [&>h5]:mt-3 [&>h5]:mb-1
              [&>h6]:text-sm [&>h6]:font-bold [&>h6]:text-slate-300 [&>h6]:mt-2 [&>h6]:mb-1
              [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-4
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#FF5E3A] [&>blockquote]:pl-4 [&>blockquote]:py-1.5 [&>blockquote]:italic [&>blockquote]:text-slate-300 [&>blockquote]:my-4 [&>blockquote]:bg-white/[0.02] [&>blockquote]:rounded-r-xl
              [&>ul]:list-disc [&>ul]:list-outside [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:my-4 [&>ul]:text-slate-300
              [&>ol]:list-decimal [&>ol]:list-outside [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:my-4 [&>ol]:text-slate-300
              [&>a]:text-[#FF5E3A] [&>a]:underline [&>a]:font-medium
              [&>figure]:my-6 [&>figure]:rounded-2xl [&>figure]:border [&>figure]:border-white/15 [&>figure]:bg-[#0A0F1D] [&>figure]:p-3
              [&_img]:rounded-xl [&_img]:max-w-full [&_img]:mx-auto [&_img]:border [&_img]:border-white/10
              empty:before:content-[attr(data-placeholder)] empty:before:text-slate-500 empty:before:pointer-events-none"
          />
        )}
      </div>

      {/* 3. EDITOR FOOTER STATUS BAR */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0A0F1D] border-t border-white/10 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Semantic Rich Engine</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span>{wordCount} words</span>
          <span>{charCount} characters</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500">
            H1-H6 tags &bull; Image Alt preserved &bull; SEO ready
          </span>
        </div>
      </div>

      {/* MODAL 1: INSERT LINK */}
      {linkModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-[#0F172A] border border-white/15 p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h4 className="text-sm font-bold text-[#FAF6F0] flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-[#FF5E3A]" />
                <span>Insert Hyperlink</span>
              </h4>
              <button
                type="button"
                onClick={() => setLinkModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Destination URL *
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://growlinqs.com/services/seo"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Display Anchor Text (Optional)
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="e.g. Read Our SEO Strategy Guide"
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setLinkModalOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={applyLink}
                className="orange-btn px-4 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider"
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: INSERT IMAGE WITH ALT TEXT & UPLOAD */}
      {imageModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-[#0F172A] border border-white/15 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  IMAGE INSERTION ENGINE
                </span>
                <h4 className="text-base font-bold text-[#FAF6F0] mt-0.5 flex items-center gap-2">
                  <ImageIcon className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Insert Content Image & Alt Text</span>
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setImageModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {imageUploadError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                {imageUploadError}
              </div>
            )}

            {/* Upload Area / Direct File Picker */}
            <div className="space-y-3">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/15 hover:border-[#FF5E3A] rounded-2xl p-5 text-center bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
                {isUploadingImage ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-2">
                    <Loader2 className="h-6 w-6 animate-spin text-[#FF5E3A]" />
                    <span className="text-xs font-bold text-slate-300">Uploading Image to Cloud...</span>
                  </div>
                ) : imageUrl ? (
                  <div className="space-y-2">
                    <div className="relative h-32 w-full rounded-xl overflow-hidden bg-black/50 border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imageUrl} alt="Preview" className="h-full w-full object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-1">
                      <Check className="h-3.5 w-3.5" /> Uploaded successfully. Click to replace.
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2 py-2">
                    <div className="mx-auto h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#FF5E3A] group-hover:scale-110 transition-all">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#FAF6F0]">Click to upload image file</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">PNG, JPG, WEBP, GIF up to 10MB</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Or paste direct Image URL */}
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Or Paste External Image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/... or /images/..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                />
              </div>

              {/* Mandatory Alt Text Input */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FF5E3A]">
                    Image Alt Text (SEO Crucial) *
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">Preserved in Content</span>
                </div>
                <input
                  type="text"
                  required
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Enter descriptive image alt text for SEO and screen readers..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] placeholder-slate-500 focus:border-[#FF5E3A] focus:outline-none font-medium"
                />
                <p className="text-[10px] text-slate-400">
                  Accurate alt text boosts search engine rankings and ensures accessibility compliance.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setImageModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!imageUrl.trim() || isUploadingImage}
                onClick={insertImageIntoEditor}
                className="orange-btn inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider disabled:opacity-50"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Insert Into Content</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: INSERT VIDEO */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-[#0F172A] border border-white/15 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF5E3A] block">
                  VIDEO EMBED ENGINE
                </span>
                <h4 className="text-base font-bold text-[#FAF6F0] mt-0.5 flex items-center gap-2">
                  <VideoIcon className="h-4 w-4 text-[#FF5E3A]" />
                  <span>Insert Video in Blog</span>
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {videoUploadError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                {videoUploadError}
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  YouTube / Vimeo URL or Direct Video Link *
                </label>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-xs text-[#FAF6F0] focus:border-[#FF5E3A] focus:outline-none"
                  autoFocus
                />
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-slate-500">OR UPLOAD VIDEO FILE</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              <div
                onClick={() => videoFileInputRef.current?.click()}
                className="border border-dashed border-white/15 hover:border-[#FF5E3A] rounded-xl p-4 text-center bg-white/[0.02] cursor-pointer"
              >
                <input
                  ref={videoFileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoFileChange}
                  className="hidden"
                />
                {isUploadingVideo ? (
                  <div className="flex items-center justify-center gap-2 py-1">
                    <Loader2 className="h-5 w-5 animate-spin text-[#FF5E3A]" />
                    <span className="text-xs text-slate-300 font-bold">Uploading Video file...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                    <Upload className="h-4 w-4 text-[#FF5E3A]" />
                    <span>Click to upload MP4/WebM video (up to 50MB)</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!videoUrl.trim() || isUploadingVideo}
                onClick={insertVideoIntoEditor}
                className="orange-btn px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider disabled:opacity-50"
              >
                Embed Video
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
