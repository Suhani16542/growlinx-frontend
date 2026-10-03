import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api, tokenStorage } from "@/lib/api";
import { AdminUser } from "@/types";

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const refreshSession = useCallback(async () => {
    const token = tokenStorage.getAccessToken();
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.auth.getMe();
      if (res.success && res.data) {
        const u = res.data;
        setUser({
          id: u.id,
          name: u.name,
          email: u.email,
          role: (u.role?.toLowerCase() as any) || "admin",
        });
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  // Route protection
  useEffect(() => {
    if (loading) return;

    const isAdminRoute = pathname?.startsWith("/admin");
    const isLoginPage = pathname === "/admin/login";

    if (isAdminRoute && !isLoginPage && !user) {
      router.replace("/admin/login");
    } else if (isLoginPage && user) {
      router.replace("/admin");
    }
  }, [user, loading, pathname, router]);

  const login = async (email: string, pass: string) => {
    try {
      const res = await api.auth.login({ email, password: pass });

      if (!res.success || !res.data?.user) {
        return { success: false, error: res.message || "Login failed. Please check your credentials." };
      }

      const u = res.data.user;
      setUser({
        id: u.id,
        name: u.name,
        email: u.email,
        role: (u.role?.toLowerCase() as any) || "admin",
      });
      router.push("/admin");
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error?.message || "Network error occurred." };
    }
  };

  const logout = async () => {
    try {
      await api.auth.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      router.push("/admin/login");
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
