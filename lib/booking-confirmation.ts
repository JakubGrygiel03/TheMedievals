import type { Locale } from "@/lib/i18n/config";
import type { ContactInput } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/seo/site";

type ConfirmationMail = {
  subject: string;
  text: string;
};

const kindLabels: Record<Locale, Record<ContactInput["event_type"], string>> = {
  pl: {
    concert: "festiwal, turniej, rekonstrukcja",
    historical_event: "zamek, muzeum, koncert",
    fair: "jarmark / piknik historyczny",
    wedding: "ślub, wesele, uroczystość",
    corporate: "impreza firmowa",
    workshop: "warsztat tańca",
    other: "inne",
  },
  en: {
    concert: "festival, tournament, reenactment",
    historical_event: "castle, museum, concert",
    fair: "historical fair / picnic",
    wedding: "wedding or ceremony",
    corporate: "corporate event",
    workshop: "dance workshop",
    other: "other",
  },
  es: {
    concert: "festival, torneo, recreación",
    historical_event: "castillo, museo, concierto",
    fair: "feria / merienda histórica",
    wedding: "boda o ceremonia",
    corporate: "evento de empresa",
    workshop: "taller de danza",
    other: "otro",
  },
  it: {
    concert: "festival, torneo, rievocazione",
    historical_event: "castello, museo, concerto",
    fair: "fiera / picnic storico",
    wedding: "matrimonio o cerimonia",
    corporate: "evento aziendale",
    workshop: "laboratorio di danza",
    other: "altro",
  },
};

export function bookingConfirmationMail(
  input: ContactInput,
  lang: Locale,
): ConfirmationMail {
  const kind = kindLabels[lang][input.event_type];

  if (lang === "en") {
    return {
      subject: "We received your enquiry — The Medievals",
      text: [
        `Dear ${input.sender_name},`,
        "",
        "Thank you for writing to The Medievals. Your enquiry has arrived safely.",
        "",
        "What happens next:",
        "• we read your message and check the date against our calendar,",
        "• within 48 hours we reply to this email with availability and the next steps,",
        "• if the date works, we agree the programme, fee and production details.",
        "",
        "Your enquiry:",
        `• type of event: ${kind}`,
        `• date: ${input.event_date || "not given"}`,
        `• place: ${input.location || "not given"}`,
        "",
        "If anything changes, just reply to this message.",
        "",
        "Warm regards,",
        "The Medievals",
        siteConfig.email,
        siteConfig.url,
      ].join("\n"),
    };
  }

  if (lang === "es") {
    return {
      subject: "Hemos recibido vuestra consulta — The Medievals",
      text: [
        `Hola ${input.sender_name},`,
        "",
        "Gracias por escribir a The Medievals. Vuestra consulta ha llegado correctamente.",
        "",
        "Qué pasa ahora:",
        "• leemos el mensaje y comprobamos la fecha en el calendario,",
        "• en un plazo de 48 horas respondemos a este correo con disponibilidad y los siguientes pasos,",
        "• si la fecha encaja, acordamos programa, honorarios y detalles de producción.",
        "",
        "Vuestra consulta:",
        `• tipo de evento: ${kind}`,
        `• fecha: ${input.event_date || "no indicada"}`,
        `• lugar: ${input.location || "no indicado"}`,
        "",
        "Si algo cambia, responded a este mensaje.",
        "",
        "Un saludo cordial,",
        "The Medievals",
        siteConfig.email,
        siteConfig.url,
      ].join("\n"),
    };
  }

  if (lang === "it") {
    return {
      subject: "Abbiamo ricevuto la vostra richiesta — The Medievals",
      text: [
        `Gentile ${input.sender_name},`,
        "",
        "Grazie per aver scritto a The Medievals. La vostra richiesta è arrivata correttamente.",
        "",
        "Cosa succede ora:",
        "• leggiamo il messaggio e controlliamo la data sul calendario,",
        "• entro 48 ore rispondiamo a questa email con disponibilità e i passi successivi,",
        "• se la data va bene, definiamo programma, compenso e dettagli di produzione.",
        "",
        "La vostra richiesta:",
        `• tipo di evento: ${kind}`,
        `• data: ${input.event_date || "non indicata"}`,
        `• luogo: ${input.location || "non indicato"}`,
        "",
        "Se qualcosa cambia, rispondete pure a questo messaggio.",
        "",
        "Cordiali saluti,",
        "The Medievals",
        siteConfig.email,
        siteConfig.url,
      ].join("\n"),
    };
  }

  return {
    subject: "Otrzymaliśmy Wasze zapytanie — The Medievals",
    text: [
      `Dzień dobry ${input.sender_name},`,
      "",
      "Dziękujemy za wiadomość do The Medievals. Zapytanie dotarło do nas poprawnie.",
      "",
      "Co się teraz stanie:",
      "• przeczytamy wiadomość i sprawdzimy termin w kalendarzu,",
      "• w ciągu 48 godzin odpowiemy na ten e-mail z informacją o dostępności i kolejnych krokach,",
      "• jeśli data będzie wolna, ustalimy program, warunki i szczegóły produkcji.",
      "",
      "Wasze zapytanie:",
      `• rodzaj wydarzenia: ${kind}`,
      `• data: ${input.event_date || "nie podano"}`,
      `• miejsce: ${input.location || "nie podano"}`,
      "",
      "Jeśli coś się zmieni — wystarczy odpowiedzieć na tę wiadomość.",
      "",
      "Pozdrawiamy serdecznie,",
      "The Medievals",
      siteConfig.email,
      siteConfig.url,
    ].join("\n"),
  };
}
