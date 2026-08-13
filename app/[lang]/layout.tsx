import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, MedievalSharp } from "next/font/google";
import { notFound } from "next/navigation";
import { BookMargins } from "@/components/book-margins";
import { CodexHeader } from "@/components/codex-header";
import { CodexFooter } from "@/components/codex-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedConcerts } from "@/lib/concerts";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localePath, siteConfig } from "@/lib/seo/site";
import { desktopViewportScript } from "@/lib/desktop-viewport-script";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const medievalSharp = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gothic",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale)]),
  ) as Record<Locale, string>;

  return {
    metadataBase: new URL(siteConfig.url),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords.split(", "),
    robots: { index: true, follow: true },
    alternates: {
      canonical: localePath(lang),
      languages: { ...languages, "x-default": localePath("pl") },
    },
    openGraph: {
      type: "website",
      locale: lang,
      url: localePath(lang),
      siteName: siteConfig.name,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: dictionary.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const concerts = await getPublishedConcerts();

  return (
    <html lang={lang} className={`${cinzel.variable} ${cormorant.variable} ${medievalSharp.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: desktopViewportScript }} />
      </head>
      <body className="book-folio min-h-full antialiased">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:left-[max(1rem,calc(var(--book-margin)+1rem))] focus:top-4 focus:z-50 focus:bg-vermilion focus:px-3 focus:py-2 focus:text-white"
        >
          {dictionary.a11y.skipToContent}
        </a>
        <BookMargins />
        <JsonLd lang={lang} concerts={concerts} />
        <CodexHeader lang={lang} dictionary={dictionary} />
        {children}
        <CodexFooter dictionary={dictionary} />
      </body>
    </html>
  );
}
