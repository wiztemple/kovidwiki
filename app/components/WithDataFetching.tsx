import React, { ComponentType } from 'react';
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

type WithDataFetchingProps = {
  dehydratedState: unknown;
};

export const withDataFetching = <P extends object>(
  WrappedComponent: ComponentType<P>,
  fetchFn: () => Promise<any>,
  queryKey: Array<string | number>
) => {
  const WithDataFetching: React.FC<P & WithDataFetchingProps> = ({ dehydratedState, ...props }) => {
    return (
      <QueryClientProvider client={new QueryClient()}>
        <HydrationBoundary state={dehydratedState}>
          <WrappedComponent {...(props as P)} />
        </HydrationBoundary>
      </QueryClientProvider>
    );
  };

  const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey, queryFn: fetchFn });
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  };

  return {
    getServerSideProps,
    Component: WithDataFetching,
  };
};
