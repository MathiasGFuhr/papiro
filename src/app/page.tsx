"use client";

import { 
  Header, 
  Footer, 
  ScrollProgress, 
  BackToTop,
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  PricingSection,
  ContactSection,
  Analytics
} from '../components';
import { useScroll } from '../hooks';

export default function Home() {
  const { scrollProgress, showBackToTop, scrollToTop } = useScroll();

  return (
    <>
      <Analytics />
      <ScrollProgress progress={scrollProgress} />
      
      <Header />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </>
  );
}