import React from "react";

interface StatsCardProps {
  title: string;
  statsValue: number;
  icon: React.ReactNode;
  iconBgColor: string;
  isLoading?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  statsValue,
  icon,
  iconBgColor,
  isLoading,
}) => {
  const formattedValue = new Intl.NumberFormat().format(statsValue);
  return (
    <div className="bg-white rounded-lg border border-[#E7E9F2] p-3 h-[105px] transform transition-transform duration-500 ease-in-out opacity-0 animate-slide-in">
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-[#2C3E50]">{title}</h3>
        <div className={`p-3 rounded-full ${iconBgColor}`}>{icon}</div>
      </div>
      {isLoading ? (
        <div className="h-2 bg-slate-200 rounded animate-pulse mt-5"></div>
      ):(<p className="text-2xl font-semibold py-1.5 text-[#233547]">{formattedValue}</p>)}
    </div>
  );
};

export default StatsCard;
