import { sanityClient } from "./sanity";

// ─── SKIN CONDITIONS ──────────────────────────────────────────────────────────

export async function getAllSkinConditionSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "skinCondition"]{ "slug": slug.current }`);
}

export async function getSkinConditionBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "skinCondition" && slug.current == $slug][0]{
      title, "slug": slug.current, description, heroImage,
      symptoms, causes, treatments,
      relatedGuides[]->{ title, "slug": slug.current, category, difficulty, timeEstimate, description },
      metaDescription, publishedAt
    }`,
    { slug }
  );
}

export async function getAllSkinConditions() {
  return sanityClient.fetch(
    `*[_type == "skinCondition"] | order(title asc){
      title, "slug": slug.current, description, heroImage, symptoms
    }`
  );
}

// ─── SKIN ROUTINES ────────────────────────────────────────────────────────────

export async function getAllSkinRoutineSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "skinRoutine"]{ "slug": slug.current }`);
}

export async function getSkinRoutineBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "skinRoutine" && slug.current == $slug][0]{
      title, "slug": slug.current, description, heroImage,
      skinTypes, steps, duration,
      ingredients[]->{ title, "slug": slug.current, category, evidenceLevel, description },
      relatedGuides[]->{ title, "slug": slug.current, category, difficulty, timeEstimate, description },
      metaDescription, publishedAt
    }`,
    { slug }
  );
}

export async function getAllSkinRoutines() {
  return sanityClient.fetch(
    `*[_type == "skinRoutine"] | order(title asc){
      title, "slug": slug.current, description, heroImage, skinTypes, duration
    }`
  );
}

// ─── SKIN INGREDIENTS ─────────────────────────────────────────────────────────

export async function getAllSkinIngredientSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "skinIngredient"]{ "slug": slug.current }`);
}

export async function getSkinIngredientBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "skinIngredient" && slug.current == $slug][0]{
      title, "slug": slug.current, description, category, evidenceLevel,
      skinTypes, benefits, risks, howToUse, sources, body,
      metaDescription, publishedAt
    }`,
    { slug }
  );
}

export async function getAllSkinIngredients() {
  return sanityClient.fetch(
    `*[_type == "skinIngredient"] | order(title asc){
      title, "slug": slug.current, description, category, evidenceLevel, benefits
    }`
  );
}

// ─── SKIN GUIDES ──────────────────────────────────────────────────────────────

export async function getAllSkinGuideSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(`*[_type == "skinGuide"]{ "slug": slug.current }`);
}

export async function getSkinGuideBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "skinGuide" && slug.current == $slug][0]{
      title, "slug": slug.current, description, heroImage,
      category, difficulty, timeEstimate, body,
      relatedTopics[]{
        _type == "reference" => @->{
          _type, title, "slug": slug.current, description,
          category, difficulty, timeEstimate
        }
      },
      author->{ name, "slug": slug.current, role, avatar },
      metaDescription, publishedAt, updatedAt
    }`,
    { slug }
  );
}

export async function getAllSkinGuides() {
  return sanityClient.fetch(
    `*[_type == "skinGuide"] | order(publishedAt desc){
      title, "slug": slug.current, description, heroImage,
      category, difficulty, timeEstimate, publishedAt
    }`
  );
}
