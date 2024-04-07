// StatsContext.js
import React, { createContext, useState, useEffect } from 'react';

// Initialize the context with a default value
const defaultStats = {
  completedApplications: 0,
  offersOut: 0,
  fundedDeals: 0,
  fundedAmount: 0,
};

export const StatsContext = createContext(defaultStats);

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState(defaultStats);

  // ... (rest of the StatsProvider component)

  return (
    <StatsContext.Provider value={stats}>
      {children}
    </StatsContext.Provider>
  );
};
