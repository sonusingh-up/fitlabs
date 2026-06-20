import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { ADMIN_EMAILS } from "@/lib/admin";
import AdminPanel from "./AdminPanel";

export const metadata: Metadata = {
  title: "Admin — Revalidation Panel",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    redirect("/");
  }

  return <AdminPanel userEmail={user.email ?? ""} />;
}
