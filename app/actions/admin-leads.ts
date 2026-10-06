"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/app/actions/admin-auth";
import { statusLabels } from "@/lib/admin-labels";
import { assertNoUploadedFiles } from "@/lib/media";
import { createServiceClient } from "@/lib/supabase/server";

export async function updateLead(formData: FormData) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  try {
    assertNoUploadedFiles(formData);
  } catch {
    return;
  }

  const supabase = createServiceClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "new");
  const notes = String(formData.get("notes") ?? "").trim().slice(0, 2000);

  if (!id || id.length > 80 || !(status in statusLabels)) return;

  await supabase
    .from("contact_messages")
    .update({
      status,
      notes: notes || null,
      is_read: true,
    })
    .eq("id", id);

  revalidatePath("/admin/dashboard");
}
