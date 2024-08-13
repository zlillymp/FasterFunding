import React, { useEffect } from 'react';

export default function BorrowerPortal() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://borrower.lendflow.com/lfbp.js?token=borrower-platform-087ca54534ea43e69bf38795d3cc9ea1&branding=1483&target=target-element';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      margin: 0,
      padding: 0,
      height: '100%',
      minHeight: '100vh'
    }}>
      <div 
        id="target-element" 
        style={{
          height: '100vh', 
          borderRadius: '10px', 
          backgroundColor: '#f5f5f5'
        }}
      ></div>
    </div>
  );
}