import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import RegistrationForms from "@/components/RegistrationForms";
import Footer from "@/components/Footer";
import SplashOverlay from "@/components/SplashOverlay";

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference - if true, skip splash entirely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setShowSplash(false);
      setHeroVisible(true);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    // Hero animation starts at 2200ms in timeline, so set visible immediately
    // as the Hero component will handle its own animation timing
    setHeroVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showSplash && (
        <SplashOverlay onFinish={handleSplashFinish} />
      )}
      
      <Header />
      <main className="flex-1">
        <Hero isVisible={heroVisible} />
        <Features />
        <ProductPreview />
        <RegistrationForms />
      </main>
      <Footer />
    </div>
  );
}