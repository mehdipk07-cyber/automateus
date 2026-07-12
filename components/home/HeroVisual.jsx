"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Platform nodes ─────────────────────────────────────────── */
const PLATFORMS = [
  // Left column — triggers / inputs
  { id: "shopify",    name: "Shopify",    color: "#96bf48", x: 60,  y: 60,  side: "left",  beginA: "0s",    beginB: "1.1s",  dur: "2.2s" },
  { id: "hubspot",    name: "HubSpot",    color: "#FF7A59", x: 60,  y: 150, side: "left",  beginA: "0.5s",  beginB: "1.4s",  dur: "1.8s" },
  { id: "monday",     name: "Monday",     color: "#2D7FF9", x: 60,  y: 240, side: "left",  beginA: "0.9s",  beginB: "2.1s",  dur: "2.4s" },
  // Right column — actions / outputs
  { id: "slack",      name: "Slack",      color: "#E01E5A", x: 460, y: 60,  side: "right", beginA: "0.3s",  beginB: "1.5s",  dur: "2.2s" },
  { id: "zapier",     name: "Zapier",     color: "#FF4A00", x: 460, y: 150, side: "right", beginA: "0.7s",  beginB: "1.9s",  dur: "1.8s" },
  { id: "salesforce", name: "Salesforce", color: "#00A1E0", x: 460, y: 240, side: "right", beginA: "1.2s",  beginB: "2.4s",  dur: "2.4s" },
];

const HUB  = { x: 260, y: 150 };
const P_R  = 24;   // platform node radius
const HUB_R = 36;  // hub radius

/* Cubic-bezier paths — left side goes TO hub, right side goes FROM hub */
function buildPath(p) {
  if (p.side === "left") {
    const sx = p.x + P_R, ex = HUB.x - HUB_R;
    const mx = (sx + ex) / 2;
    return p.y === HUB.y
      ? `M ${sx} ${p.y} L ${ex} ${HUB.y}`
      : `M ${sx} ${p.y} C ${mx} ${p.y} ${mx} ${HUB.y} ${ex} ${HUB.y}`;
  } else {
    const sx = HUB.x + HUB_R, ex = p.x - P_R;
    const mx = (sx + ex) / 2;
    return p.y === HUB.y
      ? `M ${sx} ${HUB.y} L ${ex} ${p.y}`
      : `M ${sx} ${HUB.y} C ${mx} ${HUB.y} ${mx} ${p.y} ${ex} ${p.y}`;
  }
}

/* Cycling notifications */
const NOTIFS = [
  { color: "#96bf48", brand: "Shopify",    msg: "New order captured & synced to CRM" },
  { color: "#FF7A59", brand: "HubSpot",    msg: "Lead scored and routed to sales rep" },
  { color: "#2D7FF9", brand: "Monday",     msg: "Project task created automatically" },
  { color: "#E01E5A", brand: "Slack",      msg: "Team alert dispatched instantly" },
  { color: "#FF4A00", brand: "Zapier",     msg: "Multi-step Zap triggered & completed" },
  { color: "#00A1E0", brand: "Salesforce", msg: "Deal stage updated to Closed Won" },
];

