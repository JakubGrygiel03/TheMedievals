import { z } from "zod";

export const eventTypes = [
  "concert",
  "historical_event",
  "wedding",
  "workshop",
  "other",
] as const;

export const contactSchema = z.object({
  sender_name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  event_type: z.enum(eventTypes),
  event_date: z.string().optional().or(z.literal("")),
  location: z.string().max(160).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
