interface MetaItem {
  label: string;
  value: string;
}

interface MetadataStripProps {
  items: MetaItem[];
  className?: string;
}

export default function MetadataStrip({ items }: MetadataStripProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0,
        borderTop: "1px solid #D4C9B8",
        borderBottom: "1px solid #D4C9B8",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="metadata-strip-item"
          style={{
            borderRight: i < items.length - 1 ? "1px solid #D4C9B8" : "none",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A89880",
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#1A1714",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
