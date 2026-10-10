import type { Locale } from "@/lib/i18n/config";
import type { Localized } from "@/lib/members";

export type Release = {
  id: string;
  title: string;
  premiere: string;
  albumType: "Album" | "EP";
  description: Localized;
  credits: Localized;
};

export const releases: Release[] = [
  {
    id: "album-2025",
    title: "The Medievals",
    premiere: "2025-06-06",
    albumType: "Album",
    description: {
      pl: "Na album składa się 10 kompozycji powstałych w średniowieczu i renesansie, między XII a XVI wiekiem. Są to zarówno dzieła anonimowych twórców, jak i tych, o których historia muzyki pamięta do dziś. Melodie z Francji, Włoch, Szwecji oraz tradycyjne pieśni sefardyjskie. Dominują formy wokalno-instrumentalne, pojawiają się także tańce — muzyka dworów i karczm, zwykle o świeckim, frywolnym tekście.",
      en: "The album holds ten compositions from the Middle Ages and the Renaissance, between the 12th and 16th centuries: anonymous works and pieces still remembered by music history. Melodies from France, Italy and Sweden, plus traditional Sephardic songs. Vocal-instrumental forms dominate, with dances among them — music of courts and taverns, often secular and playful in text.",
      es: "El álbum reúne diez composiciones de la Edad Media y el Renacimiento, entre los siglos XII y XVI: obras anónimas y otras que la historia de la música aún recuerda. Melodías de Francia, Italia y Suecia, y cantos sefardíes tradicionales. Dominan las formas vocal-instrumentales, con danzas: música de cortes y tabernas, a menudo de texto profano y ligero.",
      it: "L’album raccoglie dieci composizioni del Medioevo e del Rinascimento, tra il XII e il XVI secolo: opere anonime e brani che la storia della musica ancora ricorda. Melodie da Francia, Italia e Svezia, e canti sefarditi tradizionali. Dominano le forme vocali-strumentali, con danze: musiche di corti e osterie, spesso di testo profano e giocoso.",
    },
    credits: {
      pl: "Premiera 6.06.2025",
      en: "Released 6 June 2025",
      es: "Estreno 6.06.2025",
      it: "Uscita 6.06.2025",
    },
  },
  {
    id: "ep-1",
    title: "The Medievals – EP 1",
    premiere: "2022-05-01",
    albumType: "EP",
    description: {
      pl: "Pierwsze wydawnictwo zespołu. Nagrania powstały w GOK Ustronie Morskie.",
      en: "The ensemble’s first release. Recorded at GOK Ustronie Morskie.",
      es: "El primer disco del ensemble. Grabado en GOK Ustronie Morskie.",
      it: "La prima pubblicazione dell’ensemble. Registrato al GOK Ustronie Morskie.",
    },
    credits: {
      pl: "Premiera 1.05.2022 · produkcja O&K Studio · realizacja Oskar Tracz",
      en: "Released 1 May 2022 · produced by O&K Studio · recorded by Oskar Tracz",
      es: "Estreno 1.05.2022 · producción O&K Studio · realización Oskar Tracz",
      it: "Uscita 1.05.2022 · produzione O&K Studio · realizzazione Oskar Tracz",
    },
  },
];

export function formatPremiere(isoDate: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));
}
