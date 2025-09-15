"use client";

import { 
  Header, 
  Footer, 
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  PricingSection,
  ContactSection
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}