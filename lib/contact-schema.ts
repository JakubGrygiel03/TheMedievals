import { z } from "zod";

export const eventTypes = [
  "concert",
  "historical_event",
  "fair",
  "wedding",
  "corporate",
  "workshop",
  "other",
] as const;

const localPart = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i;
const domainPart =
  /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export function isRealEmail(value: string): boolean {
  const email = value.trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return false;
  if (/\s/.test(email)) return false;

  const at = email.indexOf("@");
  if (at < 1 || email.lastIndexOf("@") !== at) return false;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (!local || local.length > 64) return false;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return false;
  }
  if (!localPart.test(local)) return false;
  if (!domainPart.test(domain)) return false;

  const tld = domain.slice(domain.lastIndexOf(".") + 1);
  return tld.length >= 2 && /^[a-z]{2,24}$/i.test(tld);
}

function isPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

const optionalText = z
  .string()
  .transform((value) => value.trim())
  .pipe(z.string().max(160));

export const contactSchema = z.object({
  sender_name: z
    .string()
    .transform((value) => value.trim().replace(/\s+/g, " "))
    .pipe(
      z
        .string()
        .min(2)
        .max(120)
        .refine((value) => /\p{L}/u.test(value), { message: "name" }),
    ),
  email: z
    .string()
    .transform((value) => value.trim().toLowerCase())
    .refine(isRealEmail, { message: "email" }),
  phone: z
    .string()
    .transform((value) => value.trim())
    .refine((value) => value === "" || isPhone(value), { message: "phone" }),
  event_type: z.enum(eventTypes),
  event_date: z
    .string()
    .transform((value) => value.trim())
    .pipe(z.string().max(32)),
  location: optionalText,
  message: z
    .string()
    .transform((value) => value.trim())
    .pipe(z.string().min(10).max(4000)),
});

export type ContactInput = z.infer<typeof contactSchema>;
