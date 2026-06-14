import type { Metadata } from "next";
import { siteProfile } from "@/data/siteProfile";
import { SwiggyCaseStudyPage } from "@/components/case-study/SwiggyCaseStudyPage";

export const metadata: Metadata = {
  title: `Swiggy Delivery Partner Redesign | ${siteProfile.name}`,
  description:
    "A self-initiated, research-driven product design case study — redesigning the Swiggy Delivery Partner app for financial transparency, smarter order decisions, and task-first information architecture.",
};

export default function SwiggyDeliveryPartnerPage() {
  return <SwiggyCaseStudyPage />;
}
