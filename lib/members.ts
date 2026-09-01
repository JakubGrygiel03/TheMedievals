import type { Locale } from "@/lib/i18n/config";

export type Localized = Record<Locale, string>;

export type MemberId =
  | "adrianna"
  | "karina"
  | "liubou"
  | "aleksander"
  | "jakub";

export type PercussionistId = "paulina" | "cezary" | "tiago";

export type PhotoPersonId = MemberId | PercussionistId;

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
    name: "Karina Raźnikiewicz-Sierka",
    instrument: {
      pl: "śpiew główny, vielle sopranowa",
      en: "lead voice, soprano vielle",
      es: "voz principal, vielle soprano",
      it: "voce principale, vielle soprano",
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

export function memberName(id: MemberId): string {
  return members.find((member) => member.id === id)?.name ?? id;
}

const percussionistNames: Record<PercussionistId, string> = {
  paulina: "Paulina Andrzejak",
  cezary: "Cezary Łagan",
  tiago: "Tiago Matos",
};

export function photoPersonName(id: PhotoPersonId): string {
  if (id in percussionistNames) {
    return percussionistNames[id as PercussionistId];
  }
  return memberName(id as MemberId);
}

export function photoPersonFirstName(id: PhotoPersonId): string {
  return photoPersonName(id).split(" ")[0] ?? photoPersonName(id);
}

export const percussionists = {
  names: ["Paulina Andrzejak", "Cezary Łagan", "Tiago Matos"],
  instrument: {
    pl: "bęben obręczowy",
    en: "frame drum",
    es: "tambor de marco",
    it: "tamburo a cornice",
  } satisfies Localized,
  note: {
    pl: "Muzycy sesyjni:",
    en: "Session musicians:",
    es: "Músicos de sesión:",
    it: "Musicisti di sessione:",
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
    jobTitle: percussionists.instrument[lang],
  }));

  return [...core, ...drums];
}
