import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILocations } from 'interfaces/hotelsApi';

export const hotelsApi = createApi({
  reducerPath: 'hotelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RAPID_HOTELS_URL,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-host', process.env.REACT_APP_RAPID_HOST!);
      headers.set('x-rapidapi-key', process.env.REACT_APP_RAPID_API_KEY!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLocations: builder.query<ILocations, string>({
      query: (query: string) => ({
        url: `/locations/v2/search?query=${query}`,
      }),
    }),
  }),
});

export const { useGetLocationsQuery } = hotelsApi;
