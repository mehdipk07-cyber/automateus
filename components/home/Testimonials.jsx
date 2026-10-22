import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { FadeUp } from "@/components/AnimatedSection";
import { SectionBadge } from "@/components/ui/section-badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "COO, GrowthLoop Marketing",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "AutomateUs transformed how our agency operates. We went from spending 15 hours a week on manual reporting to having everything automated. The ROI was evident within the first month.",
    stat: "15h/wk saved",
  },
  {
    name: "James Rivera",
    role: "Founder, Apex Properties",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "The Monday.com automations they built for our real estate ops team are incredible. Follow-ups, task assignments, notifications — all happen automatically. It's like hiring a full-time ops person.",
    stat: "100% automated follow-ups",
  },
  {
    name: "Priya Sharma",
    role: "Head of Sales, TechStack SaaS",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "Our lead qualification process used to be a bottleneck. AutomateUs built an AI system that handles everything — scoring, routing, CRM updates. Our sales team now only touches warm leads.",
    stat: "3× more qualified leads",
  },
  {
    name: "Daniel Chen",
    role: "E-commerce Director, Luminary Shop",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "From order management to customer follow-ups and inventory alerts — they automated our entire post-purchase flow. We're processing 3× more orders with the same team size.",
    stat: "3× order volume",
  },
  {
    name: "Emma Walsh",
    role: "Operations Manager, BrightPath Agency",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "The discovery call alone was worth it. They identified automations we hadn't even thought of. Fast implementation, clean documentation, and incredible ongoing support.",
    stat: "Full ops overhaul in 2 weeks",
  },
  {
    name: "Marcus Lee",
    role: "Founder, Velocity Growth",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=880&fit=crop&crop=faces&q=90",
    text: "Our onboarding flow, client updates, invoicing, and weekly reports are all automated now. AutomateUs didn't just save us time — they fundamentally improved how we run the company.",
    stat: "Full company workflow automated",
  },
];

/* Each column starts at a different testimonial so neighbours never line up */
const columns = [
  { offset: 0, duration: "46s", className: "" },
  { offset: 2, duration: "54s", className: "hidden md:block" },
  { offset: 4, duration: "50s", className: "hidden lg:block" },
];

function rotate(list, n) {
  return [...list.slice(n), ...list.slice(0, n)];
}

function TestimonialCard({ t }) {
  return (
    <figure
      className="relative rounded-2xl p-7 border"
      style={{
        background: "linear-gradient(160deg, var(--surface-hover) 0%, var(--surface-card) 55%)",
        borderColor: "var(--border)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 text-brand-300" style={{ fill: "var(--brand-300)" }} />
          ))}
        </div>
        <Quote className="size-6 text-brand-500/40" />
      </div>
      <blockquote className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <span
        className="inline-block mb-6 px-3 py-1 rounded-lg text-xs font-semibold text-[#0D0D0D]"
        style={{ background: "linear-gradient(135deg, #BEF04A, #9FD12E)" }}
      >
        {t.stat}
      </span>
      <figcaption className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Image
          src={t.photo}
          alt={t.name}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover ring-1 ring-white/10"
        />
        <div>
          <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{t.name}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionBadge>Testimonials</SectionBadge>
          <h2
            className="text-4xl lg:text-6xl font-semibold leading-[1.05] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Our Clients <span className="gradient-text accent-serif">Say</span>
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Businesses of every size trust AutomateUs to streamline their operations.
          </p>
        </FadeUp>

        {/* Scrolling columns */}
        <FadeUp delay={0.1}>
          <div className="marquee-mask-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-[720px]">
            {columns.map((col, c) => {
              const list = rotate(testimonials, col.offset);
              return (
                <div key={c} className={cn("min-w-0", col.className)}>
                  <div className="marquee-up flex flex-col" style={{ "--marquee-duration": col.duration }}>
                    {[0, 1].map((copy) => (
                      <div key={copy} className="flex flex-col gap-5 pb-5" aria-hidden={copy === 1 || undefined}>
                        {list.map((t) => (
                          <TestimonialCard key={t.name} t={t} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
