"use client";

import React from "react";
import { fetchGlobalCovidStats, useGlobalCovidStats } from "../hooks/dataQuery";
import StatsCard from "./StatsCard";
import TotalCasesIcon from "../icons/TotalCaseIcon";
import StatsCard2 from "./StatsCard2";

const GlobalCovidStats: React.FC = () => {
  // const { data } = useQuery({
  //   queryKey: ["globalCovidstats"],
  //   queryFn: fetchGlobalCovidStats,
  // });
  const { data, isLoading } = useGlobalCovidStats();
  console.log(data, "datattatatattatat");

  return (
    <div className="sm:px-20 px-5">
      <h1 className="text-2xl pt-3 pb-2 font-semibold text-[#1E272F]">
        Global Updates
      </h1>
      <div className="grid sm:grid-cols-6 grid-cols-1 p-2 border border-[#EAEFF1] gap-3 rounded-lg transform transition-transform duration-500 ease-in-out opacity-0 animate-slide-in">
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
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 rounded-lg mt-5">
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
  );
};

export default GlobalCovidStats;
