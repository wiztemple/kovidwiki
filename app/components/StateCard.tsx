import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/getQueryClient";
import ArrowRightIcon from "../icons/ArrowRight";

interface CountryCardProps {
  country: string;
  statsValue: number;
  flag: string;
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
      className="bg-[#F8F8F8]/80 rounded-[5px] p-3 hover:bg-white hover:shadow transform transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          {flag ? (
            <img
              src={flag}
              alt={`${country} flag`}
              className="h-8 w-12 rounded object-cover"
            />
          ) : null}
          <h3 className="text-xs font-medium text-[#3B4161] uppercase pt-1">
            {country}
          </h3>
        </div>
        <div className="border-l-2 border-l-slate-100 h-fit">
          <span className="text-left text-xs block text-[#3B4161] ml-2">
            Total Cases
          </span>
          <p className="text-lg font-semibold text-[#233547] text-left ml-2">
            {formattedValue}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center pt-5">
        <span className="text-[#A0A4B6] text-[11px] block">
          {formatDate(today)}
        </span>
        <button
          type="button"
          className="h-[30px] w-[30px] rounded-full bg-[#F8F8F8] flex justify-center items-center border-2 border-[#F1F4FA] hover:bg-white"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </button>
  );
};

export default StateCard;
