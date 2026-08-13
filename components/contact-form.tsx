"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContact } from "@/app/actions/contact";
import { CodexButton } from "@/components/ui/codex-button";
import {
  contactSchema,
  eventTypes,
  type ContactInput,
} from "@/lib/contact-schema";
import type { Dictionary } from "@/lib/i18n/types";

type ContactFormProps = {
  dictionary: Dictionary;
};

export function ContactForm({ dictionary }: ContactFormProps) {
  const [resultKey, setResultKey] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { event_type: "concert" },
  });

  async function onSubmit(values: ContactInput) {
    const result = await submitContact(values);
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
    <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Field label={dictionary.contact.name} error={errors.sender_name?.message}>
        <input className="folio-input" {...register("sender_name")} />
      </Field>
      <Field label={dictionary.contact.email} error={errors.email?.message}>
        <input type="email" className="folio-input" {...register("email")} />
      </Field>
      <Field label={dictionary.contact.phone}>
        <input className="folio-input" {...register("phone")} />
      </Field>
      <Field label={dictionary.contact.eventType}>
        <select className="folio-input" {...register("event_type")}>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {dictionary.contact.types[type]}
            </option>
          ))}
        </select>
      </Field>
      <Field label={dictionary.contact.eventDate}>
        <input type="date" className="folio-input" {...register("event_date")} />
      </Field>
      <Field label={dictionary.contact.location}>
        <input className="folio-input" {...register("location")} />
      </Field>
      <Field label={dictionary.contact.message} error={errors.message?.message}>
        <textarea rows={6} className="folio-input" {...register("message")} />
      </Field>
      <CodexButton type="submit" disabled={isSubmitting}>
        {dictionary.contact.submit}
      </CodexButton>
      {message ? <p className="text-sm italic">{message}</p> : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 font-cinzel text-sm">
      {label}
      {children}
      {error ? <span className="text-vermilion">{error}</span> : null}
    </label>
  );
}
