import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pl">
      <body className="flex min-h-full items-center justify-center bg-[#f3e5ab] p-8 text-[#2c1810]">
        <main>
          <h1 className="text-3xl">Karta nie znaleziona</h1>
          <p className="mt-3">Ten folio nie istnieje w kodeksie.</p>
          <Link className="mt-6 inline-block underline" href="/pl">
            Wróć do The Medievals
          </Link>
        </main>
      </body>
    </html>
  );
}
