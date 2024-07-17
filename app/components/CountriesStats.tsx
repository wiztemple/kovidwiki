"use client";

import { useState } from "react";
import { useCountriesCovidStats } from "../hooks/dataQuery";
import CountryCard from "./CountryCard";
import Drawer from "./Drawer";
import LoadingState from "./LoadingState";

const CountriesStats = () => {
  const { data, isLoading } = useCountriesCovidStats();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCountry(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem) ?? [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil((data?.length ?? 0) / itemsPerPage);

  return (
    <div className="sm:px-20 px-5">
      <h1 className="text-2xl pt-3 pb-2 font-semibold text-[#1E272F] dark:text-slate-300">
        All Countries Update
      </h1>
      {isLoading ? (
        <div className="w-full h-full flex justify-center sm:mt-40 mt-20">
          <LoadingState />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-5 grid-cols-1 gap-4">
            {currentItems.map((country) => (
              <CountryCard
                key={country.country}
                country={country?.country ?? ""}
                statsValue={country?.cases ?? 0}
                flag={country?.countryInfo?.flag ?? ""}
                onClick={() => handleCountryClick(country)}
              />
            ))}
          </div>
          <div className="flex justify-end w-full">
            <div className="flex justify-center mt-5 flex-wrap">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 rounded bg-white text-slate-700 text-sm disabled:opacity-50 flex items-center gap-1 hover:bg-slate-100"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  className="stroke-current"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.71429 12.4286L1 6.71429L6.71429 1"
                    stroke="currentColor"
                    strokeWidth="1.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Prev
              </button>
              <span className="px-3 py-1 rounded bg-gray-900 text-white text-sm block">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="mx-1 px-2 flex items-center gap-1 text-sm hover:bg-slate-100 py-1 rounded bg-white text-slate-700 disabled:opacity-50"
              >
                Next
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  className="stroke-current"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12.4286L6.71429 6.71429L1 1"
                    stroke="currentColor"
                    strokeWidth="1.42857"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        countryData={selectedCountry}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CountriesStats;
