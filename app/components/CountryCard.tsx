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

const CountryCard: React.FC<CountryCardProps> = ({
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
      className="bg-white dark:bg-[#090f28] rounded-[5px] border border-[#F1F4FA] dark:border dark:border-gray-800  p-3 hover:bg-[#F8F8F8] transform transition-transform duration-500 ease-in-out opacity-0 animate-slide-in"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-[#2C3E50] dark:text-[#777F8D]">{country}</h3>
        <Image
          src={flag}
          className="rounded"
          height={32}
          width={32}
          alt={`${country} Flag`}
        />
      </div>
      <span className="text-left text-xs block text-[#727993] pt-2">Total Cases</span>
      <p className="text-xl font-semibold text-[#233547] text-left dark:text-slate-400">
        {formattedValue}
      </p>
      <div className="flex w-full justify-between items-center">
        <span className="text-[#A0A4B6] text-[11px] dark:text-[#535965] block">{formatDate(today)}</span>
        <button type="button" className="h-[30px] w-[30px] rounded-full bg-[#F8F8F8] dark:bg-[#070e29] flex justify-center items-center border-2 border-[#F1F4FA] dark:border-slate-900 hover:bg-white">
          <ArrowRightIcon />
        </button>
      </div>
    </button>
  );
};

export default CountryCard;
