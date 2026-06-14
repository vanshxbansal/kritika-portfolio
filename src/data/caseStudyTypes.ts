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
  note?: string;
  icon: ImpactMetricIcon;
  color: string;
};

export type ImpactLearningCard = {
  title?: string;
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
  shortTitle?: string;
  summary?: string;
  details?: string[];
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
  context?: {
    paragraphs: string[];
    sections?: {
      title: string;
      body: string;
      items?: string[];
    }[];
    issuesTitle: string;
    issues: string[];
  };
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
  approach?: {
    intro: string;
    items: string[];
  };
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
  trainingVideo?: {
    title: string;
    href?: string;
    thumbnailSrc?: string;
    caption: string;
  };
  trainingGuides?: {
    title: string;
    description: string;
    languages: { label: string; color: string }[];
    cards: {
      step: string;
      title: string;
      subtitle: string;
      color: string;
      imageSrc?: string;
    }[];
  };
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

export type SolutionWalkthroughData = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export type DeepDiveVisual = {
  label: string;
  caption?: string;
  imageSrc?: string;
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
  subtitle?: string;
  intro?: string;
  challenge?: string;
  whyItMattered?: string;
  decisionIntro?: string;
  decisionItems?: string[];
  outcome?: string;
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
    imageSrc?: string;
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

export type OwnershipIcon =
  | "product"
  | "requirements"
  | "documentation"
  | "ux"
  | "logic"
  | "uat"
  | "enablement";

export type OwnershipImage = {
  src: string;
  alt?: string;
};

export type OwnershipPersonaData = {
  title: string;
  subtitle: string;
  color: string;
  responsibilities: string[];
  permissions: string;
  goal: string;
  success: string;
};

export type OwnershipCardData = {
  title: string;
  body: string;
  icon: OwnershipIcon;
  /** Multiple images — first shows on the card; click opens a gallery */
  images?: OwnershipImage[];
  /** Single image shorthand — use images[] for multiple */
  imageSrc?: string;
  imageAlt?: string;
  /** Use "contain" for document screenshots (BRD, FRD); "cover" for UI previews */
  imageFit?: "cover" | "contain";
  personas?: OwnershipPersonaData[];
};

export type OwnershipSectionData = {
  title?: string;
  subtitle?: string;
  footer?: string;
  items: OwnershipCardData[];
};

export type StructuredCaseStudyData = Omit<
  CaseStudyData,
  "impact" | "overview" | "problem" | "uat"
> & {
  executiveSummary: ExecutiveSummaryData;
  ownership?: OwnershipSectionData;
  processNav: ProcessNavData;
  designingBeyondSpreadsheets: DesigningBeyondSpreadsheetsData;
  systemArchitecture: SystemArchitectureData;
  validationRollout: ValidationRolloutData;
  walkthrough?: {
    title: string;
    steps: WalkthroughStep[];
  };
  solutionWalkthrough?: SolutionWalkthroughData;
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
export type SwiggyCaseStudyData = StructuredCaseStudyData;