import type { Metadata } from "next";
import { siteProfile } from "@/data/siteProfile";
import { NisCostCaseStudyPage } from "@/components/case-study/NisCostCaseStudyPage";

export const metadata: Metadata = {
  title: `NIS.Cost | ${siteProfile.name}`,
  description:
    "Designing a data-intensive planning system for national immunization strategies — NIS.Cost case study for UNICEF.",
};

export default function NisCostPage() {
  return <NisCostCaseStudyPage />;
}
