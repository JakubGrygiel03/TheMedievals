import { redirect } from "next/navigation";
import { isAdminAuthenticated, logoutAdmin } from "@/app/actions/admin-auth";
import { createServiceClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const supabase = createServiceClient();
  const { data: messages } = supabase
    ? await supabase
        .from("contact_messages")
        .select("id, created_at, sender_name, email, event_type, status, message")
        .order("created_at", { ascending: false })
        .limit(50)
    : { data: [] };

  const { data: concerts } = supabase
    ? await supabase
        .from("concerts")
        .select("id, event_name, city, event_date, is_published")
        .order("event_date", { ascending: true })
        .limit(50)
    : { data: [] };

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-cinzel text-3xl">Księga organizatorów</h1>
        <form action={logoutAdmin}>
          <button type="submit" className="font-cinzel text-sm underline">
            Zamknij księgę
          </button>
        </form>
      </div>
      {!supabase ? (
        <p className="mt-6 text-vermilion">
          Uzupełnij zmienne Supabase w pliku .env.local, potem wklej supabase/schema.sql.
        </p>
      ) : null}
      <h2 className="mt-10 font-cinzel text-2xl text-lapis">Zapytania</h2>
      <ul className="mt-4 space-y-4">
        {(messages ?? []).map((item) => (
          <li key={item.id} className="border-2 border-ink p-4">
            <p className="font-cinzel">
              {item.sender_name} · {item.email} · {item.event_type}
            </p>
            <p className="mt-2 text-sm">{item.message}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-cinzel text-2xl text-lapis">Koncerty</h2>
      <ul className="mt-4 space-y-3">
        {(concerts ?? []).map((concert) => (
          <li key={concert.id} className="border-2 border-ink/40 p-3">
            {concert.event_name} · {concert.city} · {concert.event_date}
          </li>
        ))}
      </ul>
    </main>
  );
}
