import { isAdminAuthenticated } from "@/app/actions/admin-auth";
import { offerCards } from "@/lib/offer-cards";
import { buildOfferEmail } from "@/lib/offer-email-templates";
import { redirect } from "next/navigation";

const frames = [
  { id: "phone", label: "Telefon", width: 390, height: 844 },
  { id: "tablet", label: "Tablet", width: 768, height: 1024 },
  { id: "laptop", label: "Laptop", width: 1280, height: 800 },
] as const;

export default async function MailPreviewPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto max-w-[2200px] px-4 py-8">
      <p className="font-cinzel text-xs tracking-[0.18em] text-vermilion uppercase">
        Scriptorium
      </p>
      <h1 className="mt-1 font-cinzel text-3xl">Podgląd maili</h1>
      <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]">
        Ten sam HTML, który idzie w mailu. Telefon, tablet i laptop mają
        osobną szerokość, żeby dało się zmierzyć układ. Klienci tej strony nie
        widzą.
      </p>
      {offerCards.map((card) => {
        const mail = buildOfferEmail(card, { sample: true });
        return (
          <section key={card.id} className="mt-10">
            <h2 className="font-cinzel text-2xl">{card.title}</h2>
            <div className="mt-4 flex items-start gap-6 overflow-x-auto pb-4">
              {frames.map((frame) => (
                <figure key={frame.id} className="shrink-0">
                  <figcaption className="mb-2 font-cinzel text-xs tracking-wide uppercase">
                    {frame.label} · {frame.width}px
                  </figcaption>
                  <iframe
                    title={`${card.title} ${frame.label}`}
                    srcDoc={mail.html}
                    className="border border-[var(--rule)] bg-[#e7d7c3]"
                    style={{ width: frame.width, height: frame.height }}
                  />
                </figure>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
