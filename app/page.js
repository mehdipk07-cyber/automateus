import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import HowItWorks from "@/components/home/HowItWorks";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import Testimonials from "@/components/home/Testimonials";
import ROICalculator from "@/components/home/ROICalculator";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "AutomateUs | Automate Repetitive Work. Scale Faster.",
  description:
    "AutomateUs builds custom automations that eliminate manual tasks, reduce operational costs, and help your team focus on high-value work.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Benefits />
      <HowItWorks />
      <CaseStudiesPreview />
      <Testimonials />
      <ROICalculator />
      <FAQ />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
