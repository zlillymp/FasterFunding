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

    if (currentDate < startDate) {
      console.warn('Start date is in the future. No stats to display yet.');
      return;
    }

    const differenceInTime = currentDate - startDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    const completedApplications = differenceInDays * 223;
    const offersOut = Math.floor(completedApplications * 0.44);
    const fundedDeals = Math.floor(offersOut * 0.72);
    const fundedAmount = fundedDeals * 53064;

    setStats({
      completedApplications,
      offersOut,
      fundedDeals,
      fundedAmount,
    });
  };

  useEffect(() => {
    calculateStats();

    const oneDay = 1000 * 60 * 60 * 24;
    const intervalId = setInterval(calculateStats, oneDay);

    return () => clearInterval(intervalId);
  }, []);

  // Function to determine the height class based on the value
  const getHeightClass = (value) => {
    if (value >= stats.completedApplications) {
      return 'h-full'; // Full height
    } else if (value < stats.completedApplications && value >= stats.offersOut) {
      return 'h-3/4'; // 75% height
    } else {
      return 'h-1/2'; // 50% height
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-time Stats
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Our platform's performance indicators updated daily.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {/* Completed Applications */}
          <div className={`flex flex-col justify-between gap-y-8 rounded-2xl bg-gray-50 p-8 ${getHeightClass(stats.completedApplications)}`}>
            <p className="text-3xl font-bold tracking-tight text-gray-900">
              {stats.completedApplications.toLocaleString()}
            </p>
            <div>
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                Completed Applications
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Total number of applications completed since launch.
              </p>
            </div>
          </div>
{/* Offers Out */}
{/* Offers Out */}
<div className={`relative flex flex-col justify-between rounded-2xl bg-white p-8 overflow-hidden ${getHeightClass(stats.offersOut)}`}>
  <div className="z-10">
    <p className="text-lg font-semibold tracking-tight text-gray-900">
      Offers Out
    </p>
    <p className="mt-2 text-base leading-7 text-gray-600">
      Percentage of completed applications resulting in offers.
    </p>
  </div>
  <p className="z-10 text-3xl font-bold tracking-tight text-gray-900">
    {stats.offersOut.toLocaleString()}
  </p>
  <div className="absolute bottom-0 left-0 w-full bg-gray-900" style={{ height: '50%' }}></div>
</div>

{/* Funded Deals */}
<div className={`relative flex flex-col justify-between rounded-2xl bg-white p-8 overflow-hidden ${getHeightClass(stats.fundedDeals)}`}>
  <div className="z-10">
    <p className="text-lg font-semibold tracking-tight text-gray-900">
      Funded Deals
    </p>
    <p className="mt-2 text-base leading-7 text-gray-600">
      Number of offers that have resulted in funded deals.
    </p>
  </div>
  <p className="z-10 text-3xl font-bold tracking-tight text-gray-900">
    {stats.fundedDeals.toLocaleString()}
  </p>
  <div className="absolute bottom-0 left-0 w-full bg-indigo-600" style={{ height: '50%' }}></div>
</div>

{/* Funded Amount */}
<div className={`relative flex flex-col justify-between rounded-2xl bg-white p-8 overflow-hidden ${getHeightClass(stats.fundedAmount)}`}>
  <div className="z-10">
    <p className="text-lg font-semibold tracking-tight text-gray-900">
      Funded Amount
    </p>
    <p className="mt-2 text-base leading-7 text-gray-600">
      Total amount funded to our customers based on funded deals.
    </p>
  </div>
  <p className="z-10 text-3xl font-bold tracking-tight text-gray-900">
    ${stats.fundedAmount.toLocaleString()}
  </p>
  <div className="absolute bottom-0 left-0 w-full bg-green-600" style={{ height: '50%' }}></div>
</div>


        </div>
      </div>
    </div>
  );
};

export default StatsSection;
