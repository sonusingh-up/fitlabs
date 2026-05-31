import type { Metadata } from "next";
import type { ReactNode } from "react";
import SkinHeader from "@/components/layout/SkinHeader";
import SkinFooter from "@/components/layout/SkinFooter";

export const metadata: Metadata = {
  title: {
    default: "Skin Health — Evidence-Led Skincare Guides · Fitlabreviews",
    template: "%s · Fitlabreviews Skin",
  },
  description:
    "Evidence-led skincare guides, ingredient breakdowns, daily routines, and condition profiles. Science-first skin health for informed decisions.",
  // ⚠ No alternates.canonical here — each child page sets its own
};

export default function SkinLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkinHeader />
      <main className="flex-1">{children}</main>
      <SkinFooter />
    </>
  );
}
