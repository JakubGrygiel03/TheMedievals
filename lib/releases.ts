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
      pl: "Na album składa się 10 kompozycji powstałych w średniowieczu, między XII a XVI wiekiem. Są to zarówno dzieła anonimowych twórców, jak i tych, o których historia muzyki pamięta do dziś. Melodie z Francji, Włoch, Szwecji oraz tradycyjna pieśń sefardyjska. Dominują formy wokalno-instrumentalne, pojawiają się także tańce — utwory dworów, domów mieszczan i karczm, zwykle o świeckim, frywolnym tekście.",
      en: "The album holds ten medieval compositions from the 12th to the 16th century: anonymous works and pieces still remembered by music history. Melodies from France, Italy and Sweden, plus a traditional Sephardic song. Vocal-instrumental forms dominate, with dances among them — music of courts, burgher homes and taverns, often secular and playful in text.",
      es: "El álbum reúne diez composiciones medievales entre los siglos XII y XVI: obras anónimas y otras que la historia de la música aún recuerda. Melodías de Francia, Italia y Suecia, y un canto sefardí tradicional. Dominan las formas vocal-instrumentales, con danzas: música de cortes, casas burguesas y tabernas, a menudo de texto profano y ligero.",
      it: "L’album raccoglie dieci composizioni medievali tra il XII e il XVI secolo: opere anonime e brani che la storia della musica ancora ricorda. Melodie da Francia, Italia e Svezia, e un canto sefardita tradizionale. Dominano le forme vocali-strumentali, con danze: musiche di corti, case borghesi e osterie, spesso di testo profano e giocoso.",
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
  {
    id: "la-serena",
    title: "The Medievals – La Serena",
    premiere: "2022-09-18",
    albumType: "EP",
    description: {
      pl: "Nagranie z projektu Academia Musica Judaica, zrealizowane na Akademii Muzycznej w Gdańsku pod opieką prof. dr. hab. Marcina Zdunika i dr Mai Miro.",
      en: "Recorded for Academia Musica Judaica at the Academy of Music in Gdańsk, supervised by Prof. Marcin Zdunik and Dr Maja Miro.",
      es: "Grabado para Academia Musica Judaica en la Academia de Música de Gdańsk, con la tutela del prof. Marcin Zdunik y la dra. Maja Miro.",
      it: "Registrato per Academia Musica Judaica all’Accademia di Musica di Gdańsk, sotto la guida del prof. Marcin Zdunik e della dott.ssa Maja Miro.",
    },
    credits: {
      pl: "Premiera 18.09.2022 · teledysk z występu na żywo",
      en: "Released 18 September 2022 · music video from a live act",
      es: "Estreno 18.09.2022 · videoclip de una actuación en vivo",
      it: "Uscita 18.09.2022 · videoclip da un’esibizione dal vivo",
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
