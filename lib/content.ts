import type { Locale } from "@/lib/i18n/config";
import type { Localized } from "@/lib/members";

type AboutCopy = {
  paragraphs: string[];
  instruments: string;
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  pl: {
    paragraphs: [
      "The Medievals wykonuje muzykę średniowieczną, wiernie odtwarzając jej brzmienie. Pieśni, tańce i utwory instrumentalne w językach oryginalnych gramy na kopiach instrumentów z epoki XIII–XV wieku — na zamku, w obozie i przy biesiadzie.",
      "Stroje historyczne od XIII do XV wieku szyjemy na podstawie ikonografii. Instrumenty to rzemieślnicze repliki: fidele, gitterna, lutnia, flety, szałamaja oraz bębny obręczowe. Dla organizatora oznacza to spójny obraz — muzyka, strój i instrumentarium jako jedna całość.",
    ],
    instruments:
      "fidele kolanowe (vielle), gitterna, lutnia, bęben obręczowy, średniowieczne flety proste oraz szałamaja",
  },
  en: {
    paragraphs: [
      "The Medievals performs medieval music, faithfully recreating its sound. Songs, dances and instrumental pieces in their original languages are played on replica instruments from the 13th–15th centuries — for a castle, a camp or a feast.",
      "Historical dress from the 13th to 15th centuries is sewn from iconography. The instruments are artisan replicas: vielles, gittern, lute, recorders, shawm, frame drums. For an organizer that means one picture: music, costume and instruments as a single whole.",
    ],
    instruments:
      "knee fiddles (vielle), gittern, lute, frame drum, medieval recorders and shawm",
  },
  es: {
    paragraphs: [
      "The Medievals interpreta música medieval, recreando fielmente su sonido. Canciones, danzas y piezas instrumentales en lenguas originales suenan con réplicas de instrumentos de los siglos XIII–XV: castillo, campamento o festín.",
      "Los trajes históricos de los siglos XIII al XV se cosen a partir de la iconografía. Los instrumentos son réplicas artesanales: vielles, gitterna, laúd, flautas, chirimía, tambores de marco. Para el organizador es una sola imagen: música, indumentaria e instrumentos.",
    ],
    instruments:
      "vielles de regazo, gitterna, laúd, tambor de marco, flautas dulces medievales y chirimía",
  },
  it: {
    paragraphs: [
      "The Medievals esegue musica medievale, ricreandone fedelmente il suono. Canti, danze e brani strumentali nelle lingue originali suonano su repliche di strumenti dal XIII al XV secolo: castello, accampamento o convito.",
      "Gli abiti storici dal XIII al XV secolo sono cuciti sull’iconografia. Gli strumenti sono repliche artigianali: vielle, gittern, liuto, flauti, cennamella, tamburi a cornice. Per l’organizzatore è un’unica immagine: musica, costume e strumenti.",
    ],
    instruments:
      "vielle da ginocchio, gittern, liuto, tamburo a cornice, flauti dritti medievali e cennamella",
  },
};

export const repertoireTracks = [
  "Guillaume de Machaut — Douce dame Jolie",
  "Guillaume de Machaut — Je vivroie liement",
  "Anonim — In taberna quando sumus (Carmina Burana)",
  "Raimbaut de Vaqueiras — Kalenda Maya",
  "Anonim — Tourdion",
  "Taniec węgierski",
  "Thoinot Arbeau — Branle d’Ecosse",
  "Giorgio Mainerio — Schiarazula Marazula",
  "Pieśń o Przemyśle I",
  "Pieśń o Przemyśle II",
  "Anonim — Cuncti simus concanentes: Ave Maria!",
  "Pieśń o Henryku Prawym",
  "Francuska pieśń ludowa — Ai vis lo lop",
  "Taniec — Skocz kap",
  "Taniec — Spikerina",
  "Alfons X Kastylijski, Cantigas de Santa Maria — Cantiga 166: „Como Poden Per Sas Culpas”",
  "Anonim — Miri it is while summer ilast",
  "Mołdawski taniec ludowy — Drumul Draculi",
  "Thoinot Arbeau — Branle des Lavandieres (Praczki)",
  "Anonim — Herr Mannelig",
  "Sefardyjska kołysanka ludowa — Durme Durme",
  "Alfons X Kastylijski, Cantigas de Santa Maria — Cantiga 167: „Quen quer que na Virgen fia”",
  "Sefardyjska pieśń ludowa — Ah, el Novio no Quere Dinero",
  "Anonim — Dou way robin",
] as const;

/** Split track list so the left column is not visually shorter than the right. */
export function getBalancedRepertoireSplit(
  tracks: readonly string[],
): number {
  const weights = tracks.map((track) => Math.ceil(track.length / 42));
  const mid = Math.ceil(tracks.length / 2);

  for (let split = mid; split < tracks.length; split++) {
    const leftWeight = weights.slice(0, split).reduce((sum, weight) => sum + weight, 0);
    const rightWeight = weights.slice(split).reduce((sum, weight) => sum + weight, 0);
    if (leftWeight >= rightWeight) {
      return split;
    }
  }

  return tracks.length - 1;
}

export const repertoireCopy: Localized = {
  pl: "Repertuar obejmuje ponad dwadzieścia europejskich utworów z XII–XV wieku — świeckich i religijnych — śpiewanych w oryginalnych językach. Wykonujemy pieśni wokalno-instrumentalne, utwory instrumentalne oraz tańce.",
  en: "The programme holds more than twenty European pieces from the 12th–15th centuries, secular and sacred, sung in their original languages. We perform vocal-instrumental songs, instrumental works and dances.",
  es: "El repertorio reúne más de veinte piezas europeas de los siglos XII al XV, profanas y religiosas, cantadas en sus lenguas originales. Interpretamos canciones vocal-instrumentales, obras instrumentales y danzas.",
  it: "Il repertorio comprende oltre venti brani europei dal XII al XV secolo, sacri e profani, cantati nelle lingue originali. Eseguiamo canti vocali-strumentali, brani strumentali e danze.",
};

