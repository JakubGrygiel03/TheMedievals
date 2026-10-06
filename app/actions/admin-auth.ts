"use server";

import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { assertNoUploadedFiles } from "@/lib/media";
import { clientKey, rateLimit } from "@/lib/security/rate-limit";

const COOKIE = "medievals_admin";
const SESSION_MS = 8 * 60 * 60 * 1000;

function sessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD ||
    ""
  );
}

function signSession(expiresAt: number) {
  const payload = String(expiresAt);
  const sig = createHmac("sha256", sessionSecret()).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

function sessionIsValid(token: string | undefined) {
  if (!token || !sessionSecret()) return false;
  const dot = token.indexOf(".");
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac("sha256", sessionSecret()).update(payload).digest("hex");
  const left = Buffer.from(sig);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  if (!timingSafeEqual(left, right)) return false;
  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}

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

  if (!expected || !passwordMatches(password, expected)) {
    redirect("/admin/login?error=1");
  }

  const store = await cookies();
  store.set(COOKIE, signSession(Date.now() + SESSION_MS), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: SESSION_MS / 1000,
  });

  redirect("/admin/dashboard");
}

export async function logoutAdmin() {
  const store = await cookies();
  store.delete({ name: COOKIE, path: "/admin" });
  redirect("/admin/login");
}

export async function isAdminAuthenticated() {
  if (!process.env.ADMIN_PASSWORD) return false;
  const store = await cookies();
  return sessionIsValid(store.get(COOKIE)?.value);
}
