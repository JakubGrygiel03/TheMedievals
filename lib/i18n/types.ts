export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
    contactDescription: string;
    pressDescription: string;
  };
  nav: {
    home: string;
    about: string;
    members: string;
    media: string;
    offer: string;
    contact: string;
    gallery: string;
    program: string;
    press: string;
  };
  hero: {
    heading: string;
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    instrumentsLabel: string;
    profileHeading: string;
    craftHeading: string;
  };
  members: {
    eyebrow: string;
    heading: string;
    lead: string;
    coreHeading: string;
    percussionHeading: string;
  };
  repertoire: {
    eyebrow: string;
    heading: string;
    expand: string;
    collapse: string;
  };
  media: {
    eyebrow: string;
    heading: string;
    listen: string;
    premiere: string;
    playerHeading: string;
    playerLead: string;
  };
  offer: {
    eyebrow: string;
    heading: string;
  };
  organizers: {
    eyebrow: string;
    heading: string;
    lead: string;
    rider: string;
    pressNote: string;
    photos: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    lead: string;
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
    direct: string;
    directPhone: string;
    revealLead: string;
    revealPhone: string;
    revealHint: string;
    revealOrg: string;
    revealSubmit: string;
    revealCancel: string;
    revealShown: string;
    errors: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    privacyNote: string;
    privacyLink: string;
    types: {
      concert: string;
      historical_event: string;
      fair: string;
      wedding: string;
      corporate: string;
      workshop: string;
      other: string;
    };
  };
  footer: {
    tagline: string;
    privacy: string;
  };
  a11y: {
    skipToContent: string;
    toggleNight: string;
    toggleDay: string;
    language: string;
    menu: string;
    closeMenu: string;
    back: string;
  };
};
