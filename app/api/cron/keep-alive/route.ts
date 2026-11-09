import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest) {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret || secret.length < 16 || secret === "change-me") return false;

  const auth = request.headers.get("authorization");
  if (auth === `Bearer ${secret}`) return true;

  // Manual / GitHub fallback: ?secret=… (never log this URL publicly).
  const querySecret = request.nextUrl.searchParams.get("secret");
  return Boolean(querySecret && querySecret === secret);
}

async function pingSupabase() {
  const supabase = createServiceClient();
  if (!supabase) {
    return {
      ok: false as const,
      status: 503,
      body: { error: "Supabase is not configured" },
    };
  }

  const pingedAt = new Date().toISOString();

  const { data, error: insertError } = await supabase
    .from("system_pings")
    .insert({ pinged_at: pingedAt })
    .select("id, pinged_at")
    .single();

  if (insertError) {
    // Fallback read — still wakes a paused project if the table exists elsewhere.
    const { error: readError } = await supabase
      .from("contact_messages")
      .select("id")
      .limit(1);

    if (readError) {
      return {
        ok: false as const,
        status: 500,
        body: {
          error: insertError.message,
          hint:
            insertError.code === "PGRST205" ||
            insertError.message.includes("schema cache")
              ? "Run supabase/bootstrap.sql in the Supabase SQL Editor first."
              : undefined,
          fallback: readError.message,
        },
      };
    }

    return {
      ok: true as const,
      status: 200,
      body: {
        ok: true,
        mode: "read-fallback",
        pinged_at: pingedAt,
        warning: insertError.message,
      },
    };
  }

  // Keep the ping log small — free-tier friendly.
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  await supabase.from("system_pings").delete().lt("pinged_at", cutoff);

  return {
    ok: true as const,
    status: 200,
    body: { ok: true, mode: "write", ping: data },
  };
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await pingSupabase();
  return NextResponse.json(result.body, { status: result.status });
}

export async function POST(request: NextRequest) {
  return GET(request);
}
