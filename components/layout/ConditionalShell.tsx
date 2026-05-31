"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function ConditionalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isSkin = pathname.startsWith("/skin");

  if (isSkin) {
    // Skin layout provides its own SkinHeader + SkinFooter
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
