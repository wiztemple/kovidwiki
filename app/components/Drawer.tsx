"use client";

import React from "react";
import StatsCard from "./StatsCard";
import TotalCasesIcon from "../icons/TotalCaseIcon";
import Image from "next/image";
import StatsCard2 from "./StatsCard2";
import usStateFlags from "../utils/useStateFlags";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: any; // Define a more specific type based on your data structure
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, countryData }) => {
  const isState = usStateFlags.hasOwnProperty(countryData?.state);
  const flagUrl = isState ? usStateFlags[countryData?.state] : countryData?.countryInfo?.flag;
  return (
    <div
      className={`fixed top-0 right-0 h-full sm:w-[600px] w-full bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex gap-x-2">
          <Image
            src={flagUrl}
            className="rounded object-cover"
            height={32}
            width={32}
            alt={`${countryData?.country} Flag`}
          />
          <h2 className="text-lg font-semibold">
            {countryData?.country ?? "Country Details"}
          </h2>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          X
        </button>
      </div>
      <div className="p-3">
        <div className="grid sm:grid-cols-3 grid-cols-1 p-2 border border-[#EAEFF1] gap-3 rounded-lg">
          <StatsCard
            title="Total Cases"
            statsValue={countryData?.cases ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-slate-100"
          />
          <StatsCard
            title="Active Cases"
            statsValue={countryData?.active ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#FFF4EA]"
          />
          <StatsCard
            title="Recovered"
            statsValue={countryData?.recovered ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
          />
          <StatsCard
            title="Critical"
            statsValue={countryData?.critical ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
          />
          <StatsCard
            title="Deaths"
            statsValue={countryData?.deaths ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
          />
          <StatsCard
            title="Tests"
            statsValue={countryData?.tests ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-lg mt-5">
          <StatsCard2
            title="Today Cases 😔"
            title1="Today Recovered"
            title2="Today Deaths 😭"
            statsValue={countryData?.todayCases ?? 0}
            statsValue1={countryData?.todayRecovered ?? 0}
            statsValue2={countryData?.todayDeaths ?? 0}
          />
          <StatsCard2
            title="Cases Per Million"
            title1="Active Per Million"
            title2="Critical Per Million"
            statsValue={countryData?.casesPerOneMillion ?? 0}
            statsValue1={countryData?.activePerOneMillion ?? 0}
            statsValue2={countryData?.criticalPerOneMillion ?? 0}
          />
          <StatsCard2
            title="Tests Per Million"
            title1="Recovered Per Million"
            title2="Deaths Per Million"
            statsValue={countryData?.testsPerOneMillion ?? 0}
            statsValue1={countryData?.recoveredPerOneMillion ?? 0}
            statsValue2={countryData?.deathsPerOneMillion ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
