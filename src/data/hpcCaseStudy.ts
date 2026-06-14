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
      { text: "@ NCERT- PARAKH", color: "accent" as const },
    ],
    subtitle:
      "Designing a national digital platform for competency-based, 360° student assessment — transforming traditional paper-based evaluation into a structured, scalable, and holistic system.",
    meta: [
      { label: "Role", value: "Product Designer + BA", icon: "user" as const },
      { label: "Scale", value: "National-Level Platform", icon: "globe" as const },
      { label: "Duration", value: "8 Months", icon: "calendar" as const },
      {
        label: "Team",
        value: "Cross-functional",
        icon: "users" as const,
      },
    ],
    imageAlt: "Holistic Progress Card platform on laptop and mobile",
    imageSrc: "/nis-cost/hero.png",
  },
  executiveSummary: {
    sectionNumber: "1",
    title: "Executive Summary",
    cards: [
      {
        title: "Problem",
        intro: "Manual, paper-based HPCs made holistic assessment hard to scale nationally.",
        items: [
          "Teachers had to compile fragmented academic, socio-emotional, vocational, and life-skill data across notebooks, spreadsheets, and forms.",
          "Schools lacked a consistent way to track progress across stages, roles, and regions.",
        ],
        color: "#E15A11",
        icon: "problem" as const,
      },
      {
        title: "Solution",
        intro: "A structured digital platform designed to:",
        items: [
          "Capture competency-based, 360° assessment across academic and non-academic domains",
          "Bring teacher, peer, parent, and self-reflection inputs into one coherent flow",
          "Provide contextual dashboards tailored for teachers, students, and administrators to reduce cognitive load",
          "Align structured assessment flows with real classroom workflows across all school stages",
        ],
        color: "#16a34a",
        icon: "solution" as const,
      },
      {
        title: "Impact",
        items: [
          "Digitized progress tracking for millions of students as part of a nationwide rollout initiative",
          "Designed workflows for 7 roles across 3 school stages, from foundational to secondary",
          "Translated requirements into 50+ JIRA user stories with acceptance criteria",
          "Supported rollout training sessions with 200–1000 educators per session",
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
  ownership: {
    title: "From Stakeholder Inputs to Product Execution",
    subtitle:
      "I worked across the lifecycle, translating raw discussions into structured product outputs.",
    footer:
      "Scroll through the process to see how each step contributed to making the paper-based HPC workflow digital, structured, and scalable.",
    items: [
      {
        title: "MOM",
        body: "Captured stakeholder discussions, decisions, open questions, and follow-up actions from requirement meetings.",
        icon: "documentation",
        images: [
          { src: "/hpc/ownership/mom-01-intro.png", alt: "MOM 01 introductory meeting and high-level discussions" },
          { src: "/hpc/ownership/mom-03-workflow.png", alt: "MOM 03 workflow technical requirements and functional specifications" },
          { src: "/hpc/ownership/mom-07-progress.png", alt: "MOM 07 progress in digitisation and enhancement requests" },
        ],
        imageFit: "contain",
      },
      {
        title: "BRD",
        body: "Captured the project context, objectives, scope, stakeholder needs, and alignment decisions in the Business Requirements Document.",
        icon: "requirements",
        images: [
          {
            src: "/hpc/ownership/brd-overview.png",
            alt: "Business Requirements Document overview",
          },
        ],
        imageFit: "contain",
      },
      {
        title: "Personas",
        body: "Mapped user groups, responsibilities, goals, and pain points to clarify how each role would use the HPC platform.",
        icon: "product",
        personas: [
          {
            title: "Super Admin",
            subtitle: "Platform Owner",
            color: "#1d4ed8",
            responsibilities: [
              "Full access across the HPC platform",
              "Manages user credentials and system-level settings",
            ],
            permissions: "Full access to HPC platform and all data.",
            goal: "Ensure smooth platform management and security.",
            success: "The platform runs seamlessly with secure access and efficient user management.",
          },
          {
            title: "Admin PARAKH",
            subtitle: "Regional Admins",
            color: "#15803d",
            responsibilities: [
              "Responsible for five regions: North Eastern, North, South, East, and West",
              "Full access to HPC dashboard",
              "Creates two state admins for each state under the region",
            ],
            permissions: "Full access to HPC dashboard.",
            goal: "Ensure effective regional and state-level management.",
            success: "Regions and states are well-managed with the right admins and smooth coordination.",
          },
          {
            title: "State Admin",
            subtitle: "State-Level Coordinator",
            color: "#9333ea",
            responsibilities: [
              "Creates district admins for assigned districts",
              "Supports district-level administrative setup",
            ],
            permissions: "No rights to view the HPC portal.",
            goal: "Set up district administration accurately.",
            success: "District admin access is created on time and mapped correctly.",
          },
          {
            title: "District Admin",
            subtitle: "District-Level Coordinator",
            color: "#ea580c",
            responsibilities: [
              "Creates school admins for schools in the district",
              "Coordinates setup across schools under the district",
            ],
            permissions: "No rights to view the HPC portal.",
            goal: "Enable school-level administration at scale.",
            success: "Every school has the correct school admin access and ownership.",
          },
          {
            title: "School Admin",
            subtitle: "School-Level Owner",
            color: "#0891b2",
            responsibilities: [
              "Creates teacher admins for the school",
              "Manages one admin setup per school",
            ],
            permissions: "School-level administration access.",
            goal: "Prepare the school for teacher and student workflows.",
            success: "Teacher access is correctly created and ready for classroom use.",
          },
          {
            title: "Teacher",
            subtitle: "Assessment Owner",
            color: "#c2410c",
            responsibilities: [
              "Adds students as per assigned class",
              "Manages class-level access",
              "Accesses HPC for assigned school and classes",
            ],
            permissions: "Access to HPC for assigned school and classes.",
            goal: "Complete assessment workflows accurately for students.",
            success: "Student progress is recorded consistently across assigned classes.",
          },
          {
            title: "Student",
            subtitle: "Learner Access",
            color: "#0f766e",
            responsibilities: [
              "Accesses their own HPC",
              "Shares access path with parents and peers where required",
            ],
            permissions: "Access only to their own HPC.",
            goal: "Participate in self, peer, and parent reflection inputs.",
            success: "The learner’s holistic progress is visible through complete inputs.",
          },
        ],
        imageFit: "contain",
      },
      {
        title: "FRD",
        body: "Documented role-wise functional requirements, use cases, acceptance criteria, flow-chart references, mockups, and specification links.",
        icon: "documentation",
        images: [
          { src: "/hpc/ownership/frd-super-admin.png", alt: "Super Admin FRD use cases" },
          { src: "/hpc/ownership/frd-regional-admin.png", alt: "Regional Admin FRD use cases" },
          { src: "/hpc/ownership/frd-district-admin.png", alt: "District Admin FRD use cases" },
          { src: "/hpc/ownership/frd-school-admin.png", alt: "School Admin FRD use cases" },
          { src: "/hpc/ownership/frd-teacher.png", alt: "Teacher FRD use cases" },
          { src: "/hpc/ownership/frd-student.png", alt: "Student FRD use cases" },
        ],
        imageFit: "contain",
      },
      {
        title: "System Flows",
        body: "Mapped system flows and product logic to translate complex assessment journeys into clear implementation-ready decisions.",
        icon: "logic",
        images: [
          { src: "/hpc/ownership/system-flow-1.png", alt: "System flow diagram FC-001" },
          { src: "/hpc/ownership/system-flow-2.png", alt: "System flow diagrams FC-002 and FC-003" },
          { src: "/hpc/ownership/system-flow-3.png", alt: "System flow diagrams FC-0078 and FC-0079" },
          { src: "/hpc/ownership/system-flow-4.png", alt: "System flow diagrams FC-0081 and FC-0082" },
        ],
        imageFit: "contain",
      },
      {
        title: "UI Design",
        body: "Designed end-to-end experiences across modules, simplifying dense, data-heavy workflows into intuitive interfaces.",
        icon: "ux",
        images: [
          { src: "/hpc/ownership/ux-figma-flow-map.png", alt: "Figma prototype flow map" },
          { src: "/hpc/ownership/ux-figma-board.png", alt: "Figma design board with HPC screens" },
          { src: "/hpc/ownership/ux-login-prototype.png", alt: "Digital HPC login prototype" },
          { src: "/hpc/ownership/ux-regional-dashboard.png", alt: "Regional admin dashboard prototype" },
          { src: "/hpc/ownership/ux-manage-district-admins.png", alt: "Manage district admins prototype" },
        ],
        imageFit: "contain",
      },
    ],
  },
  processNav: {
    phases: [
      {
        title: "Discover",
        shortTitle: "Discover",
        summary: "Executive Summary + Problem Context",
        details: [
          "Understanding paper-based HPC system",
          "Identifying gaps in scalability, workflows, and visibility",
          "Aligning with NEP 2020 vision",
        ],
        color: "#1976d2",
      },
      {
        title: "Define",
        shortTitle: "Define",
        summary: "Problem Context + Process Followed",
        details: [
          "Stakeholder workshops",
          "BRDs, FRDs, user flows",
          "Role definitions and system scope",
        ],
        color: "#16a34a",
      },
      {
        title: "Build",
        shortTitle: "Build",
        summary: "Scaling + Evolving Requirements",
        details: [
          "System logic, hierarchy, workflows",
          "Modular design for changing requirements",
          "Collaboration with developers",
        ],
        color: "#ea580c",
      },
      {
        title: "Validate",
        shortTitle: "Validate",
        summary: "UAT Section",
        details: [
          "Role-based test cases",
          "Bug tracking and validation",
          "Workflow verification",
        ],
        color: "#0891b2",
      },
      {
        title: "Rollout",
        shortTitle: "Rollout",
        summary: "Adoption + Impact + Learnings",
        details: [
          "Training sessions",
          "Guides and walkthroughs",
          "Nationwide adoption",
          "Impact + reflections",
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
    sectionNumber: "3",
    title: "Problem Context",
    context: {
      paragraphs: [
        "The HPC process was paper-based — making it slow, inconsistent, and difficult to scale.",
        "Teachers manually recorded student progress across multiple formats, leading to fragmented data and limited visibility. At the same time, the system required structured, multi-dimensional assessment across stakeholders (teachers, students, parents), making the lack of a unified digital system more critical.",
      ],
      sections: [
        {
          title: "What is HPC?",
          body: "The Holistic Progress Card is a competency-based student assessment framework that captures academic, socio-emotional, vocational, and life-skill growth beyond traditional marks.",
        },
        {
          title: "Why it matters",
          body: "It supports NEP 2020’s vision of continuous, 360° evaluation and helps schools build a more complete view of each student’s learning journey.",
        },
        {
          title: "Who are the users",
          body: "The platform supports PARAKH admins, regional admins, state and district admins, school admins, teachers, and students or parents.",
          items: [
            "PARAKH Admin",
            "Regional Admin",
            "State / District Admin",
            "School Admin",
            "Teacher",
            "Student / Parent",
          ],
        },
      ],
      issuesTitle: "Key Issues",
      issues: [
        "Manual, time-heavy workflows",
        "Scattered and inconsistent data",
        "No unified system across stakeholders",
        "Difficult to scale and standardize",
      ],
    },
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
    title: "Design Approach",
    approach: {
      intro:
        "To address this, the system was designed with a structured, role-based approach:",
      items: [
        "Converting paper workflows into structured digital inputs",
        "Designing for multiple stakeholders with distinct needs",
        "Using progressive disclosure to manage complex data",
        "Ensuring consistency through a standardized framework",
      ],
    },
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
    title: "Challenges & Decisions ⭐",
    subtitle:
      "Key product, system, and adoption decisions that shaped the Holistic Progress Card platform for national-scale rollout.",
    chapters: [
      {
        id: "scaling-beyond-four-users",
        title: "Scaling Beyond Four Users",
        subtitle: "Product + Systems Thinking",
        challenge:
          "HPC was initially designed for only four roles — Student, Teacher, Parent, Peer. This structure could not support nationwide onboarding or governance.",
        whyItMattered:
          "Without a scalable hierarchy, the platform could not be deployed across states, districts, and schools.",
        decisionIntro: "Designed a multi-level governance model:",
        decisionItems: [
          "PARAKH → Regional → State → District → School → Teacher → Student",
        ],
        outcome:
          "Enabled structured onboarding, monitoring, and reporting at a national scale.",
        visuals: [
          {
            label: "Hierarchical governance structure diagram",
            caption:
              "Hierarchical governance structure diagram from PARAKH admin to student showing scalable onboarding model",
            imageSrc: "/hpc/deep-dive/governance-structure.png",
          },
        ],
      },
      {
        id: "reducing-teacher-workload",
        title: "Reducing Teacher Workload",
        subtitle: "Core UX Problem Solving",
        challenge:
          "Teachers had to enter similar activities repeatedly for multiple students — making the process time-consuming and unsustainable.",
        whyItMattered:
          "If teachers found the system tedious, adoption would fail regardless of design quality.",
        decisionIntro: "Introduced:",
        decisionItems: [
          "Activity Bank",
          "Reuse of activities",
          "Multi-student selection",
          "Bulk assignment flows",
        ],
        outcome:
          "Significantly reduced manual effort and repetitive input, improving usability and adoption.",
        visuals: [
          {
            label: "Before and after teacher workflow comparison",
            caption:
              "Before after comparison showing manual entry per student vs activity bank with bulk assignment",
            imageSrc: "/hpc/deep-dive/teacher-workload-before-after.png",
          },
        ],
      },
      {
        id: "evolving-requirements",
        title: "Adapting to Evolving Requirements",
        subtitle: "Product Thinking + Flexibility",
        challenge:
          "Requirements kept changing during development: Class & Section removed → later reintroduced, dashboard KPIs changed, a new Activity Bank was added, and admin dashboards were restructured.",
        whyItMattered:
          "Rigid designs would break with every change, causing delays and rework.",
        decisionIntro:
          "Designed modular workflows and reusable components instead of tightly coupled screens.",
        outcome:
          "Enabled continuous iteration without redesigning the entire system.",
        visuals: [
          {
            label: "Evolving requirements timeline",
            caption:
              "Timeline showing evolving requirements with arrows indicating design iterations and modular system flexibility",
            imageSrc: "/hpc/deep-dive/evolving-requirements-modular.png",
          },
        ],
      },
      {
        id: "accessibility-inclusion",
        title: "Designing for Accessibility & Inclusion",
        subtitle: "Design Maturity + Government Standards",
        challenge:
          "The platform needed to comply with GIGW and WCAG accessibility standards.",
        whyItMattered:
          "The product had to be usable by diverse users across India, including varying abilities and contexts.",
        decisionIntro: "Implemented:",
        decisionItems: [
          "Accessibility bar",
          "Font resizing",
          "Contrast controls",
          "Keyboard-friendly interactions",
          "Readable typography",
        ],
        outcome:
          "Delivered an inclusive and compliant digital experience.",
        visuals: [
          {
            label: "Accessibility controls panel",
            caption:
              "Accessibility panel with font size controls contrast toggle and keyboard navigation indicators",
            imageSrc: "/hpc/deep-dive/accessibility-bar-focus.png",
          },
        ],
      },
      {
        id: "driving-adoption-at-scale",
        title: "Driving Adoption at Scale",
        subtitle: "Ownership Beyond Design",
        challenge:
          "Even a well-designed system fails if users don’t know how to use it.",
        whyItMattered:
          "HPC was intended for large-scale nationwide rollout, including non-technical users.",
        decisionIntro: "Created and led:",
        decisionItems: [
          "User Guides",
          "How to Fill Guides",
          "Walkthrough Videos",
          "Training Sessions (200–1000 participants)",
        ],
        outcome:
          "Improved onboarding, understanding, and readiness for launch.",
        visuals: [
          {
            label: "Training and onboarding collage",
            caption:
              "Collage of user guides training sessions walkthrough video and large audience onboarding",
            imageSrc: "/hpc/deep-dive/training-onboarding-collage.png",
          },
        ],
      },
    ],
  },
  solutionWalkthrough: {
    eyebrow: "Solution Walkthrough",
    title: "Holistic Progress Card — End-to-End Platform",
    description:
      "A unified digital system replacing fragmented paper workflows, enabling structured, role-based assessment across all school stages.",
    bullets: [
      "360° competency-based assessment (Academic, Co-scholastic, Life Skills)",
      "Structured Parts A–C aligned to NEP 2020",
      "Real-time data capture across roles",
      "Consistent report generation across schools",
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
    trainingVideo: {
      title: "Training Video Walkthrough",
      caption: "Walkthrough used during nationwide training sessions for educators.",
      thumbnailSrc: "/hpc/training/hpc-walkthrough-thumbnail.png",
      href: "https://drive.google.com/file/d/1sTOhml44CqoG2L-OMJX7oLPGvEFliZqr/view?usp=sharing",
    },
    trainingGuides: {
      title: "Training Guides (English & Hindi)",
      description:
        "Bilingual step-by-step guides that simplify complex workflows with screenshots and examples.",
      languages: [
        { label: "English Guide", color: "#9333ea" },
        { label: "Hindi Guide", color: "#16a34a" },
      ],
      cards: [
        {
          step: "01",
          title: "Stage Selection",
          subtitle: "How to Fill HPC Web",
          color: "#9333ea",
          imageSrc: "/hpc/training-guides/how-to-fill-overview.png",
        },
        {
          step: "02",
          title: "Navigation Guide",
          subtitle: "Foundational Stage",
          color: "#16a34a",
          imageSrc: "/hpc/training-guides/how-to-fill-foundational.png",
        },
        {
          step: "03",
          title: "Attendance Instructions",
          subtitle: "Part A",
          color: "#ea580c",
          imageSrc: "/hpc/training-guides/how-to-fill-attendance.png",
        },
        {
          step: "04",
          title: "Student Profile Guidance",
          subtitle: "Part A(2)",
          color: "#0891b2",
          imageSrc: "/hpc/training-guides/how-to-fill-surroundings.png",
        },
      ],
    },
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
        note: "Enabled structured workflows across stakeholders",
        icon: "globe",
        color: "#E15A11",
      },
      {
        value: "4 Stages",
        label: "Foundational → Secondary\ncoverage",
        note: "Designed for end-to-end student lifecycle",
        icon: "chart",
        color: "#16a34a",
      },
      {
        value: "50+",
        label: "User stories with\nacceptance criteria",
        note: "Ensured clarity across design & development",
        icon: "shield",
        color: "#9333ea",
      },
      {
        value: "200–1000",
        label: "Educators per\ntraining session",
        note: "Supported large-scale onboarding & adoption",
        icon: "sparkle",
        color: "#ea580c",
      },
      {
        value: "Nationwide",
        label: "Built for large-scale\nrollout",
        note: "Designed for state & national deployment",
        icon: "clock",
        color: "#0891b2",
      },
    ],
    learningsTitle: "Key Learnings",
    learnings: [
      {
        title: "Bridging Design & Systems",
        body: "Worked as both designer and BA — aligning user needs, documentation, and implementation across agile sprints.",
        icon: "users",
        color: "#E15A11",
      },
      {
        title: "Designing for Multiple Roles",
        body: "Six distinct user roles required continuous validation through prototypes, not assumptions.",
        icon: "layers",
        color: "#9333ea",
      },
      {
        title: "Designing for Adoption",
        body: "A strong product wasn’t enough — training, guides, and enablement were critical for real-world usage.",
        icon: "check",
        color: "#16a34a",
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
