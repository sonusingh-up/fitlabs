import type { AmazonProduct, AmazonCache } from "./types";
import { getCatalogEntry } from "@/data/product-catalog";

let cache: AmazonCache | null = null;

function loadCache(): AmazonCache {
  if (cache) return cache;
  try {
    cache = require("@/data/amazon-cache.json") as AmazonCache;
  } catch {
    cache = { generatedAt: "", partnerTag: "", products: {} };
  }
  return cache;
}

export function getAmazonProduct(slug: string): AmazonProduct | null {
  const entry = getCatalogEntry(slug);
  if (!entry) return null;

  const data = loadCache();
  return data.products[entry.asin] ?? null;
}

export function getAffiliateUrl(slug: string): string {
  const entry = getCatalogEntry(slug);
  if (!entry) return "#";

  const product = getAmazonProduct(slug);
  return product?.url ?? entry.fallbackUrl;
}

export function getProductPrice(slug: string): string | null {
  const product = getAmazonProduct(slug);
  return product?.price?.display ?? null;
}

export function getProductData(slug: string): {
  url: string;
  price: string | null;
  imageUrl: string | null;
  title: string | null;
  availability: string | null;
} {
  const entry = getCatalogEntry(slug);
  if (!entry) {
    return { url: "#", price: null, imageUrl: null, title: null, availability: null };
  }

  const product = getAmazonProduct(slug);

  return {
    url: product?.url ?? entry.fallbackUrl,
    price: product?.price?.display ?? null,
    imageUrl: product?.imageUrl ?? null,
    title: product?.title ?? entry.label,
    availability: product?.availability ?? null,
  };
}
