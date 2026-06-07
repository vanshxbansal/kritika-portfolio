export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type ProcessStep = {
  title: string;
  subtitle?: string;
  icon: string;
};

export type LearningItem = {
  lead: string;
  body: string;
};

export type ChallengeItem = {
  title: string;
  body?: string;
  problem?: string;
  solution?: string;
  bullets?: string[];
};

export type WalkthroughStep = {
  title: string;
  intro?: string;
  items: string[];
};

export type MoreProject = {
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  external?: boolean;
  image: string;
  cursorLabel?: string;
};

export type CaseStudyTheme = {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryMuted: string;
  primaryBorder: string;
  primaryDivider: string;
  text: string;
};

export type CaseStudyData = {
  slug: string;
  hero: {
    id: string;
    lines: { text: string; color: "default" | "accent" }[];
    subtitle: string;
    meta: CaseStudyMeta[];
  };
  overview: {
    title: string;
    paragraphs: string[];
    imageAlt: string;
    imageCaption?: string;
  };
  problem: {
    title: string;
    paragraphs: string[];
    objectives: string[];
    highlight: string;
  };
  role: {
    title: string;
    paragraphs: string[];
    contributions: string[];
  };
  approach: {
    title: string;
    steps: ProcessStep[];
    body?: string;
  };
  challenges: {
    title: string;
    items: ChallengeItem[];
  };
  finalDesigns: {
    title: string;
    description: string;
    placeholders: { label: string; aspect: string }[];
  };
  uat: {
    title: string;
    paragraphs: string[];
    deliverables: string[];
  };
  impact: {
    title: string;
    learnings: LearningItem[];
  };
  moreProjects: MoreProject[];
};

export type NisCostCaseStudyData = CaseStudyData & {
  roleBasedDesign: {
    title: string;
    intro: string;
    roles: string[];
  };
  iterativeDevelopment: {
    title: string;
    paragraphs: string[];
    characteristics: string[];
    approach: string[];
  };
  walkthrough: {
    title: string;
    steps: WalkthroughStep[];
  };
  adoption: {
    title: string;
    items: string[];
  };
};
