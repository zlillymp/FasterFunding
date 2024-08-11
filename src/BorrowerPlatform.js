import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function BorrowerPlatform({ onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://borrower.lendflow.com/lfbp.js?token=borrower-platform-087ca54534ea43e69bf38795d3cc9ea1&branding=1483&emailBranding=166&target=target-element";
    script.async = true;

    const handleScriptLoad = () => setIsLoading(false);
    const handleScriptError = () => {
      setIsLoading(false);
      setError('Failed to load the Borrower Platform. Please try again later.');
    };

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      script.removeEventListener('load', handleScriptLoad);
      script.removeEventListener('error', handleScriptError);
    };
  }, []);

  if (isLoading) {
    return <div>Loading Borrower Platform...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div id="target-element" className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4"></div>
      </div>
    </div>
  );
}

export default BorrowerPlatform;