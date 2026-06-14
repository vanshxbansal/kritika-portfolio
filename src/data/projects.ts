export type ProjectMeta = {
  label: string;
  value: string;
};

export type CursorBadge =
  | "purple"
  | "green"
  | "light"
  | "blue"
  | "orange"
  | "pink"
  | "dark";

export type SpotlightProject = {
  id: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  image: string;
  href: string;
  external?: boolean;
  borderColor: string;
  metaBg: string;
  metaDivider: string;
  meta: ProjectMeta[];
  cta: string;
  badge?: string;
  comingSoon?: boolean;
  cursorLabel: string;
  cursorBadge?: CursorBadge;
};

export type SideQuest = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  external?: boolean;
  cursorLabel: string;
};

export type TimelineItem = {
  role: string;
  org?: string;
  logo?: string;
};

export const spotlightProjects: SpotlightProject[] = [
  {
    id: "hpc",
    title: "Holistic Progress",
    titleHighlight: "@ PARAKH",
    subtitle:
      "Digitizing a 7-role academic evaluation platform for teachers, schools, and state authorities",
    image:
      "https://framerusercontent.com/images/PbCzu2EeGzqZjc5FtABlFCBWWho.png?width=2148&height=1338",
    href: "/holistic-progress-card",
    borderColor: "rgba(225, 90, 17, 0.35)",
    metaBg: "rgba(225, 90, 17, 0.06)",
    metaDivider: "rgba(225, 90, 17, 0.45)",
    meta: [
      { label: "My Role", value: "Product Designer + BA" },
      { label: "Client", value: "PARAKH (NCERT)" },
      { label: "Type", value: "EdTech Platform" },
      { label: "Scope", value: "7-Role Evaluation" },
    ],
    cta: "Read Case Study",
    cursorLabel: "Product Design",
  },
  {
    id: "nis-cost",
    title: "NIS.Cost",
    titleHighlight: "@ UNICEF",
    subtitle:
      "Designing a data-intensive planning system for national immunization strategies — costing, budgeting, and funding at country scale",
    image:
      "https://framerusercontent.com/images/gIURKS2HBNmLKNvvylAiJgTi8U.png?width=2148&height=1344",
    href: "/nis-cost",
    borderColor: "rgba(25, 118, 210, 0.35)",
    metaBg: "rgba(25, 118, 210, 0.06)",
    metaDivider: "rgba(25, 118, 210, 0.45)",
    meta: [
      { label: "My Role", value: "Product Designer + BA" },
      { label: "Client", value: "UNICEF / WHO" },
      { label: "Type", value: "Global Health Platform" },
      { label: "Scope", value: "5-Module Workflow" },
    ],
    cta: "Read Case Study",
    cursorLabel: "Global Health",
  },
  {
    id: "parakh-portal",
    title: "PARAKH Web Portal",
    titleHighlight: "@ NCERT",
    subtitle:
      "End-to-end coordination from requirement gathering to design handoff across 60+ screens",
    image:
      "https://framerusercontent.com/images/PbCzu2EeGzqZjc5FtABlFCBWWho.png?width=2148&height=1338",
    href: "https://parakh.gov.in",
    external: true,
    borderColor: "rgba(101, 54, 235, 0.35)",
    metaBg: "rgba(101, 54, 235, 0.06)",
    metaDivider: "rgba(101, 54, 235, 0.45)",
    meta: [
      { label: "My Role", value: "Product Designer + BA" },
      { label: "Client", value: "PARAKH (NCERT)" },
      { label: "Type", value: "Government Portal" },
      { label: "Scope", value: "60+ Screens" },
    ],
    cta: "View Live Site",
    cursorLabel: "Product Design",
  },
  {
    id: "swiggy-delivery-partner",
    title: "Swiggy Delivery Partner",
    titleHighlight: "Redesign",
    subtitle:
      "Research-driven redesign of the driver app — financial transparency, order decisions, and task-first information architecture",
    image: "/swiggy-delivery-partner/hero.png",
    href: "/swiggy-delivery-partner",
    borderColor: "rgba(252, 128, 25, 0.35)",
    metaBg: "rgba(252, 128, 25, 0.06)",
    metaDivider: "rgba(252, 128, 25, 0.45)",
    meta: [
      { label: "My Role", value: "Product Designer" },
      { label: "Type", value: "Self-initiated Case Study" },
      { label: "Duration", value: "3 Days" },
      { label: "Focus", value: "UX Research · IA · UI" },
    ],
    cta: "Read Case Study",
    cursorLabel: "Product Design",
  },
];

export const sideQuests: SideQuest[] = [
  {
    id: "google-ux",
    title: "Google UX Design",
    description: "Professional Certificate – Coursera",
    image: "https://framerusercontent.com/images/mv6I4mPVzCPUA1yOXKh9dbplafQ.png",
    href: "https://www.coursera.org/professional-certificates/google-ux-design",
    external: true,
    cursorLabel: "Click",
  },
  {
    id: "google-pm",
    title: "Google Project Management",
    description: "Professional Certificate – Coursera",
    image: "https://framerusercontent.com/images/Q6TM7usfQ2VOxg8V8Pr3sKK0.png",
    href: "https://www.coursera.org/professional-certificates/google-project-management",
    external: true,
    cursorLabel: "Click",
  },
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    description: "The Economic Times – AI in product & workflow design",
    image: "https://framerusercontent.com/images/6jAPcWdWxlfUbMVPLxZUJC4SM.png",
    href: "https://economictimes.indiatimes.com",
    external: true,
    cursorLabel: "Click",
  },
];

export const timelineItems: TimelineItem[] = [
  { role: "B.Tech CSE", org: "GGSIPU" },
  { role: "UX/UI Intern", org: "Avalon" },
  { role: "Product Designer", org: "Avalon" },
  { role: "Product Designer + BA", org: "Avalon" },
];
