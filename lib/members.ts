import type { Locale } from "@/lib/i18n/config";

export type Localized = Record<Locale, string>;

export type MemberId =
  | "adrianna"
  | "karina"
  | "liubou"
  | "aleksander"
  | "jakub";

export type Member = {
  id: MemberId;
  name: string;
  instrument: Localized;
};

export const members: Member[] = [
  {
    id: "adrianna",
    name: "Adrianna Ciemińska",
    instrument: {
      pl: "vielle tenorowa, śpiew",
      en: "tenor vielle, voice",
      es: "vielle tenor, voz",
      it: "vielle tenore, voce",
    },
  },
  {
    id: "karina",
    name: "Karina Raźnikiewicz",
    instrument: {
      pl: "śpiew, vielle altowa",
      en: "voice, alto vielle",
      es: "voz, vielle alto",
      it: "voce, vielle contralto",
    },
  },
  {
    id: "liubou",
    name: "Liubou Tsudzila",
    instrument: {
      pl: "flety proste, szałamaja, śpiew",
      en: "recorders, shawm, voice",
      es: "flautas dulces, chirimía, voz",
      it: "flauti dritti, cennamella, voce",
    },
  },
  {
    id: "aleksander",
    name: "Aleksander Brych",
    instrument: {
      pl: "flety proste",
      en: "recorders",
      es: "flautas dulces",
      it: "flauti dritti",
    },
  },
  {
    id: "jakub",
    name: "Jakub Grygiel",
    instrument: {
      pl: "gitterna, lutnia, śpiew",
      en: "gittern, lute, voice",
      es: "gitterna, laúd, voz",
      it: "gittern, liuto, voce",
    },
  },
];

export const percussionists = {
  names: ["Paulina Andrzejak", "Cezary Łagan", "Tiago Ragna"],
  instrument: {
    pl: "bęben",
    en: "drum",
    es: "tambor",
    it: "tamburo",
  } satisfies Localized,
  note: {
    pl: "Na koncercie gra jedna z tych osób na bębnie.",
    en: "One of these people plays the drum at each concert.",
    es: "En cada concierto toca el tambor una de estas personas.",
    it: "A ogni concerto suona il tamburo una di queste persone.",
  } satisfies Localized,
};

export function schemaMembers(lang: Locale) {
  const core = members.map((member) => ({
    "@type": "Person" as const,
    name: member.name,
    jobTitle: member.instrument[lang],
  }));

  const drums = percussionists.names.map((name) => ({
    "@type": "Person" as const,
    name,
    jobTitle: `${percussionists.instrument[lang]} (${percussionists.note[lang]})`,
  }));

  return [...core, ...drums];
}
