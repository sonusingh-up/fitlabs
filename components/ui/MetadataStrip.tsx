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
        borderTop: "1px solid #E4E8E5",
        borderBottom: "1px solid #E4E8E5",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="metadata-strip-item"
          style={{
            borderRight: i < items.length - 1 ? "1px solid #E4E8E5" : "none",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#586259",
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#17211C",
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
