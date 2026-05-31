import { NextResponse } from "next/server";

// Serves https://skin.fitlabreviews.com/robots.txt
// Middleware rewrites /robots.txt on the skin subdomain → /skin/robots.txt → this handler.

export function GET() {
  const content = `# skin.fitlabreviews.com — Fitlabreviews Skin Health
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# AI crawlers — welcomed for Generative Engine Optimisation (GEO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: YouBot
Allow: /

# Canonical host for this subdomain
Host: https://skin.fitlabreviews.com

# Sitemaps
Sitemap: https://skin.fitlabreviews.com/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