/* Tiny icon per platform (stroke-based, matches brand color) */
const ICONS = {
  shopify: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 5.5h10l-1.2 8H4.2L3 5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 5.5c0-1.1.9-2 2-2s2 .9 2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  hubspot: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 1.5v2.5M8 12v2.5M1.5 8H4M12 8h2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  monday: (
    <svg width="20" height="8" viewBox="0 0 20 8">
      <circle cx="3"  cy="4" r="3.5" fill="currentColor"/>
      <circle cx="10" cy="4" r="3.5" fill="currentColor" opacity="0.7"/>
      <circle cx="17" cy="4" r="3.5" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  slack: (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <rect x="0"   y="0"   width="6" height="6" rx="1.5" fill="#E01E5A"/>
      <rect x="8"   y="0"   width="6" height="6" rx="1.5" fill="#36C5F0"/>
      <rect x="0"   y="8"   width="6" height="6" rx="1.5" fill="#2EB67D"/>
      <rect x="8"   y="8"   width="6" height="6" rx="1.5" fill="#ECB22E"/>
    </svg>
  ),
  zapier: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M11 1L3 7.5h5L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  salesforce: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.5 10a3.5 3.5 0 01.15-7 3.5 3.5 0 016.7-.7A2.5 2.5 0 0113 7.5a2.5 2.5 0 01-1 4.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M6 12.5l1.5 1.5L11 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function HeroVisual() {
  const [notifIdx, setNotifIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setNotifIdx(i => (i + 1) % NOTIFS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float w-full"
    >
      <div
        className="rounded-xl relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(99,102,241,0.22)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 20px 80px rgba(99,102,241,0.14)",
        }}
      >
        {/* Corner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-[60px] pointer-events-none"
          style={{ background: "rgba(99,102,241,0.18)" }} />

        {/* ── Automation flow SVG ─────────────────────────────── */}
        <div className="px-4 pt-5 pb-1">
          {/* Section labels */}
          <div className="flex justify-between px-2 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(148,163,184,0.45)" }}>Triggers</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(148,163,184,0.45)" }}>Actions</span>
          </div>

          <svg viewBox="0 0 520 300" width="100%" aria-hidden="true" style={{ overflow: "visible" }}>
            <defs>
              {/* Glow filter for dots */}
              <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              {/* Hub glow */}
              <filter id="hub-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="7" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              {/* Hub gradient fill */}
              <radialGradient id="hub-fill" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="rgba(99,102,241,0.35)"/>
                <stop offset="100%" stopColor="rgba(99,102,241,0.08)"/>
              </radialGradient>
              {/* Path gradients per platform */}
              {PLATFORMS.map(p => (
                <linearGradient
                  key={p.id + "-grad"}
                  id={p.id + "-grad"}
                  gradientUnits="userSpaceOnUse"
                  x1={p.side === "left" ? p.x + P_R : HUB.x + HUB_R}
                  y1={p.side === "left" ? p.y : HUB.y}
                  x2={p.side === "left" ? HUB.x - HUB_R : p.x - P_R}
                  y2={p.side === "left" ? HUB.y : p.y}
                >
                  <stop offset="0%"   stopColor={p.color} stopOpacity="0.5"/>
                  <stop offset="100%" stopColor={p.color} stopOpacity="0.05"/>
                </linearGradient>
              ))}
            </defs>

            {/* Hidden path defs for animateMotion */}
            {PLATFORMS.map(p => (
              <path key={p.id + "-ref"} id={p.id + "-ref"} d={buildPath(p)} fill="none" stroke="none"/>
            ))}

            {/* ── Static connection lines ── */}
            {PLATFORMS.map(p => (
              <path
                key={p.id + "-line"}
                d={buildPath(p)}
                stroke={`url(#${p.id}-grad)`}
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="5 4"
              />
            ))}

            {/* ── Animated dots (two per path) ── */}
            {PLATFORMS.map(p => (
              <g key={p.id + "-dots"}>
                {[{ begin: p.beginA }, { begin: p.beginB }].map((d, di) => (
                  <circle key={di} r="4.5" fill={p.color} filter="url(#dot-glow)">
                    <animateMotion dur={p.dur} begin={d.begin} repeatCount="indefinite">
                      <mpath href={`#${p.id}-ref`}/>
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur={p.dur} begin={d.begin} repeatCount="indefinite"/>
                  </circle>
                ))}
              </g>
            ))}

            {/* ── Platform nodes ── */}
            {PLATFORMS.map((p, i) => (
              <g key={p.id + "-node"}>
                {/* Outer faint ring */}
                <circle cx={p.x} cy={p.y} r={P_R + 8}
                  fill="none" stroke={p.color} strokeWidth="1" strokeOpacity="0.1"/>
                {/* Main circle */}
                <circle cx={p.x} cy={p.y} r={P_R}
                  fill="rgba(10,10,15,0.7)"
                  stroke={p.color} strokeWidth="1.5" strokeOpacity="0.55"/>
                {/* Color fill tint */}
                <circle cx={p.x} cy={p.y} r={P_R - 1}
                  fill={p.color} fillOpacity="0.08"/>
                {/* Active green dot */}
                <circle cx={p.x + P_R * 0.65} cy={p.y - P_R * 0.65} r="4" fill="#34d399">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.35}s`} repeatCount="indefinite"/>
                </circle>
                {/* Foreign object for icon — use text fallback instead */}
                <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11" fontWeight="700"
                  fill={p.color} fontFamily="system-ui, sans-serif" letterSpacing="-0.3">
                  {p.name.slice(0, 2).toUpperCase()}
                </text>
                {/* Name label */}
                <text
                  x={p.x} y={p.y + P_R + 16}
                  textAnchor="middle" fontSize="10.5" fill="rgba(148,163,184,0.65)"
                  fontFamily="system-ui, sans-serif" fontWeight="500"
                >
                  {p.name}
                </text>
              </g>
            ))}

            {/* ── Hub node ── */}
            {/* Outer pulsing ring 1 */}
            <circle cx={HUB.x} cy={HUB.y} r={HUB_R + 14}
              fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="1">
              <animate attributeName="r" values={`${HUB_R+10};${HUB_R+22};${HUB_R+10}`} dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            {/* Outer ring 2 (offset phase) */}
            <circle cx={HUB.x} cy={HUB.y} r={HUB_R + 8}
              fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5">
              <animate attributeName="r" values={`${HUB_R+4};${HUB_R+16};${HUB_R+4}`} dur="3.5s" begin="1.75s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;0.15;0.8" dur="3.5s" begin="1.75s" repeatCount="indefinite"/>
            </circle>
            {/* Hub circle */}
            <circle cx={HUB.x} cy={HUB.y} r={HUB_R}
              fill="url(#hub-fill)"
              stroke="rgba(99,102,241,0.55)" strokeWidth="2"
              filter="url(#hub-glow)"/>
            {/* Checkmark icon */}
            <path
              d={`M ${HUB.x - 14} ${HUB.y + 1} l 10 10 18 -18`}
              stroke="rgba(129,140,248,0.95)" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            {/* Hub label */}
            <text x={HUB.x} y={HUB.y + HUB_R + 18}
              textAnchor="middle" fontSize="11" fill="rgba(129,140,248,0.75)"
              fontFamily="system-ui, sans-serif" fontWeight="600">
              AutomateUs
            </text>
          </svg>
        </div>

        {/* ── Live activity ticker ──────────────────────────── */}
        <div className="mx-4 mb-4 px-4 py-3 rounded-lg flex items-center gap-3 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Pulsing live dot */}
          <span className="relative flex-shrink-0 w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping" style={{ animationDuration: "1.6s" }}/>
            <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 block"/>
          </span>

          <AnimatePresence mode="wait">
            <motion.span
              key={notifIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="text-sm flex-1 truncate"
              style={{ color: "rgba(148,163,184,0.85)" }}
            >
              <span className="font-semibold" style={{ color: NOTIFS[notifIdx].color }}>
                {NOTIFS[notifIdx].brand}
              </span>
              {" — "}
              {NOTIFS[notifIdx].msg}
            </motion.span>
          </AnimatePresence>

          <span className="text-xs flex-shrink-0" style={{ color: "rgba(100,116,139,0.7)" }}>
            just now
          </span>
        </div>
      </div>
    </motion.div>
  );
}
