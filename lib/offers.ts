import type { Locale } from "@/lib/i18n/config";

export type OfferItem = {
  title: string;
  body: string;
  featured?: boolean;
};

export const clientOffers: Record<
  Locale,
  { venuesNote: string; items: OfferItem[] }
> = {
  pl: {
    venuesNote:
      "Występujemy podczas wydarzeń historycznych: rekonstrukcji bitew, turniejów rycerskich, jarmarków, festiwali archeologicznych.",
    items: [
      {
        title: "Koncert z opowieścią o instrumentach",
        featured: true,
        body: "Koncert muzyki od XIII do XV wieku wraz z przedstawieniem instrumentów, ich budowy i pochodzenia oraz przybliżeniem historii i treści granego repertuaru. Dodatkowo istnieje możliwość poprowadzenia warsztatów tańca z tego okresu podczas występu na żywo.",
      },
      {
        title: "Stanowisko muzyczne",
        body: "Prowadzimy przedstawienie instrumentów na wyznaczonym stanowisku, opowiadamy o ich pochodzeniu, pokazujemy technikę gry oraz dajemy możliwość spróbowania swoich sił w grze na wybranym przez nas instrumencie.",
      },
      {
        title: "Warsztaty tańca dawnego",
        body: "Animacja publiczności i nauka tradycyjnych kroków. Osobny warsztat albo dodatek do koncertu.",
      },
      {
        title: "Oprawa uroczystości",
        body: "Oprawa ślubów historycznych, biesiad, eventów tematycznych, bankietów oraz imprez firmowych. Kameralnie albo w pełnym składzie.",
      },
    ],
  },
  en: {
    venuesNote:
      "We perform at historical events: battle reenactments, knightly tournaments, fairs and archaeological festivals.",
    items: [
      {
        title: "Concert with instrument stories",
        featured: true,
        body: "A 13th–15th-century music concert with a presentation of the instruments — how they are built and where they come from — and an introduction to the history and meaning of the repertoire. Dance workshops from this period can also be led during the live performance.",
      },
      {
        title: "Music station",
        body: "We present the instruments at a dedicated stand, talk about their origin, demonstrate playing technique and give visitors the chance to try an instrument we choose.",
      },
      {
        title: "Early dance workshops",
        body: "Audience animation and traditional steps. A standalone workshop, or an addition to the concert.",
      },
      {
        title: "Ceremonial music",
        body: "Music for historical weddings, feasts, themed events, banquets and corporate events. Intimate, or with the full ensemble.",
      },
    ],
  },
  es: {
    venuesNote:
      "Actuamos en eventos históricos: recreaciones de batallas, torneos de caballería, ferias y festivales arqueológicos.",
    items: [
      {
        title: "Concierto con relato de instrumentos",
        featured: true,
        body: "Un concierto de música de los siglos XIII al XV con presentación de los instrumentos — su construcción y origen — y una introducción a la historia y el sentido del repertorio. También es posible dirigir talleres de danza de este periodo durante la actuación en vivo.",
      },
      {
        title: "Puesto musical",
        body: "Presentamos los instrumentos en un puesto señalado, hablamos de su origen, mostramos la técnica de interpretación y damos la posibilidad de probar un instrumento elegido por nosotros.",
      },
      {
        title: "Talleres de danza antigua",
        body: "Animación del público y pasos tradicionales. Un taller aparte, o un añadido al concierto.",
      },
      {
        title: "Música para ceremonias",
        body: "Música para bodas históricas, festines, eventos temáticos, banquetes y eventos de empresa. Íntimo, o con el ensemble completo.",
      },
    ],
  },
  it: {
    venuesNote:
      "Suoniamo in eventi storici: rievocazioni di battaglie, tornei cavallereschi, fiere e festival archeologici.",
    items: [
      {
        title: "Concerto con racconto degli strumenti",
        featured: true,
        body: "Un concerto di musica dal XIII al XV secolo con presentazione degli strumenti — costruzione e origine — e un avvicinamento alla storia e al significato del repertorio. È inoltre possibile condurre laboratori di danza dello stesso periodo durante l’esibizione dal vivo.",
      },
      {
        title: "Postazione musicale",
        body: "Presentiamo gli strumenti in una postazione dedicata, raccontiamo la loro origine, mostriamo la tecnica di esecuzione e diamo la possibilità di provare uno strumento scelto da noi.",
      },
      {
        title: "Laboratori di danza antica",
        body: "Animazione del pubblico e passi tradizionali. Un laboratorio a sé, oppure un’aggiunta al concerto.",
      },
      {
        title: "Musica per cerimonie",
        body: "Musica per matrimoni storici, conviti, eventi a tema, banchetti ed eventi aziendali. Intimo, oppure con l’ensemble al completo.",
      },
    ],
  },
};

export const trustPoints: Record<Locale, string[]> = {
  pl: [
    "6 zawodowych muzyków",
    "Rzemieślnicze repliki instrumentów z epoki",
    "Wierne stroje z ikonografii, XIII–XV w.",
    "Pieśni w językach oryginalnych",
  ],
  en: [
    "6 professional musicians",
    "Artisan replica period instruments",
    "Faithful dress from iconography, 13th–15th c.",
    "Songs in original languages",
  ],
  es: [
    "6 músicos profesionales",
    "Réplicas artesanales de instrumentos de época",
    "Indumentaria fiel a la iconografía, siglos XIII–XV",
    "Canciones en lenguas originales",
  ],
  it: [
    "6 musicisti professionisti",
    "Repliche artigianali di strumenti d’epoca",
    "Abiti fedeli all’iconografia, XIII–XV secolo",
    "Canti nelle lingue originali",
  ],
};
