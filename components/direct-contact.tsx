import { PhoneCallLink } from "@/components/phone-call-link";
import { formatContactPhone, telHref } from "@/lib/contact-phone";
import { siteConfig } from "@/lib/seo/site";
import type { Dictionary } from "@/lib/i18n/types";

type DirectContactProps = {
  dictionary: Dictionary;
  tall?: boolean;
};

export function DirectContact({ dictionary, tall = false }: DirectContactProps) {
  return (
    <div
      className={`direct-card folio-panel ${tall ? "direct-card-tall" : ""}`}
    >
      <p className="direct-card-kicker">{dictionary.contact.direct}</p>
      <div className="direct-card-body">
        <div className="direct-item">
          <span>{dictionary.contact.email}</span>
          <a href={`mailto:${siteConfig.inbox}`}>{siteConfig.email}</a>
        </div>
        <div className="direct-item">
          <span>{dictionary.contact.directPhone}</span>
          <PhoneCallLink href={telHref()} label={formatContactPhone()} />
        </div>
      </div>
      <ul className="direct-social">
        <li>
          <a href={siteConfig.social.instagram}>
            <InstagramIcon />
            Instagram
          </a>
        </li>
        <li>
          <a href={siteConfig.social.facebook}>
            <FacebookIcon />
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.6 8.4h2.1V5.5h-2.1c-2.4 0-4 1.5-4 4v1.6H8.5v2.9h2.1V20h3.1v-6h2.2l.5-2.9h-2.7V9.7c0-.8.4-1.3 1.9-1.3Z"
      />
    </svg>
  );
}
