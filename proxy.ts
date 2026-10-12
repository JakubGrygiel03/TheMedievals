import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { CANONICAL_HOST } from "@/lib/seo/site";

const PUBLIC_FILE = /\.[^/]+$/;

/** Absolute https://www… URL — Google follows these more reliably than relative Location. */
function canonicalUrl(pathname: string, search = "") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(`https://${CANONICAL_HOST}${path}${search}`);
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  // One host only — matches Vercel redirect and sitemap / canonical URLs.
  if (host === "themedievals.pl") {
    return NextResponse.redirect(canonicalUrl(pathname, search), 308);
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Prefer /pl over /pl/ (one hop, absolute) — avoids an extra platform slash redirect.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return NextResponse.redirect(
      canonicalUrl(pathname.slice(0, -1), search),
      308,
    );
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // / → /pl (permanent). Absolute Location shortens the chain Google must follow.
  const localized =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(canonicalUrl(localized, search), 308);
}

export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
