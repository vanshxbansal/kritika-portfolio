import type { CaseStudyData } from "./caseStudyTypes";

export const hpcCaseStudy = {
  slug: "holistic-progress-card",
  hero: {
    id: "hpc-hero",
    lines: [
      { text: "Holistic Progress", color: "default" as const },
      { text: "Card Platform", color: "default" as const },
      { text: "@ PARAKH", color: "accent" as const },
    ],
    subtitle:
      "Designing a national digital platform for competency-based, 360° student assessment under NCERT’s PARAKH initiative",
    meta: [
      { label: "My Role", value: "Product Designer + BA" },
      { label: "Client", value: "PARAKH (NCERT)" },
      { label: "Type", value: "EdTech Platform" },
      { label: "Scope", value: "All School Stages" },
    ],
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "The Holistic Progress Card (HPC) is a digital platform under NCERT’s PARAKH initiative, designed to track each student’s growth across multiple domains — academic, socio-emotional, vocational, and more. It supports India’s NEP 2020 by shifting from traditional rote learning to competency-based, 360° assessments.",
      "The HPC covers all four school stages (Foundational through Secondary) and integrates feedback from teachers, peers, parents, and self-reflection. By providing a comprehensive progress card for each student, the platform aims to make assessments more meaningful and holistic, rather than just exam scores.",
    ],
    imageAlt: "HPC platform overview",
    imageCaption: "Holistic Progress Card — national assessment platform",
  },
  problem: {
    title: "Problem Statement",
    paragraphs: [
      "Previously, HPCs were managed manually in schools through paper forms or spreadsheets. This was time-consuming, error-prone, and not scalable nationwide. Traditional report cards failed to capture multidimensional learning such as life skills and socio-emotional growth.",
    ],
    objectives: [
      "Enable competency-based assessment beyond memorization",
      "Deliver personalized insights on strengths and growth areas",
      "Increase parental engagement with holistic progress reports",
      "Ensure equitable tracking with language support and accommodations",
      "Build a scalable digital platform deployable across all states",
      "Support continuous, formative evaluation to inform teaching",
    ],
    highlight:
      "The digital HPC should help document each student’s achievements across domains over time and form an important link between home and school.",
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
  approach: {
    title: "Design Approach",
    steps: [
      {
        title: "Requirement Gathering",
        subtitle: "Workshops & interviews",
        icon: "https://framerusercontent.com/images/GYJ06LkynC50af6VGB75xxyrgo.png?width=320&height=320",
      },
      {
        title: "Stakeholder Collaboration",
        subtitle: "Weekly demos",
        icon: "https://framerusercontent.com/images/voHhBtxRA2LeYlKigQfDPz0v4s.png?width=320&height=320",
      },
      {
        title: "BRD & FRD Creation",
        subtitle: "Documentation",
        icon: "https://framerusercontent.com/images/OlPomt5eDWdB8Co8OETanOjOkc.png?width=320&height=320",
      },
      {
        title: "Process Flows Diagram",
        subtitle: "Information architecture",
        icon: "https://framerusercontent.com/images/tDUyuSASOShvfQTDaxYQfgr5VZo.png?width=320&height=320",
      },
      {
        title: "UX/UI Design",
        subtitle: "Figma mockups",
        icon: "https://framerusercontent.com/images/DtmgiyiVVpmSIRbGAFIyZwuKYI.png?width=320&height=320",
      },
    ],
    body: "We adopted an agile, two-week sprint model. Each increment was prototyped in Figma and reviewed with PARAKH coordinators before development. The HPC was organized into Parts A (Student Profile), B (Competency Domains), and C (Summary), with role-specific dashboards for admins and teachers.",
  },
  challenges: {
    title: "Key Challenges & Design Decisions",
    items: [
      {
        title: "Evolving Requirements",
        body: "Stakeholders added scope mid-stream — class sections, dual PARAKH dashboards, and a global activity bank were not in the original plan.",
        bullets: [
          "Class sections required updated class management UI and database schema",
          "PARAKH Admin needed two dashboards — national KPIs and user management",
          "Global Activity Bank added a searchable repository for pre-filled HPC entries",
        ],
      },
      {
        title: "Time Constraints",
        body: "With a short delivery mandate, we defined MVP scopes per release and deferred non-essential polish to keep critical workflows on schedule.",
      },
      {
        title: "Stakeholder Alignment",
        body: "With six distinct user roles, regular wireframe walkthroughs and rapid prototypes helped resolve disagreements and maintain a shared vision.",
      },
      {
        title: "Training at Scale",
        body: "UAT and training for hundreds of educators across India required recorded demos, multilingual guides, and self-paced video tutorials for the Foundational stage HPC.",
      },
    ],
  },
  finalDesigns: {
    title: "Final Designs",
    description:
      "High-fidelity mockups covered login screens per role, user management, class and student setup, multi-part student profile forms, and admin dashboards — all validated through clickable Figma prototypes.",
    placeholders: [
      { label: "Role-based login & dashboards", aspect: "16/10" },
      { label: "Student HPC — Parts A, B & C", aspect: "16/10" },
      { label: "Class management & teacher workflow", aspect: "16/10" },
      { label: "Regional & PARAKH admin views", aspect: "16/10" },
    ],
  },
  uat: {
    title: "UAT & Validation, Adoption & Enablement",
    paragraphs: [
      "As development completed, I led thorough UAT across all six user roles — PARAKH Admin, Regional Admin, State/District Admin, School Admin, Teacher, and Student/Parent. Bugs and usability issues were logged, prioritized, and verified after fixes.",
      "To prepare for national rollout, I created onboarding materials including a user manual, narrated tutorial video (“How to fill the Holistic Progress Card – Foundational Stage”), and co-facilitated live training webinars with 200–1000 attendees per session across multiple states.",
    ],
    deliverables: [
      "UAT test cases per role with sign-off documentation",
      "Step-by-step guides in English and Hindi",
      "Training video for Foundational stage HPC workflow",
      "Live webinar demos for school staff nationwide",
    ],
  },
  impact: {
    title: "Impact & Reflection",
    learnings: [
      {
        lead: "Digital Transformation:",
        body: "The HPC platform replaces manual record-keeping with a modern, scalable web application — digitizing progress for millions of students and saving teachers significant time.",
      },
      {
        lead: "Holistic Insights:",
        body: "Teachers can now record and view competency progress over time. Dashboards highlight trends and gaps, enabling data-driven instruction and richer parent engagement.",
      },
      {
        lead: "Policy Alignment:",
        body: "The project operationalizes NEP 2020’s vision — fostering a learning-for-understanding culture rather than exam-centric teaching.",
      },
      {
        lead: "Dual-role advantage:",
        body: "Serving as both designer and BA let me bridge technical specifications and educator needs, keeping documentation and interfaces aligned throughout agile sprints.",
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
} satisfies CaseStudyData;
