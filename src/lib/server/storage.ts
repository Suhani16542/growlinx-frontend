import fs from "fs";
import path from "path";
import { BlogPostItem, EnquiryItem, BlogCategoryItem, AdminStats, EnquiryStatus } from "@/types";
import { blogData, blogCategories } from "@/data/blog";

// File storage paths inside data/storage
const STORAGE_DIR = path.join(process.cwd(), "src", "data", "storage");
const BLOGS_FILE = path.join(STORAGE_DIR, "blogs.json");
const CATEGORIES_FILE = path.join(STORAGE_DIR, "categories.json");
const ENQUIRIES_FILE = path.join(STORAGE_DIR, "enquiries.json");
const SETTINGS_FILE = path.join(STORAGE_DIR, "settings.json");

export interface ExtendedBlogPost extends BlogPostItem {
  status: "published" | "draft";
  seoTitle?: string;
  seoDescription?: string;
  updatedAt?: string;
}

// Initial seed enquiries
const initialEnquiries: EnquiryItem[] = [
  {
    id: "enq-1",
    name: "Jonathan Vance",
    email: "j.vance@apexcloud.io",
    phone: "+1 (415) 892-3401",
    company: "ApexCloud SaaS",
    service: "SEO Services",
    budget: "$5,000 – $10,000 / month",
    message: "We need an advanced technical SEO audit and topical authority architecture to compete with legacy players in our AI infrastructure niche.",
    status: "New",
    isRead: false,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: "High potential enterprise lead. Needs CAPI integration and keyword gap audit.",
  },
  {
    id: "enq-2",
    name: "Marcus Holloway",
    email: "marcus@luminafashion.com",
    phone: "+1 (212) 555-0199",
    company: "Lumina Direct E-Commerce",
    service: "Paid Advertising & Media",
    budget: "$10,000+ / month (Enterprise)",
    message: "Currently spending $40k/mo on Meta ads with declining ROAS (1.8X). Looking for creative sprints and server-side tracking to get back to 4.0X+.",
    status: "In Progress",
    isRead: true,
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    notes: "Call scheduled for Thursday 2 PM EST.",
  },
  {
    id: "enq-3",
    name: "Elena Rostova",
    email: "elena@novafintech.app",
    phone: "+44 20 7946 0912",
    company: "Nova Wallet Mobile",
    service: "App Marketing & Acquisition",
    budget: "$5,000 – $10,000 / month",
    message: "Looking for Apple Search Ads optimization and custom product pages to lower our current $6.50 CPI on iOS.",
    status: "Contacted",
    isRead: true,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    notes: "Sent introductory proposal deck and audit questionnaire.",
  },
  {
    id: "enq-4",
    name: "Harrison Forde",
    email: "harrison@lumendigital.co",
    phone: "+1 (310) 802-9911",
    company: "Lumen Skincare",
    service: "Influencer Management",
    budget: "$3,000 – $5,000 / month",
    message: "Need 15-20 vetted creator partnerships with whitelisted dark posting for our Q4 product rollout.",
    status: "Converted",
    isRead: true,
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    notes: "Closed 3-month retainer. Onboarding kick-off call completed.",
  },
];

function ensureStorage() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }

  // Seed blogs if not exists
  if (!fs.existsSync(BLOGS_FILE)) {
    const initialBlogs: ExtendedBlogPost[] = blogData.map((b) => ({
      ...b,
      status: "published" as const,
      seoTitle: `${b.title} | Growlinqs Growth Insights`,
      seoDescription: b.excerpt,
      updatedAt: b.publishedAt,
    }));
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(initialBlogs, null, 2), "utf-8");
  }

  // Seed categories if not exists
  if (!fs.existsSync(CATEGORIES_FILE)) {
    const initialCategories: BlogCategoryItem[] = blogCategories
      .filter((c) => c !== "All")
      .map((c, i) => ({
        id: `cat-${i + 1}`,
        name: c,
        slug: c.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        description: `Articles, tactical playbooks and growth breakdowns focused on ${c}.`,
        createdAt: "2026-01-01",
      }));
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(initialCategories, null, 2), "utf-8");
  }

  // Seed enquiries if not exists
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(initialEnquiries, null, 2), "utf-8");
  }

  // Seed settings if not exists
  if (!fs.existsSync(SETTINGS_FILE)) {
    const defaultSettings = {
      agencyName: "Growlinqs Growth Agency",
      contactEmail: "hello@growlinqs.com",
      phone: "+1 (800) 555-GROW",
      emailNotifications: true,
      autoAssignLead: true,
      lastUpdated: new Date().toISOString(),
    };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2), "utf-8");
  }
}

