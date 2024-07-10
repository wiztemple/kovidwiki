"use client";

import { useState } from 'react';
import { useUSACovidStats } from "../hooks/dataQuery";
import Drawer from "./Drawer";
import StateCard from './StateCard';
import usStateFlags from '../utils/useStateFlags';

const USAStats = () => {
  const { data, isLoading } = useUSACovidStats();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<any>(null); // Define a more specific type based on your data structure

  const handleCountryClick = (state: any) => {
    setSelectedState(state);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedState(null);
  };

  return (
    <div className="sm:px-20 px-5">
      <h1>All US states Updates</h1>
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-4">
      {data?.map((state) => {
          const flagUrl = state.state ? usStateFlags[state.state] : undefined;
          return (
            <StateCard
              key={state.state}
              country={state?.state ?? ""}
              statsValue={state?.cases ?? 0}
              flag={flagUrl}
              onClick={() => handleCountryClick(state)}
            />
          );
        })}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} countryData={selectedState} />
    </div>
  );
};

export default USAStats;
