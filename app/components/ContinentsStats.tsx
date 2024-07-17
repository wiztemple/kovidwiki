"use client";

import { useState } from "react";
import { useContinentCovidStats } from "../hooks/dataQuery";
import TotalCasesIcon from "../icons/TotalCaseIcon";
import StatsCard from "./StatsCard";
import StatsCard2 from "./StatsCard2";

const continents = [
  "africa",
  "asia",
  "australia",
  "europe",
  "north america",
  "south america",
] as const;

type Continent = (typeof continents)[number];

const ContinentsStats = () => {
  const [activeTab, setActiveTab] = useState<Continent>("africa");
  const { data, isLoading } = useContinentCovidStats(activeTab);

  return (
    <div className="sm:px-20 px-5">
      <div className="flex p-1 w-fit space-x-1 bg-grey-100 rounded-xl mt-3">
        {continents.map((continent) => (
          <button
            key={continent}
            className={`w-fit py-2.5 flex items-center gap-x-1 px-3 text-[13px] leading-5 font-medium text-main-100 rounded-lg ${
              activeTab === continent
                ? "bg-[#F7F9FD]"
                : "text-[#454E5E]"
            }`}
            onClick={() => setActiveTab(continent)}
          >
            {continent.toUpperCase()}
          </button>
        ))}
      </div>
      <h1 className="text-2xl pt-3 pb-2 font-semibold text-[#1E272F] dark:text-slate-300 capitalize">
        {activeTab} COVID Updates
      </h1>
      <div className="py-2">
        <div className="grid sm:grid-cols-6 grid-cols-1 p-2 border border-[#EAEFF1] dark:border dark:border-gray-800 gap-3 rounded-lg">
          <StatsCard
            title="Total Cases"
            statsValue={data?.cases ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-slate-100"
            isLoading={isLoading}
          />
          <StatsCard
            title="Active Cases"
            statsValue={data?.active ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#FFF4EA]"
            isLoading={isLoading}
          />
          <StatsCard
            title="Recovered"
            statsValue={data?.recovered ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
            isLoading={isLoading}
          />
          <StatsCard
            title="Critical"
            statsValue={data?.critical ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
            isLoading={isLoading}
          />
          <StatsCard
            title="Deaths"
            statsValue={data?.deaths ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
            isLoading={isLoading}
          />
          <StatsCard
            title="Tests"
            statsValue={data?.tests ?? 0}
            icon={<TotalCasesIcon />}
            iconBgColor="bg-[#16B442]/10"
            isLoading={isLoading}
          />
        </div>
        <div className="grid grid-cols-2 gap-5 rounded-lg mt-5">
        <StatsCard2
          title="Today Cases 😔"
          title1="Today Recovered"
          title2="Today Deaths 😭"
          statsValue={data?.todayCases ?? 0}
          statsValue1={data?.todayRecovered ?? 0}
          statsValue2={data?.todayDeaths ?? 0}
          isLoading={isLoading}
        />
        <StatsCard2
          title="Cases Per Million"
          title1="Active Per Million"
          title2="Critical Per Million"
          statsValue={data?.casesPerOneMillion ?? 0}
          statsValue1={data?.activePerOneMillion ?? 0}
          statsValue2={data?.criticalPerOneMillion ?? 0}
          isLoading={isLoading}
        />
        <StatsCard2
          title="Tests Per Million"
          title1="Recovered Per Million"
          title2="Deaths Per Million"
          statsValue={data?.testsPerOneMillion ?? 0}
          statsValue1={data?.recoveredPerOneMillion ?? 0}
          statsValue2={data?.deathsPerOneMillion ?? 0}
          isLoading={isLoading}
        />
      </div>
      </div>
    </div>
  );
};

export default ContinentsStats;
