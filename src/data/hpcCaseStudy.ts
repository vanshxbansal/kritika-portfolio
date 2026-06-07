import type { HpcCaseStudyData } from "./caseStudyTypes";

export const hpcCaseStudy = {
  slug: "holistic-progress-card",
  hero: {
    id: "hpc-hero",
    layout: "split" as const,
    eyebrow: "Case Study",
    lines: [
      { text: "Holistic Progress", color: "default" as const },
      { text: "Card Platform", color: "default" as const },
      { text: "@ PARAKH", color: "accent" as const },
    ],
    subtitle:
      "Designing a national digital platform for competency-based, 360° student assessment under NCERT’s PARAKH initiative — shifting from rote exams to meaningful, multidimensional progress tracking.",
    meta: [
      { label: "My Role", value: "Product Designer + BA", icon: "user" as const },
      { label: "Client", value: "PARAKH (NCERT)", icon: "users" as const },
      { label: "Platform", value: "EdTech Web App", icon: "monitor" as const },
      { label: "Scope", value: "All School Stages", icon: "globe" as const },
    ],
    imageAlt: "Holistic Progress Card platform on laptop and mobile",
  },
  executiveSummary: {
    sectionNumber: "1",
    title: "Executive Summary",
    cards: [
      {
        title: "Problem",
        intro: "Manual, paper-based HPCs led to:",
        items: [
          "Time-consuming record-keeping in schools",
          "Error-prone spreadsheets and forms",
          "No scalable solution for nationwide rollout",
          "Report cards missing socio-emotional & life skills",
        ],
        color: "#E15A11",
        icon: "problem" as const,
      },
      {
        title: "Solution",
        intro: "A structured digital platform with:",
        items: [
          "Competency-based, 360° assessment across domains",
          "Feedback from teachers, peers, parents & self-reflection",
          "Role-based dashboards for six user types",
          "Parts A–C structure covering all school stages",
        ],
        color: "#16a34a",
        icon: "solution" as const,
      },
      {
        title: "Outcome",
        items: [
          "Digitized progress tracking for millions of students",
          "Meaningful link between home and school",
          "Data-driven instruction through competency insights",
          "Operationalized NEP 2020’s holistic learning vision",
          "National training & enablement at scale",
        ],
        color: "#9333ea",
        icon: "outcome" as const,
      },
    ],
  },
  role: {
    title: "My Role & Ownership",
    paragraphs: [
      "I served as both Product (UI/UX) Designer and Business Analyst on the HPC project, contributing across the full lifecycle — from discovery and documentation through design, development support, UAT, and national training rollout.",
    ],
    contributions: [
      "Led stakeholder workshops and synthesized meeting minutes into a formal BRD and FRD",
      "Developed seven user personas mapping goals and pain points for each role",
      "Created user flows, information architecture, and left-nav structure for HPC Parts A–C",
      "Designed wireframes and high-fidelity mockups in Figma for all role-based interfaces",
      "Built interactive prototypes for stakeholder validation before development",
      "Translated requirements into 50+ JIRA user stories with acceptance criteria",
      "Prepared UAT test plans, led testing sessions, and verified fixes across all roles",
      "Created onboarding materials including user manuals and training video tutorials",
      "Co-facilitated live training webinars (200–1000 attendees) for educators across states",
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
    title: "Designing Beyond Paper Records",
    challenge: {
      title: "The Challenge",
      intro: "Digitize holistic assessment while supporting:",
      items: [
        "Multi-domain competency tracking (academic, socio-emotional, vocational)",
        "Four school stages — Foundational through Secondary",
        "Six distinct user roles with different permissions",
        "Continuous, formative evaluation beyond exam scores",
        "Nationwide deployment with language & accessibility needs",
      ],
    },
    evolution: {
      title: "Product Evolution",
      items: [
        "Agile two-week sprint model with Figma prototypes",
        "Weekly reviews with PARAKH coordinators",
        "Evolving scope — class sections, activity bank, dual dashboards",
        "Parts A (Profile), B (Competency Domains), C (Summary)",
        "Real educator feedback drove iterative design decisions",
      ],
    },
  },
  systemArchitecture: {
    sectionNumber: "4",
    title: "System Architecture",
    rolesTitle: "Role-Based Access",
    roles: [
      { name: "PARAKH Admin", color: "#E15A11" },
      { name: "Regional Admin", color: "#16a34a" },
      { name: "State / District Admin", color: "#1976d2" },
      { name: "School Admin", color: "#9333ea" },
      { name: "Teacher", color: "#ea580c" },
      { name: "Student / Parent", color: "#0891b2" },
    ],
    workflowTitle: "Core Workflow",
    workflowSteps: [
      {
        title: "Login & Role Selection",
        details: "Role-specific entry points & permissions",
      },
      {
        title: "Class & Student Setup",
        details: "School admin configures classes & enrollments",
      },
      {
        title: "Part A — Student Profile",
        details: "Demographics, background & context",
      },
      {
        title: "Part B — Competency Domains",
        details: "Multi-domain assessment & activity entries",
      },
      {
        title: "Part C — Summary & Insights",
        details: "Holistic progress card & growth trends",
      },
      {
        title: "Admin Dashboards",
        details: "National KPIs, user management & reporting",
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
      "From information architecture to role-based interfaces — the key modules and design decisions that shaped the Holistic Progress Card platform.",
    chapters: [
      {
        id: "hpc-structure",
        title: "Information Architecture — Parts A, B & C",
        intro:
          "The HPC was organized into three interconnected parts with a consistent left-nav structure, validated through clickable Figma prototypes before development.",
        features: [
          "Part A — Student profile, demographics & background context",
          "Part B — Competency domains with activity-based entries",
          "Part C — Summary views, growth trends & holistic insights",
          "Consistent navigation pattern across all school stages",
        ],
        visuals: [
          { label: "Student HPC — Parts A, B & C", caption: "Three-part progress card structure" },
        ],
      },
      {
        id: "role-dashboards",
        title: "Role-Based Dashboards & Login",
        intro:
          "Each of the six user roles required distinct entry points, permissions, and dashboard views — from national PARAKH oversight to classroom-level teacher workflows.",
        features: [
          "Role-specific login screens and landing dashboards",
          "PARAKH Admin — national KPIs and user management",
          "Regional & state admin views for oversight",
          "Teacher dashboard for class-level HPC management",
        ],
        visuals: [
          { label: "Role-based login & dashboards", caption: "Six role entry points" },
          { label: "Regional & PARAKH admin views", caption: "Admin oversight dashboards" },
        ],
      },
      {
        id: "competency-forms",
        title: "Competency Assessment Forms",
        intro:
          "Part B forms capture multidimensional learning across academic, socio-emotional, and vocational domains — integrating feedback from teachers, peers, parents, and self-reflection.",
        features: [
          "Domain-specific competency rubrics per school stage",
          "Activity bank for pre-filled HPC entries",
          "Peer, parent & self-assessment inputs",
          "Form layouts adapted for Foundational through Secondary stages",
        ],
        visuals: [
          { label: "Competency domain forms", caption: "Multi-domain assessment entries" },
        ],
      },
      {
        id: "class-workflow",
        title: "Class Management & Teacher Workflow",
        intro:
          "Teachers manage classes, track student progress, and fill HPC entries through streamlined workflows designed for daily classroom use.",
        problem:
          "Class sections were added mid-project — requiring updated class management UI, database schema changes, and revised teacher navigation flows.",
        solution:
          "Redesigned class setup and section management screens, updated the information architecture to accommodate sections without breaking existing teacher workflows, and validated changes through rapid wireframe walkthroughs.",
        features: [
          "Class and section creation & management",
          "Student enrollment and assignment",
          "Bulk HPC entry and progress tracking",
          "Teacher-friendly form layouts for daily use",
        ],
        visuals: [
          { label: "Class management & teacher workflow", caption: "Classroom-level HPC management" },
        ],
      },
      {
        id: "challenges-decisions",
        title: "Key Challenges & Design Decisions",
        intro:
          "Mid-project scope changes, tight timelines, and diverse stakeholders required pragmatic design decisions to keep critical workflows on track.",
        decisions: [
          {
            title: "Evolving Requirements",
            problem:
              "Stakeholders added scope mid-stream — class sections, dual PARAKH dashboards, and a global activity bank were not in the original plan.",
            solution:
              "Defined MVP scopes per release, prioritized critical educator workflows, and used rapid prototypes to validate new features before full development commitment.",
            bullets: [
              "Class sections required updated UI and database schema",
              "PARAKH Admin needed two dashboards — national KPIs and user management",
              "Global Activity Bank added a searchable repository for pre-filled entries",
            ],
          },
          {
            title: "Time Constraints",
            problem:
              "With a short delivery mandate, there was pressure to ship all features at once while maintaining quality across six user roles.",
            solution:
              "Deferred non-essential polish to later releases and focused each sprint on one complete, testable workflow — ensuring educators could use core HPC flows on schedule.",
          },
          {
            title: "Stakeholder Alignment",
            problem:
              "With six distinct user roles and national-level stakeholders, disagreements on priorities and interface patterns were common.",
            solution:
              "Conducted regular wireframe walkthroughs with PARAKH coordinators, built clickable prototypes for async review, and documented decisions in updated FRDs to maintain a shared vision.",
          },
        ],
        visuals: [
          { label: "Design iteration snapshots", caption: "Prototype-driven validation" },
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
      "Led UAT across all six user roles with test cases per role",
      "Logged, prioritized, and verified bugs and usability issues",
      "Validated workflows for Foundational through Secondary stages",
      "Sign-off documentation for each role’s critical paths",
      "Cross-role permission and data flow verification",
    ],
    enablementTitle: "Adoption & Enablement",
    enablementItems: [
      { label: "Step-by-step guides in English and Hindi", icon: "walkthrough" as const },
      {
        label: "Training video — “How to fill the Holistic Progress Card”",
        icon: "video" as const,
      },
      { label: "Live webinar demos for school staff nationwide", icon: "guidance" as const },
    ],
    challengesTitle: "Key Rollout Challenges",
    challengeItems: [
      "Training hundreds of educators across multiple states",
      "Multilingual onboarding for diverse regional contexts",
      "UAT at national scale with six distinct user roles",
    ],
  },
  impact: {
    resultsTitle: "Impact & Results",
    metrics: [
      {
        value: "6 Roles",
        label: "Role-based dashboards\n& permissions",
        icon: "globe",
        color: "#E15A11",
      },
      {
        value: "4 Stages",
        label: "Foundational through\nSecondary coverage",
        icon: "chart",
        color: "#16a34a",
      },
      {
        value: "50+",
        label: "JIRA user stories\nwith acceptance criteria",
        icon: "shield",
        color: "#9333ea",
      },
      {
        value: "200–1000",
        label: "Educators per live\ntraining webinar",
        icon: "sparkle",
        color: "#ea580c",
      },
      {
        value: "National",
        label: "Scalable platform for\nnationwide deployment",
        icon: "clock",
        color: "#0891b2",
      },
    ],
    learningsTitle: "Key Learnings",
    learnings: [
      {
        body: "Serving as both designer and BA let me bridge technical specifications and educator needs — keeping documentation and interfaces aligned throughout agile sprints.",
        icon: "users",
        color: "#E15A11",
      },
      {
        body: "Designing for six user roles required constant validation through wireframe walkthroughs and prototypes — not assumptions about what each role needed.",
        icon: "layers",
        color: "#9333ea",
      },
      {
        body: "National rollout demanded enablement beyond the product — training videos, multilingual guides, and live webinars were as critical as the interface itself.",
        icon: "check",
        color: "#16a34a",
      },
    ],
  },
  moreProjects: [
    {
      title: "NIS.Cost",
      subtitle: "Immunization Strategy",
      tag: "Global Health",
      href: "/nis-cost",
      cursorLabel: "Global Health",
      image:
        "https://framerusercontent.com/images/gIURKS2HBNmLKNvvylAiJgTi8U.png?width=800&height=500",
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
} satisfies HpcCaseStudyData;
