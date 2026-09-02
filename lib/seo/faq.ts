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
        question: "Czym jest zespół muzyki dawnej The Medievals?",
        answer:
          "The Medievals to zespół muzyki dawnej i średniowiecznej: sześcioro zawodowych muzyków odtwarza muzykę oraz stroje od XIII do XV wieku. Gramy na rzemieślniczych replikach instrumentów — m.in. vielle, gitternie, flety, szałamaja i bęben obręczowy.",
      },
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
    ],
  },
  en: {
    eyebrow: "Questions",
    heading: "Early music ensemble — organizer questions",
    items: [
      {
        question: "What is The Medievals early music ensemble?",
        answer:
          "The Medievals is an early and medieval music ensemble: six professional musicians recreating music and dress from the 13th to the 15th century, on artisan replica instruments such as vielle, gittern, recorders, shawm and frame drum.",
      },
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
    ],
  },
  es: {
    eyebrow: "Preguntas",
    heading: "Ensemble de música antigua — preguntas de organizadores",
    items: [
      {
        question: "¿Qué es el ensemble de música antigua The Medievals?",
        answer:
          "The Medievals es un ensemble de música antigua y medieval: seis músicos profesionales recrean música e indumentaria de los siglos XIII al XV, con réplicas artesanales (vielle, gitterna, flautas, chirimía y tambor de marco).",
      },
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
    ],
  },
  it: {
    eyebrow: "Domande",
    heading: "Ensemble di musica antica — domande degli organizzatori",
    items: [
      {
        question: "Che cos’è l’ensemble di musica antica The Medievals?",
        answer:
          "The Medievals è un ensemble di musica antica e medievale: sei musicisti professionisti ricostruiscono musica e abiti dal XIII al XV secolo, su repliche artigianali (vielle, gittern, flauti, cennamella e tamburo a cornice).",
      },
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
    ],
  },
};
