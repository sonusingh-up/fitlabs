import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || "fitlab-dev-secret";

export async function POST(request: Request) {
  const secret = request.headers.get("x-api-key");
  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { paths } = await request.json() as { paths?: string[] };
  if (!paths || !Array.isArray(paths) || paths.length === 0) {
    return NextResponse.json({ error: "Missing paths array" }, { status: 400 });
  }

  const results: { path: string; status: string }[] = [];
  for (const p of paths) {
    try {
      revalidatePath(p);
      results.push({ path: p, status: "revalidated" });
    } catch (err) {
      results.push({ path: p, status: `error: ${(err as Error).message}` });
    }
  }

  return NextResponse.json({
    ok: true,
    revalidatedAt: new Date().toISOString(),
    results,
  });
}
