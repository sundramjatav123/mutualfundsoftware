import AboutSection from "../components/sections/AboutSection";
import BlogSection from "../components/sections/BlogSection";
import ContactSection from "../components/sections/ContactSection";
import FAQSection from "../components/sections/FAQSection";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorks from "../components/sections/HowItWorks";
import StatsSection from "../components/sections/StatsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhySection from "../components/sections/WhySection";
import ComparisonSection from "../components/sections/ComparisonSection";
import { AudienceSection } from "../components/sections/AudienceSection";
import { BenefitsSection } from "../components/sections/BenefitsSection";

export default function HomePage() {
  return (
    <div className="bg-[var(--rv-bg)] text-[var(--rv-text)]">
      <HeroSection />
      {/* <AboutSection /> */}
      <StatsSection />
      <WhySection />
      <FeaturesSection />
      <BenefitsSection />
      <AudienceSection />
      <HowItWorks />
      <TestimonialsSection />
      <BlogSection />
      <ComparisonSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}