import type { Locale } from "@/lib/i18n/config";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCopy = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

export const faqCopy: Record<Locale, FaqCopy> = {
  pl: {
    eyebrow: "Pytania",
    heading: "Zespół muzyki dawnej — pytania organizatorów",
    items: [
      {
        question: "Na jakich wydarzeniach gra The Medievals?",
        answer:
          "Koncerty muzyki dawnej na zamkach, festiwalach, turniejach rycerskich, jarmarkach i rekonstrukcjach historycznych. Robimy też oprawę muzyczną ślubów, biesiad, eventów tematycznych oraz warsztaty tańca dawnego.",
      },
      {
        question: "Jak zamówić koncert muzyki średniowiecznej?",
        answer:
          "Wypełnijcie formularz bookingowy: data, miejsce i rodzaj wydarzenia. Odpowiadamy w ciągu 48 godzin na contact@themedievals.pl. Na stronie są też rider, plan sceny i notka prasowa.",
      },
      {
        question: "Jaki repertuar usłyszy publiczność?",
        answer:
          "Program koncertu muzyki średniowiecznej obejmuje pieśni i tańce dworskie oraz plebejskie w językach oryginalnych — m.in. Machaut, Carmina Burana, Cantigas de Santa Maria i pieśni sefardyjskie. Nagrania są na Spotify i YouTube.",
      },
      {
        question: "Jakie utwory The Medievals ma na Spotify i YouTube?",
        answer:
          "Na Spotify i YouTube są m.in. Douce Dame Jolie, Schiarazula Marazula, Ai vis lo lop, Tourdion, Herr Mannelig, Je vivroie liement oraz Pochwała karczmy (In taberna quando sumus) z albumu 2025 i wcześniejszych EP.",
      },
    ],
  },
  en: {
    eyebrow: "Questions",
    heading: "Early music ensemble — organizer questions",
    items: [
      {
        question: "Which events do The Medievals perform at?",
        answer:
          "Medieval music concerts for castles, festivals, knightly tournaments, historical fairs and reenactments. We also provide music for weddings, feasts, themed events, and early-dance workshops.",
      },
      {
        question: "How do I book a medieval music concert?",
        answer:
          "Send the booking form with date, place and type of event. We reply within 48 hours at contact@themedievals.pl. The site also has a rider, stage plan and press note.",
      },
      {
        question: "What repertoire will the audience hear?",
        answer:
          "The programme covers courtly and popular songs and dances in original languages — including Machaut, Carmina Burana, Cantigas de Santa Maria and Sephardic songs. Recordings are on Spotify and YouTube.",
      },
      {
        question: "Which The Medievals songs are on Spotify and YouTube?",
        answer:
          "On Spotify and YouTube you can hear Douce Dame Jolie, Schiarazula Marazula, Ai vis lo lop, Tourdion, Herr Mannelig, Je vivroie liement and In taberna quando sumus from the 2025 album and earlier EPs.",
      },
    ],
  },
  es: {
    eyebrow: "Preguntas",
    heading: "Ensemble de música antigua — preguntas de organizadores",
    items: [
      {
        question: "¿En qué eventos actúa The Medievals?",
        answer:
          "Conciertos de música medieval en castillos, festivales, torneos, ferias y recreaciones históricas. También música para bodas, festines, eventos temáticos y talleres de danza antigua.",
      },
      {
        question: "¿Cómo reservar un concierto de música medieval?",
        answer:
          "Enviad el formulario con fecha, lugar y tipo de evento. Respondemos en 48 horas en contact@themedievals.pl. En la web hay rider, plano de escenario y nota de prensa.",
      },
      {
        question: "¿Qué repertorio escuchará el público?",
        answer:
          "El programa incluye canciones y danzas cortesanas y populares en lenguas originales: Machaut, Carmina Burana, Cantigas de Santa Maria y cantos sefardíes. Las grabaciones están en Spotify y YouTube.",
      },
      {
        question: "¿Qué canciones de The Medievals hay en Spotify y YouTube?",
        answer:
          "En Spotify y YouTube suenan Douce Dame Jolie, Schiarazula Marazula, Ai vis lo lop, Tourdion, Herr Mannelig, Je vivroie liement e In taberna quando sumus del álbum 2025 y EP anteriores.",
      },
    ],
  },
  it: {
    eyebrow: "Domande",
    heading: "Ensemble di musica antica — domande degli organizzatori",
    items: [
      {
        question: "In quali eventi suona The Medievals?",
        answer:
          "Concerti di musica medievale per castelli, festival, tornei, fiere e rievocazioni. Facciamo anche musica per matrimoni, conviti, eventi a tema e laboratori di danza antica.",
      },
      {
        question: "Come si prenota un concerto di musica medievale?",
        answer:
          "Inviate il modulo con data, luogo e tipo di evento. Rispondiamo entro 48 ore a contact@themedievals.pl. Sul sito ci sono rider, pianta palco e nota stampa.",
      },
      {
        question: "Quale repertorio ascolterà il pubblico?",
        answer:
          "Il programma comprende canti e danze di corte e popolari nelle lingue originali: Machaut, Carmina Burana, Cantigas de Santa Maria e canti sefarditi. Le registrazioni sono su Spotify e YouTube.",
      },
      {
        question: "Quali brani di The Medievals ci sono su Spotify e YouTube?",
        answer:
          "Su Spotify e YouTube trovate Douce Dame Jolie, Schiarazula Marazula, Ai vis lo lop, Tourdion, Herr Mannelig, Je vivroie liement e In taberna quando sumus dall’album 2025 e dai precedenti EP.",
      },
    ],
  },
};
