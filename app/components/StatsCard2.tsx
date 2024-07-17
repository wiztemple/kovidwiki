import React from "react";
import { formatDate } from "../utils/getQueryClient";

// Interface for the component props
interface StatsComponentProps {
  title: string;
  title1: string;
  title2: string;
  statsValue: number;
  statsValue1: number;
  statsValue2: number;
  isLoading: boolean;
}

// StatsComponent definition
const StatsCard2: React.FC<StatsComponentProps> = ({
  title,
  title1,
  title2,
  statsValue,
  statsValue1,
  statsValue2,
  isLoading,
}) => {
  const today = new Date();

  return (
    <div className="bg-white dark:bg-[#060c21] py-3 px-4 border border-[#EAEFF1] dark:border dark:border-gray-800 gap-3 rounded-lg transform transition-transform duration-500 ease-in-out opacity-0 animate-slide-in">
      <span className="text-[#2C3E50] text-sm block pb-2.5">
        {formatDate(today)}
      </span>
      <div className="grid grid-cols-3 bg-[#F8F8F8] dark:bg-[#070e29] px-3 py-4 rounded-[10px]">
        <div className="">
          <h1 className="sm:text-sm text-xs font-medium text-[#777F8D]">{title}</h1>
          {/* <p className="text-2xl font-semibold text-[#233547] mt-2">
            {statsValue.toLocaleString()}
          </p> */}
          {isLoading ? (
            <div className="h-2 bg-slate-200 rounded animate-pulse mt-5 w-[90%]"></div>
          ) : (
            <p className="sm:text-2xl text-xl font-semibold mt-2 text-[#233547] text-wrap dark:text-slate-400">
              {statsValue.toLocaleString()}
            </p>
          )}
        </div>
        <div className="">
          <h1 className="sm:text-sm text-xs font-medium text-[#777F8D]">{title1}</h1>
          {/* <p className="text-2xl font-semibold text-[#2C3E50] mt-2">
            {statsValue1.toLocaleString()}
          </p> */}
          {isLoading ? (
            <div className="h-2 bg-slate-200 rounded animate-pulse mt-5 w-[90%]"></div>
          ) : (
            <p className="sm:text-2xl text-xl font-semibold mt-2 text-[#233547] text-wrap dark:text-slate-400">
              {statsValue1.toLocaleString()}
            </p>
          )}
        </div>
        <div className="">
          <h1 className="sm:text-sm text-xs font-medium text-[#777F8D]">{title2}</h1>
          {isLoading ? (
            <div className="h-2 bg-slate-200 rounded animate-pulse mt-5 w-[90%]"></div>
          ) : (
            <p className="sm:text-2xl text-xl font-semibold mt-2 text-[#233547] text-wrap dark:text-slate-400">
              {statsValue2.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard2;
