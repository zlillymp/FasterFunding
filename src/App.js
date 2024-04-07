import React, { useState } from 'react';
import './App.css';
import Features from './Features';
import Process from './Process';
import Questions from './Questions';
import Footer from './footer'; // Ensure this matches the file casing
import Hero from './hero'; // Ensure this matches the file casing
import About from './About';
import CTA2 from './CTA2';
import PrivacyModal from './PrivacyModal';
import TermsofService from './TermsofService';

function App() {
  // State for controlling the visibility of the privacy modal
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  // State for controlling the visibility of the terms of service modal
  const [isTermsofServiceOpen, setTermsofServiceOpen] = useState(false);

  return (
    <div className="App">
      <Hero />
      <Features />
      <Process />
      <About />
      <CTA2 />
      <Questions />
      {/* Pass the handlers to open the modals as props to the Footer */}
      <Footer 
        onPrivacyClick={() => setPrivacyModalOpen(true)}
        onTermsClick={() => setTermsofServiceOpen(true)}
      />

      {/* Include the PrivacyModal component and control its visibility with state */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Include the TermsofService component and control its visibility with state */}
      <TermsofService
        isOpen={isTermsofServiceOpen}
        onClose={() => setTermsofServiceOpen(false)}
      />

    </div>
  );
}

export default App;
