import type { ComponentType } from "react";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";
import { Slide4 } from "./slides/Slide4";
import { Slide5 } from "./slides/Slide5";
import { Slide6 } from "./slides/Slide6";
import { Slide7 } from "./slides/Slide7";
import { Slide8 } from "./slides/Slide8";
import { Slide9 } from "./slides/Slide9";
import { Slide10 } from "./slides/Slide10";
import { Slide11 } from "./slides/Slide11";
import { Slide12 } from "./slides/Slide12";
import { Slide13 } from "./slides/Slide13";
import { Slide15 } from "./slides/Slide15";
import { SlideXT1 } from "./slides/SlideXT1";
import { SlideXT2 } from "./slides/SlideXT2";
import { SlideXT3 } from "./slides/SlideXT3";
import { SlideXT4 } from "./slides/SlideXT4";
import { Slide16 } from "./slides/Slide16";
import { Slide17 } from "./slides/Slide17";
import { Slide18 } from "./slides/Slide18";
import { Slide19 } from "./slides/Slide19";
import { Slide20 } from "./slides/Slide20";
import { Slide21 } from "./slides/Slide21";
import { Slide22 } from "./slides/Slide22";

export type SwiggySlide = {
  component: ComponentType;
  title: string;
};

export const swiggySlides: SwiggySlide[] = [
  { component: Slide1, title: "Title" },
  { component: Slide2, title: "The Challenge" },
  { component: Slide3, title: "Design Approach" },
  { component: Slide4, title: "Current Ecosystem" },
  { component: Slide5, title: "Competitive Analysis" },
  { component: Slide6, title: "Key Observations" },
  { component: Slide7, title: "Driver Reviews" },
  { component: Slide8, title: "Heuristic Evaluation" },
  { component: Slide9, title: "Journey & Pain Points" },
  { component: Slide10, title: "Opportunity Identification" },
  { component: Slide11, title: "Opportunity Areas" },
  { component: Slide12, title: "Problem Statements" },
  { component: Slide13, title: "Prioritization & MVP" },
  { component: Slide15, title: "Solution Evaluation" },
  { component: SlideXT1, title: "Homepage Experience" },
  { component: SlideXT2, title: "Smart Order Card" },
  { component: SlideXT3, title: "Earnings Experience" },
  { component: SlideXT4, title: "Incentive Experience" },
  { component: Slide16, title: "Solution Blueprint" },
  { component: Slide17, title: "Proposed Redesign" },
  { component: Slide18, title: "Earnings Screen" },
  { component: Slide19, title: "Incentive Screen" },
  { component: Slide20, title: "Order Decision Card" },
  { component: Slide21, title: "Success Metrics" },
  { component: Slide22, title: "Business Impact" },
];
