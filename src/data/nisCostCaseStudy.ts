import type { NisCostCaseStudyData } from "./caseStudyTypes";

export const nisCostCaseStudy = {
  slug: "nis-cost",
  hero: {
    id: "nis-hero",
    layout: "split" as const,
    eyebrow: "Case Study",
    lines: [
      { text: "NIS.Cost", color: "default" as const },
      { text: "National Immunization Planning Platform", color: "default" as const },
    ],
    subtitle:
      "A digital platform to configure, plan and visualize immunization programs for multiple countries — enabling data-driven decision making and efficient resource allocation.",
    meta: [
      { label: "Timeline", value: "12 Months", icon: "calendar" as const },
      { label: "My Role", value: "Product Designer + BA", icon: "user" as const },
      { label: "Platform", value: "Web Application", icon: "monitor" as const },
      { label: "Domain", value: "Public Health (UNICEF)", icon: "globe" as const },
    ],
    imageAlt: "NIS.Cost platform on laptop and mobile",
  },
  executiveSummary: {
    sectionNumber: "1",
    title: "Executive Summary",
    cards: [
      {
        title: "Problem",
        intro: "Spreadsheet-driven immunization planning made costing slow, fragmented, and hard to audit.",
        items: [
          "Teams had to manually aggregate costs, maintain complex formulas, and repeat data entry across interdependent sheets.",
          "Decision-makers had limited real-time visibility into funding gaps and planning trade-offs.",
        ],
        color: "#1976d2",
        icon: "problem" as const,
      },
      {
        title: "Solution",
        intro: "A structured platform with:",
        items: [
          "Multi-level hierarchies",
          "Automated costing engine",
          "Funding allocation & tracking",
          "Real-time reporting & insights",
        ],
        color: "#16a34a",
        icon: "solution" as const,
      },
      {
        title: "Impact",
        items: [
          "Centralized costing, financing, and reporting into one planning platform",
          "Designed scalable workflows for 5 user roles across country-level planning",
          "Automated cost and financial calculations to reduce spreadsheet dependency",
          "Enabled real-time funding gap analysis and reporting for decision-making",
        ],
        color: "#9333ea",
        icon: "outcome" as const,
      },
    ],
  },
  role: {
    title: "My Role & Ownership",
    paragraphs: [
      "I worked as a Product Designer with strong Business Analyst ownership, contributing across the entire product lifecycle. This was not just a design role — I was actively involved in shaping the product logic and validating it end-to-end.",
    ],
    contributions: [
      "Conducting weekly and bi-weekly requirement discussions",
      "Documenting MOMs and converting them into BRDs and FRDs",
      "Designing complete UX flows across all modules",
      "Iterating designs (2–4 cycles per module)",
      "Defining system behaviors and interaction patterns",
      "Preparing design test cases and use-case scenarios",
      "Supporting UAT and documenting feedback",
      "Creating onboarding and walkthrough material",
    ],
  },
  processNav: {
    phases: [
      { title: "Discover & Analyze", color: "#1976d2" },
      { title: "Define Requirements", color: "#16a34a" },
      { title: "Design & Prototype", color: "#9333ea" },
      { title: "Build & Iterate", color: "#ea580c" },
      { title: "Validate (UAT)", color: "#0891b2" },
      { title: "Rollout & Enable", color: "#15803d" },
    ],
    anchors: [
      { id: "process-discover", phase: 0 },
      { id: "process-define", phase: 1 },
      { id: "process-design", phase: 2 },
      { id: "process-build", phase: 3 },
      { id: "process-validate", phase: 4 },
      { id: "process-rollout", phase: 5 },
    ],
  },
  designingBeyondSpreadsheets: {
    sectionNumber: "3",
    title: "Designing Beyond Spreadsheets",
    challenge: {
      title: "The Challenge",
      intro: "Replace spreadsheet planning while supporting:",
      items: [
        "Multi-level hierarchical structures",
        "Year-wise costing & calculations",
        "Allocation from multiple sources",
        "Real-time aggregation & reporting",
        "Diverse user roles across countries",
      ],
    },
    evolution: {
      title: "Product Evolution (12 Months)",
      items: [
        "Continuous iterative development",
        "Weekly stakeholder feedback loops",
        "Evolving requirements",
        "Interdependent modules (Costing → Financing & Reports)",
        "Real-world scenarios drove design",
      ],
    },
  },
  systemArchitecture: {
    sectionNumber: "4",
    title: "System Architecture",
    rolesTitle: "Role-Based Access",
    roles: [
      { name: "Global Admin", color: "#16a34a" },
      { name: "Country Admin", color: "#16a34a" },
      { name: "Country Collaborator", color: "#ea580c" },
      { name: "Researcher (Personal Workspace)", color: "#9333ea" },
      { name: "Country Viewer", color: "#1976d2" },
    ],
    workflowTitle: "Core Workflow",
    workflowSteps: [
      {
        title: "Plan Creation & Configuration",
        details: "Plan, Hierarchy, Master Data",
      },
      {
        title: "Roadmap (Planning Structure)",
        details: "Interventions, Objectives, Activities",
      },
      {
        title: "Costing (Core Engine)",
        details: "Costs, Vaccines, Year-wise Projections",
      },
      {
        title: "Budgeting",
        details: "Past Data, Secured Funding, Comparisons",
      },
      {
        title: "Financing",
        details: "Funding Sources, Types, Gaps",
      },
      {
        title: "Reports & Dashboard",
        details: "Analytics, Visuals, Export",
      },
    ],
  },
  approach: {
    title: "Design Approach",
    steps: [],
    body: "",
  },
  deepDive: {
    id: "solution-walkthrough",
    title: "Product Deep Dive",
    subtitle:
      "A connected workflow where planning, costing, budgeting, financing, and reporting build on each other — with the key design decisions that shaped each module.",
    chapters: [
      {
        id: "plan-configuration",
        title: "Plan Creation & Configuration",
        intro:
          "Users begin by creating a plan and defining the structure that every downstream module depends on.",
        features: [
          "Plan duration and timeline",
          "Custom hierarchy levels",
          "Master data — vaccines, funding sources, classifications",
        ],
        visuals: [{ label: "Plan setup & configuration", caption: "Plan creation flow" }],
      },
      {
        id: "roadmap",
        title: "Roadmap — Deep Hierarchies",
        intro:
          "A hierarchical planning structure defining interventions, objectives, activities, and custom levels — the foundation for costing and financing.",
        problem:
          "The roadmap structure expanded from 3 levels to up to 10 levels. Differentiating between these levels visually became difficult, especially within a compact layout.",
        solution:
          "Introduced visual hierarchy using carefully selected colors, ensured WCAG-compliant contrast ratios for accessibility, and balanced clarity with a professional visual tone.",
        features: [
          "Main interventions, objectives & activities",
          "Additional custom hierarchy levels",
          "Country-specific planning structures",
        ],
        visuals: [{ label: "Roadmap hierarchy view", caption: "Multi-level planning structure" }],
      },
      {
        id: "costing",
        title: "Costing Engine",
        intro:
          "The core engine where users calculate activity costs, vaccine costs, and year-wise financial projections.",
        decisions: [
          {
            title: "Excel vs Web Experience",
            problem:
              "Users were accustomed to spreadsheet interactions and expected keyboard navigation, fast data entry, and cell-based editing.",
            solution:
              "Designed grid-based interfaces with click-to-edit behavior, enabled keyboard navigation (arrow keys, enter), and supported spreadsheet-like workflows within a structured system.",
          },
          {
            title: "Reducing Navigation Friction",
            problem:
              "Editing an activity required navigating to a separate page, breaking user flow and context.",
            solution:
              "Introduced inline expandable panels within the same screen, allowing users to view and edit details without losing context.",
          },
          {
            title: "High-Density Data Layout",
            problem:
              "Users needed access to activity lists, year-wise data, and detailed configuration fields all at once, within limited screen space.",
            solution:
              "Designed a split layout with resizable panels, allowing users to prioritize list view or detail view based on their task.",
          },
        ],
        features: ["Grid-based editing", "Line-item breakdowns", "Inflation handling"],
        visuals: [
          { label: "Grid-based costing table", caption: "Spreadsheet-like editing" },
          { label: "Split panel layout", caption: "Inline detail panels" },
        ],
      },
      {
        id: "budgeting-financing",
        title: "Budgeting & Financing",
        intro:
          "Countries compare planned costs with historical budgets, allocate funding sources, and identify gaps across the planning cycle.",
        features: [
          "Input past budget data & define secured funding",
          "Compare planned vs historical budgets",
          "Allocate funding sources and define types (secured/probable)",
          "Identify and track funding gaps",
        ],
        visuals: [
          { label: "Budget comparison view", caption: "Historical vs planned budgets" },
          { label: "Funding allocation", caption: "Source-wise financing" },
        ],
      },
      {
        id: "reporting",
        title: "Reporting & Insights",
        intro:
          "A unified reporting experience enabling multiple analytical views without fragmenting the workflow.",
        problem:
          "Stakeholders required multiple types of analysis — cost by roadmap level, vaccine, classification, funding by source, and funding gap analysis. The initial approach risked creating multiple independent report screens.",
        solution:
          "Designed a single reporting module with dynamic “View By” functionality, allowing users to switch perspectives within the same interface.",
        bullets: [
          "Same dataset, different aggregation logic",
          "Consistent table structure across views",
          "Filters adapted based on context",
          "Export reflected the current view configuration",
        ],
        features: ["Multiple analytical views", "Excel and PDF export"],
        visuals: [
          { label: "Dynamic View By reporting", caption: "Multi-dimensional analysis" },
          { label: "Funding gap report", caption: "Gap analysis dashboard" },
        ],
      },
    ],
  },
  finalDesigns: {
    title: "Final Designs",
    description: "",
    placeholders: [],
  },
  validationRollout: {
    sectionNumber: "7",
    title: "Validation & Rollout (UAT)",
    validationTitle: "UAT & Validation",
    validationItems: [
      "Prepared design test cases & use-case scenarios",
      "Participated in UAT",
      "Documented expected vs actual outcomes",
      "Tracked issues & status",
      "Captured stakeholder feedback",
      "Worked with developers on edge cases",
    ],
    enablementTitle: "Enablement",
    enablementItems: [
      { label: "Walkthrough sessions for users", icon: "walkthrough" as const },
      { label: "Introductory product video", icon: "video" as const },
      { label: "Guidance on using complex modules", icon: "guidance" as const },
    ],
    challengesTitle: "Key UAT Challenges",
    challengeItems: [
      "Multi-module dependencies (Costing → Financing → Reports)",
      "Validation of real-world financial logic",
      "Multiple user roles & permissions",
    ],
  },
  impact: {
    resultsTitle: "Impact & Results",
    metrics: [
      {
        value: "Centralized",
        label: "Replaced interdependent\nspreadsheets",
        icon: "clock",
        color: "#1976d2",
      },
      {
        value: "Automated",
        label: "Cost & financial\ncalculations",
        icon: "shield",
        color: "#16a34a",
      },
      {
        value: "5 Roles",
        label: "Role-based workflows\nacross countries",
        icon: "globe",
        color: "#9333ea",
      },
      {
        value: "Real-time",
        label: "Funding gap analysis\n& reporting",
        icon: "chart",
        color: "#ea580c",
      },
      {
        value: "Unified",
        label: "Single reporting module\nwith dynamic views",
        icon: "sparkle",
        color: "#0891b2",
      },
    ],
    learningsTitle: "Key Learnings",
    learnings: [
      {
        body: "Designing interconnected modules — not isolated screens — was essential for a planning ecosystem where costing, financing, and reports depend on each other.",
        icon: "layers",
        color: "#eab308",
      },
      {
        body: "Balancing spreadsheet-like flexibility with system structure required matching user mental models through grid editing, keyboard navigation, and inline panels.",
        icon: "users",
        color: "#9333ea",
      },
      {
        body: "Continuous validation through UAT and stakeholder feedback ensured the product was practical, accurate, and trusted before country-level rollout.",
        icon: "check",
        color: "#1976d2",
      },
    ],
  },
  moreProjects: [
    {
      title: "Swiggy Delivery Partner",
      subtitle: "Self-initiated Redesign",
      tag: "Product Design",
      href: "/swiggy-delivery-partner",
      cursorLabel: "Product Design",
      image: "/swiggy-delivery-partner/hero.png",
    },
    {
      title: "Holistic Progress",
      subtitle: "Card @ PARAKH",
      tag: "EdTech Platform",
      href: "/holistic-progress-card",
      cursorLabel: "Product Design",
      image:
        "https://framerusercontent.com/images/PbCzu2EeGzqZjc5FtABlFCBWWho.png?width=800&height=500",
    },
    {
      title: "PARAKH Web Portal",
      subtitle: "parakh.gov.in",
      tag: "Government Portal",
      href: "https://parakh.gov.in",
      external: true,
      cursorLabel: "Product Design",
      image:
        "https://framerusercontent.com/images/PbCzu2EeGzqZjc5FtABlFCBWWho.png?width=800&height=500",
    },
  ],
} satisfies NisCostCaseStudyData;
