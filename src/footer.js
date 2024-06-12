// Footer.js
import React from 'react';
import logo from './FasterFundingLogo.svg';

const navigation = {
  legal: [
    { name: 'Privacy', action: 'onPrivacyClick' },
    { name: 'Terms', action: 'onTermsClick' },
  ],
};

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const handleClick = (action) => {
    if (action === 'onPrivacyClick') {
      onPrivacyClick && onPrivacyClick();
    } else if (action === 'onTermsClick') {
      onTermsClick && onTermsClick();
    }
  };

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.legal.map((item) => (
            <div key={item.name} className="pb-6">
              <button
                onClick={() => handleClick(item.action)}
                className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none"
              >
                {item.name}
              </button>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <img
            className="w-12 md:w-32 lg:w-48"
            src={logo}
            alt="Faster Funding Logo"
          />
        </div>
        <div className="mt-10 text-center text-xs leading-5 text-gray-400">
          <p>Financial products are made available through Faster Fundings partners</p>
          <p>Rates, pricing, requirements, and other terms and conditions are subject to change without notice.</p>
        </div>
        <div className="mt-10 text-center text-xs leading-5 text-gray-400">
          <p>&copy; 2024 Faster Funding, Inc. All rights reserved.</p>
          <p>900 Balcones Drive STE 100, Austin, TX 78731 USA</p>
        </div>
      </div>
    </footer>
  );
}
