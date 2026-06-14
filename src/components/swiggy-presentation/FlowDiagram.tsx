"use client";

import { useTheme } from "./ThemeContext";
import { ArrowRight } from "lucide-react";

interface FlowNode {
  label: string;
  type?: "start" | "end" | "action" | "pain";
}

interface FlowDiagramProps {
  nodes: FlowNode[];
  color: string;
  label: string;
}

export function FlowDiagram({ nodes, color, label }: FlowDiagramProps) {
  const { tokens: t } = useTheme();

  const getNodeStyle = (node: FlowNode, color: string) => {
    if (node.type === "start" || node.type === "end") {
      return {
        background: t.isDark ? "#1a1d2e" : "#1f2937",
        color: "#ffffff",
        border: `2px solid ${t.isDark ? "#3d4166" : "#374151"}`,
        borderRadius: "999px",
        minWidth: "90px",
        fontWeight: 600,
      };
    }
    if (node.type === "pain") {
      return {
        background: "rgba(239,68,68,0.08)",
        color: "#EF4444",
        border: "1.5px solid rgba(239,68,68,0.3)",
        borderRadius: "10px",
        minWidth: "90px",
      };
    }
    return {
      background: `${color}12`,
      color: color,
      border: `1.5px solid ${color}35`,
      borderRadius: "10px",
      minWidth: "90px",
    };
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs uppercase tracking-widest font-semibold" style={{ color }}>{label}</div>
      <div className="flex items-center flex-wrap gap-1.5 py-3 px-4 rounded-xl"
        style={{ background: t.isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)", border: `1px solid ${t.cardBorder}` }}>
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="flex items-center justify-center px-3 py-2 text-xs text-center font-medium"
              style={{ ...getNodeStyle(node, color), minWidth: "80px", maxWidth: "130px", lineHeight: 1.3 }}>
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight size={14} style={{ color: `${color}80`, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
