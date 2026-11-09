"use server";

import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_MS,
  isAdminSessionTokenValid,
  isWeakAdminPassword,
  signAdminSession,
} from "@/lib/admin-session";
import { assertNoUploadedFiles } from "@/lib/media";
import { clientKey, rateLimit } from "@/lib/security/rate-limit";

function passwordMatches(given: string, expected: string) {
  const left = createHash("sha256").update(given).digest();
  const right = createHash("sha256").update(expected).digest();
  const hashOk = timingSafeEqual(left, right);
  const lengthOk = given.length === expected.length;
  return hashOk && lengthOk;
}

export async function loginAdmin(formData: FormData) {
  try {
    assertNoUploadedFiles(formData);
  } catch {
    redirect("/admin/login?error=1");
  }

  const gate = rateLimit(await clientKey("admin-login"), 5, 15 * 60 * 1000);
  if (!gate.ok) {
    redirect("/admin/login?error=1");
  }

  const password = String(formData.get("password") ?? "").slice(0, 200);
  const expected = process.env.ADMIN_PASSWORD;

  if (
    !expected ||
    (process.env.NODE_ENV === "production" && isWeakAdminPassword(expected)) ||
    !passwordMatches(password, expected)
  ) {
    redirect("/admin/login?error=1");
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, signAdminSession(Date.now() + ADMIN_SESSION_MS), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: ADMIN_SESSION_MS / 1000,
  });

  redirect("/admin/dashboard");
}

export async function logoutAdmin() {
  const store = await cookies();
  store.delete({ name: ADMIN_COOKIE, path: "/admin" });
  redirect("/admin/login");
}

export async function isAdminAuthenticated() {
  if (!process.env.ADMIN_PASSWORD) return false;
  if (
    process.env.NODE_ENV === "production" &&
    isWeakAdminPassword(process.env.ADMIN_PASSWORD)
  ) {
    return false;
  }
  const store = await cookies();
  return isAdminSessionTokenValid(store.get(ADMIN_COOKIE)?.value);
}
