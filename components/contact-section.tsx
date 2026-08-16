import { ContactForm } from "@/components/contact-form";
import { DirectContact } from "@/components/direct-contact";
import { FolioSection } from "@/components/ui/folio-section";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type ContactSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function ContactSection({ lang, dictionary }: ContactSectionProps) {
  return (
    <FolioSection id="kontakt" heading={dictionary.contact.heading} tone="letter" reveal={false}>
      <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.contact.lead}
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(17rem,22rem)_minmax(0,1fr)] lg:items-stretch">
        <DirectContact dictionary={dictionary} tall />
        <div className="lg:flex lg:flex-col lg:justify-center">
          <ContactForm lang={lang} dictionary={dictionary} />
        </div>
      </div>
    </FolioSection>
  );
}
