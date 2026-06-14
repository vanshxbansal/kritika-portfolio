import type { SwiggyCaseStudyData } from "./caseStudyTypes";

const ecosystemImages = Array.from({ length: 9 }, (_, index) => ({
  src: `/swiggy-delivery-partner/research/ecosystem-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `Swiggy Delivery Partner app screenshot ${index + 1} from contextual walkthrough`,
}));

export const swiggyCaseStudy = {
  slug: "swiggy-delivery-partner",
  hero: {
    id: "swiggy-hero",
    layout: "split" as const,
    eyebrow: "Self-initiated Case Study",
    lines: [
      { text: "Redesigning the Swiggy", color: "default" as const },
      { text: "Delivery Partner", color: "default" as const },
      { text: "Experience", color: "accent" as const },
    ],
    subtitle:
      "A research-driven product design case study — simplifying the delivery experience through structured discovery, prioritization, and thoughtful interaction design.",
    meta: [
      { label: "Role", value: "Product Designer", icon: "user" as const },
      { label: "Duration", value: "3 Days · Self-initiated", icon: "calendar" as const },
      {
        label: "Focus",
        value: "UX Research · Product Thinking",
        icon: "monitor" as const,
      },
      { label: "Type", value: "Speculative Redesign", icon: "globe" as const },
    ],
    imageAlt: "Swiggy delivery partner on scooter with delivery bag",
    imageSrc: "/swiggy-delivery-partner/hero.png",
  },
  executiveSummary: {
    sectionNumber: "1",
    title: "Executive Summary",
    cards: [
      {
        title: "Problem",
        intro:
          "Delivery partners rely on the app at every stage of a delivery. The workflow is straightforward — most friction comes from how information is surfaced.",
        items: [
          "Financial transparency gaps across earnings, bonuses, payouts, and floating cash",
          "Incentive rules and progress are fragmented and difficult to understand",
          "High information density on Home creates cognitive load during active deliveries",
        ],
        color: "#FC8019",
        icon: "problem" as const,
      },
      {
        title: "Solution",
        intro: "A task-first redesign focused on three MVP areas:",
        items: [
          "Unified financial experience — today's earnings, bonus progress, and floating cash in one place",
          "Smart order decision card — earnings, distance, time, and bonus at a glance before accepting",
          "Simplified information architecture — operational priority over promotions, progressive disclosure",
        ],
        color: "#16a34a",
        icon: "solution" as const,
      },
      {
        title: "Impact",
        intro: "Proposed outcomes (not measured post-launch):",
        items: [
          "Faster order evaluation and higher acceptance through consolidated pre-acceptance information",
          "Improved incentive completion via visible progress and milestone tracking",
          "Reduced support queries through transparent earnings and floating cash visibility",
          "North star: Delivery Partner Task Efficiency",
        ],
        color: "#9333ea",
        icon: "outcome" as const,
      },
    ],
  },
  role: {
    title: "My Role",
    paragraphs: [
      "I led this self-initiated case study end-to-end — from contextual product walkthrough and competitive benchmarking through synthesis, prioritization, and high-fidelity UI design.",
      "This is an independent redesign exercise and is not affiliated with or commissioned by Swiggy.",
    ],
    contributions: [
      "Contextual walkthrough of the live Delivery Partner app (Delhi NCR)",
      "Competitive analysis across 6 delivery platforms",
      "Heuristic evaluation using Nielsen's 10 Usability Heuristics",
      "Journey mapping across 25 operational stages",
      "Affinity mapping of 45+ opportunities into 12 problem areas",
      "Impact × Effort prioritization and MVP scoping",
      "Solution exploration, evaluation, and annotated UI designs",
    ],
  },
  ownership: {
    title: "Research Evidence",
    subtitle:
      "Four research lenses validated the same core insight — the app is operationally capable, but information-heavy.",
    footer:
      "Scroll through each research artifact to see how product exploration, benchmarking, user voice, and heuristics informed the redesign.",
    items: [
      {
        title: "Current Ecosystem",
        body: "Contextual product walkthrough of the live Swiggy Delivery Partner app (Instamart) with an active delivery executive in Delhi NCR. Core modules: Home, Earnings, My Shifts, Refer & Earn, More, and Help & Support.",
        icon: "product",
        images: ecosystemImages,
        imageFit: "contain",
      },
      {
        title: "Competitive Landscape",
        body: "Benchmarked Swiggy against Uber Driver, Zomato, Porter Partner, Amazon Flex, and DoorDash. Leading platforms prioritize task execution, earnings transparency, and glanceable on-the-move interactions. Swiggy's key gaps: limited earnings visibility and fragmented incentives.",
        icon: "requirements",
        imageFit: "contain",
      },
      {
        title: "Driver Voice",
        body: "Analyzed 100+ public reviews from Play Store, Reddit, and forums. Top complaints: incentive payouts, support resolution, and app crashes. Positive themes: flexible hours, easy onboarding, weekly payouts, and insurance benefits.",
        icon: "documentation",
        imageFit: "contain",
      },
      {
        title: "Heuristic Evaluation",
        body: "Evaluated using Nielsen's 10 Heuristics. High-severity violations: visibility of system status, match between system and real world, consistency, recognition vs recall, and aesthetic/minimalist design on the Home screen.",
        icon: "uat",
        imageFit: "contain",
      },
    ],
  },
  processNav: {
    phases: [
      {
        title: "Discover",
        shortTitle: "Discover",
        summary: "Challenge + Executive Summary",
        details: [
          "Understanding the delivery partner workflow",
          "Identifying friction in financial transparency and IA",
          "Defining redesign objectives and deliverables",
        ],
        color: "#FC8019",
      },
      {
        title: "Define",
        shortTitle: "Define",
        summary: "Research + Ecosystem Analysis",
        details: [
          "Contextual app walkthrough",
          "Competitive benchmarking",
          "User reviews and heuristic evaluation",
        ],
        color: "#16a34a",
      },
      {
        title: "Build",
        shortTitle: "Build",
        summary: "Synthesis + Design + UI",
        details: [
          "Opportunity mapping and MVP prioritization",
          "Solution evaluation and blueprint",
          "Experience transformations and UI designs",
        ],
        color: "#ea580c",
      },
      {
        title: "Validate",
        shortTitle: "Validate",
        summary: "Design Rationale + Prototype",
        details: [
          "Research-backed design decisions",
          "Interactive Figma prototype",
          "Proposed validation approach",
        ],
        color: "#0891b2",
      },
      {
        title: "Rollout",
        shortTitle: "Rollout",
        summary: "Proposed Metrics + Learnings",
        details: [
          "Success metrics framework",
          "Expected business impact",
          "Key reflections",
        ],
        color: "#15803d",
      },
    ],
    anchors: [
      { id: "process-discover", phase: 0 },
      { id: "process-define", phase: 1 },
      { id: "process-build", phase: 2 },
      { id: "process-validate", phase: 3 },
      { id: "process-rollout", phase: 4 },
    ],
  },
  designingBeyondSpreadsheets: {
    sectionNumber: "2",
    title: "The Challenge",
    challenge: {
      title: "Design Objective",
      intro:
        "Delivery partners rely on the application throughout every stage of a delivery. The experience should be intuitive, efficient, and easy to navigate while demonstrating structured product thinking.",
      items: [
        "Understand the existing delivery partner experience",
        "Identify usability and transparency challenges",
        "Prioritize high-impact problems using research evidence",
        "Design a simpler, task-first workflow",
        "Improve the overall driver experience",
      ],
    },
    evolution: {
      title: "Deliverables",
      items: [
        "Research-backed insights from product walkthrough, reviews, and heuristics",
        "Prioritized opportunities and MVP scope definition",
        "High-level user flows and information architecture",
        "Proposed redesign with annotated UI screens",
        "Success metrics framework and expected business impact",
      ],
    },
  },
  systemArchitecture: {
    sectionNumber: "",
    title: "",
    rolesTitle: "",
    roles: [],
    workflowTitle: "",
    workflowSteps: [],
  },
  approach: {
    title: "Design Approach",
    steps: [],
    body: "",
  },
  deepDive: {
    id: "swiggy-deep-dive",
    title: "From Research to Redesign",
    subtitle:
      "Synthesizing 45+ opportunities into a focused MVP — financial transparency, order decisions, and information architecture.",
    chapters: [
      {
        id: "journey-mapping",
        title: "Journey Mapping & Pain Points",
        subtitle: "Research Phase 05",
        challenge:
          "Mapped 25 stages of the delivery partner workflow. The core delivery process is relatively straightforward.",
        whyItMattered:
          "Most friction clusters around Go Online (cluttered Home), order evaluation (fragmented info), earnings/incentives/floating cash, shift planning, support, and technical issues — not the delivery steps themselves.",
        decisionItems: [
          "Go Online — competing banners and alerts reduce focus on the primary task",
          "Evaluate Order — drivers mentally combine payout, incentives, and distance before deciding",
          "Track Earnings — financial data spread across multiple sections",
          "Track Incentives — rules and calculations among the most common complaints",
        ],
        outcome:
          "Pain points validated across screenshots, heuristic evaluation, and 100+ user reviews.",
        visuals: [],
      },
      {
        id: "opportunity-synthesis",
        title: "Opportunity Synthesis",
        subtitle: "Synthesis Phases 06–07",
        challenge:
          "45 independent opportunity statements extracted from research — clustered into 12 areas via affinity mapping.",
        whyItMattered:
          "Grouping by underlying user need (not feature area) revealed that Financial Experience, Information Architecture, and Order Decision Experience were the highest-leverage clusters.",
        decisionItems: [
          "Financial Experience — earnings visibility, payout transparency, bonus visibility",
          "Information Architecture — dashboard clutter, visual hierarchy, alert prioritization",
          "Order Decision Experience — pre-acceptance info, mental math reduction",
          "Incentive Experience — rules, eligibility, progress tracking",
        ],
        outcome:
          "12 opportunity areas defined. Full opportunity list available in the research spreadsheet.",
        visuals: [],
      },
      {
        id: "prioritization",
        title: "Prioritization & MVP Scope",
        subtitle: "Phase 09",
        challenge:
          "12 problem statements evaluated using Impact × Effort to scope the first redesign iteration.",
        whyItMattered:
          "A limited MVP maximizes value while keeping scope feasible for a 3-day case study.",
        decisionItems: [
          "MVP — Financial Experience, Order Decision Experience, Information Architecture",
          "Phase 2 — Incentive Experience, Shift Planning, Communication & Workflow, Support",
          "Long-term — Technical Reliability, Pickup/Delivery/Navigation, Onboarding",
        ],
        outcome:
          "Redesign focuses on improving how existing information is surfaced — not adding new functionality.",
        visuals: [],
      },
      {
        id: "solution-evaluation",
        title: "Solution Exploration & Evaluation",
        subtitle: "Design Phases 10–11",
        challenge:
          "15 solution directions explored across 3 MVP areas before selecting the final approach.",
        whyItMattered:
          "Only solutions delivering high user value with reasonable implementation effort were carried forward.",
        decisionItems: [
          "Financial — Unified Earnings Dashboard, Bonus Progress Tracker, Floating Cash Widget (selected)",
          "Order Decision — Smart Order Card, Distance + Earnings Summary, Est. Time & Effort (selected)",
          "IA — Progressive Disclosure, Priority Dashboard, Sticky Operational Card (selected)",
          "Deferred — Wallet-style summary, AI recommendation engine, personalized dashboard",
        ],
        outcome:
          "Final strategy: unified financial experience, smarter order decision support, simplified contextual IA.",
        visuals: [],
      },
      {
        id: "solution-blueprint",
        title: "Solution Blueprint",
        subtitle: "Design Phase 12",
        challenge:
          "Translating prioritized problems into a simplified product structure and optimized delivery workflow.",
        whyItMattered:
          "IA principles must support on-the-move, glanceable interactions where speed is critical.",
        decisionItems: [
          "Task-first navigation — frequently used actions surfaced first",
          "Financial information grouped together — earnings, incentives, floating cash",
          "Operational information prioritized over promotions",
          "Optimized flow: Go Online → View Earnings → Receive Order → Accept/Skip → Complete → Track Progress",
        ],
        outcome:
          "Three guiding principles: increase financial transparency, reduce cognitive load, enable faster operational decisions.",
        visuals: [
          {
            label: "Design approach",
            caption: "Understand → Research → Define → Ideate → Design → Measure",
            imageSrc: "/swiggy-delivery-partner/design-approach.png",
          },
        ],
      },
    ],
  },
  solutionWalkthrough: {
    eyebrow: "Solution Walkthrough",
    title: "Proposed Redesign — Core Screens",
    description:
      "Four annotated screens addressing the MVP scope — task-first Home, unified Earnings, transparent Incentives, and a Smart Order Decision Card.",
    bullets: [
      "Task-first Home with today's progress, earnings snapshot, and active order",
      "Unified Earnings dashboard with daily breakdown and weekly trends",
      "Incentive screen with trip progress tracker and milestone visibility",
      "Smart Order Card with earnings, distance, time, and bonus at a glance",
    ],
  },
  finalDesigns: {
    title: "Final Designs",
    description: "",
    placeholders: [],
  },
  validationRollout: {
    sectionNumber: "6",
    title: "Design Validation Approach",
    validationTitle: "Research-Backed Validation",
    validationItems: [
      "Contextual product walkthrough of the live app in operational context (Delhi NCR)",
      "Competitive benchmarking across 6 delivery partner platforms",
      "Analysis of 100+ public driver reviews validating pain point themes",
      "Heuristic evaluation using Nielsen's 10 Usability Heuristics with severity scoring",
      "25-stage journey map with evidence tagging from multiple research sources",
    ],
    enablementTitle: "Design Artifacts",
    enablementItems: [
      { label: "Interactive Figma prototype for core flows", icon: "walkthrough" as const },
      { label: "Annotated high-fidelity UI screens", icon: "video" as const },
      { label: "45+ opportunity statements spreadsheet", icon: "guidance" as const },
    ],
    trainingVideo: {
      title: "Interactive Prototype",
      caption: "Explore the proposed redesign flows in Figma.",
      thumbnailSrc: "/swiggy-delivery-partner/solution/home-screen.png",
      href: "https://www.figma.com/proto/9pSDooxtyrNiyjt352rMiY/Swiggy-Rider-App-Redesign?starting-point-node-id=33%3A944",
    },
    challengesTitle: "Recommended Next Steps",
    challengeItems: [
      "Usability testing with active delivery partners to validate order card comprehension",
      "A/B testing Smart Order Card layout against current multi-step evaluation flow",
      "Validate incentive progress tracker reduces support queries about payout discrepancies",
    ],
  },
  impact: {
    resultsTitle: "Proposed Impact & Results",
    metrics: [
      {
        value: "45+",
        label: "Opportunities\nidentified",
        note: "From product exploration, reviews, heuristics, and journey mapping",
        icon: "chart",
        color: "#FC8019",
      },
      {
        value: "12",
        label: "Problem areas\ndefined",
        note: "Clustered via affinity mapping into user-centered problem statements",
        icon: "globe",
        color: "#16a34a",
      },
      {
        value: "3",
        label: "MVP focus\nareas",
        note: "Financial transparency, order decisions, information architecture",
        icon: "shield",
        color: "#9333ea",
      },
      {
        value: "4",
        label: "Core screens\nredesigned",
        note: "Home, Earnings, Incentive, and Smart Order Card",
        icon: "sparkle",
        color: "#ea580c",
      },
      {
        value: "Task",
        label: "Efficiency\nnorth star",
        note: "Faster earnings comprehension, faster order evaluation, higher incentive completion",
        icon: "clock",
        color: "#0891b2",
      },
    ],
    learningsTitle: "Key Learnings",
    learnings: [
      {
        title: "Research Before Pixels",
        body: "Synthesizing 45 opportunities into 12 clusters and an MVP scope prevented premature UI work and kept the redesign focused on high-impact problems.",
        icon: "lightbulb",
        color: "#FC8019",
      },
      {
        title: "Transparency as Retention",
        body: "User reviews consistently showed that trust, reliability, and financial clarity matter more than missing features — the redesign surfaces existing data better.",
        icon: "users",
        color: "#9333ea",
      },
      {
        title: "Reduce Load, Not Features",
        body: "The strongest improvement path was progressive disclosure and task-first hierarchy — not adding capabilities the app already had.",
        icon: "layers",
        color: "#16a34a",
      },
    ],
  },
  moreProjects: [
    {
      title: "Holistic Progress Card",
      subtitle: "NCERT · PARAKH",
      tag: "EdTech Platform",
      href: "/holistic-progress-card",
      cursorLabel: "Product Design",
      image:
        "https://framerusercontent.com/images/PbCzu2EeGzqZjc5FtABlFCBWWho.png?width=800&height=500",
    },
    {
      title: "NIS.Cost",
      subtitle: "UNICEF · WHO",
      tag: "Global Health",
      href: "/nis-cost",
      cursorLabel: "Global Health",
      image:
        "https://framerusercontent.com/images/gIURKS2HBNmLKNvvylAiJgTi8U.png?width=800&height=500",
    },
  ],
} satisfies SwiggyCaseStudyData;
