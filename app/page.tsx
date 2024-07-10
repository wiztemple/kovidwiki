import React from "react";
import {
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import GlobalCovidStats from "./components/GlobalCovidStats";
import { fetchGlobalCovidStats } from "./hooks/dataQuery";
import { getQueryClient } from "./utils/getQueryClient";


export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["globalCovidStats"],
    queryFn: fetchGlobalCovidStats,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main>
      <HydrationBoundary state={dehydratedState}>
        <GlobalCovidStats />
      </HydrationBoundary>
    </main>
  );
}
