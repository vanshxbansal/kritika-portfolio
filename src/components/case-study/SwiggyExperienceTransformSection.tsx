"use client";

import {
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type FlowNode = {
  label: string;
  type?: "start" | "end" | "action" | "pain";
};

type TransformItem = {
  id: string;
  title: string;
  problem: string;
  insightSource: string;
  current: FlowNode[];
  redesigned: FlowNode[];
  impact: string[];
};

const transforms: TransformItem[] = [
  {
    id: "homepage",
    title: "Homepage Experience",
    problem:
      "Critical information such as Today's Progress, Earnings, and Trips was buried below promotional content, requiring unnecessary scrolling.",
    insightSource: "Existing Application Analysis",
    current: [
      { label: "Open App", type: "start" },
      { label: "Order Assignment", type: "action" },
      { label: "Promotional Banner", type: "pain" },
      { label: "Cash Deposit Alert", type: "pain" },
      { label: "Bonus Card", type: "pain" },
      { label: "Scroll Further", type: "pain" },
      { label: "Find Today's Progress", type: "end" },
    ],
    redesigned: [
      { label: "Open App", type: "start" },
      { label: "Today's Progress", type: "action" },
      { label: "Today's Earnings", type: "action" },
      { label: "Incentive Status", type: "action" },
      { label: "Active Order", type: "action" },
      { label: "Secondary Content", type: "action" },
    ],
    impact: [
      "Critical information available without scrolling",
      "Reduced visual search effort",
      "Better information hierarchy",
    ],
  },
  {
    id: "order-card",
    title: "Smart Order Card",
    problem:
      "The next action was not immediately obvious, forcing drivers to interpret multiple pieces of information before proceeding.",
    insightSource: "Google Play Reviews",
    current: [
      { label: "Receive Order", type: "start" },
      { label: "View Multiple Details", type: "pain" },
      { label: "Interpret Information", type: "pain" },
      { label: "Identify Next Action", type: "pain" },
      { label: "Start Navigation", type: "end" },
    ],
    redesigned: [
      { label: "Receive Order", type: "start" },
      { label: "Priority Info Highlighted", type: "action" },
      { label: "Clear Primary Action", type: "action" },
      { label: "Start Navigation", type: "end" },
    ],
    impact: ["Faster decision making", "Improved task clarity", "Reduced cognitive load"],
  },
  {
    id: "earnings",
    title: "Earnings Experience",
    problem:
      "Drivers struggled to quickly understand daily earnings, with greater emphasis on weekly information and limited visibility into today's performance.",
    insightSource: "Existing Application Analysis",
    current: [
      { label: "Need Today's Earnings", type: "start" },
      { label: "Open Earnings", type: "action" },
      { label: "View Weekly Earnings", type: "pain" },
      { label: "Estimate Today's Earnings", type: "pain" },
      { label: "Understand Progress", type: "end" },
    ],
    redesigned: [
      { label: "Need Today's Earnings", type: "start" },
      { label: "Open Earnings", type: "action" },
      { label: "Today's Earnings", type: "action" },
      { label: "Earnings Breakdown", type: "action" },
      { label: "Daily Goal Progress", type: "action" },
      { label: "Understand Instantly", type: "end" },
    ],
    impact: ["Clear daily visibility", "Better motivation", "Easier financial tracking"],
  },
  {
    id: "incentive",
    title: "Incentive Experience",
    problem:
      "Drivers had to mentally calculate remaining trips and potential rewards, making incentive tracking confusing and discouraging.",
    insightSource: "Google Play Reviews",
    current: [
      { label: "Open Incentives", type: "start" },
      { label: "Read Multiple Conditions", type: "pain" },
      { label: "Calculate Trips Remaining", type: "pain" },
      { label: "Calculate Reward", type: "pain" },
      { label: "Understand Progress", type: "end" },
    ],
    redesigned: [
      { label: "Open Incentives", type: "start" },
      { label: "Current Progress", type: "action" },
      { label: "Trips Remaining", type: "action" },
      { label: "Next Milestone", type: "action" },
      { label: "Potential Reward", type: "action" },
      { label: "Continue Deliveries", type: "end" },
    ],
    impact: [
      "Eliminates mental calculations",
      "Makes progress instantly understandable",
      "Encourages continued engagement",
    ],
  },
];

function FlowDiagram({
  nodes,
  color,
  label,
}: {
  nodes: FlowNode[];
  color: string;
  label: string;
}) {
  const getNodeStyle = (node: FlowNode) => {
    if (node.type === "start" || node.type === "end") {
      return {
        background: "#1f2937",
        color: "#ffffff",
        border: "2px solid #374151",
      };
    }
    if (node.type === "pain") {
      return {
        background: "rgba(239,68,68,0.08)",
        color: "#EF4444",
        border: "1.5px solid rgba(239,68,68,0.3)",
      };
    }
    return {
      background: `${color}12`,
      color,
      border: `1.5px solid ${color}35`,
    };
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#e8edf3] bg-[#fafafa] px-4 py-3">
        {nodes.map((node, index) => (
          <div key={`${node.label}-${index}`} className="flex items-center gap-1.5">
            <div
              className="flex min-w-[80px] max-w-[130px] items-center justify-center rounded-lg px-3 py-2 text-center text-xs font-medium leading-snug"
              style={getNodeStyle(node)}
            >
              {node.label}
            </div>
            {index < nodes.length - 1 ? (
              <span className="text-sm" style={{ color: `${color}80` }} aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function TransformCard({ item }: { item: TransformItem }) {
  const theme = useCaseStudyTheme();

  return (
    <CaseStudySurface className="flex flex-col gap-4 !p-5 md:!p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <h3 className="font-display text-lg font-semibold text-[#1e1e2f]">{item.title}</h3>
        <span
          className="shrink-0 self-start rounded-full border px-3 py-1 text-xs font-medium"
          style={{
            borderColor: theme.primaryBorder,
            backgroundColor: theme.primaryMuted,
            color: theme.primary,
          }}
        >
          {item.insightSource}
        </span>
      </div>

      <div className="rounded-xl border border-red-100 bg-red-50/50 px-4 py-3 text-sm text-[#64748b]">
        <span className="font-semibold text-red-500">Problem — </span>
        {item.problem}
      </div>

      <FlowDiagram nodes={item.current} color="#EF4444" label="Current Experience" />

      <div className="flex items-center gap-3 px-2">
        <span className="text-xs font-semibold" style={{ color: theme.primary }}>
          ↓ Redesigned
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: `${theme.primary}30` }} />
      </div>

      <FlowDiagram nodes={item.redesigned} color="#10B981" label="Redesigned Experience" />

      <div className="flex flex-wrap gap-2">
        {item.impact.map((point) => (
          <span
            key={point}
            className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-[#64748b]"
          >
            <span className="text-green-600">✓</span> {point}
          </span>
        ))}
      </div>
    </CaseStudySurface>
  );
}

export function SwiggyExperienceTransformSection() {
  return (
    <section className={caseStudySectionClass}>
      <CaseStudyReveal>
        <CaseStudySectionHeading title="Experience Transformations" className="mb-6" />
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#64748b]">
          Reimagining key driver journeys by addressing friction identified through product
          analysis and user feedback.
        </p>
        <div className="flex flex-col gap-6">
          {transforms.map((item) => (
            <TransformCard key={item.id} item={item} />
          ))}
        </div>
      </CaseStudyReveal>
    </section>
  );
}
