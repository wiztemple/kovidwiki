import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/getQueryClient";
import ArrowRightIcon from "../icons/ArrowRight";

interface CountryCardProps {
  country: string;
  statsValue: number;
  flag: string; // Optional flag URL
  onClick: () => void;
}

const StateCard: React.FC<CountryCardProps> = ({
  country,
  statsValue,
  flag,
  onClick,
}) => {
  const formattedValue = new Intl.NumberFormat().format(statsValue);
  const today = new Date();
  return (
    <button
      type="button"
      className="bg-white rounded-[5px] border border-[#F1F4FA] p-3 hover:bg-[#F8F8F8] transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-[#2C3E50]">{country}</h3>
        {flag ? <img src={flag} alt={`${country} flag`} className="h-7 w-10 rounded" /> : null}
      </div>
      <span className="text-left text-xs block">Active Cases</span>
      <p className="text-xl font-semibold py-1.5 text-[#233547] text-left">
        {formattedValue}
      </p>
      <div className="flex w-full justify-between items-center">
        <span className="text-[#A0A4B6] text-[11px] block">{formatDate(today)}</span>
        <button type="button" className="h-[30px] w-[30px] rounded-full bg-[#F8F8F8] flex justify-center items-center border-2 border-[#F1F4FA] hover:bg-white">
          <ArrowRightIcon />
        </button>
      </div>
    </button>
  );
};

export default StateCard;
