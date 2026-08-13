import type { Locale } from "@/lib/i18n/config";

export type OfferItem = {
  title: string;
  body: string;
};

export const clientOffers: Record<
  Locale,
  { lead: string; items: OfferItem[] }
> = {
  pl: {
    lead: "Zamki, festiwale, jarmarki, śluby i sale kameralne. Przyjeżdżamy ze strojami, instrumentami i gotowym programem.",
    items: [
      {
        title: "Koncert muzyki średniowiecznej",
        body: "Pieśni świeckie i religijne w językach oryginalnych, utwory instrumentalne i tańce. Program można opowiedzieć publiczności: skąd pochodzi pieśń i jak zbudowany jest instrument.",
      },
      {
        title: "Oprawa wydarzenia historycznego",
        body: "Żywa miniatura obozu: stroje z XV i XIII wieku, kopie instrumentów dawnych, brzmienie zgodne z epoką. Pasuje do zamku, skansenu, inscenizacji i festiwalu.",
      },
      {
        title: "Ślub i warsztat tańca",
        body: "Kameralna oprawa ceremonii albo warsztat tańca średniowiecznego przy koncercie. Goście słuchają i — jeśli chcecie — tańczą.",
      },
    ],
  },
  en: {
    lead: "Castles, festivals, fairs, weddings and intimate halls. We arrive with costumes, instruments and a finished programme.",
    items: [
      {
        title: "Medieval music concert",
        body: "Secular and sacred songs in original languages, instrumental pieces and dances. We can introduce each piece and the instrument that carries it.",
      },
      {
        title: "Historical event",
        body: "A living camp miniature: 13th- and 15th-century dress, replica period instruments, a sound that belongs to the era. Built for castles, open-air museums and festivals.",
      },
      {
        title: "Wedding and dance workshop",
        body: "A chamber performance for a ceremony, or a medieval dance workshop beside the concert. Guests listen — and dance, if you wish.",
      },
    ],
  },
  es: {
    lead: "Castillos, festivales, ferias, bodas y salas íntimas. Llegamos con trajes, instrumentos y un programa cerrado.",
    items: [
      {
        title: "Concierto de música medieval",
        body: "Canciones profanas y religiosas en lenguas originales, piezas instrumentales y danzas. Podemos presentar cada obra y el instrumento que la sostiene.",
      },
      {
        title: "Evento histórico",
        body: "Una miniatura viva de campamento: indumentaria de los siglos XIII y XV, réplicas de época, un sonido de la era. Pensado para castillos, museos al aire libre y festivales.",
      },
      {
        title: "Boda y taller de danza",
        body: "Música de cámara para la ceremonia, o un taller de danza medieval junto al concierto.",
      },
    ],
  },
  it: {
    lead: "Castelli, festival, fiere, matrimoni e sale intime. Arriviamo con costumi, strumenti e un programma pronto.",
    items: [
      {
        title: "Concerto di musica medievale",
        body: "Canti sacri e profani nelle lingue originali, brani strumentali e danze. Possiamo presentare ogni pezzo e lo strumento che lo porta.",
      },
      {
        title: "Evento storico",
        body: "Una miniatura viva di accampamento: abiti del XIII e del XV secolo, repliche d’epoca, un suono dell’era. Per castelli, musei all’aperto e festival.",
      },
      {
        title: "Matrimonio e laboratorio di danza",
        body: "Musica da camera per la cerimonia, oppure un laboratorio di danza medievale accanto al concerto.",
      },
    ],
  },
};

export const trustPoints: Record<Locale, string[]> = {
  pl: [
    "6 zawodowych muzyków",
    "Kopie instrumentów z epoki",
    "Stroje z XV i XIII wieku",
    "Pieśni w językach oryginalnych",
  ],
  en: [
    "6 professional musicians",
    "Replica period instruments",
    "13th- and 15th-century dress",
    "Songs in original languages",
  ],
  es: [
    "6 músicos profesionales",
    "Réplicas de instrumentos de época",
    "Indumentaria de los siglos XIII y XV",
    "Canciones en lenguas originales",
  ],
  it: [
    "6 musicisti professionisti",
    "Repliche di strumenti d’epoca",
    "Abiti del XIII e del XV secolo",
    "Canti nelle lingue originali",
  ],
};
