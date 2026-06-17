import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Supplements, Ingredients & Reviews",
  description: "Search the Fitlabreviews database for supplement reviews, ingredient research, brand profiles, and evidence-based fitness nutrition guides.",
  alternates: { canonical: "/search" },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
