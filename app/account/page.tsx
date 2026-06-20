import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import AccountClient from "./AccountClient";

export const metadata: Metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const [{ data: profile }, { data: savedReviews }] = await Promise.all([
    supabase
      .from("profiles")
      .select("full_name, avatar_url, email_notifications")
      .eq("id", user.id)
      .single(),
    supabase
      .from("saved_reviews")
      .select("slug, title, rating, category")
      .eq("user_id", user.id)
      .order("saved_at", { ascending: false }),
  ]);

  return (
    <AccountClient
      user={{
        id: user.id,
        email: user.email ?? "",
        fullName: profile?.full_name ?? user.user_metadata?.full_name ?? "",
        avatarUrl: profile?.avatar_url ?? user.user_metadata?.avatar_url ?? "",
        provider: user.app_metadata?.provider ?? "email",
        createdAt: user.created_at,
      }}
      savedReviews={savedReviews ?? []}
      emailNotifications={profile?.email_notifications ?? true}
    />
  );
}
