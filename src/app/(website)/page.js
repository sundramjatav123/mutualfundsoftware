import AboutSection from "../components/sections/AboutSection";
import BlogSection from "../components/sections/BlogSection";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorks from "../components/sections/HowItWorks";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SolutionSection from "../components/sections/SolutionSection";
import ComparisonSection from "../components/sections/ComparisonSection";
import { AudienceSection } from "../components/sections/AudienceSection";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import ProblemsSection from "../components/sections/ProblemsSection";
import { getFQAsData, getSiteData } from "@/lib/functions";

export default async function HomePage() {
  const siteData = await getSiteData();
  const faqs = await getFQAsData();
  console.log(faqs);
  
  return (
    <div className="bg-[var(--rv-bg)] text-[var(--rv-text)]">
      <HeroSection />
      {/* <AboutSection /> */}
      <StatsSection />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <BenefitsSection />
      <AudienceSection />
      <HowItWorks />
      <TestimonialsSection />
      <BlogSection />
      <ComparisonSection />
      <FAQSection faqs={faqs}/>
      <ContactSection siteData={siteData}/>
    </div>
  );
}