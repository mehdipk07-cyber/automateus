"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    category: "Automation Tips",
    title: "The 10 Business Processes You Should Automate First",
    desc: "Not all automation is created equal. We ranked the highest-ROI processes to automate based on 100+ client projects — starting with the ones that save the most time.",
    readTime: "8 min read",
    date: "Jun 10, 2026",
    slug: "10-processes-to-automate-first",
    featured: true,
    categoryColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=500&fit=crop&q=80",
  },
  {
    category: "AI Workflows",
    title: "How to Build an AI Lead Qualification System in Make.com",
    desc: "A step-by-step guide to creating an AI-powered lead scoring workflow using Claude AI, Make.com, and your CRM — with templates included.",
    readTime: "12 min read",
    date: "Jun 5, 2026",
    slug: "ai-lead-qualification-make",
    categoryColor: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Monday.com",
    title: "Monday.com Automation Recipes That Actually Work",
    desc: "Beyond the basic native automations — these 15 advanced Monday.com workflows will transform how your team manages projects and clients.",
    readTime: "10 min read",
    date: "May 28, 2026",
    slug: "monday-automation-recipes",
    categoryColor: "#FF3D57",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Make.com Tutorials",
    title: "Make.com vs Zapier: Which Is Right for Your Business in 2026?",
    desc: "An honest comparison of the two biggest automation platforms — pricing, capabilities, ease of use, and when to choose each one.",
    readTime: "9 min read",
    date: "May 20, 2026",
    slug: "make-vs-zapier-2026",
    categoryColor: "#6D00CC",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Business Productivity",
    title: "How Automation Saved Our Client 20 Hours Per Week",
    desc: "A behind-the-scenes look at the exact workflow we built for a real estate ops team — the process, the tools, and the results.",
    readTime: "6 min read",
    date: "May 14, 2026",
    slug: "20-hours-saved-case-study",
    categoryColor: "#10b981",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Zapier Guides",
    title: "Zapier Advanced Techniques: Paths, Filters & Webhooks",
    desc: "Go beyond basic Zaps. This guide covers the advanced Zapier features that unlock truly powerful automations for your business.",
    readTime: "11 min read",
    date: "May 8, 2026",
    slug: "zapier-advanced-techniques",
    categoryColor: "#FF4A00",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&q=80",
  },
  {
    category: "Automation Tips",
    title: "How to Automate Your Client Onboarding Process (Complete 2026 Guide)",
    desc: "Client onboarding is your first impression — and the most time-consuming part of running a service business. Here's the exact automation stack we use to onboard clients in under 10 minutes, hands-free.",
    readTime: "10 min read",
    date: "Jul 18, 2026",
    slug: "automate-client-onboarding",
    categoryColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop&q=80",
  },
];

const categories = [
  "All",
  "Automation Tips",
  "AI Workflows",
  "Monday.com",
  "Make.com Tutorials",
  "Business Productivity",
  "Zapier Guides",
];

function FeaturedThumbnail({ src, alt }) {
  return (
    <div className="relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
    </div>
  );
}

function CategoryThumbnail({ src, alt, color }) {
  return (
    <div className="relative h-44 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to top, ${color}55 0%, transparent 60%)` }}
      />
    </div>
  );
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                  : "rgba(255,255,255,0.04)",
                border: isActive
                  ? "1px solid rgba(99,102,241,0.4)"
                  : "1px solid rgba(255,255,255,0.08)",
                color: isActive ? "#ffffff" : "var(--text-muted)",
                boxShadow: isActive ? "0 0 16px rgba(99,102,241,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* No results */}
      {!featured && (
        <p className="text-center py-24 text-lg" style={{ color: "var(--text-muted)" }}>
          No posts in this category yet.
        </p>
      )}

      {/* Featured post */}
      {featured && (
        <div className="mb-12">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <Card className="rounded-lg p-0 ring-0 border border-border overflow-hidden hover:border-brand-500/30 transition-all duration-300 [--card-spacing:0px]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <FeaturedThumbnail src={featured.image} alt={featured.title} />
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-brand-500/20 text-brand-400 border border-brand-500/20">
                      {activeCategory === "All" ? "Featured" : featured.category}
                    </Badge>
                    {activeCategory === "All" && (
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {featured.category}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-brand-200 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{featured.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      )}

      {/* Post grid */}
      {rest.length > 0 && (
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="rounded-lg p-0 ring-0 border border-border overflow-hidden hover:border-brand-500/30 transition-all duration-300 h-full flex flex-col [--card-spacing:0px]">
                  <CategoryThumbnail src={post.image} alt={post.title} color={post.categoryColor} />
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-200 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.desc}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      )}

      {/* Single result — no grid needed */}
      {featured && rest.length === 0 && (
        <div className="pb-24" />
      )}
    </section>
  );
}
