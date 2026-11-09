"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import {
  sendOfferCardSample,
  type SendOfferCardState,
} from "@/app/actions/admin-offer-mail";
import { offerCards, type OfferCard } from "@/lib/offer-cards";

type Props = {
  defaultTo: string;
};

export function OfferMailTiles({ defaultTo }: Props) {
  const [to, setTo] = useState(defaultTo);
  const [flash, setFlash] = useState<string | null>(null);
  const flashRef = useRef(setFlash);
  flashRef.current = setFlash;

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-cinzel text-2xl">Wizytówki oferty</h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)]">
            Kafelki z przykładowymi układami HTML — wyślij próbę na skrzynkę testową
            i zobacz, jak wygląda mail u organizatora.
          </p>
        </div>
        <label className="flex min-w-[16rem] flex-col gap-1 font-cinzel text-[0.68rem] tracking-wide uppercase">
          Adres testowy
          <input
            type="email"
            value={to}
            onChange={(event) => setTo(event.target.value)}
            className="folio-input font-body text-sm normal-case tracking-normal"
            autoComplete="email"
          />
        </label>
      </div>

      {flash ? (
        <p className="folio-panel mt-4 p-3 text-sm text-vermilion" role="status">
          {flash}
        </p>
      ) : null}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {offerCards.map((card) => (
          <li key={card.id}>
            <OfferTile
              card={card}
              to={to}
              onResult={(message) => flashRef.current(message)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function OfferTile({
  card,
  to,
  onResult,
}: {
  card: OfferCard;
  to: string;
  onResult: (message: string) => void;
}) {
  const [state, action, pending] = useActionState<
    SendOfferCardState | null,
    FormData
  >(sendOfferCardSample, null);
  const lastHandled = useRef<SendOfferCardState | null>(null);

  useEffect(() => {
    if (!state || state === lastHandled.current) return;
    lastHandled.current = state;
    if (state.ok && state.sent) {
      onResult(`Wysłano „${card.title}” → ${state.to}`);
      return;
    }
    if (state.ok && !state.sent) {
      onResult("Brak RESEND_API_KEY w .env.local — mail nie wyszedł.");
      return;
    }
    if (!state.ok) {
      onResult(state.error);
    }
  }, [state, card.title, onResult]);

  return (
    <article className="folio-panel flex h-full flex-col overflow-hidden">
      <div
        className="h-1.5 w-full"
        style={{ background: card.accent }}
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p
          className="font-cinzel text-[0.68rem] tracking-[0.16em] uppercase"
          style={{ color: card.accent }}
        >
          {card.eyebrow}
        </p>
        <h3 className="mt-2 font-cinzel text-xl leading-snug">{card.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
          {card.blurb}
        </p>
        <form action={action} className="mt-5">
          <input type="hidden" name="cardId" value={card.id} />
          <input type="hidden" name="to" value={to} />
          <button
            type="submit"
            disabled={pending}
            className="codex-btn codex-btn-secondary w-full disabled:opacity-60"
          >
            {pending ? "Wysyłam…" : "Wyślij próbny mail"}
          </button>
        </form>
      </div>
    </article>
  );
}
