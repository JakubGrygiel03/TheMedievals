"use server";

import { createHash } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "medievals_admin";

function tokenFromPassword(password: string) {
  return createHash("sha256").update(`medievals-admin:${password}`).digest("hex");
}

export async function loginAdmin(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    redirect("/admin/login?error=1");
  }

  const store = await cookies();
  store.set(COOKIE, tokenFromPassword(expected), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  redirect("/admin/dashboard");
}

export async function logoutAdmin() {
  const store = await cookies();
  store.delete(COOKIE);
  redirect("/admin/login");
}

export async function isAdminAuthenticated() {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return false;
  }

  const store = await cookies();
  return store.get(COOKIE)?.value === tokenFromPassword(expected);
}
