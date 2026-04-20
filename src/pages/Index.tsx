import { PageWrapper } from "@/components/layout/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DMESection } from "@/components/sections/DMESection";
import { HIPAASecuritySection } from "@/components/sections/HIPAASecuritySection";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import WhoWeAreSection from "@/components/common/WhoWeAreSection";
import EHR from "@/components/sections/EHR";
import { SpecialitiesSection } from "@/components/sections/SpecialitiesSection";

const Index = () => {
  return (
    <PageWrapper>
      <Hero />
      <TrustBadges />
      <WhoWeAreSection />
      <ServicesSection />
      <StatsSection />
      <DMESection />
      <HIPAASecuritySection />
      <EHR/>
      <SpecialitiesSection />
      <FAQSection limit={5} />
      <CTASection />
    </PageWrapper>
  );
};

export default Index;
