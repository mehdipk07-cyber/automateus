import Image from "next/image";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "COO, GrowthLoop Marketing",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "AutomateUs transformed how our agency operates. We went from spending 15 hours a week on manual reporting to having everything automated. The ROI was evident within the first month.",
  },
  {
    name: "James Rivera",
    role: "Founder, Apex Properties",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "The Monday.com automations they built for our real estate ops team are incredible. Follow-ups, task assignments, notifications — all happen automatically. It's like hiring a full-time ops person.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Sales, TechStack SaaS",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "Our lead qualification process used to be a bottleneck. AutomateUs built an AI system that handles everything — scoring, routing, CRM updates. Our sales team now only touches warm leads.",
  },
  {
    name: "Daniel Chen",
    role: "E-commerce Director, Luminary Shop",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "From order management to customer follow-ups and inventory alerts — they automated our entire post-purchase flow. We're processing 3x more orders with the same team size.",
  },
  {
    name: "Emma Walsh",
    role: "Operations Manager, BrightPath Agency",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "The discovery call alone was worth it. They identified automations we hadn't even thought of. Fast implementation, clean documentation, and incredible ongoing support.",
  },
  {
    name: "Marcus Lee",
    role: "Founder, Velocity Growth",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
    rating: 5,
    text: "Our onboarding flow, client updates, invoicing, and weekly reports are all automated now. AutomateUs didn't just save us time — they fundamentally improved how we run the company.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
          <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.43L7 8.885l-3.09 1.625.59-3.43L2 4.633l3.455-.503z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">Businesses of every size trust AutomateUs to streamline their operations.</p>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="rounded-lg p-7 ring-0 border border-border h-full flex flex-col">
                <Stars count={t.rating} />
                <p className="text-gray-300 text-sm leading-relaxed mt-4 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                  <Avatar size="lg" className="ring-2 ring-brand-500/30 flex-shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
