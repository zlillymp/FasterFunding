import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import Features from './Features';
import Process from './Process';
import Questions from './Questions';
import Footer from './footer';
import Hero from './hero';
import About from './About';
import CTA2 from './CTA2';
import PrivacyModal from './PrivacyModal';
import TermsofService from './TermsofService';
import { loadZohoScript } from './ZohoScript';

function App() {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsofServiceOpen, setTermsofServiceOpen] = useState(false);

  useEffect(() => {
    loadZohoScript();
  }, []);

  return (
    <div className="App">
      <Hero />
      <Features />
      <Process />
      <About />
      <CTA2 />
      <Questions />
      <Footer 
        onPrivacyClick={() => setPrivacyModalOpen(true)}
        onTermsClick={() => setTermsofServiceOpen(true)}
      />
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
      <TermsofService
        isOpen={isTermsofServiceOpen}
        onClose={() => setTermsofServiceOpen(false)}
      />
      <Analytics />
    </div>
  );
}

export default App;
