export type CaseStudyMetaIcon = "calendar" | "user" | "users" | "monitor" | "globe";

export type CaseStudyMeta = {
  label: string;
  value: string;
  icon?: CaseStudyMetaIcon;
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

export type ImpactMetricIcon =
  | "clock"
  | "shield"
  | "globe"
  | "chart"
  | "sparkle";

export type ImpactLearningIcon = "lightbulb" | "users" | "layers" | "check";

export type ImpactMetric = {
  value: string;
  label: string;
  icon: ImpactMetricIcon;
  color: string;
};

export type ImpactLearningCard = {
  body: string;
  icon: ImpactLearningIcon;
  color: string;
};

export type CaseStudyImpactData = {
  resultsTitle: string;
  metrics: ImpactMetric[];
  learningsTitle: string;
  learnings: ImpactLearningCard[];
};

export type ExecutiveSummaryCardIcon = "problem" | "solution" | "outcome";

export type ExecutiveSummaryCard = {
  title: string;
  intro?: string;
  items: string[];
  color: string;
  icon: ExecutiveSummaryCardIcon;
};

export type ExecutiveSummaryData = {
  title: string;
  sectionNumber?: string;
  cards: ExecutiveSummaryCard[];
};

export type ProcessPhase = {
  title: string;
  color: string;
};

export type ProcessNavAnchor = {
  id: string;
  phase: number;
};

export type ProcessNavData = {
  phases: ProcessPhase[];
  anchors: ProcessNavAnchor[];
};

export type PlatformRoleItem = {
  name: string;
  color: string;
};

export type CoreWorkflowStep = {
  title: string;
  details: string;
};

export type DesigningBeyondSpreadsheetsData = {
  sectionNumber?: string;
  title: string;
  challenge: {
    title: string;
    intro: string;
    items: string[];
  };
  evolution: {
    title: string;
    items: string[];
  };
};

export type SystemArchitectureData = {
  sectionNumber?: string;
  title: string;
  rolesTitle: string;
  roles: PlatformRoleItem[];
  workflowTitle: string;
  workflowSteps: CoreWorkflowStep[];
};

export type EnablementIcon = "walkthrough" | "video" | "guidance";

export type ValidationRolloutData = {
  sectionNumber?: string;
  title: string;
  validationTitle: string;
  validationItems: string[];
  enablementTitle: string;
  enablementItems: { label: string; icon: EnablementIcon }[];
  challengesTitle: string;
  challengeItems: string[];
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

export type DeepDiveVisual = {
  label: string;
  caption?: string;
};

export type DeepDiveDecision = {
  title: string;
  problem: string;
  solution: string;
  bullets?: string[];
};

export type DeepDiveChapter = {
  id: string;
  title: string;
  intro?: string;
  problem?: string;
  solution?: string;
  bullets?: string[];
  features?: string[];
  decisions?: DeepDiveDecision[];
  visuals: DeepDiveVisual[];
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
    layout?: "centered" | "split";
    eyebrow?: string;
    imageAlt?: string;
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
  challenges?: {
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

export type StructuredCaseStudyData = Omit<
  CaseStudyData,
  "impact" | "overview" | "problem" | "uat"
> & {
  executiveSummary: ExecutiveSummaryData;
  processNav: ProcessNavData;
  designingBeyondSpreadsheets: DesigningBeyondSpreadsheetsData;
  systemArchitecture: SystemArchitectureData;
  validationRollout: ValidationRolloutData;
  walkthrough?: {
    title: string;
    steps: WalkthroughStep[];
  };
  deepDive: {
    id: string;
    title: string;
    subtitle?: string;
    chapters: DeepDiveChapter[];
  };
  impact: CaseStudyImpactData;
};

export type NisCostCaseStudyData = StructuredCaseStudyData;
export type HpcCaseStudyData = StructuredCaseStudyData;