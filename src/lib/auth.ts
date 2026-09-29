import { cookies } from "next/headers";
import { AdminUser } from "@/types";

const AUTH_COOKIE_NAME = "growlinx_admin_token";
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@growlinx.com";
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin@growlinx2026";
const AUTH_SECRET = process.env.ADMIN_AUTH_SECRET || "growlinx_super_secret_auth_key_2026";

// Simple signature-based token for zero-dependency secure session
export function createSessionToken(user: AdminUser): string {
  const payload = {
    ...user,
    timestamp: Date.now(),
    expiresAt: Date.now() + 86400000 * 7, // 7 days
  };
  const json = JSON.stringify(payload);
  const base64 = Buffer.from(json).toString("base64url");
  // Simple checksum signature
  const signature = Buffer.from(`${base64}.${AUTH_SECRET}`).toString("base64url").slice(0, 32);
  return `${base64}.${signature}`;
}

export function verifySessionToken(token: string): AdminUser | null {
  try {
    const [base64, signature] = token.split(".");
    if (!base64 || !signature) return null;

    const expectedSig = Buffer.from(`${base64}.${AUTH_SECRET}`).toString("base64url").slice(0, 32);
    if (signature !== expectedSig) return null;

    const json = Buffer.from(base64, "base64url").toString("utf-8");
    const payload = JSON.parse(json);

    if (payload.expiresAt && Date.now() > payload.expiresAt) {
      return null;
    }

    return {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      role: payload.role || "admin",
    };
  } catch (error) {
    return null;
  }
}

export function validateCredentials(email: string, pass: string): AdminUser | null {
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPass = pass.trim();

  const validEmail = DEFAULT_ADMIN_EMAIL.toLowerCase();
  const validPass = DEFAULT_ADMIN_PASSWORD;

  if (trimmedEmail === validEmail && trimmedPass === validPass) {
    return {
      id: "admin-1",
      name: "Growlinx Administrator",
      email: validEmail,
      role: "admin",
    };
  }

  return null;
}

export async function getCurrentAdminUser(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export const AUTH_COOKIE = {
  name: AUTH_COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 86400 * 7, // 7 days
    path: "/",
  },
};
