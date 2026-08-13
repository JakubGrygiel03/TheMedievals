export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    members: string;
    media: string;
    tour: string;
    offer: string;
    book: string;
    contact: string;
  };
  hero: {
    heading: string;
    kicker: string;
    lineup: string;
    titleLead: string;
    titleMain: string;
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    goldWord: string;
    lead: string;
    instrumentsLabel: string;
  };
  members: {
    eyebrow: string;
    heading: string;
    lead: string;
    flipHint: string;
  };
  repertoire: {
    eyebrow: string;
    heading: string;
  };
  media: {
    eyebrow: string;
    heading: string;
    goldWord: string;
    listen: string;
    premiere: string;
    playerHeading: string;
    playerLead: string;
    youtube: string;
    youtubeSoon: string;
  };
  tour: {
    eyebrow: string;
    heading: string;
    empty: string;
    request: string;
    past: string;
    tickets: string;
  };
  offer: {
    eyebrow: string;
    heading: string;
    goldWord: string;
  };
  organizers: {
    eyebrow: string;
    heading: string;
    cta: string;
    rider: string;
    stagePlan: string;
  };
  booking: {
    eyebrow: string;
    heading: string;
    goldWord: string;
    lead: string;
    cta: string;
  };
  contact: {
    heading: string;
    lead: string;
    name: string;
    email: string;
    phone: string;
    eventType: string;
    eventDate: string;
    location: string;
    message: string;
    submit: string;
    success: string;
    error: string;
    missingBackend: string;
    types: {
      concert: string;
      historical_event: string;
      wedding: string;
      workshop: string;
      other: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
  a11y: {
    skipToContent: string;
    toggleNight: string;
    toggleDay: string;
    language: string;
  };
};
