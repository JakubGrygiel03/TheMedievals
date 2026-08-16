export const eventLabels = {
  concert: "Festiwal, turniej, rekonstrukcja",
  historical_event: "Zamek, muzeum, koncert",
  fair: "Jarmark / piknik historyczny",
  wedding: "Ślub, wesele, uroczystość",
  corporate: "Impreza firmowa",
  workshop: "Warsztat tańca",
  other: "Inne",
} as const;

export const statusLabels = {
  new: "Nowe",
  contacted: "W kontakcie",
  confirmed: "Potwierdzone — prowizja",
  archived: "Archiwum",
} as const;

export const statusOptions = Object.entries(statusLabels) as [
  keyof typeof statusLabels,
  string,
][];
