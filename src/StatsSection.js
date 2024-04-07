import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    completedApplications: 0,
    offersOut: 0,
    fundedDeals: 0,
    fundedAmount: 0,
  });

  const calculateStats = () => {
    const startDate = new Date('January 1, 2024 00:00:00');
    const currentDate = new Date();

    // Check if the current date is before the start date
    if (currentDate < startDate) {
      console.warn('Start date is in the future. No stats to display yet.');
      return;
    }

    // Calculate the difference in days
    const differenceInTime = currentDate - startDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    // Calculate stats based on the difference in days
    const completedApplications = differenceInDays * 223;
    const offersOut = Math.floor(completedApplications * 0.44);
    const fundedDeals = Math.floor(offersOut * 0.72);
    const fundedAmount = fundedDeals * 53064;

    // Update state with new stats
    setStats({
      completedApplications,
      offersOut,
      fundedDeals,
      fundedAmount,
    });
  };

  useEffect(() => {
    calculateStats(); // Initial calculation on mount

    // Set up an interval to recalculate stats every 24 hours
    const oneDay = 1000 * 60 * 60 * 24;
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const timeUntilMidnight = nextMidnight - now;

    // First timeout to align with midnight
    const timeoutId = setTimeout(() => {
      calculateStats();
      // Set up the daily interval after the first timeout
      const intervalId = setInterval(calculateStats, oneDay);

      // Clear interval on component unmount
      return () => {
        clearInterval(intervalId);
      };
    }, timeUntilMidnight);

    // Clear timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Stats Overview</h2>
      <ul>
        <li className="mb-2">Completed Applications: {stats.completedApplications.toLocaleString()}</li>
        <li className="mb-2">Offers Out: {stats.offersOut.toLocaleString()}</li>
        <li className="mb-2">Funded Deals: {stats.fundedDeals.toLocaleString()}</li>
        <li className="mb-2">Funded Amount: ${stats.fundedAmount.toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default StatsSection;
