import type { Locale } from "@/lib/i18n/config";

export type ReviewQuote = {
  title?: string;
  text: string;
  author?: string;
  href: string;
  readLabel: string;
};

export type ReviewGroup = {
  lead: string;
  quotes: ReviewQuote[];
};

export type ReviewsCopy = {
  eyebrow: string;
  heading: string;
  groups: ReviewGroup[];
};

export const reviewsCopy: Record<Locale, ReviewsCopy> = {
  pl: {
    eyebrow: "Recenzje",
    heading: "Co piszą o The Medievals",
    groups: [
      {
        lead: "W 2025 roku płyta „Douce Musique” uzyskała pozytywną recenzję w prestiżowym Ruchu Muzycznym.",
        quotes: [
          {
            text: "(…) To świetny materiał eksportowy. Artyści wybierają chwytliwy repertuar, interpretują muzykę średniowieczną w dynamicznym, popularnym stylu. Grają dobrze i z pełną oprawą – od budzących ciekawość instrumentów, przez przyciągające oko ubiory, po działania edukacyjne. Na światowym poziomie.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Tu przeczytasz całość",
          },
          {
            title: "Mediewistyczny fiks",
            text: "Jeśli Herr Mannelig szwedzkiej rockowej Garmarny może mieć ponad 30 milionów wyświetleń na YouTube, nie widzę przeszkód, aby i The Medievals osiągnęli z czasem sukces.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Tu przeczytasz całość",
          },
        ],
      },
      {
        lead: "W 2026 roku ukazały się dwie recenzje koncertu The Medievals w Narodowym Forum Muzyki we Wrocławiu — w tym jedna w Ruchu Muzycznym. Zespół wystąpił w ramach Festiwalu Forum Musicum.",
        quotes: [
          {
            text: "(…) Nie trzeba wiele analizować. Słuchało się z ogromną przyjemnością. (…) Wyszedłem szczerze uradowany — nie tylko z powodu wykonań, ale i, co chyba jeszcze ważniejsze, autentyczności wykonawców. (…) Wierzę, że zaangażowanie i wiedza artystów znacznie przekraczały to, co mogli pokazać pod wpływem tak wielkich emocji, do których zresztą sami się przyznali. Pojawiło się i zakłopotanie, i wzruszenie, i wdzięczność, i humor, lecz dzięki temu dali się polubić od pierwszych słów. (…)",
            author: "Aleks Stadnicki",
            href: "https://www.facebook.com/share/p/1DV1JoErS7/?mibextid=wwXIfr",
            readLabel: "Tu przeczytasz całość",
          },
          {
            text: "(…) The Medievals nie kryli przejęcia swoim pierwszym występem w Narodowym Forum Muzyki. Prowadzące koncert Adrianna Ciemińska i Karina Raźnikiewicz-Sierka dzieliły się wiedzą o instrumentach i strojach oraz opowiadały o utworach w sposób niepozostawiający wątpliwości, że działalność grupy wypływa z pasji i prawdziwych emocji. (…)",
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0EgwADh7yf5AUZeqAfSekPXg2azrdfzAUuj74JfyrPq9B1cuxkyFxqGFtFZupZ7Rcl&id=100001627946245",
            readLabel: "Tu przeczytasz całość",
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: "Reviews",
    heading: "What critics say about The Medievals",
    groups: [
      {
        lead: "In 2025 the album “Douce Musique” received a favourable review in the prestigious Ruch Muzyczny.",
        quotes: [
          {
            text: "(…) Excellent export material. The artists choose catchy repertoire and interpret medieval music in a dynamic, popular style. They play well and with a full package — from intriguing instruments, through eye-catching dress, to educational work. World-class.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Read the full review",
          },
          {
            title: "A medievalist fix",
            text: "If Herr Mannelig by the Swedish rock band Garmarna can pass 30 million YouTube views, I see no reason why The Medievals should not, in time, find success too.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Read the full review",
          },
        ],
      },
      {
        lead: "In 2026 two reviews appeared of The Medievals’ concert at the National Forum of Music in Wrocław — including one in Ruch Muzyczny. The ensemble performed as part of the Forum Musicum Festival.",
        quotes: [
          {
            text: "(…) Little analysis is needed. It was a pleasure to listen. (…) I left genuinely delighted — not only by the performances, but, perhaps more importantly, by the authenticity of the performers. (…) I believe the artists’ commitment and knowledge went far beyond what they could show under such emotion, which they themselves admitted. There was awkwardness, and emotion, and gratitude, and humour — and that made them likable from the first words. (…)",
            author: "Aleks Stadnicki",
            href: "https://www.facebook.com/share/p/1DV1JoErS7/?mibextid=wwXIfr",
            readLabel: "Read the full review",
          },
          {
            text: "(…) The Medievals did not hide how moved they were by their first appearance at the National Forum of Music. Hosts Adrianna Ciemińska and Karina Raźnikiewicz-Sierka shared knowledge of instruments and dress and spoke about the pieces in a way that left no doubt the group’s work comes from passion and real feeling. (…)",
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0EgwADh7yf5AUZeqAfSekPXg2azrdfzAUuj74JfyrPq9B1cuxkyFxqGFtFZupZ7Rcl&id=100001627946245",
            readLabel: "Read the full review",
          },
        ],
      },
    ],
  },
  es: {
    eyebrow: "Críticas",
    heading: "Qué dicen de The Medievals",
    groups: [
      {
        lead: "En 2025 el disco «Douce Musique» recibió una crítica favorable en el prestigioso Ruch Muzyczny.",
        quotes: [
          {
            text: "(…) Excelente material de exportación. Los artistas eligen un repertorio atractivo e interpretan la música medieval con un estilo dinámico y popular. Tocan bien y con una puesta en escena completa: instrumentos que despiertan curiosidad, indumentaria que atrae la mirada y labor educativa. A nivel mundial.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Leer la crítica completa",
          },
          {
            title: "Fijación medievalista",
            text: "Si Herr Mannelig de la banda sueca Garmarna puede superar 30 millones de visitas en YouTube, no veo obstáculo para que The Medievals también logren con el tiempo su éxito.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Leer la crítica completa",
          },
        ],
      },
      {
        lead: "En 2026 aparecieron dos críticas del concierto de The Medievals en el Foro Nacional de Música de Wrocław — una de ellas en Ruch Muzyczny. El ensemble actuó en el Festival Forum Musicum.",
        quotes: [
          {
            text: "(…) No hace falta analizar mucho. Se escuchó con enorme placer. (…) Salí sinceramente contento: no solo por las interpretaciones, sino, quizá aún más, por la autenticidad de los intérpretes. (…) Creo que el compromiso y el saber de los artistas superaban con creces lo que pudieron mostrar bajo tanta emoción, que ellos mismos admitieron. Hubo turbación, emoción, gratitud y humor, y por eso resultaron simpáticos desde las primeras palabras. (…)",
            author: "Aleks Stadnicki",
            href: "https://www.facebook.com/share/p/1DV1JoErS7/?mibextid=wwXIfr",
            readLabel: "Leer la crítica completa",
          },
          {
            text: "(…) The Medievals no ocultaron la emoción de su primera actuación en el Foro Nacional de Música. Adrianna Ciemińska y Karina Raźnikiewicz-Sierka compartieron conocimiento sobre instrumentos e indumentaria y hablaron de las piezas de un modo que no dejaba duda: el trabajo del grupo nace de la pasión y de emociones reales. (…)",
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0EgwADh7yf5AUZeqAfSekPXg2azrdfzAUuj74JfyrPq9B1cuxkyFxqGFtFZupZ7Rcl&id=100001627946245",
            readLabel: "Leer la crítica completa",
          },
        ],
      },
    ],
  },
  it: {
    eyebrow: "Recensioni",
    heading: "Cosa scrivono su The Medievals",
    groups: [
      {
        lead: "Nel 2025 l’album «Douce Musique» ha ricevuto una recensione positiva sul prestigioso Ruch Muzyczny.",
        quotes: [
          {
            text: "(…) Ottimo materiale da esportazione. Gli artisti scelgono un repertorio accattivante e interpretano la musica medievale in uno stile dinamico e popolare. Suonano bene e con un allestimento completo: strumenti che destano curiosità, abiti che catturano lo sguardo, attività educative. Di livello mondiale.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Leggi la recensione completa",
          },
          {
            title: "Fissazione medievalista",
            text: "Se Herr Mannelig della rock band svedese Garmarna può superare 30 milioni di visualizzazioni su YouTube, non vedo ostacoli perché anche The Medievals raggiungano col tempo il successo.",
            author: "Katarzyna Ryzel",
            href: "https://ruchmuzyczny.pl/article/5821",
            readLabel: "Leggi la recensione completa",
          },
        ],
      },
      {
        lead: "Nel 2026 sono uscite due recensioni del concerto di The Medievals al Forum Nazionale della Musica di Wrocław — una sul Ruch Muzyczny. L’ensemble si è esibito nel Festival Forum Musicum.",
        quotes: [
          {
            text: "(…) Non serve analizzare molto. Si ascoltava con enorme piacere. (…) Sono uscito sinceramente lieto: non solo per le esecuzioni, ma, forse ancora di più, per l’autenticità degli interpreti. (…) Credo che l’impegno e la conoscenza degli artisti andassero ben oltre ciò che potevano mostrare sotto emozioni così forti, che loro stessi hanno ammesso. C’erano imbarazzo, commozione, gratitudine e umorismo — e così si sono fatti voler bene dalle prime parole. (…)",
            author: "Aleks Stadnicki",
            href: "https://www.facebook.com/share/p/1DV1JoErS7/?mibextid=wwXIfr",
            readLabel: "Leggi la recensione completa",
          },
          {
            text: "(…) The Medievals non nascondevano l’emozione del loro primo concerto al Forum Nazionale della Musica. Adrianna Ciemińska e Karina Raźnikiewicz-Sierka condividevano conoscenze su strumenti e costumi e parlavano dei brani in un modo che non lasciava dubbi: l’attività del gruppo nasce da passione ed emozioni vere. (…)",
            href: "https://m.facebook.com/story.php?story_fbid=pfbid0EgwADh7yf5AUZeqAfSekPXg2azrdfzAUuj74JfyrPq9B1cuxkyFxqGFtFZupZ7Rcl&id=100001627946245",
            readLabel: "Leggi la recensione completa",
          },
        ],
      },
    ],
  },
};
