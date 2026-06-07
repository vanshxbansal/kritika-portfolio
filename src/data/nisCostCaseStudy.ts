import type { NisCostCaseStudyData } from "./caseStudyTypes";

export const nisCostCaseStudy = {
  slug: "nis-cost",
  hero: {
    id: "nis-hero",
    lines: [
      { text: "NIS.Cost", color: "default" as const },
      { text: "National Immunization", color: "default" as const },
      { text: "Planning Platform", color: "default" as const },
    ],
    subtitle:
      "Designing a Data-Intensive Planning System for National Immunization Strategies — transforming a complex, spreadsheet-driven workflow into a scalable, structured web application used for country-level planning, costing, and funding decisions.",
    meta: [
      { label: "Duration", value: "12 Months" },
      { label: "Role", value: "Product Designer + BA" },
      { label: "Platform", value: "Web Application" },
      { label: "Domain", value: "Public Health (UNICEF)" },
    ],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "NIS.Cost is a planning and costing platform that enables countries to create and manage their national immunization strategies.",
      "Previously, this entire process was handled through large, interdependent spreadsheets. These sheets required manual aggregation of costs, complex formula tracking, repetitive data entry across sheets, and offered limited visibility into funding gaps and insights.",
      "The goal was to design a system that could structure planning into a clear hierarchy, automate costing and financial calculations, enable real-time insights, reduce dependency on spreadsheets, and scale across countries with different planning needs.",
    ],
    imageAlt: "NIS.Cost platform overview",
    imageCaption: "NIS.Cost — national immunization planning platform",
  },
  problem: {
    title: "Problem Statement",
    paragraphs: [
      "Design a system that replaces spreadsheet-based planning while supporting multi-level hierarchical structures, year-wise costing and financial calculations, allocation of funding from multiple sources, real-time aggregation and reporting, and diverse user roles across countries.",
    ],
    objectives: [
      "Structure planning into a clear hierarchy",
      "Automate costing and financial calculations",
      "Enable real-time insights and reporting",
      "Reduce dependency on interdependent spreadsheets",
      "Support multi-level structures and year-wise projections",
      "Allocate and track funding from multiple sources",
      "Scale across countries with different planning needs",
    ],
    highlight:
      "Core challenge: How do you create a system that retains the flexibility of Excel, but introduces the structure, accuracy, and scalability required for national-level decision-making?",
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
  roleBasedDesign: {
    title: "Role-Based System Design",
    intro:
      "The platform supports multiple roles with distinct permissions and responsibilities. Instead of generic personas, the system was designed around role-based workflows, ensuring each user type interacts only with relevant data and actions.",
    roles: [
      "Global Admin",
      "Country Admin",
      "Country Collaborator",
      "Researcher (Personal workspace)",
      "Country Viewer",
    ],
  },
  iterativeDevelopment: {
    title: "Iterative Product Development",
    paragraphs: [
      "The product evolved continuously over a year through iterative development. Every module went through multiple iterations, requirements evolved frequently based on stakeholder input, and modules were interdependent — changes in costing impacted financing and reports. Real-world planning scenarios influenced design decisions throughout.",
    ],
    characteristics: [
      "Every module went through multiple iterations",
      "Requirements evolved frequently based on stakeholder input",
      "Modules were interdependent (changes in costing impacted financing and reports)",
      "Real-world planning scenarios influenced design decisions",
    ],
    approach: [
      "Weekly feedback loops with stakeholders",
      "Continuous refinement based on actual use cases",
      "Rapid iteration cycles across modules",
    ],
  },
  approach: {
    title: "Design Approach",
    steps: [],
    body: "",
  },
  challenges: {
    title: "Key Challenges & Design Decisions",
    items: [
      {
        title: "Roadmap Complexity — Designing for Deep Hierarchies",
        problem:
          "The roadmap structure expanded from 3 levels to up to 10 levels. Differentiating between these levels visually became difficult, especially within a compact layout.",
        solution:
          "Introduced visual hierarchy using carefully selected colors, ensured WCAG-compliant contrast ratios for accessibility, and balanced clarity with a professional visual tone.",
      },
      {
        title: "Excel vs Web Experience — Matching User Mental Models",
        problem:
          "Users were accustomed to spreadsheet interactions and expected keyboard navigation, fast data entry, and cell-based editing.",
        solution:
          "Designed grid-based interfaces with click-to-edit behavior, enabled keyboard navigation (arrow keys, enter), and supported spreadsheet-like workflows within a structured system.",
      },
      {
        title: "Reducing Navigation Friction in Costing",
        problem:
          "Editing an activity required navigating to a separate page, breaking user flow and context.",
        solution:
          "Introduced inline expandable panels within the same screen, allowing users to view and edit details without losing context.",
      },
      {
        title: "Managing High-Density Data on a Single Screen",
        problem:
          "Users needed access to activity lists, year-wise data, and detailed configuration fields all at once, within limited screen space.",
        solution:
          "Designed a split layout with resizable panels, allowing users to prioritize list view or detail view based on their task.",
      },
      {
        title: "Designing Multi-Dimensional Reporting Without Fragmentation",
        problem:
          "Stakeholders required multiple types of analysis — cost by roadmap level, vaccine, classification, funding by source, and funding gap analysis. The initial approach risked creating multiple independent report screens, increasing system complexity, creating redundancy in data logic, and confusing users about where to find insights.",
        solution:
          "Designed a single reporting module with dynamic “View By” functionality, allowing users to switch perspectives within the same interface.",
        bullets: [
          "Same dataset, different aggregation logic",
          "Consistent table structure across views",
          "Filters adapted based on context",
          "Export reflected the current view configuration",
          "Reduced navigation complexity and enabled faster decision-making without leaving the system",
        ],
      },
    ],
  },
  walkthrough: {
    title: "System Walkthrough",
    steps: [
      {
        title: "Plan Creation & Configuration",
        intro: "Users begin by creating a plan and defining:",
        items: [
          "Plan duration",
          "Custom hierarchy levels",
          "Master data (vaccines, funding sources, classifications)",
        ],
      },
      {
        title: "Roadmap (Planning Structure)",
        intro: "A hierarchical structure defining:",
        items: [
          "Main interventions",
          "Objectives",
          "Activities",
          "Additional custom levels",
          "This structure forms the foundation for costing and financing",
        ],
      },
      {
        title: "Costing (Core Engine)",
        intro: "Users calculate activity costs, vaccine costs, and year-wise financial projections. Includes:",
        items: [
          "Grid-based editing",
          "Line-item breakdowns",
          "Inflation handling",
        ],
      },
      {
        title: "Budgeting",
        intro: "Users:",
        items: [
          "Input past budget data",
          "Define secured funding",
          "Compare planned vs historical budgets",
        ],
      },
      {
        title: "Financing",
        intro: "Users:",
        items: [
          "Allocate funding sources",
          "Define funding types (secured/probable)",
          "Identify funding gaps",
        ],
      },
      {
        title: "Reports & Dashboard",
        intro: "Users analyze costs by hierarchy, vaccine, or classification; funding by source; and funding gaps. Supports:",
        items: [
          "Multiple analytical views",
          "Excel and PDF export",
        ],
      },
    ],
  },
  finalDesigns: {
    title: "Final Designs",
    description: "",
    placeholders: [],
  },
  uat: {
    title: "Testing & Validation (UAT)",
    paragraphs: [
      "Given the complexity of the system, validation was critical to ensure accuracy and usability. I prepared design test cases and use-case scenarios, participated actively in User Acceptance Testing (UAT), and documented test scenarios, expected vs actual outcomes, and issue tracking across modules.",
      "Key UAT challenges included multi-module dependencies (Costing → Financing → Reports), validation of real-world financial logic, and handling multiple user roles with different permissions. This identified usability gaps early, improved clarity and flow before rollout, and ensured alignment with real user workflows and expectations.",
    ],
    deliverables: [
      "Design test cases and use-case scenarios",
      "UAT participation across all modules",
      "Test scenario documentation with expected vs actual outcomes",
      "Issue tracking and status updates",
      "User and stakeholder feedback captured across modules",
      "Close collaboration with developers to refine edge cases",
    ],
  },
  adoption: {
    title: "Adoption & Enablement",
    items: [
      "Conducted walkthrough sessions for users",
      "Created an introductory product video",
      "Provided guidance on how to use complex modules",
    ],
  },
  impact: {
    title: "Impact & Reflection",
    learnings: [
      {
        lead: "Reduced spreadsheet dependency:",
        body: "Countries moved from large, interdependent spreadsheets to a structured platform for national immunization planning, costing, and funding decisions.",
      },
      {
        lead: "Improved data consistency:",
        body: "Automated calculations and structured hierarchies improved accuracy and reduced manual aggregation errors across planning cycles.",
      },
      {
        lead: "Real-time insights:",
        body: "Dynamic reporting with multiple analytical views enabled faster funding gap analysis and decision-making without leaving the system.",
      },
      {
        lead: "Collaboration at scale:",
        body: "Role-based workflows supported Global Admin, Country Admin, Collaborator, Researcher, and Viewer roles across diverse country contexts.",
      },
      {
        lead: "Personal growth:",
        body: "This project strengthened my ability to design for complex, data-heavy systems, translate evolving requirements into structured solutions, balance flexibility with system constraints, and work across design, analysis, and validation — growing from a UI-focused designer to someone who understands product logic, system behavior, and business impact.",
      },
    ],
  },
  moreProjects: [
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
