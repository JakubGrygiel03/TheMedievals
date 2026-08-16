import type { Locale } from "@/lib/i18n/config";
import type { Localized } from "@/lib/members";

type AboutCopy = {
  paragraphs: string[];
  instruments: string;
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  pl: {
    paragraphs: [
      "Inspiruje nas muzyka dworska i plebejska XIV i XV wieku — pieśni, tańce i utwory instrumentalne w językach oryginalnych. Gramy je na kopiach instrumentów z epoki, tak by brzmienie pasowało do zamku, obozu i biesiady.",
      "Stroje historyczne szyjemy na podstawie ikonografii. Instrumenty to rzemieślnicze repliki: fideli, giterna, lutnia, flety, szałamaja, bębny obręczowe. Dla organizatora oznacza to spójny obraz — muzyka, strój i instrumentarium jako jedna miniatura.",
    ],
    instruments:
      "fideli kolanowe (vielle), gitterna, lutnia, bęben obręczowy, średniowieczne flety proste i szałamaja",
  },
  en: {
    paragraphs: [
      "We draw on courtly and popular music of the fourteenth and fifteenth centuries — songs, dances and instrumental pieces in their original languages, played on replica period instruments so the sound belongs in a castle, a camp or a feast.",
      "Historical dress is sewn from iconography. The instruments are artisan replicas: vielles, gittern, lute, recorders, shawm, frame drums. For an organizer that means one picture: music, costume and instruments as a single miniature.",
    ],
    instruments:
      "knee fiddles (vielle), gittern, lute, frame drum, medieval recorders and shawm",
  },
  es: {
    paragraphs: [
      "Nos inspira la música cortesana y popular de los siglos XIV y XV: canciones, danzas y piezas instrumentales en lenguas originales, con réplicas de época para un sonido de castillo, campamento o festín.",
      "Los trajes se cosen a partir de la iconografía. Los instrumentos son réplicas artesanales: vielles, gitterna, laúd, flautas, chirimía, tambores de marco. Para el organizador es una sola imagen: música, indumentaria e instrumentos.",
    ],
    instruments:
      "vielles de regazo, gitterna, laúd, tambor de marco, flautas dulces medievales y chirimía",
  },
  it: {
    paragraphs: [
      "Ci ispira la musica di corte e popolare del XIV e XV secolo: canti, danze e brani strumentali nelle lingue originali, su repliche d’epoca perché il suono stia in un castello, in un accampamento o a un convito.",
      "Gli abiti sono cuciti sull’iconografia. Gli strumenti sono repliche artigianali: vielle, gittern, liuto, flauti, cennamella, tamburi a cornice. Per l’organizzatore è un’unica immagine: musica, costume e strumenti.",
    ],
    instruments:
      "vielle da ginocchio, gittern, liuto, tamburo a cornice, flauti dritti medievali e cennamella",
  },
};

export const repertoireTracks = [
  "Schiarazula Marazula",
  "Douce Dame Jolie",
  "Ai vis lo lop",
  "Durme durme",
  "Kalenda maya",
  "Branle d’écosse",
  "Herr Mannelig",
  "Je vivroie liement",
  "Tourdion",
  "Pochwała Karczmy — In taberna quando sumus",
] as const;

export const repertoireCopy: Localized = {
  pl: "Repertuar obejmuje kilkanaście europejskich utworów historycznych — świeckich i religijnych — śpiewanych w oryginalnych językach. Wykonujemy pieśni wokalno-instrumentalne, utwory instrumentalne oraz tańce.",
  en: "The programme holds more than a dozen European historical pieces, secular and sacred, sung in their original languages. We perform vocal-instrumental songs, instrumental works and dances.",
  es: "El repertorio reúne más de una docena de piezas históricas europeas, profanas y religiosas, cantadas en sus lenguas originales. Interpretamos canciones vocal-instrumentales, obras instrumentales y danzas.",
  it: "Il repertorio comprende una dozzina di brani storici europei, sacri e profani, cantati nelle lingue originali. Eseguiamo canti vocali-strumentali, brani strumentali e danze.",
};

export const offerCopy: Localized = {
  pl: "Do pobrania: notka prasowa, zdjęcie oficjalne, rider techniczny i akustyczny oraz plan sceny.",
  en: "Downloads: press note, official photo, technical and acoustic rider, and stage plan.",
  es: "Descargas: nota de prensa, foto oficial, rider técnico y acústico, y plano de escenario.",
  it: "Download: nota stampa, foto ufficiale, rider tecnico e acustico, pianta palco.",
};

export const videoClipCopy = {
  date: "2023-02-25",
  title: {
    pl: "Premierowy teledysk The Medievals",
    en: "The Medievals premiere music video",
    es: "Videoclip estreno de The Medievals",
    it: "Videoclip di debutto di The Medievals",
  } satisfies Localized,
  credits: [
    "Piotr Kasiłowski – arrangement",
    "Paulina Andrzejak – frame drum",
    "Adrianna Ciemińska – vielle",
    "Karina Raźnikiewicz – voice",
    "Liubou Tsudzila – medieval recorder",
    "Rafał Klej – gittern",
    "Paweł Tomaszewski – hurdy-gurdy",
    "guest cast – Sebastian Sierka, Karol Matusiak, Kacper Karabin",
    "produced by – CINEMAGIC",
    "recordings, mix & mastering – Oskar Tracz",
  ],
};
