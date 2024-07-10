import { useQuery } from '@tanstack/react-query';

type CovidData = {
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  country?: string;
  active: number;
  critical: number;
  state?: string;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
  countryInfo?: {
    flag?: string;
    iso2?: string;
    iso3?: string;
    lat?: number;
    long?: number;
  }
};

export const fetchGlobalCovidStats = async (): Promise<CovidData> => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchContinentsCovidStats = async (): Promise<CovidData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/continents');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Fetch stats for a specific continent
export const fetchContinentCovidStats = async (continent: string): Promise<CovidData> => {
  const response = await fetch(`https://disease.sh/v3/covid-19/continents/${continent}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchCountriesCovidStats = async (): Promise<CovidData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchUSACovidStats = async (): Promise<CovidData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/states');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useGlobalCovidStats = () => {
  return useQuery<CovidData>({
    queryKey: ['globalStats'],
    queryFn: fetchGlobalCovidStats,
  });
};

export const useContinentsCovidStats = () => {
  return useQuery<CovidData[]>({
    queryKey: ['continentStats'],
    queryFn: fetchContinentsCovidStats,
  });
};

// Hook to get stats for a specific continent
export const useContinentCovidStats = (continent: string) => {
  return useQuery<CovidData>({
    queryKey: ['continentStats', continent],
    queryFn: () => fetchContinentCovidStats(continent),
  });
};

export const useCountriesCovidStats = () => {
  return useQuery<CovidData[]>({
    queryKey: ['countriesStats'],
    queryFn: fetchCountriesCovidStats,
  });
};

export const useUSACovidStats = () => {
  return useQuery<CovidData[]>({
    queryKey: ['usaStats'],
    queryFn: fetchUSACovidStats,
  });
};