import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const subtitle = isLocale(lang)
    ? {
        pl: "Zespół Muzyki Dawnej",
        en: "Early Music Ensemble",
        es: "Ensemble de música antigua",
        it: "Ensemble di musica antica",
      }[lang]
    : "Early Music Ensemble";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3e5ab",
          color: "#2c1810",
          border: "24px solid #fbbf24",
        }}
      >
        <div style={{ fontSize: 72, letterSpacing: 2 }}>The Medievals</div>
        <div style={{ marginTop: 16, fontSize: 32, color: "#1e3a8a" }}>
          {subtitle}
        </div>
      </div>
    ),
    size,
  );
}
