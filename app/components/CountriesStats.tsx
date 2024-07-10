"use client";

import { useState } from 'react';
import { useCountriesCovidStats } from "../hooks/dataQuery";
import CountryCard from "./CountryCard";
import Drawer from "./Drawer";

const CountriesStats = () => {
  const { data } = useCountriesCovidStats();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="sm:px-20 px-5">
      <h1>Countries</h1>
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-4">
        {data?.map((country) => (
          <CountryCard
            key={country.country}
            country={country?.country ?? ""}
            statsValue={country?.cases ?? 0}
            flag={country?.countryInfo?.flag ?? ""}
            onClick={() => handleCountryClick(country)}
          />
        ))}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} countryData={selectedCountry} />
    </div>
  );
};

export default CountriesStats;
