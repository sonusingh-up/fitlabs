export interface AmazonProduct {
  asin: string;
  title: string;
  url: string;
  imageUrl?: string;
  price?: {
    amount: number;
    currency: string;
    display: string;
  };
  listPrice?: {
    amount: number;
    currency: string;
    display: string;
  };
  availability?: string;
  rating?: number;
  totalReviews?: number;
  brand?: string;
  fetchedAt: string;
}

export interface ProductCatalogEntry {
  slug: string;
  asin: string;
  label: string;
  brand: string;
  category: string;
  fallbackUrl: string;
}

export interface AmazonCache {
  generatedAt: string;
  partnerTag: string;
  products: Record<string, AmazonProduct>;
}
