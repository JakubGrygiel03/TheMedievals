import type { Locale } from "@/lib/i18n/config";

export type Localized = Record<Locale, string>;

export type MemberId =
  | "adrianna"
  | "karina"
  | "liubou"
  | "aleksander"
  | "tiago"
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
    name: "Aleksander",
    instrument: {
      pl: "flety proste",
      en: "recorders",
      es: "flautas dulces",
      it: "flauti dritti",
    },
  },
  {
    id: "tiago",
    name: "Tiago Ragna",
    instrument: {
      pl: "bęben",
      en: "drum",
      es: "tambor",
      it: "tamburo",
    },
  },
  {
    id: "jakub",
    name: "Jakub Grygiel",
    instrument: {
      pl: "gitterna, śpiew",
      en: "gittern, voice",
      es: "gitterna, voz",
      it: "gittern, voce",
    },
  },
];
