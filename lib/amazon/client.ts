import type { AmazonProduct } from "./types";

/**
 * Amazon Creators API client (v3.x — Login with Amazon OAuth2).
 *
 * Authentication:
 *   - Token URL: https://api.amazon.com/auth/o2/token (NA, v3.1)
 *   - Grant type: client_credentials
 *   - Scope: creatorsapi::default
 *   - Credentials sent via HTTP Basic auth header: base64(client_id:client_secret)
 *
 * API:
 *   - Host: creatorsapi.amazon (single global host)
 *   - GetItems: POST /catalog/v1/getItems
 *   - Marketplace via x-marketplace header (not body param)
 *   - Request body uses lowerCamelCase field names
 */

const TOKEN_URL = "https://api.amazon.com/auth/o2/token";
const CREATORS_API_HOST = "creatorsapi.amazon";
const GETITEMS_PATH = "/catalog/v1/getItems";

let cachedToken: { access_token: string; expires_at: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expires_at - 60_000) {
    return cachedToken.access_token;
  }

  const clientId = process.env.AMAZON_CLIENT_ID;
  const clientSecret = process.env.AMAZON_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "Missing AMAZON_CLIENT_ID or AMAZON_CLIENT_SECRET env vars"
    );
  }

  // Creators API v3.x (LWA) requires HTTP Basic auth with base64(client_id:client_secret)
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "creatorsapi::default",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(
      `[Amazon OAuth] Token request failed (${res.status}):`,
      body
    );
    throw new Error(`Amazon OAuth token error (${res.status}): ${body}`);
  }

  const data = await res.json();
  cachedToken = {
    access_token: data.access_token,
    expires_at: Date.now() + data.expires_in * 1000,
  };

  return cachedToken.access_token;
}

export async function getItems(
  asins: string[],
  partnerTag: string
): Promise<AmazonProduct[]> {
  if (asins.length === 0) return [];
  if (asins.length > 10) {
    throw new Error("Creators API GetItems supports max 10 ASINs per request");
  }

  const token = await getAccessToken();

  // Creators API uses lowerCamelCase field names (not PascalCase)
  const payload = {
    itemIds: asins,
    itemIdType: "ASIN",
    resources: [
      "itemInfo.title",
      "itemInfo.byLineInfo",
      "offersV2.listings.price",
      "offersV2.listings.availability",
      "images.primary.large",
    ],
    partnerTag,
    partnerType: "Associates",
  };

  const res = await fetch(
    `https://${CREATORS_API_HOST}${GETITEMS_PATH}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "x-marketplace": "www.amazon.com",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const body = await res.text();
    console.error(
      `[Amazon API] GetItems failed (${res.status}):`,
      body,
      `\nEndpoint: https://${CREATORS_API_HOST}${GETITEMS_PATH}`,
      `\nASINs: ${asins.join(", ")}`
    );
    throw new Error(`Creators API GetItems error (${res.status}): ${body}`);
  }

  const data = await res.json();
  const now = new Date().toISOString();

  // Handle both lowerCamelCase (Creators API) and PascalCase (legacy) response keys
  const items =
    data.itemsResult?.items ?? data.ItemsResult?.Items ?? [];

  return items.map(
    (item: Record<string, unknown>): AmazonProduct => {
      const info = (item.itemInfo ?? item.ItemInfo) as
        | Record<string, unknown>
        | undefined;
      const titleObj = (info?.title ?? info?.Title) as
        | Record<string, string>
        | undefined;
      const byLine = (info?.byLineInfo ?? info?.ByLineInfo) as
        | Record<string, unknown>
        | undefined;
      const brandObj = (byLine?.brand ?? byLine?.Brand) as
        | Record<string, string>
        | undefined;

      const offers = (item.offers ?? item.Offers) as
        | Record<string, unknown>
        | undefined;
      const listings = ((offers?.listings ?? offers?.Listings) as unknown[]) ?? [];
      const listing = listings[0] as Record<string, unknown> | undefined;
      const priceObj = (listing?.price ?? listing?.Price) as
        | Record<string, unknown>
        | undefined;
      const savingBasis = (listing?.savingBasis ?? listing?.SavingBasis) as
        | Record<string, unknown>
        | undefined;
      const availability = (listing?.availability ?? listing?.Availability) as
        | Record<string, string>
        | undefined;

      const images = (item.images ?? item.Images) as
        | Record<string, unknown>
        | undefined;
      const primary = (images?.primary ?? images?.Primary) as
        | Record<string, unknown>
        | undefined;
      const large = (primary?.large ?? primary?.Large) as
        | Record<string, string>
        | undefined;

      return {
        asin: (item.asin ?? item.ASIN) as string,
        title: titleObj?.displayValue ?? titleObj?.DisplayValue ?? "",
        url: (item.detailPageURL ?? item.DetailPageURL) as string,
        imageUrl: large?.url ?? large?.URL,
        price: priceObj
          ? {
              amount: (priceObj.amount ?? priceObj.Amount) as number,
              currency: (priceObj.currency ?? priceObj.Currency) as string,
              display: (priceObj.displayAmount ?? priceObj.DisplayAmount) as string,
            }
          : undefined,
        listPrice: savingBasis
          ? {
              amount: (savingBasis.amount ?? savingBasis.Amount) as number,
              currency: (savingBasis.currency ?? savingBasis.Currency) as string,
              display: (savingBasis.displayAmount ?? savingBasis.DisplayAmount) as string,
            }
          : undefined,
        availability: availability?.type ?? availability?.Type,
        brand: brandObj?.displayValue ?? brandObj?.DisplayValue,
        fetchedAt: now,
      };
    }
  );
}

export async function getItemsBatched(
  asins: string[],
  partnerTag: string
): Promise<AmazonProduct[]> {
  const results: AmazonProduct[] = [];
  const chunks: string[][] = [];

  for (let i = 0; i < asins.length; i += 10) {
    chunks.push(asins.slice(i, i + 10));
  }

  for (const chunk of chunks) {
    const items = await getItems(chunk, partnerTag);
    results.push(...items);
    if (chunks.indexOf(chunk) < chunks.length - 1) {
      await new Promise((r) => setTimeout(r, 1100));
    }
  }

  return results;
}
