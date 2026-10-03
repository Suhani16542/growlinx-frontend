/**
 * Centralized API Client for Growlinqs Frontend
 * Base URL: NEXT_PUBLIC_API_URL or http://localhost:5000/api
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "http://localhost:5000/api";

const TOKEN_KEY = "growlinqs_access_token";
const REFRESH_TOKEN_KEY = "growlinqs_refresh_token";

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any;
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface BackendUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "EDITOR" | "USER" | string;
}

export interface AuthResponseData {
  user: BackendUser;
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
  };
}

export interface BackendCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  postCount?: number;
  _count?: { blogs: number };
  createdAt: string;
  updatedAt: string;
}

export interface BackendBlog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  featuredImage?: string | null;
  status: "DRAFT" | "PUBLISHED";
  publishedAt?: string | null;
  category: BackendCategory | string;
  author: BackendUser | string;
  createdAt: string;
  updatedAt: string;
}

export interface BackendEnquiry {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  website?: string | null;
  service?: string | null;
  budget?: string | null;
  message: string;
  status: "NEW" | "CONTACTED" | "IN_PROGRESS" | "CONVERTED" | "CLOSED" | string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BackendEvent {
  id: string;
  title: string;
  slug: string;
  category?: string | null;
  description: string;
  eventDate: string;
  eventTime?: string | null;
  location: string;
  speaker?: string | null;
  coverImage?: string | null;
  status: "DRAFT" | "PUBLISHED";
  createdAt: string;
  updatedAt: string;
}

export interface BackendGalleryItem {
  id: string;
  title: string;
  description?: string | null;
  image: string;
  category?: string | null;
  sortOrder: number;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface BackendAcademyVideo {
  id: string;
  title: string;
  description?: string | null;
  category?: string | null;
  videoUrl?: string | null;
  videoFileUrl?: string | null;
  thumbnail?: string | null;
  status: "ACTIVE" | "INACTIVE";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface BackendInternship {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  message?: string | null;
  resumeUrl?: string | null;
  resumeFileName?: string | null;
  status: "NEW" | "REVIEWING" | "SHORTLISTED" | "REJECTED" | "HIRED";
  createdAt: string;
  updatedAt: string;
}

// Token Helpers
export const tokenStorage = {
  getAccessToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },
  getRefreshToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setTokens: (accessToken: string, refreshToken?: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(TOKEN_KEY, accessToken);
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
  },
  clearTokens: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

// Generic Fetch Wrapper
async function request<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;
  const token = tokenStorage.getAccessToken();

  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  // If body is not FormData, default to application/json
  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }

  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // Handle 401 Unauthorized token expiry
      if (res.status === 401 && token) {
        tokenStorage.clearTokens();
      }
      return {
        success: false,
        message: data.message || `Request failed with status ${res.status}`,
        errors: data.errors,
      };
    }

    return data;
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to connect to backend server.",
    };
  }
}

// ==========================================
// API CLIENT METHODS
// ==========================================
export const api = {
  // 1. Health
  health: () => request<{ success: boolean; message: string }>("/health"),

  // 2. Auth
  auth: {
    login: async (credentials: { email: string; password: string }) => {
      const res = await request<AuthResponseData>("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      if (res.success && res.data?.tokens?.accessToken) {
        tokenStorage.setTokens(
          res.data.tokens.accessToken,
          res.data.tokens.refreshToken
        );
      }
      return res;
    },
    logout: async () => {
      try {
        await request("/auth/logout", { method: "POST" });
      } finally {
        tokenStorage.clearTokens();
      }
    },
    getMe: async () => {
      return request<BackendUser>("/auth/me");
    },
    refresh: async () => {
      const refreshToken = tokenStorage.getRefreshToken();
      if (!refreshToken) return null;
      const res = await request<{ accessToken: string; refreshToken: string }>(
        "/auth/refresh",
        {
          method: "POST",
          body: JSON.stringify({ refreshToken }),
        }
      );
      if (res.success && res.data?.accessToken) {
        tokenStorage.setTokens(res.data.accessToken, res.data.refreshToken);
      }
      return res;
    },
  },

  // 3. Enquiries / Contact
  enquiries: {
    submitEnquiry: (data: {
      name: string;
      email: string;
      phone?: string;
      company?: string;
      website?: string;
      service?: string;
      budget?: string;
      message: string;
    }) =>
      request<BackendEnquiry>("/enquiries", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    getEnquiries: (params?: {
      page?: number;
      limit?: number;
      search?: string;
      status?: string;
      isRead?: boolean;
    }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.search) query.append("search", params.search);
      if (params?.status && params.status !== "All")
        query.append("status", params.status.toUpperCase().replace(/\s+/g, "_"));
      if (typeof params?.isRead === "boolean")
        query.append("isRead", params.isRead.toString());

      const qs = query.toString();
      return request<{ enquiries: BackendEnquiry[]; meta: any }>(
        `/enquiries${qs ? `?${qs}` : ""}`
      );
    },

    getEnquiryById: (id: string) => request<BackendEnquiry>(`/enquiries/${id}`),

    updateEnquiry: (id: string, data: { status?: string; isRead?: boolean }) =>
      request<BackendEnquiry>(`/enquiries/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteEnquiry: (id: string) =>
      request(`/enquiries/${id}`, {
        method: "DELETE",
      }),
  },

  // 4. Blogs
  blogs: {
    getBlogs: (params?: {
      page?: number;
      limit?: number;
      search?: string;
      category?: string;
    }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.search) query.append("search", params.search);
      if (params?.category && params.category !== "All")
        query.append("category", params.category);

      const qs = query.toString();
      return request<{ blogs: BackendBlog[]; meta: any }>(
        `/blogs${qs ? `?${qs}` : ""}`
      );
    },

    getBlogBySlug: (slug: string) => request<BackendBlog>(`/blogs/${slug}`),

    getAdminBlogs: (params?: {
      page?: number;
      limit?: number;
      search?: string;
      category?: string;
      status?: string;
    }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.search) query.append("search", params.search);
      if (params?.category && params.category !== "All")
        query.append("category", params.category);
      if (params?.status && params.status !== "All")
        query.append("status", params.status);

      const qs = query.toString();
      return request<{ blogs: BackendBlog[]; meta: any }>(
        `/blogs/admin/all${qs ? `?${qs}` : ""}`
      );
    },

    getAdminBlogById: (id: string) =>
      request<BackendBlog>(`/blogs/admin/${id}`),

    createBlog: (data: {
      title: string;
      slug?: string;
      excerpt?: string;
      content: string;
      featuredImage?: string;
      categoryId: string;
      status?: "DRAFT" | "PUBLISHED";
    }) =>
      request<BackendBlog>("/blogs", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateBlog: (
      id: string,
      data: {
        title?: string;
        slug?: string;
        excerpt?: string;
        content?: string;
        featuredImage?: string;
        categoryId?: string;
        status?: "DRAFT" | "PUBLISHED";
      }
    ) =>
      request<BackendBlog>(`/blogs/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteBlog: (id: string) =>
      request(`/blogs/${id}`, {
        method: "DELETE",
      }),
  },

  // 5. Categories
  categories: {
    getCategories: () => request<BackendCategory[]>("/categories"),

    getCategoryBySlug: (slug: string) =>
      request<BackendCategory>(`/categories/${slug}`),

    createCategory: (data: { name: string; slug?: string; description?: string }) =>
      request<BackendCategory>("/categories", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateCategory: (
      id: string,
      data: { name?: string; slug?: string; description?: string }
    ) =>
      request<BackendCategory>(`/categories/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteCategory: (id: string) =>
      request(`/categories/${id}`, {
        method: "DELETE",
      }),
  },

  // 6. Events
  events: {
    getEvents: (params?: { page?: number; limit?: number; search?: string }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.search) query.append("search", params.search);
      const qs = query.toString();
      return request<{ events: BackendEvent[]; meta: any }>(
        `/events${qs ? `?${qs}` : ""}`
      );
    },

    getEventBySlug: (slug: string) => request<BackendEvent>(`/events/${slug}`),

    getAdminEvents: () => request<{ events: BackendEvent[]; meta: any }>("/events/admin/all"),

    createEvent: (data: Partial<BackendEvent>) =>
      request<BackendEvent>("/events", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateEvent: (id: string, data: Partial<BackendEvent>) =>
      request<BackendEvent>(`/events/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteEvent: (id: string) =>
      request(`/events/${id}`, {
        method: "DELETE",
      }),
  },

  // 7. Gallery
  gallery: {
    getGalleryItems: (params?: { page?: number; limit?: number; category?: string }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.category) query.append("category", params.category);
      const qs = query.toString();
      return request<{ items: BackendGalleryItem[]; meta: any }>(
        `/gallery${qs ? `?${qs}` : ""}`
      );
    },

    createGalleryItem: (data: Partial<BackendGalleryItem>) =>
      request<BackendGalleryItem>("/gallery", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateGalleryItem: (id: string, data: Partial<BackendGalleryItem>) =>
      request<BackendGalleryItem>(`/gallery/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteGalleryItem: (id: string) =>
      request(`/gallery/${id}`, {
        method: "DELETE",
      }),
  },

  // 8. Academy Videos
  academyVideos: {
    getAcademyVideos: (params?: { page?: number; limit?: number; category?: string }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.category) query.append("category", params.category);
      const qs = query.toString();
      return request<{ videos: BackendAcademyVideo[]; meta: any }>(
        `/academy-videos${qs ? `?${qs}` : ""}`
      );
    },

    createAcademyVideo: (data: Partial<BackendAcademyVideo>) =>
      request<BackendAcademyVideo>("/academy-videos", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    updateAcademyVideo: (id: string, data: Partial<BackendAcademyVideo>) =>
      request<BackendAcademyVideo>(`/academy-videos/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),

    deleteAcademyVideo: (id: string) =>
      request(`/academy-videos/${id}`, {
        method: "DELETE",
      }),
  },

  // 9. Internships
  internships: {
    submitApplication: (data: {
      name: string;
      email: string;
      phone: string;
      position: string;
      message?: string;
      resumeUrl?: string;
      resumeFileName?: string;
    }) =>
      request<BackendInternship>("/internships", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    getApplications: (params?: {
      page?: number;
      limit?: number;
      search?: string;
      position?: string;
      status?: string;
    }) => {
      const query = new URLSearchParams();
      if (params?.page) query.append("page", params.page.toString());
      if (params?.limit) query.append("limit", params.limit.toString());
      if (params?.search) query.append("search", params.search);
      if (params?.position) query.append("position", params.position);
      if (params?.status) query.append("status", params.status);
      const qs = query.toString();
      return request<{ applications: BackendInternship[]; meta: any }>(
        `/internships${qs ? `?${qs}` : ""}`
      );
    },

    getApplicationById: (id: string) =>
      request<BackendInternship>(`/internships/${id}`),

    updateApplicationStatus: (id: string, status: string) =>
      request<BackendInternship>(`/internships/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }),

    deleteApplication: (id: string) =>
      request(`/internships/${id}`, {
        method: "DELETE",
      }),
  },

  // 10. File Uploads
  uploads: {
    uploadImage: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      return request<{ url: string; publicId?: string; originalName: string }>(
        "/uploads/image",
        {
          method: "POST",
          body: formData,
        }
      );
    },
    uploadVideo: async (file: File) => {
      const formData = new FormData();
      formData.append("video", file);
      return request<{ url: string; publicId?: string; originalName: string }>(
        "/uploads/video",
        {
          method: "POST",
          body: formData,
        }
      );
    },
    uploadDocument: async (file: File) => {
      const formData = new FormData();
      formData.append("document", file);
      return request<{ url: string; publicId?: string; originalName: string }>(
        "/uploads/document",
        {
          method: "POST",
          body: formData,
        }
      );
    },
  },
};

export default api;
