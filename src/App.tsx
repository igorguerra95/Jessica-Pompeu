import React, { useRef, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Residencial');
  const contactNameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }

    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        contactNameInputRef.current?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <Header onContactClick={() => scrollToContact()} />

        <main>
          <HeroSection onContactClick={() => scrollToContact()} />
          <PortfolioSection
            onContactWithProject={(projectType) => scrollToContact(projectType)}
          />
          <AboutSection onContactClick={() => scrollToContact()} />
          <ContactSection
            preselectedProjectType={selectedProjectType}
            nameInputRef={contactNameInputRef}
          />
        </main>

        <Footer />
        <WhatsAppFab />
      </div>
    </MotionConfig>
  );
}
