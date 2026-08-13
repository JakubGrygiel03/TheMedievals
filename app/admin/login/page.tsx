import { loginAdmin } from "@/app/actions/admin-auth";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto max-w-md px-4 py-24">
      <h1 className="font-cinzel text-3xl">Scriptorium</h1>
      <p className="mt-3 text-lg">Wejście do księgi zapytań organizatorów.</p>
      {error ? (
        <p className="mt-4 text-vermilion">Hasło nie pasuje do pieczęci.</p>
      ) : null}
      <form action={loginAdmin} className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-2 font-cinzel text-sm">
          Hasło
          <input
            type="password"
            name="password"
            required
            className="border-2 border-ink bg-parchment px-3 py-2 font-body text-base"
          />
        </label>
        <button
          type="submit"
          className="border-2 border-ink bg-vermilion px-6 py-3 font-cinzel text-parchment"
        >
          Otwórz księgę
        </button>
      </form>
    </main>
  );
}
