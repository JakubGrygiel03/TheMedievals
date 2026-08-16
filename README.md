# The Medievals — oficjalna strona bookingowa zespołu muzyki dawnej

**Live:** [themedievals.pl](https://themedievals.pl) · **Repo:** [github.com/JakubGrygiel03/TheMedievals](https://github.com/JakubGrygiel03/TheMedievals)

Produkcyjny serwis Next.js zastępujący starą stronę WordPress/Elementor. Cel biznesowy: generować zapytania o koncerty (zamki, festiwale, śluby, warsztaty) i wspierać SEO na frazy związane z muzyką dawną — w czterech językach.

---

## W skrócie (dla HR / hiring managera)

| | |
|---|---|
| **Rola** | Solo full-stack — produkt, UI, backend, SEO, deploy |
| **Dla kogo** | Organizatorzy wydarzeń historycznych i kulturalnych (B2B booking) |
| **Stack** | Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, Supabase, Resend, Vercel |
| **i18n** | PL / EN / ES / IT — routing, słowniki, hreflang, lokalne meta i OG |
| **Efekt** | Szybka, indeksowalna strona z formularzem bookingowym, panelem leadów i Schema.org |

---

## Problem → rozwiązanie

**Było:** wolny, trudny w utrzymaniu WordPress; słaba kontrola nad SEO i treścią pod booking.

**Jest:** lekka aplikacja App Router z Server Components, Server Actions i jasnym lejkiem: oferta → materiały dla organizatora → formularz → e-mail + zapis w bazie → podgląd w adminie.

---

## Co zbudowałem (wartość produktowa)

- **Lejek bookingowy** — formularz (React Hook Form + Zod), mail przez Resend, persystencja leadów w Supabase
- **Panel admina** — logowanie, przegląd zapytań (bez indeksacji: `noindex` + `robots` disallow)
- **Oferta i press kit** — formaty występu, rider/plan sceny, notka prasowa, zdjęcie oficjalne do pobrania
- **Treść i media** — skład, program, galeria, embedy Spotify/YouTube
- **SEO techniczne** — `generateMetadata`, Open Graph/Twitter, hreflang + `x-default`, sitemap, JSON-LD (`MusicGroup`, `Offer`, `MusicAlbum`, `MusicEvent`)
- **i18n** — pełne wersje językowe pod ekspansję zagraniczną zespołu
- **UX** — układ „kodeksu”, responsywność, animacje (Framer Motion) z uwzględnieniem `prefers-reduced-motion`

---

## Architektura (dla seniora)

```
Browser
  └─ App Router [lang]
       ├─ RSC (treść, SEO, JSON-LD)
       ├─ Client islands (formularz, nav, motion)
       └─ Server Actions → Resend + Supabase
Admin ─ osobny layout + auth (hasło / sesja)
Cron  ─ keep-alive bazy (free-tier Supabase)
```

**Decyzje, które warto zauważyć:**

1. **RSC by default** — HTML z metadanymi i treścią od razu dla crawlerów; JS tylko tam, gdzie interakcja.
2. **Walidacja na granicy** — Zod po stronie klienta i w Server Action (nie ufamy samemu formularzowi).
3. **Mail najpierw, baza potem** — zapytanie bookingowe nie ginie, gdy insert do DB się nie uda (log błędu, UX „wysłane”).
4. **i18n w kodzie** — typowane słowniki TypeScript zamiast ciężkiego CMS; spójne klucze, łatwy code review treści.
5. **SEO jako feature** — nie „dopisek na końcu”: locale OG, kanoniczne URL-e, structured data pod bogate wyniki.

---

## Stack techniczny

| Warstwa | Narzędzia |
|--------|-----------|
| Framework | Next.js 16, React 19, TypeScript |
| UI | Tailwind CSS 4, custom CSS (motyw pergaminu), Framer Motion |
| Dane | Supabase (PostgreSQL), Server Actions |
| E-mail | Resend |
| Deploy | Vercel (hosting, cron, env) |
| Jakość | ESLint (eslint-config-next), typowany kontrakt i18n |

---

## Uruchomienie lokalne

```bash
cd the-medievals-app
cp .env.example .env.local   # uzupełnij klucze
npm install
npm run dev
```

Wymagane zmienne (patrz `.env.example`): `NEXT_PUBLIC_SITE_URL`, Supabase, Resend, sekret crona / admina.

```bash
npm run build   # produkcyjny build
```

---

## Struktura (skrót)

```
app/[lang]/          # strony publiczne + metadata
app/admin/           # panel leadów
app/actions/         # Server Actions (kontakt, auth, tracking)
components/          # UI sekcji + SEO (JSON-LD)
lib/i18n/            # słowniki PL/EN/ES/IT
lib/seo/             # site config, hreflang, social metadata
supabase/            # schema SQL
```

---

## Co pokazuje ten projekt w portfolio

- Umiejętność dowożenia **produkcyjnego** produktu end-to-end, nie tylko UI
- Świadomość **SEO i Core Web Vitals** w App Routerze
- Czysty podział **serwer / klient**, walidacja i integracje zewnętrzne
- Myślenie o **biznesie klienta** (booking, materiały organizatora, wielojęzyczność)

---

## Autor

**Jakub Grygiel** — full-stack / frontend z naciskiem na Next.js i SEO.

Kontakt: przez profil GitHub lub e-mail podany w CV.
