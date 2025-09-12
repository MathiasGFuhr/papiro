"use client";

import { 
  Header, 
  Footer, 
  ScrollProgress, 
  BackToTop,
  HeroSection,
  FeaturesSection,
  PricingSection,
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
        <FeaturesSection />
        <PricingSection />
      </main>
      
      <Footer />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </>
  );
}