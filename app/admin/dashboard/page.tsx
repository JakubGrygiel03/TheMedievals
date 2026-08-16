import { updateLead } from "@/app/actions/admin-leads";
import { isAdminAuthenticated, logoutAdmin } from "@/app/actions/admin-auth";
import { eventLabels, statusOptions } from "@/lib/admin-labels";
import { createServiceClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

function formatWhen(value: string | null | undefined) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

type Lead = {
  id: string;
  created_at: string;
  sender_name: string;
  email: string;
  phone: string | null;
  event_type: string;
  event_date: string | null;
  location: string | null;
  message: string;
  status: string | null;
  notes: string | null;
};

type PhoneRevealRow = {
  id: string;
  created_at: string;
  requester_name: string;
  requester_email: string;
  organization: string | null;
  page: string | null;
};

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const supabase = createServiceClient();
  const messagesRes = supabase
    ? await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200)
    : { data: [] as Lead[], error: null };

  const phoneRes = supabase
    ? await supabase
        .from("phone_requests")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200)
    : { data: [] as PhoneRevealRow[], error: null };

  const leads = (messagesRes.data ?? []) as Lead[];
  const reveals = (phoneRes.data ?? []) as PhoneRevealRow[];
  const withPhone = leads.filter((item) => item.phone).length;
  const confirmed = leads.filter((item) => item.status === "confirmed").length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-cinzel text-xs tracking-[0.18em] text-vermilion uppercase">
            Scriptorium
          </p>
          <h1 className="mt-1 font-cinzel text-3xl">Księga zapytań</h1>
        </div>
        <form action={logoutAdmin}>
          <button type="submit" className="font-cinzel text-sm underline">
            Wyloguj
          </button>
        </form>
      </div>

      {!supabase ? (
        <p className="folio-panel mt-6 p-4 text-sm text-vermilion">
          Żeby widzieć archiwum na tej stronie, potrzebny jest Supabase. Same zgłoszenia i pobrania numeru i tak przychodzą mailem na contact@themedievals.pl i na adres z RESEND_TO — baza nie jest do tego potrzebna.
        </p>
      ) : messagesRes.error || phoneRes.error ? (
        <p className="folio-panel mt-6 p-4 text-sm text-vermilion">
          Baza jest podpięta, ale brakuje tabel. Wklej w Supabase SQL Editor plik{" "}
          <code>supabase/tracking.sql</code>.
        </p>
      ) : null}

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Formularze" value={leads.length} />
        <Stat label="Z numerem telefonu" value={withPhone} />
        <Stat label="Pobrania numeru" value={reveals.length} />
        <Stat label="Potwierdzone (prowizja)" value={confirmed} />
      </section>

      <section className="mt-12">
        <h2 className="font-cinzel text-2xl">Treści formularzy</h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]">
          Tu widać kto napisał, jaki zostawił telefon i całą treść zapytania.
          Status „Potwierdzone — prowizja” zostaw przy zleceniach do rozliczenia.
        </p>
        {leads.length === 0 ? (
          <p className="mt-4 text-sm italic">Na razie brak zgłoszeń.</p>
        ) : (
          <ul className="mt-5 space-y-4">
            {leads.map((item) => (
              <li key={item.id} className="folio-panel p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-cinzel text-lg">{item.sender_name}</p>
                    <p className="mt-1 text-sm">
                      {formatWhen(item.created_at)} ·{" "}
                      {eventLabels[item.event_type as keyof typeof eventLabels] ??
                        item.event_type}
                    </p>
                  </div>
                  <p
                    className={`font-cinzel text-sm ${item.phone ? "text-vermilion" : "text-[var(--ink-soft)]"}`}
                  >
                    {item.phone || "brak telefonu"}
                  </p>
                </div>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-cinzel text-[0.68rem] tracking-wide uppercase text-[var(--ink-soft)]">
                      E-mail
                    </dt>
                    <dd>
                      <a className="hover:text-vermilion" href={`mailto:${item.email}`}>
                        {item.email}
                      </a>
                    </dd>
                  </div>
                  {item.phone ? (
                    <div>
                      <dt className="font-cinzel text-[0.68rem] tracking-wide uppercase text-[var(--ink-soft)]">
                        Telefon ze zgłoszenia
                      </dt>
                      <dd>
                        <a className="hover:text-vermilion" href={`tel:${item.phone}`}>
                          {item.phone}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="font-cinzel text-[0.68rem] tracking-wide uppercase text-[var(--ink-soft)]">
                      Data wydarzenia
                    </dt>
                    <dd>{item.event_date || "—"}</dd>
                  </div>
                  <div>
                    <dt className="font-cinzel text-[0.68rem] tracking-wide uppercase text-[var(--ink-soft)]">
                      Miejsce
                    </dt>
                    <dd>{item.location || "—"}</dd>
                  </div>
                </dl>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">
                  {item.message}
                </p>
                <form action={updateLead} className="mt-4 grid gap-3 sm:grid-cols-[12rem_minmax(0,1fr)_auto]">
                  <input type="hidden" name="id" value={item.id} />
                  <label className="flex flex-col gap-1 font-cinzel text-[0.68rem] tracking-wide uppercase">
                    Status / prowizja
                    <select
                      name="status"
                      defaultValue={item.status ?? "new"}
                      className="folio-input font-body text-sm"
                    >
                      {statusOptions.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 font-cinzel text-[0.68rem] tracking-wide uppercase">
                    Notatka do rozliczenia
                    <input
                      name="notes"
                      defaultValue={item.notes ?? ""}
                      placeholder="np. agent, % prowizji, data wpłaty"
                      className="folio-input font-body text-sm"
                    />
                  </label>
                  <button type="submit" className="codex-btn codex-btn-secondary self-end">
                    Zapisz
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-14">
        <h2 className="font-cinzel text-2xl">Kto pobrał numer telefonu</h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]">
          Osoby, które na stronie kliknęły „Pokaż numer telefonu” i zostawiły
          dane. To osobny trop do prowizji, poza formularzem.
        </p>
        {reveals.length === 0 ? (
          <p className="mt-4 text-sm italic">Nikt jeszcze nie prosił o numer.</p>
        ) : (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--rule)] font-cinzel text-[0.68rem] tracking-wide uppercase text-[var(--ink-soft)]">
                  <th className="py-2 pr-3 font-bold">Kiedy</th>
                  <th className="py-2 pr-3 font-bold">Kto</th>
                  <th className="py-2 pr-3 font-bold">E-mail</th>
                  <th className="py-2 pr-3 font-bold">Organizacja / kto polecił</th>
                  <th className="py-2 font-bold">Strona</th>
                </tr>
              </thead>
              <tbody>
                {reveals.map((item) => (
                  <tr key={item.id} className="border-b border-[var(--rule)]/70">
                    <td className="py-2.5 pr-3 whitespace-nowrap">
                      {formatWhen(item.created_at)}
                    </td>
                    <td className="py-2.5 pr-3 font-cinzel">{item.requester_name}</td>
                    <td className="py-2.5 pr-3">
                      <a className="hover:text-vermilion" href={`mailto:${item.requester_email}`}>
                        {item.requester_email}
                      </a>
                    </td>
                    <td className="py-2.5 pr-3">{item.organization || "—"}</td>
                    <td className="py-2.5 text-[var(--ink-soft)]">{item.page || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <article className="folio-panel px-4 py-4">
      <p className="font-cinzel text-3xl text-vermilion">{value}</p>
      <p className="mt-1 font-cinzel text-[0.68rem] tracking-wide uppercase">
        {label}
      </p>
    </article>
  );
}
