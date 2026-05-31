import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SkinBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function SkinBreadcrumb({ items }: SkinBreadcrumbProps) {
  // Always prepend Home → Skin
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Skin", href: "/skin" },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://fitlabreviews.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div
        style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}
        className="breadcrumb-pad"
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {allItems.map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && (
                <span style={{ color: "#D4C9B8", fontSize: 12 }}>/</span>
              )}
              {item.href && i < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  style={{
                    fontSize: 12,
                    color: "#8A8480",
                    fontFamily: "var(--font-dm-mono), monospace",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    fontSize: 12,
                    color: "#5C5650",
                    fontFamily: "var(--font-dm-mono), monospace",
                  }}
                >
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
