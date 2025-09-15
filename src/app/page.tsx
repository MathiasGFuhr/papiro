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
  Analytics,
  LazySection,
  PageLoader
} from '../components';
import { useScroll, usePageLoader } from '../hooks';

export default function Home() {
  const { scrollProgress, showBackToTop, scrollToTop } = useScroll();
  const { isLoading } = usePageLoader();

  return (
    <>
      <Analytics />
      <ScrollProgress progress={scrollProgress} />
      <PageLoader isLoading={isLoading} />
      
      <Header />
      
      <main>
        <HeroSection />
        <LazySection>
          <HowItWorksSection />
        </LazySection>
        <LazySection>
          <FeaturesSection />
        </LazySection>
        <LazySection>
          <PricingSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
      </main>
      
      <Footer />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </>
  );
}