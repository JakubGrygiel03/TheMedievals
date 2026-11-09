import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "medievals_admin";
export const ADMIN_SESSION_MS = 8 * 60 * 60 * 1000;

export function adminSessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD ||
    ""
  );
}

export function signAdminSession(expiresAt: number) {
  const payload = String(expiresAt);
  const sig = createHmac("sha256", adminSessionSecret())
    .update(payload)
    .digest("hex");
  return `${payload}.${sig}`;
}

export function isAdminSessionTokenValid(token: string | undefined) {
  const secret = adminSessionSecret();
  if (!token || !secret || !process.env.ADMIN_PASSWORD) return false;

  const dot = token.indexOf(".");
  if (dot < 1) return false;

  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  const left = Buffer.from(sig);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  if (!timingSafeEqual(left, right)) return false;

  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && Date.now() < expiresAt;
}

/** Optional IP allowlist: comma-separated list in ADMIN_ALLOWED_IPS. Empty = all IPs. */
export function isAdminIpAllowed(ip: string | null | undefined) {
  const raw = process.env.ADMIN_ALLOWED_IPS?.trim();
  if (!raw) return true;
  const allowed = raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (allowed.length === 0) return true;
  if (!ip || ip === "unknown") return false;
  return allowed.includes(ip);
}

export function requestClientIp(request: {
  headers: { get(name: string): string | null };
}) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

export function isWeakAdminPassword(password: string | undefined) {
  if (!password) return true;
  const weak = new Set([
    "change-me",
    "password",
    "admin",
    "123456",
    "medievals",
    "themedievals",
  ]);
  return weak.has(password.toLowerCase()) || password.length < 10;
}
