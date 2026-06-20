"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase-server";
import { ADMIN_EMAILS } from "@/lib/admin";

async function verifyAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    throw new Error("Unauthorized");
  }
}

export async function revalidatePaths(paths: string[]) {
  await verifyAdmin();

  const results: { path: string; status: string }[] = [];
  for (const p of paths) {
    try {
      revalidatePath(p);
      results.push({ path: p, status: "revalidated" });
    } catch (err) {
      results.push({ path: p, status: `error: ${(err as Error).message}` });
    }
  }

  return {
    ok: true,
    revalidatedAt: new Date().toISOString(),
    results,
  };
}
