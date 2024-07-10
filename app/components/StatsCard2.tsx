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
}

// StatsComponent definition
const StatsCard2: React.FC<StatsComponentProps> = ({
  title,
  title1,
  title2,
  statsValue,
  statsValue1,
  statsValue2,
}) => {
  const today = new Date();

  return (
    <div className="bg-white py-3 px-4 border border-[#EAEFF1] gap-3 rounded-lg">
      <span className="text-[#2C3E50] text-sm block pb-2.5">{formatDate(today)}</span>
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-[#F8F8F8] px-3 py-4 rounded-[10px]">
        <div className="">
          <h1 className="text-sm font-medium text-[#777F8D]">{title}</h1>
          <p className="text-2xl font-semibold text-[#233547] mt-2">
            {statsValue.toLocaleString()}
          </p>
        </div>
        <div className="">
          <h1 className="text-sm font-medium text-[#777F8D]">{title1}</h1>
          <p className="text-2xl font-semibold text-[#2C3E50] mt-2">
            {statsValue1.toLocaleString()}
          </p>
        </div>
        <div className="">
          <h1 className="text-sm font-medium text-[#777F8D]">{title2}</h1>
          <p className="text-2xl font-semibold text-[#233547] mt-2">
            {statsValue2.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard2;
