import { FadeUp } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import BlogContent from "@/components/blog/BlogContent";

export const metadata = {
  title: "Blog | Automation Tips, AI Workflows & Productivity",
  description:
    "Practical automation strategies, tool guides, and productivity insights from the AutomateUs team.",
  keywords: [
    "automation blog",
    "workflow automation tips",
    "Make.com tutorials",
    "Zapier guides",
    "Monday.com automation",
    "AI workflow automation",
    "business productivity",
    "no-code automation",
  ],
  alternates: { canonical: "https://automate-us.vercel.app/blog" },
  openGraph: {
    title: "Blog | Automation Tips, AI Workflows & Productivity — AutomateUs",
    description: "Practical automation strategies, tool guides, and productivity insights from the AutomateUs team.",
    url: "https://automate-us.vercel.app/blog",
    images: [{ url: "/logo.png", width: 768, height: 768, alt: "AutomateUs Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Automation Tips, AI Workflows & Productivity — AutomateUs",
    description: "Practical automation strategies, tool guides, and productivity insights from the AutomateUs team.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Badge variant="outline" className="mb-6 border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs tracking-widest text-brand-400 uppercase">
              The AutomateUs Blog
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Automation Insights &{" "}
              <span className="gradient-text accent-serif">Practical Guides</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real strategies and step-by-step tutorials from a team that builds automations every day.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filterable posts — client component */}
      <BlogContent />
    </>
  );
}
