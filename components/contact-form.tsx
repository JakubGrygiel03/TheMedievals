"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContact } from "@/app/actions/contact";
import { CodexButton } from "@/components/ui/codex-button";
import {
  contactSchema,
  eventTypes,
  type ContactInput,
} from "@/lib/contact-schema";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type ContactFormProps = {
  dictionary: Dictionary;
  lang?: Locale;
};

export function ContactForm({ dictionary, lang = "pl" }: ContactFormProps) {
  const [resultKey, setResultKey] = useState<string | null>(null);
  const errorsCopy = dictionary.contact.errors;
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      sender_name: "",
      email: "",
      phone: "",
      event_type: "concert",
      event_date: "",
      location: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    const result = await submitContact(values, lang);
    if (result.ok) {
      reset();
      setResultKey(result.error === "mail" ? "mail" : "success");
      return;
    }
    setResultKey(result.error ?? "error");
  }

  const message =
    resultKey === "success"
      ? dictionary.contact.success
      : resultKey === "backend"
        ? dictionary.contact.missingBackend
        : resultKey
          ? dictionary.contact.error
          : null;

  return (
    <form
      className="contact-form grid gap-x-4 gap-y-3 sm:grid-cols-2"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        label={dictionary.contact.name}
        required
        error={errors.sender_name ? errorsCopy.name : undefined}
      >
        <input
          className="folio-input"
          autoComplete="name"
          autoCapitalize="words"
          maxLength={120}
          aria-invalid={errors.sender_name ? true : undefined}
          {...register("sender_name")}
        />
      </Field>
      <Field
        label={dictionary.contact.email}
        required
        error={errors.email ? errorsCopy.email : undefined}
      >
        <input
          type="email"
          className="folio-input"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          maxLength={254}
          aria-invalid={errors.email ? true : undefined}
          {...register("email")}
        />
      </Field>
      <Field
        label={dictionary.contact.phone}
        error={errors.phone ? errorsCopy.phone : undefined}
      >
        <input
          type="tel"
          className="folio-input"
          autoComplete="tel"
          inputMode="tel"
          maxLength={40}
          aria-invalid={errors.phone ? true : undefined}
          {...register("phone")}
        />
      </Field>
      <Field label={dictionary.contact.eventType} required>
        <select className="folio-input" {...register("event_type")}>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {dictionary.contact.types[type]}
            </option>
          ))}
        </select>
      </Field>
      <Field label={dictionary.contact.eventDate}>
        <input
          type="date"
          lang={lang}
          min={today}
          className="folio-input"
          {...register("event_date")}
        />
      </Field>
      <Field label={dictionary.contact.location}>
        <input
          className="folio-input"
          autoComplete="street-address"
          maxLength={160}
          {...register("location")}
        />
      </Field>
      <Field
        className="sm:col-span-2"
        label={dictionary.contact.message}
        required
        error={errors.message ? errorsCopy.message : undefined}
      >
        <textarea
          rows={4}
          className="folio-input"
          maxLength={4000}
          aria-invalid={errors.message ? true : undefined}
          {...register("message")}
        />
      </Field>
      <div className="sm:col-span-2">
        <CodexButton type="submit" disabled={isSubmitting}>
          {dictionary.contact.submit}
        </CodexButton>
        <p className="mt-2 text-sm leading-snug text-[var(--ink-soft)]">
          {dictionary.contact.privacyNote}{" "}
          <a href={`/${lang}/prywatnosc`} className="underline hover:text-vermilion">
            {dictionary.contact.privacyLink}
          </a>
          .
        </p>
        {message ? <p className="mt-2 text-sm italic">{message}</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 font-cinzel text-[0.72rem] tracking-wide ${className}`}>
      <span>
        {label}
        {required ? <span className="text-vermilion"> *</span> : null}
      </span>
      {children}
      {error ? (
        <span className="text-[0.78rem] font-bold normal-case tracking-normal text-vermilion">
          {error}
        </span>
      ) : null}
    </label>
  );
}
