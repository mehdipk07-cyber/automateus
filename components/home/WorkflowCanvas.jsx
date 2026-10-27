"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { SiGmail, SiShopify, SiHubspot, SiGooglesheets, SiNotion } from "react-icons/si";

/* Canvas coordinate space — nodes are placed in % of this box so they line up with the SVG */
const W = 800;
const H = 340;
const HUB = { x: 400, y: 170 };

const SlackIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="0.5" y="0.5" width="10.5" height="10.5" rx="2.5" fill="#E01E5A" />
    <rect x="13" y="0.5" width="10.5" height="10.5" rx="2.5" fill="#36C5F0" />
    <rect x="0.5" y="13" width="10.5" height="10.5" rx="2.5" fill="#2EB67D" />
    <rect x="13" y="13" width="10.5" height="10.5" rx="2.5" fill="#ECB22E" />
  </svg>
);

const nodes = [
  // Triggers
  { id: "gmail",   label: "Gmail",   x: 110, y: 60,  side: "in",  color: "#EA4335", icon: <SiGmail size={20} /> },
  { id: "shopify", label: "Shopify", x: 110, y: 170, side: "in",  color: "#95BF47", icon: <SiShopify size={20} /> },
  { id: "hubspot", label: "HubSpot", x: 110, y: 280, side: "in",  color: "#FF7A59", icon: <SiHubspot size={20} /> },
  // Actions
  { id: "slack",   label: "Slack",   x: 690, y: 60,  side: "out", color: null,      icon: SlackIcon },
  { id: "sheets",  label: "Sheets",  x: 690, y: 170, side: "out", color: "#34A853", icon: <SiGooglesheets size={20} /> },
  { id: "notion",  label: "Notion",  x: 690, y: 280, side: "out", color: "#F5F2ED", icon: <SiNotion size={18} /> },
];

const logs = [
  { from: "Shopify", text: "Order #4821 synced to Sheets", ms: "312ms" },
  { from: "HubSpot", text: "Lead scored 92 and routed to Slack", ms: "540ms" },
  { from: "Gmail",   text: "Invoice parsed and filed in Notion", ms: "428ms" },
  { from: "Shopify", text: "Low-stock alert posted to #ops", ms: "196ms" },
];

function path(n) {
  const nodeEdge = n.side === "in" ? n.x + 30 : n.x - 30;
  const hubEdge = n.side === "in" ? HUB.x - 46 : HUB.x + 46;
  const [x1, y1, x2, y2] =
    n.side === "in" ? [nodeEdge, n.y, hubEdge, HUB.y] : [hubEdge, HUB.y, nodeEdge, n.y];
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
}

const pct = (v, total) => `${(v / total) * 100}%`;

export default function WorkflowCanvas() {
  const [log, setLog] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setLog((i) => (i + 1) % logs.length), 3200);
    return () => clearInterval(t);
  }, []);

  const current = logs[log];

  return (
    <div
      className="relative rounded-2xl border overflow-hidden text-left"
      style={{
        background: "color-mix(in srgb, var(--surface-card) 70%, transparent)",
        borderColor: "rgba(255,255,255,0.09)",
        boxShadow: "0 40px 120px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center justify-between px-4 h-11 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <span className="font-mono text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>
          flows / order-to-ops.automation
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-brand-300">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping" />
            <span className="relative size-1.5 rounded-full bg-brand-400" />
          </span>
          Live
        </span>
      </div>

      {/* Canvas */}
      <div className="relative dot-bg" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 size-full"
          fill="none"
          aria-hidden="true"
        >
          {nodes.map((n, i) => (
            <g key={n.id}>
              <path d={path(n)} stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
              <path
                d={path(n)}
                pathLength="100"
                className="flow-beam"
                stroke={n.side === "in" ? "#E1B07E" : "#86A397"}
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  "--flow-delay": `${(i % 3) * 0.7 + (n.side === "out" ? 1.3 : 0)}s`,
                  "--flow-duration": "2.6s",
                  filter: `drop-shadow(0 0 6px ${n.side === "in" ? "#E1B07E" : "#86A397"})`,
                }}
              />
            </g>
          ))}
        </svg>

        {/* Column captions */}
        <span
          className="absolute top-3 font-mono text-[10px] uppercase tracking-[0.2em] -translate-x-1/2"
          style={{ left: pct(110, W), color: "var(--text-faint)" }}
        >
          Triggers
        </span>
        <span
          className="absolute top-3 font-mono text-[10px] uppercase tracking-[0.2em] -translate-x-1/2"
          style={{ left: pct(690, W), color: "var(--text-faint)" }}
        >
          Actions
        </span>

        {/* App nodes */}
        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: pct(n.x, W), top: pct(n.y, H) }}
          >
            <div
              className="size-12 rounded-xl flex items-center justify-center border"
              style={{
                background: "#101C2C",
                borderColor: "rgba(255,255,255,0.1)",
                color: n.color ?? undefined,
                boxShadow: n.color ? `0 0 24px -6px ${n.color}55` : "none",
              }}
            >
              {n.icon}
            </div>
            <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
              {n.label}
            </span>
          </div>
        ))}

        {/* Hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          style={{ left: pct(HUB.x, W), top: pct(HUB.y, H) }}
        >
          <div className="relative">
            <span className="hub-ring absolute inset-0 rounded-2xl border border-brand-400/60" />
            <div className="pill-border relative size-[76px] rounded-2xl flex items-center justify-center shadow-[0_0_60px_-10px_rgba(225,176,126,0.55)]">
              <span className="size-12 rounded-xl overflow-hidden flex items-center justify-center bg-content">
                <Image src="/logo-automateus.png" alt="" width={48} height={48} className="size-12 object-contain scale-[1.6]" />
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] text-brand-300">AutomateUs AI</span>
        </div>

        {/* Run log */}
        <div className="absolute left-4 right-4 bottom-4 flex justify-center">
          <div
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg border backdrop-blur-md font-mono text-[11px] max-w-full"
            style={{ background: "rgba(11,23,35,0.75)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-500/15">
              <Check className="size-2.5 text-brand-400" />
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={log}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="truncate"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="text-brand-300">{current.from}</span> · {current.text}
                <span style={{ color: "var(--text-faint)" }}> · {current.ms}</span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
