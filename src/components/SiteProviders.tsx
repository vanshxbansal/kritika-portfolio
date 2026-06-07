"use client";

import { CustomCursor } from "@/components/CustomCursor";
import { WelcomeOverlay } from "@/components/WelcomeOverlay";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WelcomeOverlay />
      <CustomCursor />
      {children}
    </>
  );
}
