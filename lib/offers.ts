import type { Locale } from "@/lib/i18n/config";

export type OfferItem = {
  title: string;
  body: string;
  featured?: boolean;
};

export const clientOffers: Record<
  Locale,
  { lead: string; items: OfferItem[] }
> = {
  pl: {
    lead: "Pięć formatów występu. Przyjeżdżamy ze strojami, instrumentami i gotowym programem.",
    items: [
      {
        title: "Koncert z opowieścią o instrumentach",
        featured: true,
        body: "Koncert muzyki średniowiecznej wraz z przedstawieniem instrumentów, ich budowy i pochodzenia oraz przybliżeniem historii i treści granego repertuaru. Dodatkowo istnieje możliwość poprowadzenia warsztatów tańca średniowiecznego podczas występu na żywo.",
      },
      {
        title: "Festiwale i turnieje rycerskie",
        body: "Energetyczna muzyka plenerowa, dynamiczne tańce i pieśni. Brzmienie, które niesie się nad obozem, areną i jarmarkiem.",
      },
      {
        title: "Wydarzenia zamkowe i kameralne",
        body: "Nastrojowy repertuar dworski w przestrzeniach historycznych: zamki, dwory, krużganki i sale kominkowe.",
      },
      {
        title: "Warsztaty dawnego tańca",
        body: "Animacja publiczności i nauka tradycyjnych kroków. Osobny warsztat albo dodatek do koncertu — goście słuchają i tańczą, jeśli chcecie.",
      },
      {
        title: "Uroczystości i bankiety",
        body: "Oprawa ślubów historycznych, biesiad i eventów tematycznych. Kameralnie albo z pełnym składem.",
      },
    ],
  },
  en: {
    lead: "Five performance formats. We arrive with costumes, instruments and a finished programme.",
    items: [
      {
        title: "Concert with instrument stories",
        featured: true,
        body: "A medieval-music concert with a presentation of the instruments — how they are built and where they come from — and an introduction to the history and meaning of the repertoire. Medieval dance workshops can also be led during the live performance.",
      },
      {
        title: "Festivals and knightly tournaments",
        body: "Energetic outdoor music, lively dances and songs that carry across a camp, arena or fair.",
      },
      {
        title: "Castle and chamber events",
        body: "Courtly repertoire for historic rooms: castles, manor houses, cloisters and fireside halls.",
      },
      {
        title: "Early-dance workshops",
        body: "Audience animation and traditional steps. A standalone workshop, or an addition to the concert. Guests listen — and dance, if you wish.",
      },
      {
        title: "Ceremonies and banquets",
        body: "Music for historical weddings, feasts and themed events. Intimate, or with the full ensemble.",
      },
    ],
  },
  es: {
    lead: "Cinco formatos de actuación. Llegamos con trajes, instrumentos y un programa cerrado.",
    items: [
      {
        title: "Concierto con relato de instrumentos",
        featured: true,
        body: "Un concierto de música medieval con presentación de los instrumentos — su construcción y origen — y una introducción a la historia y el sentido del repertorio. También es posible dirigir talleres de danza medieval durante la actuación en vivo.",
      },
      {
        title: "Festivales y torneos de caballería",
        body: "Música enérgica al aire libre, danzas y canciones que llenan el campamento, la arena o la feria.",
      },
      {
        title: "Eventos en castillos y de cámara",
        body: "Repertorio cortesano para espacios históricos: castillos, palacios, claustros y salas junto al fuego.",
      },
      {
        title: "Talleres de danza antigua",
        body: "Animación del público y pasos tradicionales. Un taller aparte, o un añadido al concierto. Los invitados escuchan — y bailan, si lo deseáis.",
      },
      {
        title: "Ceremonias y banquetes",
        body: "Música para bodas históricas, festines y eventos temáticos. Íntimo, o con el ensemble completo.",
      },
    ],
  },
  it: {
    lead: "Cinque formati di spettacolo. Arriviamo con costumi, strumenti e un programma pronto.",
    items: [
      {
        title: "Concerto con racconto degli strumenti",
        featured: true,
        body: "Un concerto di musica medievale con presentazione degli strumenti — costruzione e origine — e un avvicinamento alla storia e al significato del repertorio. È inoltre possibile condurre laboratori di danza medievale durante l’esibizione dal vivo.",
      },
      {
        title: "Festival e tornei cavallereschi",
        body: "Musica energica all’aperto, danze e canti che riempiono accampamento, arena o fiera.",
      },
      {
        title: "Eventi in castello e da camera",
        body: "Repertorio di corte per spazi storici: castelli, dimore, chiostri e sale al focolare.",
      },
      {
        title: "Laboratori di danza antica",
        body: "Animazione del pubblico e passi tradizionali. Un laboratorio a sé, oppure un’aggiunta al concerto. Gli ospiti ascoltano — e ballano, se lo desiderate.",
      },
      {
        title: "Cerimonie e banchetti",
        body: "Musica per matrimoni storici, conviti ed eventi a tema. Intimo, oppure con l’ensemble al completo.",
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
