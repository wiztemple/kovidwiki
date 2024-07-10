import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/getQueryClient";

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
      className="bg-white rounded-[5px] border border-[#F1F4FA] p-3"
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-[#2C3E50]">{country}</h3>
        <Image
          src={flag}
          className="rounded"
          height={32}
          width={32}
          alt={`${country} Flag`}
        />
      </div>
      <span className="text-left text-xs block">Active Cases</span>
      <p className="text-xl font-semibold py-1.5 text-[#233547] text-left">
        {formattedValue}
      </p>
      <div className="flex w-full justify-between items-center">
        <span className="text-[#A0A4B6] text-[11px] block">{formatDate(today)}</span>
        <Link href="/">&arrr;</Link>
      </div>
    </button>
  );
};

export default CountryCard;
