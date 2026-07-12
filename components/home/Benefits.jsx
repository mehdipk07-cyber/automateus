import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Save Time",
    desc: "Reclaim 20+ hours per week by automating repetitive, low-value tasks across your team.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5 5.5.8-4 3.9.95 5.5L14 15.7l-4.95 2.5.95-5.5L6 8.8l5.5-.8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 22l2 2 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reduce Human Error",
    desc: "Eliminate costly mistakes that come from manual data entry and repetitive processes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-6 4 4 10-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Increase Productivity",
    desc: "Let your team focus on strategic, creative work that drives real business growth.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3L11 12 7 9h5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 19v5M10 24h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: "Scale Operations",
    desc: "Handle more clients, orders, and processes without proportionally increasing headcount.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="16" width="5" height="9" rx="1" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="11" y="10" width="5" height="15" rx="1" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="19" y="4" width="5" height="21" rx="1" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M5 12l6-5 6 3 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Improve Visibility",
    desc: "Get real-time dashboards and automated reports so you always know what's happening.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M14 8v2M14 18v2M10.3 10.3l1.4 1.4M16.3 16.3l1.4 1.4M8 14h2M18 14h2M10.3 17.7l1.4-1.4M16.3 11.7l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
    title: "Lower Costs",
    desc: "Automate what costs you money in labor hours and eliminate the overhead of manual work.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-surface-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs tracking-widest text-accent-400 uppercase">
            Why Automate
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The ROI of Automation is Real
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Businesses that automate see measurable results within the first 30 days — not months.
          </p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <Card className="h-full rounded-lg p-7 ring-0 border border-border">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 text-brand-400"
                  style={{ border: "1px solid var(--border-brand)" }}
                >
                  {b.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
