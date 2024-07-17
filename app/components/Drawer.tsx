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
  isLoading: boolean;
  countryData: any;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  countryData,
  isLoading,
}) => {
  const isState = usStateFlags.hasOwnProperty(countryData?.state);
  const flagUrl = isState
    ? usStateFlags[countryData?.state]
    : countryData?.countryInfo?.flag;
  const stateOrCountryName = isState
    ? countryData?.state
    : countryData?.country;
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full sm:w-[600px] w-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="px-4 py-[19.3px] flex justify-between items-center border-b border-gray-200">
          <div className="flex gap-x-2">
            <Image
              src={flagUrl}
              className="rounded object-cover h-6 w-12"
              height={0}
              width={32}
              alt={`${countryData?.country} Flag`}
            />
            <h2 className="text-lg font-semibold ml-2">
              {stateOrCountryName ?? ""}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 bg-white shadow rounded p-2"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.12218 0.712118C0.0834442 0.673382 0.0527173 0.627396 0.0317536 0.576785C0.0107899 0.526174 4.08149e-10 0.47193 0 0.417149C-4.08149e-10 0.362368 0.0107899 0.308124 0.0317536 0.257513C0.0527173 0.206902 0.0834442 0.160916 0.12218 0.12218C0.160916 0.0834442 0.206902 0.0527173 0.257513 0.0317536C0.308124 0.0107899 0.362368 -4.08149e-10 0.417149 0C0.47193 4.08149e-10 0.526174 0.0107899 0.576785 0.0317536C0.627396 0.0527173 0.673382 0.0834442 0.712118 0.12218L5 4.4109L9.28788 0.12218C9.32662 0.0834442 9.3726 0.0527173 9.42321 0.0317536C9.47383 0.0107899 9.52807 0 9.58285 0C9.63763 0 9.69188 0.0107899 9.74249 0.0317536C9.7931 0.0527173 9.83908 0.0834442 9.87782 0.12218C9.91656 0.160916 9.94728 0.206902 9.96825 0.257513C9.98921 0.308124 10 0.362368 10 0.417149C10 0.47193 9.98921 0.526174 9.96825 0.576785C9.94728 0.627396 9.91656 0.673382 9.87782 0.712118L5.5891 5L9.87782 9.28788C9.91656 9.32662 9.94728 9.3726 9.96825 9.42321C9.98921 9.47383 10 9.52807 10 9.58285C10 9.63763 9.98921 9.69188 9.96825 9.74249C9.94728 9.7931 9.91656 9.83908 9.87782 9.87782C9.83908 9.91656 9.7931 9.94728 9.74249 9.96825C9.69188 9.98921 9.63763 10 9.58285 10C9.52807 10 9.47383 9.98921 9.42321 9.96825C9.3726 9.94728 9.32662 9.91656 9.28788 9.87782L5 5.5891L0.712118 9.87782C0.673382 9.91656 0.627396 9.94728 0.576785 9.96825C0.526174 9.98921 0.47193 10 0.417149 10C0.362368 10 0.308124 9.98921 0.257513 9.96825C0.206902 9.94728 0.160916 9.91656 0.12218 9.87782C0.0834442 9.83908 0.0527173 9.7931 0.0317536 9.74249C0.0107899 9.69188 0 9.63763 0 9.58285C0 9.52807 0.0107899 9.47383 0.0317536 9.42321C0.0527173 9.3726 0.0834442 9.32662 0.12218 9.28788L4.4109 5L0.12218 0.712118Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="p-3">
          {/* <div className="flex items-center pb-2">
            <span className="text-sm">Population:</span>
            <span className="ml-1 bg-purple-100 text-purple-600 text-xs block px-2 py-1 rounded-lg">
              {new Intl.NumberFormat().format(countryData?.population)}
            </span>
          </div> */}
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
              isLoading={isLoading}
            />
            <StatsCard2
              title="Cases Per Million"
              title1="Active Per Million"
              title2="Critical Per Million"
              statsValue={countryData?.casesPerOneMillion ?? 0}
              statsValue1={countryData?.activePerOneMillion ?? 0}
              statsValue2={countryData?.criticalPerOneMillion ?? 0}
              isLoading={isLoading}
            />
            <StatsCard2
              title="Tests Per Million"
              title1="Recovered Per Million"
              title2="Deaths Per Million"
              statsValue={countryData?.testsPerOneMillion ?? 0}
              statsValue1={countryData?.recoveredPerOneMillion ?? 0}
              statsValue2={countryData?.deathsPerOneMillion ?? 0}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
