import type { AmazonProduct } from "./types";

const TOKEN_URL = "https://api.amazon.com/auth/o2/token";
const PAAPI_HOST = "webservices.amazon.com";
const PAAPI_PATH = "/paapi5/getitems";

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

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "ProductAdvertisingAPI",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
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
    throw new Error("PA API GetItems supports max 10 ASINs per request");
  }

  const token = await getAccessToken();

  const payload = {
    ItemIds: asins,
    ItemIdType: "ASIN",
    Resources: [
      "ItemInfo.Title",
      "ItemInfo.ByLineInfo",
      "Offers.Listings.Price",
      "Offers.Listings.SavingBasis",
      "Offers.Listings.Availability.Type",
      "Images.Primary.Large",
      "BrowseNodeInfo.BrowseNodes.SalesRank",
    ],
    PartnerTag: partnerTag,
    PartnerType: "Associates",
    Marketplace: "www.amazon.com",
  };

  const res = await fetch(`https://${PAAPI_HOST}${PAAPI_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "x-amz-target":
        "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`PA API GetItems error (${res.status}): ${body}`);
  }

  const data = await res.json();
  const now = new Date().toISOString();

  return (data.ItemsResult?.Items ?? []).map(
    (item: Record<string, unknown>): AmazonProduct => {
      const info = item.ItemInfo as Record<string, unknown> | undefined;
      const title = info?.Title as Record<string, string> | undefined;
      const byLine = info?.ByLineInfo as Record<string, unknown> | undefined;
      const brand = byLine?.Brand as Record<string, string> | undefined;

      const offers = item.Offers as Record<string, unknown> | undefined;
      const listings = (offers?.Listings as unknown[]) ?? [];
      const listing = listings[0] as Record<string, unknown> | undefined;
      const priceObj = listing?.Price as Record<string, unknown> | undefined;
      const savingBasis = listing?.SavingBasis as
        | Record<string, unknown>
        | undefined;
      const availability = listing?.Availability as
        | Record<string, string>
        | undefined;

      const images = item.Images as Record<string, unknown> | undefined;
      const primary = images?.Primary as Record<string, unknown> | undefined;
      const large = primary?.Large as Record<string, string> | undefined;

      return {
        asin: item.ASIN as string,
        title: title?.DisplayValue ?? "",
        url: item.DetailPageURL as string,
        imageUrl: large?.URL,
        price: priceObj
          ? {
              amount: priceObj.Amount as number,
              currency: priceObj.Currency as string,
              display: priceObj.DisplayAmount as string,
            }
          : undefined,
        listPrice: savingBasis
          ? {
              amount: savingBasis.Amount as number,
              currency: savingBasis.Currency as string,
              display: savingBasis.DisplayAmount as string,
            }
          : undefined,
        availability: availability?.Type,
        brand: brand?.DisplayValue,
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
