import React from 'react';
import { StatsProvider } from './StatsContext';
import StatsSection from './StatsSection';
import OtherComponent from './OtherComponent';

const App = () => {
  return (
    <StatsProvider>
      <StatsSection />
      <OtherComponent />
    </StatsProvider>
  );
};

export default App;
