"use client";

import { useState } from 'react';
import { useUSACovidStats } from "../hooks/dataQuery";
import Drawer from "./Drawer";
import StateCard from './StateCard';
import usStateFlags from '../utils/useStateFlags';

const USAStats = () => {
  const { data, isLoading } = useUSACovidStats();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Set the number of items per page

  const handleCountryClick = (state: any) => {
    setSelectedState(state);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedState(null);
  };

   // Calculate the current items to display
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem) ?? [];
 
   // Handle page change
   const handlePageChange = (pageNumber: number) => {
     setCurrentPage(pageNumber);
   };
 
   // Calculate total pages
   const totalPages = Math.ceil((data?.length ?? 0) / itemsPerPage);

  return (
    <div className="sm:px-20 px-5">
      <h1 className="text-2xl pt-3 pb-2 font-semibold text-[#1E272F]">
      All US states Updates
      </h1>
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 pt-1">
      {currentItems?.map((state) => {
          const flagUrl = state.state ? usStateFlags[state.state] : undefined;
          return (
            <StateCard
              key={state.state}
              country={state?.state ?? ""}
              statsValue={state?.cases ?? 0}
              flag={flagUrl ?? ''}
              onClick={() => handleCountryClick(state)}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gray-100 text-slate-600' : 'bg-white text-slate-600'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} countryData={selectedState} isLoading={isLoading} />
    </div>
  );
};

export default USAStats;
