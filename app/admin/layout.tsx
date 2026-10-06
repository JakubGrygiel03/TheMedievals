import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { media } from "@/lib/media";

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

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: media.favicon, sizes: "48x48" },
      { url: media.icon48, type: "image/png", sizes: "48x48" },
      { url: media.icon, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: media.appleIcon, type: "image/png", sizes: "180x180" }],
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="min-h-full bg-[var(--parchment)] font-body text-[var(--ink)] antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{if(localStorage.getItem("medievals-theme")==="day")document.documentElement.setAttribute("data-theme","day")}catch(e){}})();',
          }}
        />
        {children}
      </body>
    </html>
  );
}
