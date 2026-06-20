import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const sanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// ─── REVIEWS ─────────────────────────────────────────────────────────────────

export async function getAllReviewSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "review"]{ "slug": slug.current }`);
}

export async function getReviewBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "review" && slug.current == $slug][0]{
      title, "slug": slug.current, brand, category, editorialScore, verdict,
      heroImage, publishedAt, updatedAt, tags, priceRange, affiliateUrl,
      metaDescription, pillars, flags, ingredients, claimAudit, pros, cons,
      bestFor, notIdealFor, valueMetric, body,
      reviewCode, testingPeriod, tubsTested,
      keyTakeaways,
      productSpecs{ servings, servingSize, calories, protein, certifications },
      testerExperience{ name, role, avatar, motivation, howUsed, taste, results, finalThoughts },
      faqItems[]{ question, answer },
      references[]{ text, url },
      relatedReviews[]->{ title, "slug": slug.current, brand, category, editorialScore, verdict, publishedAt, heroImage, affiliateUrl, priceRange },
      relatedIngredients[]->{ name, "slug": slug.current, category, evidenceLevel, figNumber },
      author->{ name, "slug": slug.current, role, bio, avatar, credentials, linkedIn },
      reviewer->{ name, "slug": slug.current, role, bio, avatar, credentials, linkedIn }
    }`,
    { slug }
  );
}

export async function getAllReviews() {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(
    `*[_type == "review"] | order(publishedAt desc){
      title, "slug": slug.current, brand, category, editorialScore,
      verdict, heroImage, publishedAt, tags, priceRange
    }`
  );
}

// ─── INGREDIENTS ─────────────────────────────────────────────────────────────

export async function getAllIngredientSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "ingredient"]{ "slug": slug.current }`);
}

export async function getIngredientBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "ingredient" && slug.current == $slug][0]{
      name, "slug": slug.current, category, summary, evidenceLevel,
      topBenefit, figNumber, metaDescription, body, publishedAt, updatedAt,
      aka, intro, dose, mechanism, mechanismDetail,
      keyBenefits[]{ claim, evidence, note },
      dosageNotes, safetyNotes, whoFor,
      bestFor, relatedSlugs,
      faqItems[]{ question, answer }
    }`,
    { slug }
  );
}

export async function getAllIngredients() {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(
    `*[_type == "ingredient"] | order(name asc){
      name, "slug": slug.current, category, summary, evidenceLevel, topBenefit, figNumber
    }`
  );
}

// ─── AUTHORS ─────────────────────────────────────────────────────────────────

export async function getAllAuthorSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "author"]{ "slug": slug.current }`);
}

export async function getAuthorBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
      name, "slug": slug.current, role, bio, avatar, credentials, linkedIn
    }`,
    { slug }
  );
}

// ─── BRANDS ──────────────────────────────────────────────────────────────────

export async function getAllBrandSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "brand"]{ "slug": slug.current }`);
}

export async function getBrandBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "brand" && slug.current == $slug][0]{
      name, "slug": slug.current, country, logo, summary,
      founded, figureCode, rating, reviewCount, categories, verdict,
      stats[]{ label, value },
      greenFlags, redFlags, certifications,
      faqItems[]{ question, answer },
      relatedReviews[]->{ title, "slug": slug.current, brand, category, editorialScore, verdict, publishedAt },
      metaDescription, body, publishedAt, updatedAt
    }`,
    { slug }
  );
}

// ─── BEST LISTS ───────────────────────────────────────────────────────────────

export async function getAllBestSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "bestList"]{ "slug": slug.current }`);
}

export async function getBestBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "bestList" && slug.current == $slug][0]{
      title, "slug": slug.current, category, summary, metaDescription,
      products[]{ rank, whyChosen, review->{ title, "slug": slug.current, brand, editorialScore, heroImage, verdict } },
      body, publishedAt, updatedAt
    }`,
    { slug }
  );
}

// ─── RESEARCH ────────────────────────────────────────────────────────────────

export async function getAllResearchSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "research"]{ "slug": slug.current }`);
}

export async function getResearchBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "research" && slug.current == $slug][0]{
      title, "slug": slug.current, titleItalic, summary, metaDescription,
      figureCode, evidenceLevel, readTime, quickAnswer,
      statsPanel[]{ label, value, sub },
      mechanismPanels[]{ num, title, body },
      faqItems[]{ question, answer },
      references[]{ text, url },
      relatedArticles[]{ href, label },
      body,
      author->{ name, "slug": slug.current, role, avatar },
      relatedIngredients[]->{ name, "slug": slug.current },
      publishedAt, updatedAt, tags
    }`,
    { slug }
  );
}

// ─── BLOG ────────────────────────────────────────────────────────────────────

export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "blog"]{ "slug": slug.current }`);
}

export async function getBlogBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title, "slug": slug.current, titleItalic, category, figureCode,
      readTime, evidenceLevel, summary, metaDescription, heroImage,
      statCallouts[]{ value, label },
      author->{ name, "slug": slug.current, role, avatar },
      reviewer->{ name, "slug": slug.current, role, avatar },
      tocItems[]{ id, label },
      mechanismPanels[]{ num, title, body },
      faqItems[]{ question, answer },
      references[]{ text, url },
      relatedArticles[]{ href, label },
      body, publishedAt, updatedAt, tags
    }`,
    { slug },
  );
}

// ─── COMPARISONS ─────────────────────────────────────────────────────────────

export async function getAllComparisonSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return sanityClient.fetch(`*[_type == "comparison"]{ "slug": slug.current }`);
}

export async function getComparisonBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return sanityClient.fetch(
    `*[_type == "comparison" && slug.current == $slug][0]{
      title, "slug": slug.current, summary, metaDescription, verdict,
      productA->{ title, "slug": slug.current, brand, editorialScore, heroImage, pros, cons },
      productB->{ title, "slug": slug.current, brand, editorialScore, heroImage, pros, cons },
      winner->{ title, "slug": slug.current },
      body, publishedAt
    }`,
    { slug }
  );
}
