import type { Metadata } from "next";
import { siteProfile } from "@/data/siteProfile";
import { HpcCaseStudyPage } from "@/components/case-study/HpcCaseStudyPage";

export const metadata: Metadata = {
  title: `Holistic Progress Card | ${siteProfile.name}`,
  description:
    "Product design and business analysis for NCERT’s PARAKH Holistic Progress Card — a national digital platform for competency-based student assessment.",
};

export default function HolisticProgressCardPage() {
  return <HpcCaseStudyPage />;
}
