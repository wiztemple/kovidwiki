import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

export const getQueryClient = cache(() => new QueryClient());

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};