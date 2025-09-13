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
import { ThemeTest } from '../components/ui/ThemeTest';
import { useScroll } from '../hooks';

export default function Home() {
  const { scrollProgress, showBackToTop, scrollToTop } = useScroll();

  return (
    <>
      <Analytics />
      <ScrollProgress progress={scrollProgress} />
      
      <Header />
      
      <main>
        <div className="container mx-auto px-6 py-8">
          <ThemeTest />
        </div>
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