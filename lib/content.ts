import type { Locale } from "@/lib/i18n/config";
import type { Localized } from "@/lib/members";

type AboutCopy = {
  paragraphs: string[];
  instruments: string;
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  pl: {
    paragraphs: [
      "The Medievals wykonuje muzykę średniowieczną, wiernie odtwarzając jej brzmienie. W występach korzystamy z kopii dawnych instrumentów. Pasjonujemy się odtwórstwem średniowiecza i występujemy w strojach zrekonstruowanych z XV i XIII wieku. Nie ograniczamy się tylko do grania — chętnie prowadzimy też warsztaty tańca historycznego.",
      "Jesteśmy zespołem zawodowych muzyków. Lata edukacji i praca w rekonstrukcji historycznej dają brzmienie zgodne z epoką — na scenie, w zamku i przy ognisku.",
      "Stroje są wiernie zrekonstruowane i ręcznie szyte według źródeł z XV i XIII wieku. Dla organizatora oznacza to gotowy obraz: muzyka, strój i instrumenty tworzą jedną miniaturę.",
    ],
    instruments:
      "fideli kolanowe (vielle), gitterna, bęben obręczowy, średniowieczne flety proste i szałamaja",
  },
  en: {
    paragraphs: [
      "The Medievals performs medieval music with a faithful period sound, using copies of early instruments. We are passionate about medieval reenactment and appear in reconstructed 13th- and 15th-century dress. Beyond concerts, we gladly lead historical dance workshops.",
      "We are professional musicians. Years of training and work with historical reenactment groups give a period sound — on stage, in a castle, or by the fire.",
      "Costumes are reconstructed and hand-sewn from 13th- and 15th-century sources. For an organizer that means a finished picture: music, dress and instruments as one miniature.",
    ],
    instruments:
      "knee fiddles (vielle), gittern, frame drum, medieval recorders and shawm",
  },
  es: {
    paragraphs: [
      "The Medievals interpreta música medieval con un sonido fiel a la época, con copias de instrumentos antiguos. Nos apasiona la recreación medieval y actuamos con indumentaria reconstruida de los siglos XIII y XV. Además de tocar, ofrecemos talleres de danza histórica.",
      "Somos músicos profesionales. Años de formación y recreación histórica dan un sonido de época: en escenario, en un castillo o junto al fuego.",
      "Los trajes están reconstruidos y cosidos a mano según fuentes de los siglos XIII y XV. Para el organizador es una imagen cerrada: música, indumentaria e instrumentos en una sola miniatura.",
    ],
    instruments:
      "vielles de regazo, gitterna, tambor de marco, flautas dulces medievales y chirimía",
  },
  it: {
    paragraphs: [
      "The Medievals esegue musica medievale con un suono fedele all’epoca, su copie di strumenti antichi. Ci appassiona la rievocazione medievale e ci esibiamo in abiti ricostruiti del XIII e del XV secolo. Oltre ai concerti, guidiamo volentieri laboratori di danza storica.",
      "Siamo musicisti professionisti. Anni di formazione e rievocazione danno un suono d’epoca: sul palco, in un castello o accanto al fuoco.",
      "I costumi sono ricostruiti e cuciti a mano su fonti del XIII e del XV secolo. Per l’organizzatore è un’immagine compiuta: musica, abito e strumenti in una sola miniatura.",
    ],
    instruments:
      "vielle da ginocchio, gittern, tamburo a cornice, flauti dritti medievali e cennamella",
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
  pl: "Na miejscu przywozimy stroje, instrumenty i gotowy program. Możemy opowiedzieć publiczności o budowie instrumentów i historii pieśni. Do koncertu można dodać warsztat tańca. Poniżej raider i plan sceny do pobrania.",
  en: "We arrive with costumes, instruments and a finished programme. We can introduce the instruments and the songs. A dance workshop can be added. Rider and stage plan are below.",
  es: "Llegamos con trajes, instrumentos y un programa cerrado. Podemos presentar los instrumentos y las canciones. Se puede añadir un taller de danza. Rider y plano de escenario abajo.",
  it: "Arriviamo con costumi, strumenti e un programma pronto. Possiamo presentare gli strumenti e i canti. Si può aggiungere un laboratorio di danza. Rider e pianta palco qui sotto.",
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
