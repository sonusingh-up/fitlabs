// Custom XML sitemap generator. Lists every static route so Google can index them.
import { BRANDS } from '../components/brands.jsx';
import { REVIEWS } from '../data/reviews.js';
import { INGREDIENTS } from '../data/ingredients.js';
import { STACKS } from '../data/stacks.js';
import { POSTS } from '../data/blog.js';

const SITE = 'https://fitlabreviews.com';

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/reviews', priority: 0.9, changefreq: 'weekly' },
  { path: '/brands', priority: 0.9, changefreq: 'weekly' },
  { path: '/ingredients', priority: 0.9, changefreq: 'weekly' },
  { path: '/stacks', priority: 0.9, changefreq: 'weekly' },
  { path: '/best', priority: 0.9, changefreq: 'weekly' },
  { path: '/compare', priority: 0.7, changefreq: 'monthly' },
  { path: '/goals', priority: 0.8, changefreq: 'monthly' },
  { path: '/india', priority: 0.8, changefreq: 'weekly' },
  { path: '/research', priority: 0.7, changefreq: 'monthly' },
  { path: '/methodology', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
  { path: '/authors', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
];

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    ...STATIC_PAGES.map((p) => ({ loc: SITE + p.path, lastmod: today, priority: p.priority, changefreq: p.changefreq })),
    ...BRANDS.map((b)      => ({ loc: `${SITE}/brands/${b.slug}`,      lastmod: today, priority: 0.7, changefreq: 'monthly' })),
    ...REVIEWS.map((r)     => ({ loc: `${SITE}/reviews/${r.slug}`,     lastmod: today, priority: 0.7, changefreq: 'monthly' })),
    ...INGREDIENTS.map((i) => ({ loc: `${SITE}/ingredients/${i.slug}`, lastmod: today, priority: 0.6, changefreq: 'monthly' })),
    ...STACKS.map((s)      => ({ loc: `${SITE}/stacks/${s.slug}`,      lastmod: today, priority: 0.7, changefreq: 'monthly' })),
    ...POSTS.map((p)       => ({ loc: `${SITE}/blog/${p.slug}`,        lastmod: p.date, priority: 0.6, changefreq: 'monthly' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
