import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { it } from "./dictionaries/it";
import { pl } from "./dictionaries/pl";

const dictionaries: Record<Locale, Dictionary> = { pl, en, es, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
