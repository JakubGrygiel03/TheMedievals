export type OfferCardId =
  | "folio-full"
  | "concert-story"
  | "wedding-feast"
  | "station-workshop"
  | "quick-booking";

export type OfferCard = {
  id: OfferCardId;
  title: string;
  eyebrow: string;
  blurb: string;
  /** Always within site palette (vermilion / gold). */
  accent: string;
};

/** Sample offer “business cards” shown in admin and used as email layouts. */
export const offerCards: OfferCard[] = [
  {
    id: "folio-full",
    title: "Pełna oferta zespołu",
    eyebrow: "Wizytówka zbiorcza",
    blurb:
      "Komplet: koncert z opowieścią, stanowisko, warsztaty tańca i oprawa uroczystości — jeden elegancki mail.",
    accent: "#8b1e1e",
  },
  {
    id: "concert-story",
    title: "Koncert z opowieścią",
    eyebrow: "Wizytówka koncertowa",
    blurb:
      "Muzyka XII–XVI w. z prezentacją instrumentów i repertuaru — pod zamki, festiwale i turnieje.",
    accent: "#8b1e1e",
  },
  {
    id: "wedding-feast",
    title: "Śluby i uroczystości",
    eyebrow: "Wizytówka ceremonialna",
    blurb:
      "Oprawa ślubów historycznych, biesiad, bankietów i eventów firmowych — kameralnie lub pełnym składem.",
    accent: "#c9a24a",
  },
  {
    id: "station-workshop",
    title: "Stanowisko i warsztaty",
    eyebrow: "Wizytówka edukacyjna",
    blurb:
      "Pokaz instrumentów na stanowisku oraz warsztaty tańca dawnego — osobno albo jako dodatek do koncertu.",
    accent: "#8b1e1e",
  },
  {
    id: "quick-booking",
    title: "Szybkie zapytanie o termin",
    eyebrow: "Wizytówka bookingowa",
    blurb:
      "Krótka, konkretna kartka z CTA: data, miejsce, kontakt — idealna na follow-up po rozmowie.",
    accent: "#c9a24a",
  },
];

export function getOfferCard(id: string): OfferCard | undefined {
  return offerCards.find((card) => card.id === id);
}
