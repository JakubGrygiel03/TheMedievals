import type { Locale } from "@/lib/i18n/config";

type Localized = Record<Locale, string>;

export type PortfolioPhoto = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
};

export const portfolioVenues: Record<Locale, string[]> = {
  pl: [
    "Rekonstrukcje bitew i turnieje rycerskie",
    "Zamki, dwory i przestrzenie historyczne",
    "Pikniki i jarmarki historyczne",
    "Imprezy firmowe",
    "Uroczystości prywatne, bankiety i śluby tematyczne",
  ],
  en: [
    "Battle reenactments and knightly tournaments",
    "Castles, manor houses and historic interiors",
    "Historical picnics and fairs",
    "Corporate events",
    "Private ceremonies, banquets and themed weddings",
  ],
  es: [
    "Recreaciones de batallas y torneos de caballería",
    "Castillos, palacios y espacios históricos",
    "Merendas y ferias históricas",
    "Eventos de empresa",
    "Ceremonias privadas, banquetes y bodas temáticas",
  ],
  it: [
    "Rievocazioni di battaglie e tornei cavallereschi",
    "Castelli, dimore e spazi storici",
    "Picnic e fiere storiche",
    "Eventi aziendali",
    "Cerimonie private, banchetti e matrimoni a tema",
  ],
};

export const portfolioPhotos: PortfolioPhoto[] = [
  {
    src: "/gallery/01-flety.jpg",
    width: 1334,
    height: 2000,
    alt: {
      pl: "Muzykini z fletami prostymi w stroju średniowiecznym",
      en: "Musician with medieval recorders in period dress",
      es: "Música con flautas dulces medievales",
      it: "Musicista con flauti dritti medievali",
    },
  },
  {
    src: "/gallery/02-zielona-suknia.jpg",
    width: 1334,
    height: 2000,
    alt: {
      pl: "Muzykini w zielonej sukni w lesie",
      en: "Musician in a green medieval dress in the forest",
      es: "Música con vestido medieval verde en el bosque",
      it: "Musicista in abito medievale verde nel bosco",
    },
  },
  {
    src: "/gallery/03-gitterna.jpg",
    width: 1707,
    height: 2560,
    alt: {
      pl: "Muzyk z gitterną",
      en: "Musician with a gittern",
      es: "Músico con gitterna",
      it: "Musicista con gittern",
    },
  },
  {
    src: "/gallery/05-vielle.jpg",
    width: 1334,
    height: 2000,
    alt: {
      pl: "Muzykini z vielle przy drzewie",
      en: "Musician with a vielle by a tree",
      es: "Música con vielle junto a un árbol",
      it: "Musicista con vielle presso un albero",
    },
  },
  {
    src: "/gallery/06-trio.jpg",
    width: 1080,
    height: 1619,
    alt: {
      pl: "Trzy muzykini z instrumentami w lesie",
      en: "Three musicians with instruments in the forest",
      es: "Tres músicas con instrumentos en el bosque",
      it: "Tre musiciste con strumenti nel bosco",
    },
  },
  {
    src: "/gallery/07-beben.jpg",
    width: 1707,
    height: 1626,
    alt: {
      pl: "Perkusista z bębnem obręczowym",
      en: "Percussionist with a frame drum",
      es: "Percusionista con tambor de marco",
      it: "Percussionista con tamburo a cornice",
    },
  },
  {
    src: "/gallery/08-kwartet.jpg",
    width: 683,
    height: 1024,
    alt: {
      pl: "Zespół The Medievals w strojach historycznych",
      en: "The Medievals ensemble in historical dress",
      es: "El ensemble The Medievals con indumentaria histórica",
      it: "L’ensemble The Medievals in abiti storici",
    },
  },
  {
    src: "/gallery/09-beben-zachod.jpg",
    width: 1363,
    height: 2048,
    alt: {
      pl: "Perkusista z bębnem o zachodzie słońca",
      en: "Percussionist with a frame drum at sunset",
      es: "Percusionista con tambor al atardecer",
      it: "Percussionista con tamburo al tramonto",
    },
  },
  {
    src: "/gallery/10-dudy.jpg",
    width: 1363,
    height: 2048,
    alt: {
      pl: "Muzyk z dudami i fletami na łące",
      en: "Musician with bagpipes and flutes in a field",
      es: "Músico con gaita y flautas en un prado",
      it: "Musicista con cornamusa e flauti in un prato",
    },
  },
  {
    src: "/gallery/11-flety-zachod.jpg",
    width: 681,
    height: 1024,
    alt: {
      pl: "Muzykini z fletami o zachodzie słońca",
      en: "Musician with recorders at sunset",
      es: "Música con flautas al atardecer",
      it: "Musicista con flauti al tramonto",
    },
  },
  {
    src: "/gallery/12-vielle-scena.jpg",
    width: 1179,
    height: 1578,
    alt: {
      pl: "Muzykini grająca na vielle podczas koncertu",
      en: "Musician playing the vielle in concert",
      es: "Música tocando la vielle en concierto",
      it: "Musicista che suona la vielle in concerto",
    },
  },
  {
    src: "/gallery/04-gitterna-zaba.jpg",
    width: 1707,
    height: 1580,
    alt: {
      pl: "Muzyk z gitterną przy rzeźbie żaby",
      en: "Musician with a gittern by a frog statue",
      es: "Músico con gitterna junto a una estatua de rana",
      it: "Musicista con gittern presso una statua di rana",
    },
  },
];
