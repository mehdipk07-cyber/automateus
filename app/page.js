import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import HowItWorks from "@/components/home/HowItWorks";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import Testimonials from "@/components/home/Testimonials";
import ROICalculator from "@/components/home/ROICalculator";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "AutomateUs | Automate Repetitive Work. Scale Faster.",
  description:
    "AutomateUs builds custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
  keywords: [
    "business automation agency",
    "workflow automation services",
    "AI automation",
    "Make.com experts",
    "Zapier automation agency",
    "Monday.com automation",
    "eliminate manual tasks",
    "process automation",
  ],
  alternates: { canonical: "https://automateus.net" },
  openGraph: {
    title: "AutomateUs | Automate Repetitive Work. Scale Faster.",
    description:
      "AutomateUs builds custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
    url: "https://automateus.net",
    images: [{ url: "/logo-automateus.png", width: 1254, height: 1254, alt: "AutomateUs — Custom Automation Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateUs | Automate Repetitive Work. Scale Faster.",
    description: "AutomateUs builds custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
    images: ["/logo-automateus.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: { "@type": "Answer", text: "We work with small businesses, startups, marketing agencies, real estate companies, e-commerce businesses, professional service firms, and operations teams. If you have manual, repetitive processes, we can automate them." },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement an automation?",
      acceptedAnswer: { "@type": "Answer", text: "Most automations are live within 1–2 weeks. Complex, multi-system integrations can take 3–4 weeks. We move fast without sacrificing quality or reliability." },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to work with you?",
      acceptedAnswer: { "@type": "Answer", text: "Not at all. We handle everything technical. You just need to be able to describe your current process and your desired outcome — we do the rest." },
    },
    {
      "@type": "Question",
      name: "Which tools and platforms do you work with?",
      acceptedAnswer: { "@type": "Answer", text: "We work with Monday.com, Make.com, Zapier, HubSpot, Salesforce, Slack, Notion, Airtable, Google Workspace, and hundreds more. We also build custom API integrations for any software with an accessible API." },
    },
    {
      "@type": "Question",
      name: "What does the discovery call involve?",
      acceptedAnswer: { "@type": "Answer", text: "It's a free 30–45 minute video call where we learn about your business, current workflows, and biggest pain points. We'll identify your top automation opportunities and outline exactly how we'd approach your specific situation." },
    },
    {
      "@type": "Question",
      name: "How do you price your services?",
      acceptedAnswer: { "@type": "Answer", text: "We offer project-based pricing and monthly retainer packages. Pricing depends on the complexity and scope of your automation needs. We'll give you a clear, itemized proposal after the discovery call — no surprises." },
    },
    {
      "@type": "Question",
      name: "What happens after the automation is deployed?",
      acceptedAnswer: { "@type": "Answer", text: "We provide training, full documentation, and ongoing support. We monitor your automations, fix any issues, and continuously optimize performance. You're never left on your own." },
    },
    {
      "@type": "Question",
      name: "Is my data safe?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. We follow security best practices, use encrypted connections, and never store your sensitive business data on our own servers. All access is scoped to only what's needed." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustedBy />
      <Services />
      <Benefits />
      <HowItWorks />
      <CaseStudiesPreview />
      <Testimonials />
      <ROICalculator />
      <FAQ />
      <FinalCTA />
    </>
  );
}
