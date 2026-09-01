import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, MedievalSharp } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { BookMargins } from "@/components/book-margins";
import { HeraldicVeil } from "@/components/heraldic-veil";
import { CodexHeader } from "@/components/codex-header";
import { CodexFooter } from "@/components/codex-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPublishedConcerts } from "@/lib/concerts";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales } from "@/lib/i18n/config";
import { hreflangMap, socialMetadata } from "@/lib/seo/metadata";
import { localePath, siteConfig } from "@/lib/seo/site";

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

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dictionary.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords.split(", "),
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: "/brand-logo.png", type: "image/png" }],
      apple: [{ url: "/brand-logo.png", type: "image/png" }],
    },
    alternates: {
      canonical: localePath(lang),
      languages: hreflangMap(),
    },
    ...socialMetadata({
      lang,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    }),
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const concerts = await getPublishedConcerts();

  return (
    <html lang={lang} className={`${cinzel.variable} ${cormorant.variable} ${medievalSharp.variable} h-full`}>
      <body className="book-folio min-h-full antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{if(localStorage.getItem("medievals-theme")==="day")document.documentElement.setAttribute("data-theme","day")}catch(e){}})();',
          }}
        />
        <Script src="/desktop-viewport.js" strategy="beforeInteractive" />
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:left-[max(1rem,calc(var(--book-margin)+1rem))] focus:top-4 focus:z-50 focus:bg-vermilion focus:px-3 focus:py-2 focus:text-[var(--on-accent)]"
        >
          {dictionary.a11y.skipToContent}
        </a>
        <BookMargins />
        <HeraldicVeil />
        <JsonLd lang={lang} dictionary={dictionary} concerts={concerts} />
        <CodexHeader lang={lang} dictionary={dictionary} />
        {children}
        <CodexFooter lang={lang} dictionary={dictionary} />
      </body>
    </html>
  );
}
