import type { Metadata } from "next";
import { siteProfile } from "@/data/siteProfile";
import { SwiggyPresentationPage } from "@/components/swiggy-presentation/SwiggyPresentationPage";

export const metadata: Metadata = {
  title: `Swiggy Delivery Partner Redesign | ${siteProfile.name}`,
  description:
    "Scroll through a self-initiated product design case study presentation — redesigning the Swiggy Delivery Partner app.",
};

export default function SwiggyDeliveryPartnerPage() {
  return <SwiggyPresentationPage />;
}
