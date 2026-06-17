import { getProductData } from "./get-product";
import type { ProductCardProps } from "@/components/ui/ProductCard";

type PartialProductCard = Omit<ProductCardProps, "buyUrl" | "priceUSD"> & {
  amazonSlug?: string;
  buyUrl?: string;
  priceUSD?: string;
};

/**
 * Server-side helper: resolves Amazon affiliate URLs and prices for ProductCard props.
 *
 * Usage in a Server Component page:
 *
 *   const products = resolveProducts([
 *     { name: "Beef Organs", brand: "Heart & Soil", amazonSlug: "heart-and-soil-beef-organs", ... },
 *   ]);
 *
 * If the ASIN is in the Amazon cache, `buyUrl` gets the tagged affiliate link
 * and `priceUSD` gets the live price. Otherwise falls back to manual values.
 */
export function resolveProducts(
  items: PartialProductCard[]
): ProductCardProps[] {
  return items.map((item) => {
    if (!item.amazonSlug) {
      return {
        ...item,
        buyUrl: item.buyUrl ?? "#",
        priceUSD: item.priceUSD ?? "",
      } as ProductCardProps;
    }

    const amazon = getProductData(item.amazonSlug);

    return {
      ...item,
      buyUrl: amazon.url !== "#" ? amazon.url : (item.buyUrl ?? "#"),
      priceUSD: amazon.price ?? item.priceUSD ?? "",
    } as ProductCardProps;
  });
}
