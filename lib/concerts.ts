import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export type Concert = {
  id: string;
  event_name: string;
  city: string;
  venue: string | null;
  event_date: string;
  ticket_link: string | null;
};

export const getPublishedConcerts = cache(async (): Promise<Concert[]> => {
  const supabase = await createClient();
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("concerts")
    .select("id, event_name, city, venue, event_date, ticket_link")
    .eq("is_published", true)
    .order("event_date", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data;
});
