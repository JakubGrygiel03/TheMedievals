import { loginAdmin } from "@/app/actions/admin-auth";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto max-w-md px-5 py-24">
      <p className="font-cinzel text-xs tracking-[0.18em] text-vermilion uppercase">
        The Medievals
      </p>
      <h1 className="mt-2 font-cinzel text-3xl">Scriptorium</h1>
      <p className="mt-3 text-[var(--ink-soft)]">
        Wejście do księgi zapytań, telefonów i prowizji.
      </p>
      {error ? (
        <p className="mt-4 text-sm text-vermilion">Hasło nie pasuje.</p>
      ) : null}
      <form action={loginAdmin} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 font-cinzel text-xs tracking-wide">
          Hasło
          <input
            type="password"
            name="password"
            required
            className="folio-input"
          />
        </label>
        <button type="submit" className="codex-btn codex-btn-primary">
          Otwórz księgę
        </button>
      </form>
    </main>
  );
}