// ==========================================
// BLOG METHODS
// ==========================================
export function getStoredBlogs(): ExtendedBlogPost[] {
  ensureStorage();
  try {
    const content = fs.readFileSync(BLOGS_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export function getStoredBlogById(idOrSlug: string): ExtendedBlogPost | null {
  const blogs = getStoredBlogs();
  return blogs.find((b) => b.id === idOrSlug || b.slug === idOrSlug) || null;
}

export function saveStoredBlog(blogData: Partial<ExtendedBlogPost> & { title: string }): ExtendedBlogPost {
  ensureStorage();
  const blogs = getStoredBlogs();
  const id = blogData.id || `blog-${Date.now()}`;
  const slug =
    blogData.slug ||
    blogData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const existingIdx = blogs.findIndex((b) => b.id === id);

  const newBlog: ExtendedBlogPost = {
    id,
    slug,
    title: blogData.title,
    excerpt: blogData.excerpt || "",
    category: blogData.category || "SEO Strategy",
    readTime: blogData.readTime || "5 min read",
    publishedAt: blogData.publishedAt || new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    author: blogData.author || {
      name: "Growlinqs Team",
      role: "Senior Growth Strategist",
    },
    content: blogData.content || [],
    takeaways: blogData.takeaways || [],
    imageSrc: blogData.imageSrc || "/images/service-seo-dashboard.jpg",
    status: blogData.status || "published",
    seoTitle: blogData.seoTitle || `${blogData.title} | Growlinqs`,
    seoDescription: blogData.seoDescription || blogData.excerpt || "",
    updatedAt: new Date().toISOString(),
  };

  if (existingIdx >= 0) {
    blogs[existingIdx] = { ...blogs[existingIdx], ...newBlog };
  } else {
    blogs.unshift(newBlog);
  }

  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
  return newBlog;
}

export function deleteStoredBlog(id: string): boolean {
  ensureStorage();
  const blogs = getStoredBlogs();
  const filtered = blogs.filter((b) => b.id !== id && b.slug !== id);
  if (filtered.length === blogs.length) return false;
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export function togglePublishStoredBlog(id: string): ExtendedBlogPost | null {
  ensureStorage();
  const blogs = getStoredBlogs();
  const target = blogs.find((b) => b.id === id || b.slug === id);
  if (!target) return null;
  target.status = target.status === "published" ? "draft" : "published";
  target.updatedAt = new Date().toISOString();
  fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
  return target;
}

// ==========================================
// CATEGORY METHODS
// ==========================================
function getRawCategories(): BlogCategoryItem[] {
  ensureStorage();
  try {
    const content = fs.readFileSync(CATEGORIES_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading raw categories:", error);
    return [];
  }
}

export function getStoredCategories(): (BlogCategoryItem & { postCount: number })[] {
  const categories = getRawCategories();
  const blogs = getStoredBlogs();

  return categories.map((cat) => {
    const count = blogs.filter(
      (b) =>
        b.category.toLowerCase() === cat.name.toLowerCase() ||
        b.category.toLowerCase() === cat.slug.toLowerCase()
    ).length;
    return {
      ...cat,
      postCount: count,
    };
  });
}

export function saveStoredCategory(data: { id?: string; name: string; description?: string }): BlogCategoryItem {
  ensureStorage();
  const categories = getRawCategories();
  const id = data.id || `cat-${Date.now()}`;
  const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const existingIdx = categories.findIndex((c) => c.id === id);
  const newCat: BlogCategoryItem = {
    id,
    name: data.name,
    slug,
    description: data.description || "",
    createdAt: new Date().toISOString().split("T")[0],
  };

  if (existingIdx >= 0) {
    categories[existingIdx] = { ...categories[existingIdx], ...newCat };
  } else {
    categories.push(newCat);
  }

  fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2), "utf-8");
  return newCat;
}

export function deleteStoredCategory(id: string): { success: boolean; error?: string } {
  ensureStorage();
  const categories = getRawCategories();
  const target = categories.find((c) => c.id === id);
  if (!target) return { success: false, error: "Category not found" };

  const blogs = getStoredBlogs();
  const postsUsingCategory = blogs.filter(
    (b) => b.category.toLowerCase() === target.name.toLowerCase()
  );

  if (postsUsingCategory.length > 0) {
    return {
      success: false,
      error: `Cannot delete "${target.name}" because ${postsUsingCategory.length} blog post(s) are assigned to it. Please reassign those posts first.`,
    };
  }

  const filtered = categories.filter((c) => c.id !== id);
  fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return { success: true };
}

// ==========================================
// ENQUIRY METHODS
// ==========================================
export function getStoredEnquiries(): EnquiryItem[] {
  ensureStorage();
  try {
    const content = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading enquiries:", error);
    return [];
  }
}

export function createStoredEnquiry(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}): EnquiryItem {
  ensureStorage();
  const enquiries = getStoredEnquiries();
  const newEnquiry: EnquiryItem = {
    id: `enq-${Date.now()}`,
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    company: data.company || "",
    service: data.service || "General Strategy Consultation",
    budget: data.budget || "Flexible",
    message: data.message,
    status: "New",
    isRead: false,
    createdAt: new Date().toISOString(),
  };

  enquiries.unshift(newEnquiry);
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
  return newEnquiry;
}

export function updateStoredEnquiryStatus(
  id: string,
  status: EnquiryStatus,
  notes?: string
): EnquiryItem | null {
  ensureStorage();
  const enquiries = getStoredEnquiries();
  const target = enquiries.find((e) => e.id === id);
  if (!target) return null;

  target.status = status;
  target.isRead = true;
  if (notes !== undefined) {
    target.notes = notes;
  }

  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
  return target;
}

export function toggleStoredEnquiryRead(id: string): EnquiryItem | null {
  ensureStorage();
  const enquiries = getStoredEnquiries();
  const target = enquiries.find((e) => e.id === id);
  if (!target) return null;

  target.isRead = !target.isRead;
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), "utf-8");
  return target;
}

export function deleteStoredEnquiry(id: string): boolean {
  ensureStorage();
  const enquiries = getStoredEnquiries();
  const filtered = enquiries.filter((e) => e.id !== id);
  if (filtered.length === enquiries.length) return false;
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// ==========================================
// ADMIN DASHBOARD STATS
// ==========================================
export function getAdminStats(): AdminStats {
  const blogs = getStoredBlogs();
  const categories = getStoredCategories();
  const enquiries = getStoredEnquiries();

  const published = blogs.filter((b) => b.status === "published").length;
  const drafts = blogs.filter((b) => b.status === "draft").length;
  const newEnq = enquiries.filter((e) => e.status === "New").length;
  const unreadEnq = enquiries.filter((e) => !e.isRead).length;

  return {
    totalBlogs: blogs.length,
    publishedBlogs: published,
    draftBlogs: drafts,
    totalCategories: categories.length,
    newEnquiries: newEnq,
    unreadEnquiries: unreadEnq,
    totalEnquiries: enquiries.length,
  };
}
