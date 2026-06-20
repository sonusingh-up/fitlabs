import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET || process.env.REVALIDATE_SECRET || "fitlab-dev-secret";

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-webhook-secret") || request.headers.get("x-api-key");
  if (secret !== SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { _type?: string; slug?: { current?: string } };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = body._type;
  const slug = body.slug?.current;
  const revalidated: string[] = [];

  // Always revalidate homepage
  revalidatePath("/");
  revalidated.push("/");

  if (type === "review") {
    revalidatePath("/reviews");
    revalidated.push("/reviews");
    if (slug) {
      revalidatePath(`/reviews/${slug}`);
      revalidated.push(`/reviews/${slug}`);
    }
    revalidatePath("/best");
    revalidated.push("/best");
  } else if (type === "ingredient") {
    revalidatePath("/ingredients");
    revalidated.push("/ingredients");
    if (slug) {
      revalidatePath(`/ingredients/${slug}`);
      revalidated.push(`/ingredients/${slug}`);
    }
  } else if (type === "brand") {
    revalidatePath("/brands");
    revalidated.push("/brands");
    if (slug) {
      revalidatePath(`/brands/${slug}`);
      revalidated.push(`/brands/${slug}`);
    }
  } else if (type === "research") {
    revalidatePath("/research");
    revalidated.push("/research");
    if (slug) {
      revalidatePath(`/research/${slug}`);
      revalidated.push(`/research/${slug}`);
    }
  } else if (type === "comparison") {
    revalidatePath("/compare");
    revalidated.push("/compare");
    if (slug) {
      revalidatePath(`/compare/${slug}`);
      revalidated.push(`/compare/${slug}`);
    }
  } else if (type === "bestList") {
    revalidatePath("/best");
    revalidated.push("/best");
    if (slug) {
      revalidatePath(`/best/${slug}`);
      revalidated.push(`/best/${slug}`);
    }
  } else if (type === "author") {
    revalidatePath("/authors");
    revalidated.push("/authors");
    if (slug) {
      revalidatePath(`/authors/${slug}`);
      revalidated.push(`/authors/${slug}`);
    }
  }

  return NextResponse.json({
    ok: true,
    type,
    slug,
    revalidated,
    at: new Date().toISOString(),
  });
}
