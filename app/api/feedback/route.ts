import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { slug, helpful } = await request.json();
  if (!slug || typeof helpful !== "boolean") {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }

  if (supabase) {
    await supabase.from("article_feedback").insert({ slug, helpful });
  }

  return NextResponse.json({ ok: true });
}
