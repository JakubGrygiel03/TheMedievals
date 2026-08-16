"use client";

import { logPhoneClick } from "@/app/actions/phone-request";

type PhoneCallLinkProps = {
  href: string;
  label: string;
};

export function PhoneCallLink({ href, label }: PhoneCallLinkProps) {
  return (
    <a
      className="hover:text-vermilion"
      href={href}
      onClick={() => {
        void logPhoneClick(
          typeof window === "undefined"
            ? ""
            : `${window.location.pathname}${window.location.hash}`,
        );
      }}
    >
      {label}
    </a>
  );
}
