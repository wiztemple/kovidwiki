// "use client";

// import { useState } from 'react';
// import { useCountriesCovidStats } from "../hooks/dataQuery";
// import CountryCard from "./CountryCard";
// import Drawer from "./Drawer";

// const CountriesStats = () => {
//   const { data, isLoading } = useCountriesCovidStats();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState<any>(null);

//   const handleCountryClick = (country: any) => {
//     setSelectedCountry(country);
//     setIsDrawerOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setIsDrawerOpen(false);
//     setSelectedCountry(null);
//   };

//   return (
//     <div className="sm:px-20 px-5">
//        <h1 className="text-2xl pt-3 pb-2 font-semibold text-[#1E272F]">
//       All Countries Update
//       </h1>
//       <div className="grid sm:grid-cols-5 grid-cols-1 gap-4">
//         {data?.map((country) => (
//           <CountryCard
//             key={country.country}
//             country={country?.country ?? ""}
//             statsValue={country?.cases ?? 0}
//             flag={country?.countryInfo?.flag ?? ""}
//             onClick={() => handleCountryClick(country)}
//           />
//         ))}
//       </div>
//       <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} countryData={selectedCountry} isLoading={isLoading} />
//     </div>
//   );
// };

// export default CountriesStats;

"use client";

import { useState } from 'react';
import { useCountriesCovidStats } from "../hooks/dataQuery";
import CountryCard from "./CountryCard";
import Drawer from "./Drawer";

const CountriesStats = () => {
  const { data, isLoading } = useCountriesCovidStats();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // Set the number of items per page

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCountry(null);
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
        All Countries Update
      </h1>
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
      <div className="flex justify-center mt-5 flex-wrap">
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
      <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} countryData={selectedCountry} isLoading={isLoading} />
    </div>
  );
};

export default CountriesStats;
