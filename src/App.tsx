import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { CostEstimator } from './components/CostEstimator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServiceAreaPassau } from './components/ServiceAreaPassau';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';
import { CookieBanner } from './components/CookieBanner';

export const MainAppContent: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);
  const handleOpenLegal = (type: 'impressum' | 'datenschutz') => {
    setActiveLegalModal(type);
  };

  const handleCloseLegal = () => {
    setActiveLegalModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-timber-50 text-timber-900 font-sans selection:bg-forest-200 selection:text-forest-900 relative">
      {/* 24/7 Storm Damage Emergency Bar */}
      <EmergencyBanner />

      {/* Sticky Header with Brand, Nav & Language Switcher */}
      <Header onOpenLegal={handleOpenLegal} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Detailed 6-Card Services Grid with Imagery */}
        <ServicesGrid />

        {/* Interactive Multi-Step Cost & Scope Estimator */}
        <CostEstimator />

        {/* Touch-Friendly Draggable Before & After Comparison Slider */}
        <BeforeAfterSlider />

        {/* Passau District Badges & 35km Radius Service Area */}
        <ServiceAreaPassau />

        {/* About Us, Forestry Machinery & Safety Pledge */}
        <AboutSection />

        {/* Verified Passau Customer Reviews */}
        <Testimonials />

        {/* Interactive FAQ Accordion Section */}
        <FAQSection />

        {/* Direct Contact & Operating Hours */}
        <ContactSection />
      </main>

      {/* German Compliance Legal Modals: Impressum & Datenschutz */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={handleCloseLegal}
      />

      {/* Floating Action Buttons: WhatsApp & Instant Phone Call */}
      <FloatingActions />

      {/* Privacy & Cookie Notice Banner */}
      <CookieBanner onOpenPrivacy={() => handleOpenLegal('datenschutz')} />

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
