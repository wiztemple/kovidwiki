import React from "react";
import {
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import USAStats from "../components/USAStats";
import { getQueryClient } from "../utils/getQueryClient";
import { fetchUSACovidStats } from "../hooks/dataQuery";


export default async function USA() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["usaCovidStats"],
    queryFn: fetchUSACovidStats,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <main>
      <HydrationBoundary state={dehydratedState}>
        <USAStats />
      </HydrationBoundary>
    </main>
  );
}
