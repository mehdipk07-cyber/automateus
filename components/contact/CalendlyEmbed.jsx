"use client";

import { useRef } from "react";
import Script from "next/script";

export const CALENDLY_URL = "https://calendly.com/elyan0/new-meeting";

// Theme params so the widget matches the dark site palette
const EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=101C2C&text_color=F5F2ED&primary_color=E1B07E`;

export default function CalendlyEmbed() {
  const containerRef = useRef(null);

  // onReady fires on first load and on every remount (client-side navigation),
  // unlike the widget's own auto-init which only runs once.
  const init = () => {
    const el = containerRef.current;
    if (!el || !window.Calendly) return;
    el.innerHTML = "";
    window.Calendly.initInlineWidget({ url: EMBED_URL, parentElement: el });
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--surface-800)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div ref={containerRef} style={{ minWidth: "320px", height: "700px" }} />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onReady={init}
      />
    </div>
  );
}
