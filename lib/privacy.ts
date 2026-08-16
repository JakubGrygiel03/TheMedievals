import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/seo/site";

export type PrivacySection = {
  title: string;
  paragraphs: string[];
};

export type PrivacyCopy = {
  heading: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
};

export const privacyCopy: Record<Locale, PrivacyCopy> = {
  pl: {
    heading: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: 16 sierpnia 2026 r.",
    intro:
      "Ta informacja opisuje, jak zespół The Medievals przetwarza dane osobowe, gdy korzystacie ze strony i formularza bookingowego. Piszemy wprost o tym, co naprawdę robimy — bez profilowania reklamowego i bez sprzedaży danych.",
    sections: [
      {
        title: "Administrator",
        paragraphs: [
          `Administratorem danych jest zespół The Medievals. W sprawach prywatności piszcie na ${siteConfig.email}. Korespondencję bookingową odbieramy na skrzynce zespołu.`,
        ],
      },
      {
        title: "Jakie dane zbieramy",
        paragraphs: [
          "Z formularza kontaktowego: imię i nazwisko, adres e-mail, opcjonalnie telefon, rodzaj wydarzenia, data, miejsce oraz treść zapytania.",
          "Po kliknięciu numeru telefonu na stronie zapisujemy fakt kliknięcia i adres podstrony — nie znamy nazwiska dzwoniącego ani numeru, z którego dzwoni.",
          "Serwer hostingu może rejestrować typowe logi techniczne (np. adres IP, przeglądarka), potrzebne do działania i bezpieczeństwa strony.",
        ],
      },
      {
        title: "Po co i na jakiej podstawie",
        paragraphs: [
          "Dane z formularza służą do odpowiedzi na zapytanie, wyceny i umówienia występu. Podstawa: art. 6 ust. 1 lit. b RODO — działania na Wasze żądanie przed zawarciem umowy.",
          "Informacja o kliknięciu telefonu pomaga nam wiedzieć, że ktoś chce zadzwonić. Podstawa: art. 6 ust. 1 lit. f RODO — uzasadniony interes zespołu w obsłudze zapytań.",
          "Nie używamy danych do newslettera, reklam ani automatycznego profilowania.",
        ],
      },
      {
        title: "Komu przekazujemy dane",
        paragraphs: [
          "Zapytania trafiają na skrzynkę zespołu oraz do osoby obsługującej booking. Wiadomości wysyłamy przez usługę pocztową Resend. Strona działa na hostingu Vercel.",
          "Jeśli podłączona jest baza, zapytanie może zostać zapisane, żeby nie zgubić korespondencji. Nie sprzedajemy danych i nie udostępniamy ich w celach marketingowych.",
        ],
      },
      {
        title: "Jak długo trzymamy dane",
        paragraphs: [
          "Zapytania trzymamy tak długo, jak potrzeba do obsługi bookingu i związanej korespondencji — zwykle nie dłużej niż 24 miesiące od ostatniego kontaktu, chyba że dłuższy okres wynika z rozliczeń lub obowiązków prawnych.",
        ],
      },
      {
        title: "Pliki cookies",
        paragraphs: [
          "Publiczna strona nie używa cookies do śledzenia ani statystyk. Ewentualne ciasteczko logowania dotyczy wyłącznie panelu administratora i nie jest ustawiane odwiedzającym stronę zespołu.",
        ],
      },
      {
        title: "Wasze prawa",
        paragraphs: [
          "Możecie żądać dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, a także wnieść sprzeciw. Piszcie na adres podany wyżej.",
          "Macie też prawo skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO).",
        ],
      },
    ],
  },
  en: {
    heading: "Privacy policy",
    updated: "Last updated: 16 August 2026.",
    intro:
      "This notice explains how The Medievals processes personal data when you use the site and the booking form. We describe what we actually do — no ad profiling and no selling of data.",
    sections: [
      {
        title: "Controller",
        paragraphs: [
          `The data controller is the ensemble The Medievals. For privacy matters write to ${siteConfig.email}. Booking mail is received in the ensemble inbox.`,
        ],
      },
      {
        title: "What we collect",
        paragraphs: [
          "From the contact form: name, email address, optional phone number, type of event, date, place and the message.",
          "If you click the phone number on the site, we record that the number was clicked and which page it happened on — not the caller’s name or the number they call from.",
          "The hosting server may keep ordinary technical logs (for example IP address and browser) needed to run and secure the site.",
        ],
      },
      {
        title: "Why, and on what basis",
        paragraphs: [
          "Form data is used to answer the enquiry, quote and arrange a performance. Legal basis: GDPR Art. 6(1)(b) — steps at your request before entering a contract.",
          "A phone-click notice helps us know someone wants to call. Legal basis: GDPR Art. 6(1)(f) — our legitimate interest in handling enquiries.",
          "We do not use the data for a newsletter, ads or automated profiling.",
        ],
      },
      {
        title: "Who receives the data",
        paragraphs: [
          "Enquiries go to the ensemble inbox and to the person who handles booking. Email is sent through Resend. The site is hosted by Vercel.",
          "If a database is connected, the enquiry may be stored so correspondence is not lost. We do not sell data or share it for marketing.",
        ],
      },
      {
        title: "How long we keep it",
        paragraphs: [
          "We keep enquiries for as long as needed to handle the booking and related correspondence — usually no longer than 24 months from the last contact, unless accounts or the law require longer.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "The public site does not use cookies for tracking or analytics. A login cookie, if any, is only for the admin panel and is not set for visitors of the ensemble site.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "You may ask for access, correction, erasure, restriction of processing, or object. Write to the address above.",
          "You may also lodge a complaint with your national data-protection authority (in Poland: UODO).",
        ],
      },
    ],
  },
  es: {
    heading: "Política de privacidad",
    updated: "Última actualización: 16 de agosto de 2026.",
    intro:
      "Esta información describe cómo The Medievals trata los datos personales cuando usáis el sitio y el formulario de reserva. Contamos lo que realmente hacemos: sin perfilado publicitario y sin venta de datos.",
    sections: [
      {
        title: "Responsable",
        paragraphs: [
          `El responsable del tratamiento es el ensemble The Medievals. Para privacidad escribid a ${siteConfig.email}. El correo de reservas llega al buzón del conjunto.`,
        ],
      },
      {
        title: "Qué datos recogemos",
        paragraphs: [
          "Del formulario: nombre, correo, teléfono opcional, tipo de evento, fecha, lugar y el mensaje.",
          "Si se pulsa el teléfono en la web, registramos el clic y la página — no el nombre de quien llama ni el número desde el que llama.",
          "El servidor de alojamiento puede guardar registros técnicos habituales (por ejemplo IP y navegador) para el funcionamiento y la seguridad.",
        ],
      },
      {
        title: "Para qué y con qué base",
        paragraphs: [
          "Los datos del formulario sirven para responder, presupuestar y concertar una actuación. Base: art. 6.1.b del RGPD — medidas a petición vuestra antes de un contrato.",
          "El aviso de clic en el teléfono nos indica que alguien quiere llamar. Base: art. 6.1.f del RGPD — interés legítimo en atender consultas.",
          "No usamos los datos para boletín, publicidad ni elaboración automatizada de perfiles.",
        ],
      },
      {
        title: "Quién recibe los datos",
        paragraphs: [
          "Las consultas van al buzón del ensemble y a quien gestiona las reservas. El correo se envía con Resend. El sitio está alojado en Vercel.",
          "Si hay base de datos, la consulta puede guardarse para no perder la correspondencia. No vendemos datos ni los cedemos con fines de marketing.",
        ],
      },
      {
        title: "Cuánto tiempo los conservamos",
        paragraphs: [
          "Conservamos las consultas el tiempo necesario para la reserva y la correspondencia — normalmente no más de 24 meses desde el último contacto, salvo obligaciones contables o legales.",
        ],
      },
      {
        title: "Cookies",
        paragraphs: [
          "El sitio público no usa cookies de seguimiento ni de estadísticas. Una cookie de inicio de sesión, si existe, es solo del panel de administración.",
        ],
      },
      {
        title: "Vuestros derechos",
        paragraphs: [
          "Podéis pedir acceso, rectificación, supresión, limitación u oponeros. Escribid a la dirección indicada.",
          "También podéis reclamar ante la autoridad de protección de datos (en Polonia: UODO).",
        ],
      },
    ],
  },
  it: {
    heading: "Informativa sulla privacy",
    updated: "Ultimo aggiornamento: 16 agosto 2026.",
    intro:
      "Questa informativa descrive come The Medievals tratta i dati personali quando usate il sito e il modulo di prenotazione. Diciamo quello che facciamo davvero: niente profilazione pubblicitaria e niente vendita di dati.",
    sections: [
      {
        title: "Titolare",
        paragraphs: [
          `Titolare del trattamento è l’ensemble The Medievals. Per la privacy scrivete a ${siteConfig.email}. La posta di booking arriva alla casella del gruppo.`,
        ],
      },
      {
        title: "Quali dati raccogliamo",
        paragraphs: [
          "Dal modulo: nome, email, telefono facoltativo, tipo di evento, data, luogo e il messaggio.",
          "Se cliccate il numero di telefono sul sito, registriamo il clic e la pagina — non il nome di chi chiama né il numero da cui chiama.",
          "Il server di hosting può conservare log tecnici consueti (ad esempio IP e browser) per il funzionamento e la sicurezza.",
        ],
      },
      {
        title: "Perché e su quale base",
        paragraphs: [
          "I dati del modulo servono a rispondere, preventivare e organizzare l’esibizione. Base: art. 6, par. 1, lett. b GDPR — misure su vostra richiesta prima di un contratto.",
          "L’avviso di clic sul telefono ci dice che qualcuno vuole chiamare. Base: art. 6, par. 1, lett. f GDPR — legittimo interesse a gestire le richieste.",
          "Non usiamo i dati per newsletter, pubblicità o profilazione automatizzata.",
        ],
      },
      {
        title: "Chi riceve i dati",
        paragraphs: [
          "Le richieste arrivano alla casella dell’ensemble e a chi gestisce il booking. Le email partono tramite Resend. Il sito è ospitato su Vercel.",
          "Se è collegato un database, la richiesta può essere salvata per non perdere la corrispondenza. Non vendiamo i dati né li condividiamo a fini di marketing.",
        ],
      },
      {
        title: "Per quanto li conserviamo",
        paragraphs: [
          "Conserviamo le richieste per il tempo necessario al booking e alla corrispondenza — di solito non oltre 24 mesi dall’ultimo contatto, salvo obblighi contabili o di legge.",
        ],
      },
      {
        title: "Cookie",
        paragraphs: [
          "Il sito pubblico non usa cookie di tracciamento o statistica. Un eventuale cookie di accesso riguarda solo il pannello di amministrazione.",
        ],
      },
      {
        title: "I vostri diritti",
        paragraphs: [
          "Potete chiedere accesso, rettifica, cancellazione, limitazione o opporvi. Scrivete all’indirizzo sopra.",
          "Potete anche presentare reclamo all’autorità di protezione dei dati (in Polonia: UODO).",
        ],
      },
    ],
  },
};
