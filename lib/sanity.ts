import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);

// ─── REVIEWS ─────────────────────────────────────────────────────────────────

export async function getAllReviewSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "review"]{ "slug": slug.current }`);
}

export async function getReviewBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "review" && slug.current == $slug][0]{
      title, "slug": slug.current, brand, category, editorialScore, verdict,
      heroImage, publishedAt, updatedAt, tags, priceRange, affiliateUrl,
      metaDescription, pillars, flags, ingredients, claimAudit, pros, cons,
      bestFor, notIdealFor, valueMetric, body,
      author->{ name, "slug": slug.current, role, avatar }
    }`,
    { slug }
  );
}

export async function getAllReviews() {
  return sanityClient.fetch(
    `*[_type == "review"] | order(publishedAt desc){
      title, "slug": slug.current, brand, category, editorialScore,
      verdict, heroImage, publishedAt, tags, priceRange
    }`
  );
}

// ─── INGREDIENTS ─────────────────────────────────────────────────────────────

export async function getAllIngredientSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "ingredient"]{ "slug": slug.current }`);
}

export async function getIngredientBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "ingredient" && slug.current == $slug][0]{
      name, "slug": slug.current, category, summary, evidenceLevel,
      topBenefit, figNumber, metaDescription, body, publishedAt
    }`,
    { slug }
  );
}

export async function getAllIngredients() {
  return sanityClient.fetch(
    `*[_type == "ingredient"] | order(name asc){
      name, "slug": slug.current, category, summary, evidenceLevel, topBenefit, figNumber
    }`
  );
}

// ─── AUTHORS ─────────────────────────────────────────────────────────────────

export async function getAllAuthorSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "author"]{ "slug": slug.current }`);
}

export async function getAuthorBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
      name, "slug": slug.current, role, bio, avatar, credentials, linkedIn
    }`,
    { slug }
  );
}

// ─── BRANDS ──────────────────────────────────────────────────────────────────

export async function getAllBrandSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "brand"]{ "slug": slug.current }`);
}

export async function getBrandBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "brand" && slug.current == $slug][0]{
      name, "slug": slug.current, country, logo, summary,
      founded, certifications, metaDescription, body, publishedAt
    }`,
    { slug }
  );
}

// ─── BEST LISTS ───────────────────────────────────────────────────────────────

export async function getAllBestSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "bestList"]{ "slug": slug.current }`);
}

export async function getBestBySlug(slug: string) {
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
  return sanityClient.fetch(`*[_type == "research"]{ "slug": slug.current }`);
}

export async function getResearchBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "research" && slug.current == $slug][0]{
      title, "slug": slug.current, summary, metaDescription, body,
      author->{ name, "slug": slug.current, role },
      relatedIngredients[]->{ name, "slug": slug.current },
      publishedAt, tags
    }`,
    { slug }
  );
}

// ─── COMPARISONS ─────────────────────────────────────────────────────────────

export async function getAllComparisonSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "comparison"]{ "slug": slug.current }`);
}

export async function getComparisonBySlug(slug: string) {
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
