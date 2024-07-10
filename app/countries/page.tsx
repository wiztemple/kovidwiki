import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import CountriesStats from "../components/CountriesStats";
import { fetchCountriesCovidStats } from "../hooks/dataQuery";
import { getQueryClient } from "../utils/getQueryClient";

export default async function Countries() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["globalCovidStats"],
    queryFn: fetchCountriesCovidStats,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main>
      <HydrationBoundary state={dehydratedState}>
        <CountriesStats />
      </HydrationBoundary>
    </main>
  );
}


