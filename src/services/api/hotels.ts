import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILocations, IPropertiesResponse } from 'interfaces/hotelsApi';

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
    getProperties: builder.query<IPropertiesResponse, string>({
      query: (query: string) => ({
        url: `/properties/list?destinationId=${query}&pageNumber=1&pageSize=25&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD`,
      }),
    }),
  }),
});

export const { useGetLocationsQuery, useGetPropertiesQuery } = hotelsApi;
